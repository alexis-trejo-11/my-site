import { TestBed } from '@angular/core/testing';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { GraphQLRequestExecutor } from './graphql-request-executor.service';
import { HttpRequestExecutor } from './http-request-executor.service';

describe('GraphQLRequestExecutor', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('executes GraphQL as HTTP POST and extracts GraphQL errors', async () => {
    const httpExecutor = TestBed.inject(HttpRequestExecutor);
    const executeHttp = vi.spyOn(httpExecutor, 'execute').mockResolvedValue({
      protocol: 'HTTP',
      requestUrl: 'https://example.com/graphql',
      status: 200,
      statusText: 'OK',
      ok: true,
      headers: [{ key: 'content-type', value: 'application/json' }],
      body: JSON.stringify({
        data: { user: null },
        errors: [{ message: 'User not found', path: ['user'] }],
      }),
      contentType: 'application/json',
      durationMs: 30,
      sizeBytes: 80,
    });
    const executor = TestBed.inject(GraphQLRequestExecutor);

    const result = await executor.execute({
      type: 'GRAPHQL',
      url: 'https://example.com/graphql',
      headers: [],
      query: 'query User($id: ID!) { user(id: $id) { id } }',
      variables: '{"id":"usr-1"}',
      operationName: 'User',
    });

    const sentRequest = executeHttp.mock.calls[0][0];
    expect(sentRequest.method).toBe('POST');
    expect(JSON.parse(sentRequest.body?.content ?? '')).toEqual({
      query: 'query User($id: ID!) { user(id: $id) { id } }',
      variables: { id: 'usr-1' },
      operationName: 'User',
    });
    expect(result.protocol).toBe('GRAPHQL');
    expect(result.graphQLErrors).toEqual([{ message: 'User not found', path: ['user'] }]);
  });

  it('rejects invalid variables before making a request', async () => {
    const httpExecutor = TestBed.inject(HttpRequestExecutor);
    const executeHttp = vi.spyOn(httpExecutor, 'execute');
    const executor = TestBed.inject(GraphQLRequestExecutor);

    await expect(
      executor.execute({
        type: 'GRAPHQL',
        url: '/graphql',
        headers: [],
        query: '{ viewer { id } }',
        variables: '{invalid',
      }),
    ).rejects.toThrow('GraphQL variables must contain valid JSON.');
    expect(executeHttp).not.toHaveBeenCalled();
  });
});
