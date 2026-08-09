import { Component, inject, input } from '@angular/core';
import { CollectionItem } from '../../../../api-tester.model';
import { ApiTesterStore } from '../../../../api-tester.store';
import { RequestItem } from '../request-item/request-item';

@Component({
  selector: 'app-collection-folder',
  imports: [CollectionFolder, RequestItem],
  templateUrl: './collection-folder.html',
  styleUrl: './collection-folder.css',
})
export class CollectionFolder {
  private readonly store = inject(ApiTesterStore);

  folderId = input.required<string>();
  name = input.required<string>();
  items = input.required<CollectionItem[]>();
  depth = input(0);

  isOpen(): boolean {
    if (this.store.filterQuery().trim()) {
      return true;
    }
    return this.store.isExpanded(this.folderId());
  }

  paddingLeft(): string {
    return `${8 + this.depth() * 12}px`;
  }

  onToggle(): void {
    this.store.toggleExpanded(this.folderId());
  }
}
