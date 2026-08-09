//=== Collections Model ===

export interface CollectionModel {
  id: string;
  name: string;
  description?: string;
  variables: EnvironmentVariable[];
  items: CollectionItem[];
}

export type CollectionItem = CollectionRequestItem | FolderItem;

export interface CollectionRequestItem {
  type: 'REQUEST';
  id: string;
  name: string;
  request: RequestDefinition;
}

export interface FolderItem {
  type: 'FOLDER';
  id: string;
  name: string;
  items: CollectionItem[];
}

export interface EnvironmentVariable {
  name: string;
  value: string;
}

//=== Common Definitions Model ===

export interface Header {
  id: string;
  key: string;
  value: string;
  enabled: boolean;
}

export type AuthType = 'NONE' | 'BEARER' | 'BASIC' | 'API_KEY' | 'OAUTH2' | 'CUSTOM';

export interface Auth {
  type: AuthType;
  config: Record<string, string>;
}

export type RequestDefinition = HttpRequest | GraphQLRequest | GrpcRequest | WebSocketRequest;

//=== Request Definition ===
export interface HttpParameter {
  id: string;
  key: string;
  value: string;
  enabled: boolean;
}

export type HttpBodyType =
  'NONE' | 'TEXT' | 'JSON' | 'XML' | 'FORM_DATA' | 'URL_ENCODED' | 'BINARY';

export interface HttpBody {
  type: HttpBodyType;
  content: string;
}

export interface HttpRequest {
  type: 'HTTP';
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
  url: string;
  queryParams: HttpParameter[];
  headers: Header[];
  auth?: Auth;
  body?: HttpBody;
}

export interface GraphQLRequest {
  type: 'GRAPHQL';
  url: string;
  headers: Header[];
  auth?: Auth;
  query: string;
  variables?: string;
  operationName?: string;
}

export interface GrpcMessage {
  id: string;
  type: 'TEXT' | 'BINARY';
  payload: string;
  name?: string;
}

export interface ProtoDefinition {
  source: 'FILE' | 'URL' | 'INLINE';
  content: string;
}

export interface GrpcRequest {
  type: 'GRPC';
  endpoint: string;
  service: string;
  method: string;
  metadata: Header[];
  body: GrpcMessage;
  proto?: ProtoDefinition;
}

export interface WebSocketRequest {
  type: 'WEBSOCKET';
  url: string;
  headers: Header[];
  auth?: Auth;
  subprotocols?: string[];
  messages: WebSocketMessage[];
}

interface WebSocketMessage {
  id: string;
  type: 'TEXT' | 'BINARY';
  payload: string;
  name?: string;
}
