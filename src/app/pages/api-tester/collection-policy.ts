import { InjectionToken, isDevMode } from '@angular/core';
import { CollectionModel } from './api-tester.model';

export const API_TESTER_DEVELOPMENT_MODE = new InjectionToken<boolean>(
  'API_TESTER_DEVELOPMENT_MODE',
  { providedIn: 'root', factory: () => isDevMode() },
);

export interface CollectionPolicy {
  editRequests: boolean;
  createItems: boolean;
  renameItems: boolean;
  deleteItems: boolean;
  reset: boolean;
  export: boolean;
}

export function collectionPolicy(
  collection: CollectionModel,
  developmentMode: boolean,
): CollectionPolicy {
  const sandbox = collection.kind === 'SANDBOX';
  const structuralEditing = sandbox || developmentMode;

  return {
    editRequests: true,
    createItems: structuralEditing,
    renameItems: structuralEditing,
    deleteItems: structuralEditing,
    reset: sandbox,
    export: developmentMode && !sandbox,
  };
}
