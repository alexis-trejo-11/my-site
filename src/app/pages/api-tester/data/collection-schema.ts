import { CollectionItem, CollectionModel } from '../api-tester.model';

export function parseCollection(value: unknown, source: string): CollectionModel {
  if (!isRecord(value)) {
    throw invalid(source, 'expected an object');
  }
  if (!isString(value['id']) || !isString(value['name'])) {
    throw invalid(source, 'id and name must be strings');
  }
  if (value['kind'] !== 'BUILT_IN' && value['kind'] !== 'SANDBOX') {
    throw invalid(source, 'kind must be BUILT_IN or SANDBOX');
  }
  if (value['persistence'] !== 'MEMORY' && value['persistence'] !== 'LOCAL_STORAGE') {
    throw invalid(source, 'persistence must be MEMORY or LOCAL_STORAGE');
  }
  if (!Array.isArray(value['variables']) || !Array.isArray(value['items'])) {
    throw invalid(source, 'variables and items must be arrays');
  }
  if (!value['items'].every((item) => isCollectionItem(item))) {
    throw invalid(source, 'contains an invalid folder or request');
  }

  return cloneCollection(value as unknown as CollectionModel);
}

export function cloneCollection(collection: CollectionModel): CollectionModel {
  return JSON.parse(JSON.stringify(collection)) as CollectionModel;
}

function isCollectionItem(value: unknown): value is CollectionItem {
  if (!isRecord(value) || !isString(value['id']) || !isString(value['name'])) {
    return false;
  }

  if (value['type'] === 'FOLDER') {
    return Array.isArray(value['items']) && value['items'].every((item) => isCollectionItem(item));
  }

  if (value['type'] !== 'REQUEST' || !isRecord(value['request'])) {
    return false;
  }

  const type = value['request']['type'];
  return type === 'HTTP' || type === 'GRAPHQL' || type === 'WEBSOCKET' || type === 'GRPC';
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function invalid(source: string, detail: string): Error {
  return new Error(`Invalid API collection "${source}": ${detail}.`);
}
