import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterEach, vi } from 'vitest';

import { RequestPanel } from './request-panel';
import { ApiTesterStore } from '../../api-tester.store';
import { Sandbox } from '../../data/sandbox';
import { HttpRequestExecutor } from '../../http-request-executor.service';
import { GraphQLRequestExecutor } from '../../graphql-request-executor.service';
import { WebSocketRequestExecutor } from '../../websocket-request-executor.service';

describe('RequestPanel', () => {
  let component: RequestPanel;
  let fixture: ComponentFixture<RequestPanel>;
  let store: ApiTesterStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestPanel],
      providers: [ApiTesterStore],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestPanel);
    component = fixture.componentInstance;
    store = TestBed.inject(ApiTesterStore);
    store.setCollections([Sandbox]);
    await fixture.whenStable();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows HTTP data and HTTP-specific tabs', async () => {
    store.openRequest('sandbox-users-get');
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.activeDestination()).toBe('/v1/users/{id}');
    expect(component.tabs().map((tab) => tab.label)).toEqual(['Params', 'Headers', 'Auth', 'Body']);
    expect(fixture.nativeElement.querySelector('[aria-label="Parameter key"]').value).toBe(
      'include_metrics',
    );
    expect(fixture.nativeElement.querySelector('[aria-label="Parameter value"]').value).toBe(
      'true',
    );
  });

  it('edits HTTP fields in memory and keeps them when switching tabs', async () => {
    store.openRequest('sandbox-users-get');
    fixture.detectChanges();
    await fixture.whenStable();

    component.updateDestination('/v2/users/{id}');
    component.updateHttpParam('qp-include-metrics', 'value', 'false');
    component.addHeader();
    component.updateHttpBodyType('JSON');
    component.updateHttpBodyContent('{"enabled":true}');

    store.openRequest('sandbox-gql-user');
    store.activateTab('sandbox-users-get');

    const request = store.activeRequest()?.request;
    expect(request?.type).toBe('HTTP');
    if (request?.type === 'HTTP') {
      expect(request.url).toBe('/v2/users/{id}');
      expect(request.queryParams[0].value).toBe('false');
      expect(request.headers).toHaveLength(1);
      expect(request.body).toEqual({ type: 'JSON', content: '{"enabled":true}' });
    }
  });

  it('executes the active HTTP request and stores its response', async () => {
    const executor = TestBed.inject(HttpRequestExecutor);
    vi.spyOn(executor, 'execute').mockResolvedValue({
      protocol: 'HTTP',
      requestUrl: 'https://example.com/users/1',
      status: 200,
      statusText: 'OK',
      ok: true,
      headers: [],
      body: '{"id":1}',
      contentType: 'application/json',
      durationMs: 42,
      sizeBytes: 8,
    });
    store.openRequest('sandbox-users-get');

    await component.sendRequest();

    expect(executor.execute).toHaveBeenCalledOnce();
    expect(store.activeExecution().status).toBe('SUCCESS');
  });

  it('shows GraphQL query and variables sections', async () => {
    store.openRequest('sandbox-gql-user');
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.tabs().map((tab) => tab.label)).toEqual([
      'Headers',
      'Auth',
      'Query',
      'Variables',
    ]);

    component.selectSection('QUERY');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[aria-label="GraphQL query"]').value).toContain(
      'query UserProfile',
    );
  });

  it('edits GraphQL query metadata in memory', async () => {
    store.openRequest('sandbox-gql-user');
    fixture.detectChanges();
    await fixture.whenStable();

    component.updateGraphQLOperationName('Viewer');
    component.updateGraphQLQuery('query Viewer { viewer { id } }');
    component.updateGraphQLVariables('{"includeProfile":true}');

    const request = store.activeRequest()?.request;
    expect(request?.type).toBe('GRAPHQL');
    if (request?.type === 'GRAPHQL') {
      expect(request.operationName).toBe('Viewer');
      expect(request.query).toContain('query Viewer');
      expect(request.variables).toBe('{"includeProfile":true}');
    }
  });

  it('executes the active GraphQL request', async () => {
    const executor = TestBed.inject(GraphQLRequestExecutor);
    vi.spyOn(executor, 'execute').mockResolvedValue({
      protocol: 'GRAPHQL',
      requestUrl: 'https://example.com/graphql',
      status: 200,
      statusText: 'OK',
      ok: true,
      headers: [],
      body: '{"data":{"viewer":{"id":"1"}}}',
      contentType: 'application/json',
      durationMs: 35,
      sizeBytes: 30,
      graphQLErrors: [],
    });
    store.openRequest('sandbox-gql-user');

    await component.sendRequest();

    expect(executor.execute).toHaveBeenCalledOnce();
    expect(store.activeExecution().status).toBe('SUCCESS');
  });

  it('shows WebSocket-specific tabs', async () => {
    store.openRequest('sandbox-ws-events');
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.activeDestination()).toBe('wss://api.example.com/ws/events');
    expect(component.tabs().map((tab) => tab.label)).toEqual(['Headers', 'Auth', 'Messages']);
  });

  it('connects a WebSocket and records sent and received messages', () => {
    const executor = TestBed.inject(WebSocketRequestExecutor);
    vi.spyOn(executor, 'connect').mockImplementation((_id, _request, handlers) => {
      handlers.onStatus('CONNECTING');
      handlers.onStatus('OPEN');
      handlers.onMessage('TEXT', '{"event":"ready"}');
    });
    vi.spyOn(executor, 'send').mockImplementation(() => undefined);
    store.openRequest('sandbox-ws-events');

    component.connectWebSocket();
    component.outgoingWebSocketMessage.set('{"action":"subscribe"}');
    component.sendWebSocketMessage();

    expect(store.activeWebSocketConnection().status).toBe('OPEN');
    expect(store.activeWebSocketConnection().messages).toHaveLength(2);
    expect(store.activeWebSocketConnection().messages[0].direction).toBe('RECEIVED');
    expect(store.activeWebSocketConnection().messages[1].direction).toBe('SENT');
    expect(executor.send).toHaveBeenCalledWith('sandbox-ws-events', '{"action":"subscribe"}');
  });

  it('shows the gRPC endpoint and operation', async () => {
    store.openRequest('sandbox-grpc-get-user');
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.activeDestination()).toBe('api.example.com:443');
    expect(component.activeOperation()).toBe('UserService.GetUser');
    expect(component.tabs().map((tab) => tab.label)).toEqual(['Metadata', 'Proto', 'Body']);
  });

  it('edits the basic gRPC request definition without executing it', async () => {
    store.openRequest('sandbox-grpc-get-user');
    fixture.detectChanges();
    await fixture.whenStable();

    component.updateDestination('grpc.example.com:443');
    component.updateGrpcService('AccountsService');
    component.updateGrpcMethod('GetAccount');
    component.updateGrpcBodyPayload('{"accountId":"acc-1"}');
    component.updateProtoSource('INLINE');
    component.updateProtoContent('syntax = "proto3";');

    const request = store.activeRequest()?.request;
    expect(request?.type).toBe('GRPC');
    if (request?.type === 'GRPC') {
      expect(request.endpoint).toBe('grpc.example.com:443');
      expect(request.service).toBe('AccountsService');
      expect(request.method).toBe('GetAccount');
      expect(request.body.payload).toBe('{"accountId":"acc-1"}');
      expect(request.proto).toEqual({ source: 'INLINE', content: 'syntax = "proto3";' });
    }
    expect(component.canSend()).toBe(false);
  });
});
