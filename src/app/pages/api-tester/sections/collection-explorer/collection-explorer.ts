import { Component, computed, effect, inject, signal } from '@angular/core';
import { ExplorerTree } from '../../../../shared/explorer-tree';
import { ApiTesterStore } from '../../api-tester.store';
import { collectionsToTreeNodes } from './collection-tree.mapper';
import { RequestItem } from './request-item/request-item';
import { CollectionItem, RequestProtocol } from '../../api-tester.model';
import { SandboxPersistenceService } from '../../sandbox-persistence.service';
import { Sandbox } from '../../data/sandbox';
import { copyCollectionJson, downloadCollectionJson } from '../../collection-export';

@Component({
  selector: 'app-collection-explorer',
  imports: [ExplorerTree, RequestItem],
  templateUrl: './collection-explorer.html',
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class CollectionExplorer {
  readonly store = inject(ApiTesterStore);
  private readonly sandboxPersistence = inject(SandboxPersistenceService);
  readonly editorName = signal('');
  readonly editorTargetId = signal('');
  readonly editorProtocol = signal<RequestProtocol>('HTTP');
  readonly exportMessage = signal('');
  readonly requestProtocols: RequestProtocol[] = ['HTTP', 'GRAPHQL', 'WEBSOCKET', 'GRPC'];
  readonly editorTargets = computed(() =>
    this.store.collections().flatMap((collection) => {
      if (!this.canCreate(collection.id)) {
        return [];
      }
      return [
        { id: collection.id, label: collection.name },
        ...folderTargets(collection.items, collection.name),
      ];
    }),
  );

  readonly treeNodes = computed(() => collectionsToTreeNodes(this.store.filteredCollections()));

  readonly forceExpand = computed(() => this.store.filterQuery().trim().length > 0);

  constructor() {
    effect(() => {
      const action = this.store.editorAction();
      if (!action) {
        return;
      }
      this.editorTargetId.set(action.targetId);
      this.editorName.set(
        action.mode === 'RENAME'
          ? this.store.nodeName(action.targetId)
          : action.mode === 'FOLDER'
            ? 'New folder'
            : 'New request',
      );
      this.editorProtocol.set('HTTP');
    });
  }

  onFilterInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.store.setFilter(value);
  }

  onToggleId(id: string): void {
    this.store.toggleExpanded(id);
  }

  onSelectLeaf(id: string): void {
    this.store.openRequest(id);
  }

  canCreate(id: string): boolean {
    return this.store.policyForNode(id)?.createItems ?? false;
  }

  canRename(id: string): boolean {
    return this.store.policyForNode(id)?.renameItems ?? false;
  }

  canDelete(id: string): boolean {
    return !this.store.isCollection(id) && (this.store.policyForNode(id)?.deleteItems ?? false);
  }

  canExport(id: string): boolean {
    return this.store.isCollection(id) && (this.store.policyForNode(id)?.export ?? false);
  }

  isSandbox(id: string): boolean {
    return (
      this.store.collectionForNode(id)?.id === id &&
      this.store.collectionForNode(id)?.kind === 'SANDBOX'
    );
  }

  submitEditor(): void {
    const action = this.store.editorAction();
    if (!action) {
      return;
    }

    if (action.mode === 'REQUEST') {
      this.store.createRequest({
        parentId: this.editorTargetId(),
        name: this.editorName(),
        protocol: this.editorProtocol(),
      });
    } else if (action.mode === 'FOLDER') {
      this.store.createFolder({
        parentId: this.editorTargetId(),
        name: this.editorName(),
      });
    } else {
      this.store.renameNode(action.targetId, this.editorName());
    }
    this.store.closeEditor();
  }

  deleteNode(id: string): void {
    if (globalThis.confirm?.(`Delete "${this.store.nodeName(id)}"?`)) {
      this.store.deleteNode(id);
    }
  }

  resetSandbox(): void {
    if (!globalThis.confirm?.('Reset Sandbox to its default requests?')) {
      return;
    }
    const seed = this.sandboxPersistence.reset(Sandbox);
    this.store.resetSandbox(seed);
  }

  async copyCollection(id: string): Promise<void> {
    const collection = this.store.collectionForNode(id);
    if (!collection || !this.canExport(id)) {
      return;
    }
    await copyCollectionJson(collection);
    this.showExportMessage('Copied JSON');
  }

  downloadCollection(id: string): void {
    const collection = this.store.collectionForNode(id);
    if (!collection || !this.canExport(id)) {
      return;
    }
    downloadCollectionJson(collection);
    this.showExportMessage('Downloaded JSON');
  }

  private showExportMessage(message: string): void {
    this.exportMessage.set(message);
    globalThis.setTimeout(() => this.exportMessage.set(''), 1800);
  }
}

function folderTargets(
  items: CollectionItem[],
  parentPath: string,
): Array<{ id: string; label: string }> {
  return items.flatMap((item) => {
    if (item.type !== 'FOLDER') {
      return [];
    }
    const path = `${parentPath} / ${item.name}`;
    return [{ id: item.id, label: path }, ...folderTargets(item.items, path)];
  });
}
