import { Injectable } from '@angular/core';
import { WebSocketConnectionStatus, WebSocketRequest } from './api-tester.model';

export interface WebSocketEventHandlers {
  onStatus(status: WebSocketConnectionStatus): void;
  onMessage(type: 'TEXT' | 'BINARY', payload: string): void;
  onError(message: string): void;
  onClose(code: number, reason: string): void;
}

@Injectable({ providedIn: 'root' })
export class WebSocketRequestExecutor {
  private readonly sockets = new Map<string, WebSocket>();

  connect(id: string, request: WebSocketRequest, handlers: WebSocketEventHandlers): void {
    this.disconnect(id);
    handlers.onStatus('CONNECTING');

    let socket: WebSocket;
    try {
      socket = request.subprotocols?.length
        ? new WebSocket(request.url, request.subprotocols)
        : new WebSocket(request.url);
    } catch (error) {
      handlers.onError(error instanceof Error ? error.message : 'Unable to create WebSocket.');
      return;
    }

    socket.binaryType = 'arraybuffer';
    this.sockets.set(id, socket);

    socket.onopen = () => {
      if (this.isCurrent(id, socket)) {
        handlers.onStatus('OPEN');
      }
    };

    socket.onmessage = (event) => {
      if (!this.isCurrent(id, socket)) {
        return;
      }

      if (typeof event.data === 'string') {
        handlers.onMessage('TEXT', event.data);
        return;
      }

      const size =
        event.data instanceof ArrayBuffer
          ? event.data.byteLength
          : event.data instanceof Blob
            ? event.data.size
            : 0;
      handlers.onMessage('BINARY', `[binary payload: ${size} bytes]`);
    };

    socket.onerror = () => {
      if (this.isCurrent(id, socket)) {
        handlers.onError('WebSocket connection error.');
      }
    };

    socket.onclose = (event) => {
      if (this.isCurrent(id, socket)) {
        this.sockets.delete(id);
        handlers.onClose(event.code, event.reason);
      }
    };
  }

  send(id: string, payload: string, type: 'TEXT' | 'BINARY' = 'TEXT'): void {
    const socket = this.sockets.get(id);
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      throw new Error('WebSocket is not connected.');
    }

    socket.send(type === 'BINARY' ? new TextEncoder().encode(payload) : payload);
  }

  disconnect(id: string): void {
    const socket = this.sockets.get(id);
    if (!socket) {
      return;
    }

    this.sockets.delete(id);
    socket.close(1000, 'Client disconnected');
  }

  disconnectAll(): void {
    for (const id of this.sockets.keys()) {
      this.disconnect(id);
    }
  }

  private isCurrent(id: string, socket: WebSocket): boolean {
    return this.sockets.get(id) === socket;
  }
}
