import { Component, computed, inject } from '@angular/core';
import { ExplorerTree } from '../../../../shared/explorer-tree';
import { ApiTesterStore } from '../../api-tester.store';
import { collectionsToTreeNodes } from './collection-tree.mapper';
import { RequestItem } from './request-item/request-item';

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

  readonly treeNodes = computed(() =>
    collectionsToTreeNodes(this.store.filteredCollections()),
  );

  readonly forceExpand = computed(
    () => this.store.filterQuery().trim().length > 0,
  );

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
}
