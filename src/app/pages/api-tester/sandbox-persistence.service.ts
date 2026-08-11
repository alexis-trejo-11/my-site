import { Injectable } from '@angular/core';
import { CollectionModel } from './api-tester.model';
import { cloneCollection, parseCollection } from './data/collection-schema';

interface SandboxEnvelope {
  version: 1;
  collection: CollectionModel;
}

@Injectable({ providedIn: 'root' })
export class SandboxPersistenceService {
  static readonly storageKey = 'api-tester:sandbox:v1';

  load(seed: CollectionModel): CollectionModel {
    try {
      const raw = globalThis.localStorage?.getItem(SandboxPersistenceService.storageKey);
      if (!raw) {
        return cloneCollection(seed);
      }

      const envelope = JSON.parse(raw) as Partial<SandboxEnvelope>;
      if (envelope.version !== 1) {
        return cloneCollection(seed);
      }

      const collection = parseCollection(envelope.collection, 'localStorage sandbox');
      if (collection.id !== seed.id || collection.kind !== 'SANDBOX') {
        return cloneCollection(seed);
      }
      return collection;
    } catch {
      return cloneCollection(seed);
    }
  }

  save(collection: CollectionModel): void {
    if (collection.kind !== 'SANDBOX' || collection.persistence !== 'LOCAL_STORAGE') {
      return;
    }

    const envelope: SandboxEnvelope = {
      version: 1,
      collection: cloneCollection(collection),
    };

    try {
      globalThis.localStorage?.setItem(
        SandboxPersistenceService.storageKey,
        JSON.stringify(envelope),
      );
    } catch {
      // Storage can be unavailable in private browsing or under strict browser policies.
    }
  }

  reset(seed: CollectionModel): CollectionModel {
    try {
      globalThis.localStorage?.removeItem(SandboxPersistenceService.storageKey);
    } catch {
      // Reset still returns a clean in-memory seed when storage is unavailable.
    }
    return cloneCollection(seed);
  }
}
