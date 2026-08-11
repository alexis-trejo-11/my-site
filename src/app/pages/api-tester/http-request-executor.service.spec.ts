import { TestBed } from '@angular/core/testing';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { HttpRequestExecutor } from './http-request-executor.service';
import { HttpRequest } from './api-tester.model';

describe('HttpRequestExecutor', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('builds and performs an HTTP request', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response('{"created":true}', {
        status: 201,
        statusText: 'Created',
        headers: { 'content-type': 'application/json', 'x-request-id': 'req-1' },
      }),
    );
    const executor = TestBed.inject(HttpRequestExecutor);
    const request: HttpRequest = {
      type: 'HTTP',
      method: 'POST',
      url: '/api/users',
      queryParams: [{ id: 'active', key: 'active', value: 'true', enabled: true }],
      headers: [{ id: 'accept', key: 'Accept', value: 'application/json', enabled: true }],
      auth: { type: 'BEARER', config: { token: 'secret-token' } },
      body: { type: 'JSON', content: '{"name":"Alexis"}' },
    };

    const result = await executor.execute(request);
    const [url, init] = fetchMock.mock.calls[0];
    const sentHeaders = init?.headers as Headers;

    expect((url as URL).pathname).toBe('/api/users');
    expect((url as URL).searchParams.get('active')).toBe('true');
    expect(init?.method).toBe('POST');
    expect(init?.body).toBe('{"name":"Alexis"}');
    expect(sentHeaders.get('authorization')).toBe('Bearer secret-token');
    expect(sentHeaders.get('content-type')).toBe('application/json');
    expect(result.status).toBe(201);
    expect(result.body).toBe('{"created":true}');
    expect(result.headers).toContainEqual({ key: 'x-request-id', value: 'req-1' });
  });

  it('does not send a body for GET requests', async () => {
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(new Response(null, { status: 204 }));
    const executor = TestBed.inject(HttpRequestExecutor);

    await executor.execute({
      type: 'HTTP',
      method: 'GET',
      url: 'https://example.com/health',
      queryParams: [],
      headers: [],
      body: { type: 'JSON', content: '{"ignored":true}' },
    });

    expect(fetchMock.mock.calls[0][1]?.body).toBeUndefined();
  });
});
