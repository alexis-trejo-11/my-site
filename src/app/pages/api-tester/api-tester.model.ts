//=== Collections Model ===

export interface CollectionModel {
  id: string;
  name: string;
  description?: string;
  kind: 'BUILT_IN' | 'SANDBOX';
  persistence: 'MEMORY' | 'LOCAL_STORAGE';
  variables: EnvironmentVariable[];
  items: CollectionItem[];
}

export type RequestProtocol = RequestDefinition['type'];

export interface CreateRequestInput {
  parentId: string;
  name: string;
  protocol: RequestProtocol;
}

export interface CreateFolderInput {
  parentId: string;
  name: string;
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

export interface HttpExecutionResult {
  protocol: 'HTTP';
  requestUrl: string;
  status: number;
  statusText: string;
  ok: boolean;
  headers: Array<{ key: string; value: string }>;
  body: string;
  contentType: string;
  durationMs: number;
  sizeBytes: number;
}

export interface GraphQLExecutionError {
  message: string;
  path?: Array<string | number>;
  extensions?: Record<string, unknown>;
}

export interface GraphQLExecutionResult extends Omit<HttpExecutionResult, 'protocol'> {
  protocol: 'GRAPHQL';
  graphQLErrors: GraphQLExecutionError[];
}

export type RequestExecutionResult = HttpExecutionResult | GraphQLExecutionResult;

export type RequestExecutionState =
  | { status: 'IDLE' }
  | { status: 'LOADING' }
  | { status: 'SUCCESS'; response: RequestExecutionResult }
  | { status: 'ERROR'; error: string };

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

export interface WebSocketMessage {
  id: string;
  type: 'TEXT' | 'BINARY';
  payload: string;
  name?: string;
}

export type WebSocketConnectionStatus = 'IDLE' | 'CONNECTING' | 'OPEN' | 'CLOSED' | 'ERROR';

export interface WebSocketLogEntry {
  id: string;
  direction: 'SENT' | 'RECEIVED';
  type: 'TEXT' | 'BINARY';
  payload: string;
  timestamp: number;
}

export interface WebSocketConnectionState {
  status: WebSocketConnectionStatus;
  messages: WebSocketLogEntry[];
  error?: string;
  closeCode?: number;
  closeReason?: string;
}
