import { computed, inject, Injectable, signal } from '@angular/core';
import {
  CollectionItem,
  CollectionModel,
  CollectionRequestItem,
  CreateFolderInput,
  CreateRequestInput,
  RequestDefinition,
  RequestProtocol,
  RequestExecutionResult,
  RequestExecutionState,
  WebSocketConnectionState,
  WebSocketConnectionStatus,
  WebSocketLogEntry,
} from './api-tester.model';
import {
  API_TESTER_DEVELOPMENT_MODE,
  collectionPolicy,
  CollectionPolicy,
} from './collection-policy';
import { WebSocketRequestExecutor } from './websocket-request-executor.service';

@Injectable()
export class ApiTesterStore {
  readonly isDevelopmentMode = inject(API_TESTER_DEVELOPMENT_MODE);
  private readonly webSocketExecutor = inject(WebSocketRequestExecutor);
  readonly collections = signal<CollectionModel[]>([]);
  readonly filterQuery = signal('');
  readonly expandedIds = signal<ReadonlySet<string>>(new Set());
  readonly openTabIds = signal<string[]>([]);
  readonly activeRequestId = signal<string | null>(null);
  readonly executions = signal<Record<string, RequestExecutionState>>({});
  readonly webSocketConnections = signal<Record<string, WebSocketConnectionState>>({});
  readonly editorAction = signal<{
    mode: 'REQUEST' | 'FOLDER' | 'RENAME';
    targetId: string;
  } | null>(null);

  readonly filteredCollections = computed(() => {
    const query = this.filterQuery().trim().toLowerCase();
    const collections = this.collections();
    if (!query) {
      return collections;
    }
    return collections
      .map((collection) => filterCollection(collection, query))
      .filter((collection): collection is CollectionModel => collection !== null);
  });

  readonly activeRequest = computed(() => {
    const id = this.activeRequestId();
    if (!id) {
      return null;
    }
    return findRequest(this.collections(), id);
  });

  readonly activeExecution = computed<RequestExecutionState>(() => {
    const id = this.activeRequestId();
    return id ? (this.executions()[id] ?? { status: 'IDLE' }) : { status: 'IDLE' };
  });

  readonly activeWebSocketConnection = computed<WebSocketConnectionState>(() => {
    const id = this.activeRequestId();
    return id
      ? (this.webSocketConnections()[id] ?? { status: 'IDLE', messages: [] })
      : { status: 'IDLE', messages: [] };
  });

  setCollections(collections: CollectionModel[]): void {
    this.collections.set(collections);
    this.expandedIds.set(collectExpandableIds(collections));
  }

  setFilter(query: string): void {
    this.filterQuery.set(query);
  }

  isExpanded(id: string): boolean {
    return this.expandedIds().has(id);
  }

  toggleExpanded(id: string): void {
    const next = new Set(this.expandedIds());
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    this.expandedIds.set(next);
  }

  openRequest(id: string): void {
    const tabs = this.openTabIds();
    if (!tabs.includes(id)) {
      this.openTabIds.set([...tabs, id]);
    }
    this.activeRequestId.set(id);
  }

  activateTab(id: string): void {
    if (this.openTabIds().includes(id)) {
      this.activeRequestId.set(id);
    }
  }

  closeTab(id: string): void {
    const tabs = this.openTabIds().filter((tabId) => tabId !== id);
    this.openTabIds.set(tabs);
    if (this.activeRequestId() === id) {
      this.activeRequestId.set(tabs.at(-1) ?? null);
    }
  }

  findRequestById(id: string): CollectionRequestItem | null {
    return findRequest(this.collections(), id);
  }

  updateRequest(id: string, update: (request: RequestDefinition) => RequestDefinition): void {
    const collection = findCollectionForNode(this.collections(), id);
    if (!collection || !collectionPolicy(collection, this.isDevelopmentMode).editRequests) {
      return;
    }

    this.collections.update((collections) =>
      collections.map((collection) => ({
        ...collection,
        items: updateRequestInItems(collection.items, id, update),
      })),
    );
  }

  policyForNode(id: string): CollectionPolicy | null {
    const collection = findCollectionForNode(this.collections(), id);
    return collection ? collectionPolicy(collection, this.isDevelopmentMode) : null;
  }

  collectionForNode(id: string): CollectionModel | null {
    return findCollectionForNode(this.collections(), id);
  }

  nodeName(id: string): string {
    const collection = this.collections().find((current) => current.id === id);
    if (collection) {
      return collection.name;
    }
    for (const current of this.collections()) {
      const item = findItem(current.items, id);
      if (item) {
        return item.name;
      }
    }
    return '';
  }

  isCollection(id: string): boolean {
    return this.collections().some((collection) => collection.id === id);
  }

  openEditor(mode: 'REQUEST' | 'FOLDER' | 'RENAME', targetId: string): void {
    const policy = this.policyForNode(targetId);
    const allowed = mode === 'RENAME' ? policy?.renameItems : policy?.createItems;
    if (allowed) {
      this.editorAction.set({ mode, targetId });
    }
  }

  openNewRequestEditor(): void {
    const activeId = this.activeRequestId();
    const activeTarget = activeId ? findParentContainerId(this.collections(), activeId) : null;
    const target =
      (activeTarget && this.policyForNode(activeTarget)?.createItems
        ? activeTarget
        : this.collections().find((collection) => collection.kind === 'SANDBOX')?.id) ?? null;
    if (target) {
      this.openEditor('REQUEST', target);
    }
  }

  closeEditor(): void {
    this.editorAction.set(null);
  }

  createFolder(input: CreateFolderInput): string | null {
    const collection = findCollectionForNode(this.collections(), input.parentId);
    if (!collection || !collectionPolicy(collection, this.isDevelopmentMode).createItems) {
      return null;
    }

    const id = createId('folder');
    const item: CollectionItem = {
      type: 'FOLDER',
      id,
      name: input.name.trim() || 'New folder',
      items: [],
    };
    this.insertItem(collection.id, input.parentId, item);
    this.expand(input.parentId, id);
    return id;
  }

  createRequest(input: CreateRequestInput): string | null {
    const collection = findCollectionForNode(this.collections(), input.parentId);
    if (!collection || !collectionPolicy(collection, this.isDevelopmentMode).createItems) {
      return null;
    }

    const id = createId('request');
    const item: CollectionRequestItem = {
      type: 'REQUEST',
      id,
      name: input.name.trim() || 'New request',
      request: createRequestDefinition(input.protocol),
    };
    this.insertItem(collection.id, input.parentId, item);
    this.expand(input.parentId);
    this.openRequest(id);
    return id;
  }

  renameNode(id: string, name: string): boolean {
    const collection = findCollectionForNode(this.collections(), id);
    if (!collection || !collectionPolicy(collection, this.isDevelopmentMode).renameItems) {
      return false;
    }

    const nextName = name.trim();
    if (!nextName) {
      return false;
    }

    this.collections.update((collections) =>
      collections.map((current) => {
        if (current.id === id) {
          return { ...current, name: nextName };
        }
        return current.id === collection.id
          ? { ...current, items: renameItem(current.items, id, nextName) }
          : current;
      }),
    );
    return true;
  }

  deleteNode(id: string): boolean {
    const collection = findCollectionForNode(this.collections(), id);
    if (
      !collection ||
      collection.id === id ||
      !collectionPolicy(collection, this.isDevelopmentMode).deleteItems
    ) {
      return false;
    }

    const item = findItem(collection.items, id);
    if (!item) {
      return false;
    }

    const requestIds = collectRequestIds([item]);
    this.collections.update((collections) =>
      collections.map((current) =>
        current.id === collection.id
          ? { ...current, items: removeItem(current.items, id) }
          : current,
      ),
    );
    this.cleanupRequests(requestIds);
    return true;
  }

  resetSandbox(seed: CollectionModel): boolean {
    const sandbox = this.collections().find((collection) => collection.kind === 'SANDBOX');
    if (!sandbox || !collectionPolicy(sandbox, this.isDevelopmentMode).reset) {
      return false;
    }

    this.cleanupRequests(collectRequestIds(sandbox.items));
    this.collections.update((collections) =>
      collections.map((collection) => (collection.id === sandbox.id ? seed : collection)),
    );
    this.expandedIds.set(collectExpandableIds(this.collections()));
    return true;
  }

  startExecution(id: string): void {
    this.setExecution(id, { status: 'LOADING' });
  }

  completeExecution(id: string, response: RequestExecutionResult): void {
    this.setExecution(id, { status: 'SUCCESS', response });
  }

  failExecution(id: string, error: string): void {
    this.setExecution(id, { status: 'ERROR', error });
  }

  setWebSocketStatus(
    id: string,
    status: WebSocketConnectionStatus,
    details: Partial<Pick<WebSocketConnectionState, 'error' | 'closeCode' | 'closeReason'>> = {},
  ): void {
    const current = this.webSocketConnections()[id] ?? { status: 'IDLE', messages: [] };
    this.setWebSocketConnection(id, { ...current, ...details, status });
  }

  addWebSocketMessage(id: string, message: WebSocketLogEntry): void {
    const current = this.webSocketConnections()[id] ?? { status: 'IDLE', messages: [] };
    this.setWebSocketConnection(id, {
      ...current,
      messages: [...current.messages, message],
    });
  }

  clearWebSocketMessages(id: string): void {
    const current = this.webSocketConnections()[id] ?? { status: 'IDLE', messages: [] };
    this.setWebSocketConnection(id, { ...current, messages: [] });
  }

  private setExecution(id: string, execution: RequestExecutionState): void {
    this.executions.update((executions) => ({ ...executions, [id]: execution }));
  }

  private setWebSocketConnection(id: string, connection: WebSocketConnectionState): void {
    this.webSocketConnections.update((connections) => ({ ...connections, [id]: connection }));
  }

  private insertItem(collectionId: string, parentId: string, item: CollectionItem): void {
    this.collections.update((collections) =>
      collections.map((collection) =>
        collection.id === collectionId
          ? {
              ...collection,
              items:
                collection.id === parentId
                  ? [...collection.items, item]
                  : insertItem(collection.items, parentId, item),
            }
          : collection,
      ),
    );
  }

  private expand(...ids: string[]): void {
    const expanded = new Set(this.expandedIds());
    for (const id of ids) {
      expanded.add(id);
    }
    this.expandedIds.set(expanded);
  }

  private cleanupRequests(ids: string[]): void {
    if (ids.length === 0) {
      return;
    }

    const removed = new Set(ids);
    for (const id of ids) {
      this.webSocketExecutor.disconnect(id);
    }
    this.openTabIds.update((tabs) => tabs.filter((id) => !removed.has(id)));
    if (this.activeRequestId() && removed.has(this.activeRequestId()!)) {
      this.activeRequestId.set(this.openTabIds().at(-1) ?? null);
    }
    this.executions.update((executions) => omitKeys(executions, removed));
    this.webSocketConnections.update((connections) => omitKeys(connections, removed));
  }
}

function createRequestDefinition(protocol: RequestProtocol): RequestDefinition {
  switch (protocol) {
    case 'HTTP':
      return {
        type: 'HTTP',
        method: 'GET',
        url: '',
        queryParams: [],
        headers: [],
      };
    case 'GRAPHQL':
      return {
        type: 'GRAPHQL',
        url: '',
        headers: [],
        query: 'query Example {\n  __typename\n}',
        variables: '{}',
        operationName: 'Example',
      };
    case 'WEBSOCKET':
      return {
        type: 'WEBSOCKET',
        url: 'wss://',
        headers: [],
        messages: [],
      };
    case 'GRPC':
      return {
        type: 'GRPC',
        endpoint: '',
        service: '',
        method: '',
        metadata: [],
        body: {
          id: createId('grpc-body'),
          type: 'TEXT',
          payload: '{}',
        },
      };
  }
}

function findCollectionForNode(collections: CollectionModel[], id: string): CollectionModel | null {
  return (
    collections.find(
      (collection) => collection.id === id || findItem(collection.items, id) !== null,
    ) ?? null
  );
}

function findParentContainerId(collections: CollectionModel[], itemId: string): string | null {
  for (const collection of collections) {
    const parent = findParentInItems(collection.items, itemId, collection.id);
    if (parent) {
      return parent;
    }
  }
  return null;
}

function findParentInItems(
  items: CollectionItem[],
  itemId: string,
  parentId: string,
): string | null {
  for (const item of items) {
    if (item.id === itemId) {
      return parentId;
    }
    if (item.type === 'FOLDER') {
      const nested = findParentInItems(item.items, itemId, item.id);
      if (nested) {
        return nested;
      }
    }
  }
  return null;
}

function findItem(items: CollectionItem[], id: string): CollectionItem | null {
  for (const item of items) {
    if (item.id === id) {
      return item;
    }
    if (item.type === 'FOLDER') {
      const nested = findItem(item.items, id);
      if (nested) {
        return nested;
      }
    }
  }
  return null;
}

function insertItem(
  items: CollectionItem[],
  parentId: string,
  newItem: CollectionItem,
): CollectionItem[] {
  return items.map((item) =>
    item.type === 'FOLDER'
      ? {
          ...item,
          items:
            item.id === parentId
              ? [...item.items, newItem]
              : insertItem(item.items, parentId, newItem),
        }
      : item,
  );
}

function renameItem(items: CollectionItem[], id: string, name: string): CollectionItem[] {
  return items.map((item) => {
    if (item.id === id) {
      return { ...item, name };
    }
    return item.type === 'FOLDER' ? { ...item, items: renameItem(item.items, id, name) } : item;
  });
}

function removeItem(items: CollectionItem[], id: string): CollectionItem[] {
  return items
    .filter((item) => item.id !== id)
    .map((item) =>
      item.type === 'FOLDER' ? { ...item, items: removeItem(item.items, id) } : item,
    );
}

function collectRequestIds(items: CollectionItem[]): string[] {
  const ids: string[] = [];
  for (const item of items) {
    if (item.type === 'REQUEST') {
      ids.push(item.id);
    } else {
      ids.push(...collectRequestIds(item.items));
    }
  }
  return ids;
}

function createId(prefix: string): string {
  const suffix =
    globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  return `${prefix}-${suffix}`;
}

function omitKeys<T>(record: Record<string, T>, keys: ReadonlySet<string>): Record<string, T> {
  return Object.fromEntries(Object.entries(record).filter(([key]) => !keys.has(key))) as Record<
    string,
    T
  >;
}

function updateRequestInItems(
  items: CollectionItem[],
  id: string,
  update: (request: RequestDefinition) => RequestDefinition,
): CollectionItem[] {
  return items.map((item) => {
    if (item.type === 'REQUEST') {
      return item.id === id ? { ...item, request: update(item.request) } : item;
    }

    return { ...item, items: updateRequestInItems(item.items, id, update) };
  });
}

function findRequest(collections: CollectionModel[], id: string): CollectionRequestItem | null {
  for (const collection of collections) {
    const found = findRequestInItems(collection.items, id);
    if (found) {
      return found;
    }
  }
  return null;
}

function findRequestInItems(items: CollectionItem[], id: string): CollectionRequestItem | null {
  for (const item of items) {
    if (item.type === 'REQUEST' && item.id === id) {
      return item;
    }
    if (item.type === 'FOLDER') {
      const found = findRequestInItems(item.items, id);
      if (found) {
        return found;
      }
    }
  }
  return null;
}

function filterCollection(collection: CollectionModel, query: string): CollectionModel | null {
  if (collection.name.toLowerCase().includes(query)) {
    return collection;
  }
  const items = filterItems(collection.items, query);
  if (items.length === 0) {
    return null;
  }
  return { ...collection, items };
}

function filterItems(items: CollectionItem[], query: string): CollectionItem[] {
  const result: CollectionItem[] = [];
  for (const item of items) {
    if (item.type === 'REQUEST') {
      const haystack = `${item.name} ${requestSearchText(item)}`.toLowerCase();
      if (haystack.includes(query)) {
        result.push(item);
      }
      continue;
    }
    if (item.name.toLowerCase().includes(query)) {
      result.push(item);
      continue;
    }
    const nested = filterItems(item.items, query);
    if (nested.length > 0) {
      result.push({ ...item, items: nested });
    }
  }
  return result;
}

function requestSearchText(item: CollectionRequestItem): string {
  const def = item.request;
  switch (def.type) {
    case 'HTTP':
      return `${def.method} ${def.url}`;
    case 'GRAPHQL':
      return `GQL ${def.url}`;
    case 'WEBSOCKET':
      return `WS ${def.url}`;
    case 'GRPC':
      return `GRPC ${def.endpoint} ${def.service} ${def.method}`;
  }
}

function collectExpandableIds(collections: CollectionModel[]): Set<string> {
  const ids = new Set<string>();
  for (const collection of collections) {
    ids.add(collection.id);
    collectFolderIds(collection.items, ids);
  }
  return ids;
}

function collectFolderIds(items: CollectionItem[], ids: Set<string>): void {
  for (const item of items) {
    if (item.type === 'FOLDER') {
      ids.add(item.id);
      collectFolderIds(item.items, ids);
    }
  }
}
