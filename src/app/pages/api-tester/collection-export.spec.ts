import { afterEach, describe, expect, it, vi } from 'vitest';
import {
  copyCollectionJson,
  downloadCollectionJson,
  serializeCollection,
} from './collection-export';
import { Sandbox } from './data/sandbox';

describe('collection JSON export', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('serializes stable, formatted collection JSON', () => {
    const serialized = serializeCollection(Sandbox);

    expect(serialized.endsWith('\n')).toBe(true);
    expect(JSON.parse(serialized)).toEqual(Sandbox);
    expect(serialized).toContain('\n  "id": "sandbox"');
  });

  it('copies collection JSON to the clipboard', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    await copyCollectionJson(Sandbox);

    expect(writeText).toHaveBeenCalledWith(serializeCollection(Sandbox));
  });

  it('downloads collection JSON with a stable filename', () => {
    const createObjectURL = vi.fn().mockReturnValue('blob:collection');
    const revokeObjectURL = vi.fn();
    Object.defineProperty(URL, 'createObjectURL', {
      configurable: true,
      value: createObjectURL,
    });
    Object.defineProperty(URL, 'revokeObjectURL', {
      configurable: true,
      value: revokeObjectURL,
    });
    const click = vi
      .spyOn(HTMLAnchorElement.prototype, 'click')
      .mockImplementation(() => undefined);

    downloadCollectionJson(Sandbox);

    expect(createObjectURL).toHaveBeenCalledOnce();
    expect(click).toHaveBeenCalledOnce();
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:collection');
  });
});
