import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { SandboxPersistenceService } from './sandbox-persistence.service';
import { Sandbox } from './data/sandbox';
import { cloneCollection } from './data/collection-schema';

describe('SandboxPersistenceService', () => {
  let service: SandboxPersistenceService;

  beforeEach(() => {
    localStorage.clear();
    service = TestBed.inject(SandboxPersistenceService);
  });

  it('saves and restores a versioned Sandbox', () => {
    const edited = cloneCollection(Sandbox);
    edited.name = 'My Sandbox';

    service.save(edited);

    expect(service.load(Sandbox).name).toBe('My Sandbox');
    expect(
      JSON.parse(localStorage.getItem(SandboxPersistenceService.storageKey) ?? '{}').version,
    ).toBe(1);
  });

  it('falls back to the seed when persisted data is corrupt', () => {
    localStorage.setItem(SandboxPersistenceService.storageKey, '{"version":1,"collection":42}');

    const loaded = service.load(Sandbox);

    expect(loaded).toEqual(Sandbox);
    expect(loaded).not.toBe(Sandbox);
  });

  it('does not persist built-in collections', () => {
    service.save({
      ...cloneCollection(Sandbox),
      kind: 'BUILT_IN',
      persistence: 'MEMORY',
    });

    expect(localStorage.getItem(SandboxPersistenceService.storageKey)).toBeNull();
  });

  it('removes storage and returns a fresh seed on reset', () => {
    service.save(Sandbox);

    const reset = service.reset(Sandbox);

    expect(localStorage.getItem(SandboxPersistenceService.storageKey)).toBeNull();
    expect(reset).toEqual(Sandbox);
    expect(reset).not.toBe(Sandbox);
  });
});
