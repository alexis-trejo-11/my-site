import { describe, expect, it } from 'vitest';
import { collectionPolicy } from './collection-policy';
import { Sandbox } from './data/sandbox';
import { cloneCollection } from './data/collection-schema';

describe('collectionPolicy', () => {
  it('keeps Sandbox structural editing available in production', () => {
    const policy = collectionPolicy(Sandbox, false);

    expect(policy.createItems).toBe(true);
    expect(policy.deleteItems).toBe(true);
    expect(policy.reset).toBe(true);
    expect(policy.export).toBe(false);
  });

  it('only enables built-in authoring and export during development', () => {
    const builtIn = {
      ...cloneCollection(Sandbox),
      kind: 'BUILT_IN' as const,
      persistence: 'MEMORY' as const,
    };

    expect(collectionPolicy(builtIn, false).createItems).toBe(false);
    expect(collectionPolicy(builtIn, false).export).toBe(false);
    expect(collectionPolicy(builtIn, true).createItems).toBe(true);
    expect(collectionPolicy(builtIn, true).export).toBe(true);
  });
});
