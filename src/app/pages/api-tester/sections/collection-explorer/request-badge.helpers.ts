import { CollectionRequestItem, RequestDefinition } from '../../api-tester.model';

export interface RequestBadge {
  label: string;
  colorClass: string;
}

export function requestBadge(def: RequestDefinition): RequestBadge {
  switch (def.type) {
    case 'HTTP':
      return { label: def.method, colorClass: httpMethodColor(def.method) };
    case 'GRAPHQL':
      return { label: 'GQL', colorClass: 'text-primary' };
    case 'WEBSOCKET':
      return { label: 'WS', colorClass: 'text-secondary' };
    case 'GRPC':
      return { label: 'GRPC', colorClass: 'text-tertiary' };
  }
}

export function requestPathLabel(def: RequestDefinition): string {
  switch (def.type) {
    case 'HTTP':
      return def.url;
    case 'GRAPHQL':
      return def.url;
    case 'WEBSOCKET':
      return def.url;
    case 'GRPC':
      return `${def.service}.${def.method}`;
  }
}

export function requestDisplayName(item: CollectionRequestItem): string {
  return item.name || requestPathLabel(item.request);
}

function httpMethodColor(method: string): string {
  switch (method) {
    case 'PUT':
    case 'PATCH':
      return 'text-tertiary';
    case 'DELETE':
      return 'text-error';
    default:
      return 'text-secondary';
  }
}
