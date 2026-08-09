import { computed, Injectable, signal } from '@angular/core';
import {
  CollectionItem,
  CollectionModel,
  CollectionRequestItem,
} from './api-tester.model';

@Injectable()
export class ApiTesterStore {
  readonly collections = signal<CollectionModel[]>([]);
  readonly filterQuery = signal('');
  readonly expandedIds = signal<ReadonlySet<string>>(new Set());
  readonly openTabIds = signal<string[]>([]);
  readonly activeRequestId = signal<string | null>(null);

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
}

function findRequest(
  collections: CollectionModel[],
  id: string,
): CollectionRequestItem | null {
  for (const collection of collections) {
    const found = findRequestInItems(collection.items, id);
    if (found) {
      return found;
    }
  }
  return null;
}

function findRequestInItems(
  items: CollectionItem[],
  id: string,
): CollectionRequestItem | null {
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

function filterCollection(
  collection: CollectionModel,
  query: string,
): CollectionModel | null {
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
