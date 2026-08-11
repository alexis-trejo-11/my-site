import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { WebSocketRequestExecutor } from './websocket-request-executor.service';

class FakeWebSocket {
  static readonly OPEN = 1;
  static instances: FakeWebSocket[] = [];

  readonly url: string;
  readonly protocols?: string | string[];
  readyState = 0;
  binaryType: BinaryType = 'blob';
  sent: unknown[] = [];
  closedWith?: { code: number; reason: string };
  onopen: ((event: Event) => void) | null = null;
  onmessage: ((event: MessageEvent) => void) | null = null;
  onerror: ((event: Event) => void) | null = null;
  onclose: ((event: CloseEvent) => void) | null = null;

  constructor(url: string, protocols?: string | string[]) {
    this.url = url;
    this.protocols = protocols;
    FakeWebSocket.instances.push(this);
  }

  send(payload: unknown): void {
    this.sent.push(payload);
  }

  close(code: number, reason: string): void {
    this.closedWith = { code, reason };
    this.readyState = 3;
  }

  open(): void {
    this.readyState = FakeWebSocket.OPEN;
    this.onopen?.(new Event('open'));
  }

  receive(payload: string): void {
    this.onmessage?.(new MessageEvent('message', { data: payload }));
  }
}

describe('WebSocketRequestExecutor', () => {
  beforeEach(() => {
    FakeWebSocket.instances = [];
    vi.stubGlobal('WebSocket', FakeWebSocket);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('connects, receives, sends, and disconnects', () => {
    const executor = TestBed.inject(WebSocketRequestExecutor);
    const statuses: string[] = [];
    const messages: Array<{ type: string; payload: string }> = [];

    executor.connect(
      'socket-1',
      {
        type: 'WEBSOCKET',
        url: 'wss://example.com/events',
        headers: [],
        subprotocols: ['graphql-transport-ws'],
        messages: [],
      },
      {
        onStatus: (status) => statuses.push(status),
        onMessage: (type, payload) => messages.push({ type, payload }),
        onError: vi.fn(),
        onClose: vi.fn(),
      },
    );

    const socket = FakeWebSocket.instances[0];
    expect(statuses).toEqual(['CONNECTING']);
    expect(socket.protocols).toEqual(['graphql-transport-ws']);

    socket.open();
    socket.receive('{"event":"ready"}');
    executor.send('socket-1', '{"action":"subscribe"}');
    executor.disconnect('socket-1');

    expect(statuses).toEqual(['CONNECTING', 'OPEN']);
    expect(messages).toEqual([{ type: 'TEXT', payload: '{"event":"ready"}' }]);
    expect(socket.sent).toEqual(['{"action":"subscribe"}']);
    expect(socket.closedWith).toEqual({ code: 1000, reason: 'Client disconnected' });
  });

  it('rejects sends while disconnected', () => {
    const executor = TestBed.inject(WebSocketRequestExecutor);

    expect(() => executor.send('missing', 'hello')).toThrow('WebSocket is not connected.');
  });
});
