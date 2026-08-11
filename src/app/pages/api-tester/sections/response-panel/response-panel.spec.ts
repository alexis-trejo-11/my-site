import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsePanel } from './response-panel';
import { ApiTesterStore } from '../../api-tester.store';
import { Sandbox } from '../../data/sandbox';

describe('ResponsePanel', () => {
  let component: ResponsePanel;
  let fixture: ComponentFixture<ResponsePanel>;
  let store: ApiTesterStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsePanel],
      providers: [ApiTesterStore],
    }).compileComponents();

    fixture = TestBed.createComponent(ResponsePanel);
    component = fixture.componentInstance;
    store = TestBed.inject(ApiTesterStore);
    store.setCollections([Sandbox]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a formatted HTTP response', () => {
    store.openRequest('sandbox-users-get');
    store.completeExecution('sandbox-users-get', {
      protocol: 'HTTP',
      requestUrl: 'https://example.com/users/1',
      status: 200,
      statusText: 'OK',
      ok: true,
      headers: [{ key: 'content-type', value: 'application/json' }],
      body: '{"user":{"id":1}}',
      contentType: 'application/json',
      durationMs: 124,
      sizeBytes: 17,
    });
    fixture.detectChanges();

    expect(component.bodyFormat()).toBe('JSON');
    expect(component.formattedBody()).toContain('"user": {');
    expect(fixture.nativeElement.textContent).toContain('200');
    expect(fixture.nativeElement.textContent).toContain('124 ms');
  });

  it('renders network errors with a CORS hint', () => {
    store.openRequest('sandbox-users-get');
    store.failExecution('sandbox-users-get', 'Failed to fetch');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Failed to fetch');
    expect(fixture.nativeElement.textContent).toContain('CORS');
  });

  it('renders GraphQL errors separately from the response body', () => {
    store.openRequest('sandbox-gql-user');
    store.completeExecution('sandbox-gql-user', {
      protocol: 'GRAPHQL',
      requestUrl: 'https://example.com/graphql',
      status: 200,
      statusText: 'OK',
      ok: true,
      headers: [],
      body: '{"data":{"user":null},"errors":[{"message":"User not found"}]}',
      contentType: 'application/json',
      durationMs: 55,
      sizeBytes: 62,
      graphQLErrors: [{ message: 'User not found', path: ['user'] }],
    });
    fixture.detectChanges();

    expect(component.graphQLErrors()).toHaveLength(1);
    expect(fixture.nativeElement.textContent).toContain('GraphQL errors (1)');
    expect(fixture.nativeElement.textContent).toContain('User not found');
    expect(fixture.nativeElement.textContent).toContain('at user');
  });

  it('renders a not-implemented placeholder for gRPC calls', () => {
    store.openRequest('sandbox-grpc-get-user');
    fixture.detectChanges();

    expect(component.activeRequestType()).toBe('GRPC');
    expect(fixture.nativeElement.textContent).toContain('gRPC preview only');
    expect(fixture.nativeElement.textContent).toContain('not implemented yet');
  });
});
