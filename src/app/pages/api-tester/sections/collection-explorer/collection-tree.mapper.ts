import {
  CollectionItem,
  CollectionModel,
  CollectionRequestItem,
} from '../../api-tester.model';
import { ExplorerTreeNode } from '../../../../shared/explorer-tree';

export function collectionsToTreeNodes(
  collections: CollectionModel[],
): ExplorerTreeNode<CollectionRequestItem>[] {
  return collections.map((collection) => ({
    type: 'folder' as const,
    id: collection.id,
    name: collection.name,
    children: itemsToTreeNodes(collection.items),
  }));
}

function itemsToTreeNodes(
  items: CollectionItem[],
): ExplorerTreeNode<CollectionRequestItem>[] {
  return items.map((item) => {
    if (item.type === 'FOLDER') {
      return {
        type: 'folder' as const,
        id: item.id,
        name: item.name,
        children: itemsToTreeNodes(item.items),
      };
    }
    return {
      type: 'leaf' as const,
      id: item.id,
      name: item.name,
      data: item,
    };
  });
}
