import { CollectionModel } from './api-tester.model';
import { cloneCollection } from './data/collection-schema';

export function serializeCollection(collection: CollectionModel): string {
  return `${JSON.stringify(cloneCollection(collection), null, 2)}\n`;
}

export async function copyCollectionJson(collection: CollectionModel): Promise<void> {
  if (!globalThis.navigator?.clipboard) {
    throw new Error('Clipboard access is not available.');
  }
  await globalThis.navigator.clipboard.writeText(serializeCollection(collection));
}

export function downloadCollectionJson(collection: CollectionModel): void {
  const blob = new Blob([serializeCollection(collection)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${slugify(collection.name)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function slugify(value: string): string {
  return (
    value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') || 'collection'
  );
}
