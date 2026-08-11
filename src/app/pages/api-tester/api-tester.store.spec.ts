import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { ApiTesterStore } from './api-tester.store';
import { API_TESTER_DEVELOPMENT_MODE } from './collection-policy';
import { Sandbox } from './data/sandbox';
import { cloneCollection } from './data/collection-schema';

describe('ApiTesterStore collection policies and CRUD', () => {
  it('allows persistent-style Sandbox CRUD in production mode', () => {
    const store = createStore(false);
    store.setCollections([cloneCollection(Sandbox)]);

    const folderId = store.createFolder({ parentId: 'sandbox', name: 'Experiments' });
    expect(folderId).toBeTruthy();

    const requestId = store.createRequest({
      parentId: folderId!,
      name: 'Health check',
      protocol: 'HTTP',
    });
    expect(requestId).toBeTruthy();
    expect(store.activeRequestId()).toBe(requestId);
    expect(store.renameNode(requestId!, 'Renamed check')).toBe(true);
    expect(store.findRequestById(requestId!)?.name).toBe('Renamed check');
  });

  it('rejects structural edits for built-in collections in production but allows request edits', () => {
    const store = createStore(false);
    const builtIn = {
      ...cloneCollection(Sandbox),
      id: 'built-in',
      name: 'Built in',
      kind: 'BUILT_IN' as const,
      persistence: 'MEMORY' as const,
    };
    store.setCollections([builtIn]);

    expect(store.createFolder({ parentId: 'built-in', name: 'Forbidden' })).toBeNull();
    expect(
      store.createRequest({ parentId: 'built-in', name: 'Forbidden', protocol: 'HTTP' }),
    ).toBeNull();
    expect(store.renameNode('built-in', 'Changed')).toBe(false);

    store.updateRequest('sandbox-users-get', (request) =>
      request.type === 'HTTP' ? { ...request, url: '/temporary' } : request,
    );
    const request = store.findRequestById('sandbox-users-get')?.request;
    expect(request?.type === 'HTTP' ? request.url : null).toBe('/temporary');
  });

  it('allows built-in authoring in development mode and cleans deleted request state', () => {
    const store = createStore(true);
    const builtIn = {
      ...cloneCollection(Sandbox),
      id: 'built-in',
      name: 'Built in',
      kind: 'BUILT_IN' as const,
      persistence: 'MEMORY' as const,
      items: [],
    };
    store.setCollections([builtIn]);

    const requestId = store.createRequest({
      parentId: 'built-in',
      name: 'Temporary authoring request',
      protocol: 'GRAPHQL',
    })!;
    store.startExecution(requestId);
    store.setWebSocketStatus(requestId, 'OPEN');

    expect(store.deleteNode(requestId)).toBe(true);
    expect(store.findRequestById(requestId)).toBeNull();
    expect(store.openTabIds()).not.toContain(requestId);
    expect(store.executions()[requestId]).toBeUndefined();
    expect(store.webSocketConnections()[requestId]).toBeUndefined();
  });

  it('resets Sandbox and clears tabs for its previous requests', () => {
    const store = createStore(false);
    const sandbox = cloneCollection(Sandbox);
    store.setCollections([sandbox]);
    const requestId = store.createRequest({
      parentId: 'sandbox',
      name: 'Disposable',
      protocol: 'HTTP',
    })!;

    expect(store.resetSandbox(cloneCollection(Sandbox))).toBe(true);
    expect(store.findRequestById(requestId)).toBeNull();
    expect(store.openTabIds()).not.toContain(requestId);
  });
});

function createStore(developmentMode: boolean): ApiTesterStore {
  TestBed.resetTestingModule();
  TestBed.configureTestingModule({
    providers: [
      ApiTesterStore,
      { provide: API_TESTER_DEVELOPMENT_MODE, useValue: developmentMode },
    ],
  });
  return TestBed.inject(ApiTesterStore);
}
