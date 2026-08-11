import { Component, computed, effect, inject, OnDestroy, signal } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { ApiTesterStore } from '../../api-tester.store';
import { GraphQLRequestExecutor } from '../../graphql-request-executor.service';
import { HttpRequestExecutor } from '../../http-request-executor.service';
import { WebSocketRequestExecutor } from '../../websocket-request-executor.service';
import { requestBadge, requestDisplayName } from '../collection-explorer/request-badge.helpers';
import {
  AuthType,
  CollectionRequestItem,
  GrpcMessage,
  Header,
  HttpBodyType,
  HttpRequest,
  ProtoDefinition,
  RequestDefinition,
} from '../../api-tester.model';

type RequestSection =
  | 'PARAMS'
  | 'HEADERS'
  | 'AUTH'
  | 'BODY'
  | 'QUERY'
  | 'VARIABLES'
  | 'MESSAGES'
  | 'METADATA'
  | 'PROTO';

interface RequestPanelTab {
  id: RequestSection;
  label: string;
  count?: number;
}

@Component({
  selector: 'app-request-panel',
  imports: [KeyValuePipe],
  templateUrl: './request-panel.html',
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class RequestPanel implements OnDestroy {
  readonly store = inject(ApiTesterStore);
  private readonly graphQLExecutor = inject(GraphQLRequestExecutor);
  private readonly httpExecutor = inject(HttpRequestExecutor);
  private readonly webSocketExecutor = inject(WebSocketRequestExecutor);
  readonly activeSection = signal<RequestSection | null>(null);
  readonly outgoingWebSocketMessage = signal('');
  readonly httpMethods: HttpRequest['method'][] = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS',
    'HEAD',
  ];
  readonly bodyTypes: HttpBodyType[] = [
    'NONE',
    'TEXT',
    'JSON',
    'XML',
    'FORM_DATA',
    'URL_ENCODED',
    'BINARY',
  ];
  readonly authTypes: AuthType[] = ['NONE', 'BEARER', 'BASIC', 'API_KEY', 'OAUTH2', 'CUSTOM'];
  readonly grpcBodyTypes: GrpcMessage['type'][] = ['TEXT', 'BINARY'];
  readonly protoSources: ProtoDefinition['source'][] = ['INLINE', 'FILE', 'URL'];
  private rowSequence = 0;

  readonly openTabs = computed(() =>
    this.store
      .openTabIds()
      .map((id) => this.store.findRequestById(id))
      .filter((item): item is CollectionRequestItem => item !== null),
  );

  readonly active = computed(() => this.store.activeRequest());

  readonly tabs = computed<RequestPanelTab[]>(() => {
    const request = this.active()?.request;
    if (!request) {
      return [];
    }

    switch (request.type) {
      case 'HTTP':
        return [
          { id: 'PARAMS', label: 'Params', count: request.queryParams.length },
          { id: 'HEADERS', label: 'Headers', count: request.headers.length },
          { id: 'AUTH', label: 'Auth' },
          { id: 'BODY', label: 'Body' },
        ];
      case 'GRAPHQL':
        return [
          { id: 'HEADERS', label: 'Headers', count: request.headers.length },
          { id: 'AUTH', label: 'Auth' },
          { id: 'QUERY', label: 'Query' },
          { id: 'VARIABLES', label: 'Variables' },
        ];
      case 'WEBSOCKET':
        return [
          { id: 'HEADERS', label: 'Headers', count: request.headers.length },
          { id: 'AUTH', label: 'Auth' },
          { id: 'MESSAGES', label: 'Messages', count: request.messages.length },
        ];
      case 'GRPC':
        return [
          { id: 'METADATA', label: 'Metadata', count: request.metadata.length },
          { id: 'PROTO', label: 'Proto' },
          { id: 'BODY', label: 'Body' },
        ];
    }
  });

  readonly activeBadge = computed(() => {
    const item = this.active();
    return item ? requestBadge(item.request) : null;
  });

  readonly activeDestination = computed(() => {
    const request = this.active()?.request;
    if (!request) {
      return '';
    }
    return request.type === 'GRPC' ? request.endpoint : request.url;
  });

  readonly activeOperation = computed(() => {
    const request = this.active()?.request;
    return request?.type === 'GRPC' ? `${request.service}.${request.method}` : '';
  });

  readonly canSend = computed(
    () =>
      (this.active()?.request.type === 'HTTP' || this.active()?.request.type === 'GRAPHQL') &&
      this.store.activeExecution().status !== 'LOADING',
  );

  readonly isSending = computed(() => this.store.activeExecution().status === 'LOADING');
  readonly webSocketConnection = computed(() => this.store.activeWebSocketConnection());

  badgeFor = requestBadge;
  labelFor = requestDisplayName;

  constructor() {
    let previousRequestId: string | null = null;

    effect(() => {
      const requestId = this.store.activeRequestId();
      const tabs = this.tabs();

      if (requestId !== previousRequestId) {
        previousRequestId = requestId;
        this.activeSection.set(tabs[0]?.id ?? null);
        return;
      }

      if (!tabs.some((tab) => tab.id === this.activeSection())) {
        this.activeSection.set(tabs[0]?.id ?? null);
      }
    });
  }

  selectSection(section: RequestSection): void {
    this.activeSection.set(section);
  }

  updateDestination(value: string): void {
    this.updateActiveRequest((request) =>
      request.type === 'GRPC' ? { ...request, endpoint: value } : { ...request, url: value },
    );
  }

  updateHttpMethod(method: HttpRequest['method']): void {
    this.updateActiveRequest((request) =>
      request.type === 'HTTP' ? { ...request, method } : request,
    );
  }

  updateHttpParam(id: string, field: 'key' | 'value', value: string): void {
    this.updateActiveRequest((request) =>
      request.type === 'HTTP'
        ? {
            ...request,
            queryParams: request.queryParams.map((param) =>
              param.id === id ? { ...param, [field]: value } : param,
            ),
          }
        : request,
    );
  }

  setHttpParamEnabled(id: string, enabled: boolean): void {
    this.updateActiveRequest((request) =>
      request.type === 'HTTP'
        ? {
            ...request,
            queryParams: request.queryParams.map((param) =>
              param.id === id ? { ...param, enabled } : param,
            ),
          }
        : request,
    );
  }

  addHttpParam(): void {
    this.updateActiveRequest((request) =>
      request.type === 'HTTP'
        ? {
            ...request,
            queryParams: [
              ...request.queryParams,
              { id: this.createRowId('param'), key: '', value: '', enabled: true },
            ],
          }
        : request,
    );
  }

  removeHttpParam(id: string): void {
    this.updateActiveRequest((request) =>
      request.type === 'HTTP'
        ? { ...request, queryParams: request.queryParams.filter((param) => param.id !== id) }
        : request,
    );
  }

  updateHeader(id: string, field: 'key' | 'value', value: string): void {
    this.updateHeaders((headers) =>
      headers.map((header) => (header.id === id ? { ...header, [field]: value } : header)),
    );
  }

  setHeaderEnabled(id: string, enabled: boolean): void {
    this.updateHeaders((headers) =>
      headers.map((header) => (header.id === id ? { ...header, enabled } : header)),
    );
  }

  addHeader(): void {
    this.updateHeaders((headers) => [
      ...headers,
      { id: this.createRowId('header'), key: '', value: '', enabled: true },
    ]);
  }

  removeHeader(id: string): void {
    this.updateHeaders((headers) => headers.filter((header) => header.id !== id));
  }

  updateAuthType(type: AuthType): void {
    this.updateActiveRequest((request) => {
      if (request.type === 'GRPC') {
        return request;
      }
      return { ...request, auth: { type, config: request.auth?.config ?? {} } };
    });
  }

  updateHttpBodyType(type: HttpBodyType): void {
    this.updateActiveRequest((request) =>
      request.type === 'HTTP'
        ? { ...request, body: { type, content: request.body?.content ?? '' } }
        : request,
    );
  }

  updateHttpBodyContent(content: string): void {
    this.updateActiveRequest((request) =>
      request.type === 'HTTP'
        ? {
            ...request,
            body: { type: request.body?.type ?? 'TEXT', content },
          }
        : request,
    );
  }

  updateGraphQLQuery(query: string): void {
    this.updateActiveRequest((request) =>
      request.type === 'GRAPHQL' ? { ...request, query } : request,
    );
  }

  updateGraphQLVariables(variables: string): void {
    this.updateActiveRequest((request) =>
      request.type === 'GRAPHQL' ? { ...request, variables } : request,
    );
  }

  updateGraphQLOperationName(operationName: string): void {
    this.updateActiveRequest((request) =>
      request.type === 'GRAPHQL' ? { ...request, operationName } : request,
    );
  }

  updateGrpcService(service: string): void {
    this.updateActiveRequest((request) =>
      request.type === 'GRPC' ? { ...request, service } : request,
    );
  }

  updateGrpcMethod(method: string): void {
    this.updateActiveRequest((request) =>
      request.type === 'GRPC' ? { ...request, method } : request,
    );
  }

  updateGrpcBodyType(type: GrpcMessage['type']): void {
    this.updateActiveRequest((request) =>
      request.type === 'GRPC' ? { ...request, body: { ...request.body, type } } : request,
    );
  }

  updateGrpcBodyPayload(payload: string): void {
    this.updateActiveRequest((request) =>
      request.type === 'GRPC' ? { ...request, body: { ...request.body, payload } } : request,
    );
  }

  updateProtoSource(source: ProtoDefinition['source']): void {
    this.updateActiveRequest((request) =>
      request.type === 'GRPC'
        ? { ...request, proto: { source, content: request.proto?.content ?? '' } }
        : request,
    );
  }

  updateProtoContent(content: string): void {
    this.updateActiveRequest((request) =>
      request.type === 'GRPC'
        ? { ...request, proto: { source: request.proto?.source ?? 'INLINE', content } }
        : request,
    );
  }

  async sendRequest(): Promise<void> {
    const item = this.active();
    if (
      !item ||
      (item.request.type !== 'HTTP' && item.request.type !== 'GRAPHQL') ||
      this.isSending()
    ) {
      return;
    }

    this.store.startExecution(item.id);
    try {
      const response =
        item.request.type === 'HTTP'
          ? await this.httpExecutor.execute(item.request)
          : await this.graphQLExecutor.execute(item.request);
      this.store.completeExecution(item.id, response);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown network error';
      this.store.failExecution(item.id, message);
    }
  }

  connectWebSocket(): void {
    const item = this.active();
    if (!item || item.request.type !== 'WEBSOCKET') {
      return;
    }

    this.webSocketExecutor.connect(item.id, item.request, {
      onStatus: (status) => this.store.setWebSocketStatus(item.id, status),
      onMessage: (type, payload) =>
        this.store.addWebSocketMessage(item.id, {
          id: this.createLogId(),
          direction: 'RECEIVED',
          type,
          payload,
          timestamp: Date.now(),
        }),
      onError: (error) => this.store.setWebSocketStatus(item.id, 'ERROR', { error }),
      onClose: (closeCode, closeReason) =>
        this.store.setWebSocketStatus(item.id, 'CLOSED', { closeCode, closeReason }),
    });
  }

  disconnectWebSocket(): void {
    const item = this.active();
    if (!item || item.request.type !== 'WEBSOCKET') {
      return;
    }

    this.webSocketExecutor.disconnect(item.id);
    this.store.setWebSocketStatus(item.id, 'CLOSED', {
      closeCode: 1000,
      closeReason: 'Client disconnected',
    });
  }

  sendWebSocketMessage(): void {
    const item = this.active();
    const payload = this.outgoingWebSocketMessage();
    if (!item || item.request.type !== 'WEBSOCKET' || !payload) {
      return;
    }

    try {
      this.webSocketExecutor.send(item.id, payload);
      this.store.addWebSocketMessage(item.id, {
        id: this.createLogId(),
        direction: 'SENT',
        type: 'TEXT',
        payload,
        timestamp: Date.now(),
      });
      this.outgoingWebSocketMessage.set('');
    } catch (error) {
      this.store.setWebSocketStatus(item.id, 'ERROR', {
        error: error instanceof Error ? error.message : 'Unable to send WebSocket message.',
      });
    }
  }

  clearWebSocketMessages(): void {
    const id = this.store.activeRequestId();
    if (id) {
      this.store.clearWebSocketMessages(id);
    }
  }

  formatWebSocketTime(timestamp: number): string {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  activateTab(id: string): void {
    this.store.activateTab(id);
  }

  closeTab(event: Event, id: string): void {
    event.stopPropagation();
    this.store.closeTab(id);
  }

  ngOnDestroy(): void {
    this.webSocketExecutor.disconnectAll();
  }

  private updateHeaders(update: (headers: Header[]) => Header[]): void {
    this.updateActiveRequest((request) => {
      if (request.type === 'GRPC') {
        return { ...request, metadata: update(request.metadata) };
      }
      return { ...request, headers: update(request.headers) };
    });
  }

  private updateActiveRequest(update: (request: RequestDefinition) => RequestDefinition): void {
    const id = this.store.activeRequestId();
    if (id) {
      this.store.updateRequest(id, update);
    }
  }

  private createRowId(kind: 'param' | 'header'): string {
    this.rowSequence += 1;
    return `draft-${kind}-${Date.now()}-${this.rowSequence}`;
  }

  private createLogId(): string {
    this.rowSequence += 1;
    return `ws-log-${Date.now()}-${this.rowSequence}`;
  }
}
