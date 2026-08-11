import { Injectable } from '@angular/core';
import { Auth, HttpBody, HttpExecutionResult, HttpRequest } from './api-tester.model';

@Injectable({ providedIn: 'root' })
export class HttpRequestExecutor {
  async execute(request: HttpRequest): Promise<HttpExecutionResult> {
    const url = this.buildUrl(request);
    const headers = this.buildHeaders(request, url);
    const body = this.buildBody(request, headers);
    const startedAt = performance.now();

    const response = await fetch(url, {
      method: request.method,
      headers,
      body,
    });
    const responseBody = await response.text();

    return {
      protocol: 'HTTP',
      requestUrl: url.toString(),
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      headers: Array.from(response.headers.entries()).map(([key, value]) => ({ key, value })),
      body: responseBody,
      contentType: response.headers.get('content-type') ?? '',
      durationMs: Math.round((performance.now() - startedAt) * 100) / 100,
      sizeBytes: new TextEncoder().encode(responseBody).byteLength,
    };
  }

  private buildUrl(request: HttpRequest): URL {
    const baseUrl = globalThis.location?.origin ?? 'http://localhost';
    const url = new URL(request.url, baseUrl);

    for (const parameter of request.queryParams) {
      if (parameter.enabled && parameter.key) {
        url.searchParams.set(parameter.key, parameter.value);
      }
    }

    return url;
  }

  private buildHeaders(request: HttpRequest, url: URL): Headers {
    const headers = new Headers();

    for (const header of request.headers) {
      if (header.enabled && header.key) {
        headers.set(header.key, header.value);
      }
    }

    if (request.auth && request.auth.type !== 'NONE') {
      this.applyAuth(request.auth, headers, url);
    }

    return headers;
  }

  private buildBody(request: HttpRequest, headers: Headers): BodyInit | undefined {
    if (
      request.method === 'GET' ||
      request.method === 'HEAD' ||
      !request.body ||
      request.body.type === 'NONE'
    ) {
      return undefined;
    }

    if (!headers.has('content-type')) {
      const contentType = bodyContentType(request.body);
      if (contentType) {
        headers.set('content-type', contentType);
      }
    }

    return request.body.content;
  }

  private applyAuth(auth: Auth, headers: Headers, url: URL): void {
    const config = auth.config;

    switch (auth.type) {
      case 'BEARER':
      case 'OAUTH2': {
        const token = config['token'] ?? config['accessToken'] ?? config['value'];
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        break;
      }
      case 'BASIC': {
        const username = config['username'] ?? '';
        const password = config['password'] ?? '';
        headers.set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
        break;
      }
      case 'API_KEY': {
        const key = config['key'] ?? config['name'] ?? 'X-API-Key';
        const value = config['value'] ?? '';
        if (config['in'] === 'query') {
          url.searchParams.set(key, value);
        } else {
          headers.set(key, value);
        }
        break;
      }
      case 'CUSTOM':
      case 'NONE':
        break;
    }
  }
}

function bodyContentType(body: HttpBody): string | null {
  switch (body.type) {
    case 'JSON':
      return 'application/json';
    case 'XML':
      return 'application/xml';
    case 'TEXT':
      return 'text/plain';
    case 'URL_ENCODED':
      return 'application/x-www-form-urlencoded';
    case 'FORM_DATA':
    case 'BINARY':
    case 'NONE':
      return null;
  }
}
