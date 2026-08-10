import { Component, inject } from '@angular/core';
import { CollectionTree } from './collection-tree/collection-tree';
import { ApiTesterStore } from '../../api-tester.store';

@Component({
  selector: 'app-collection-explorer',
  imports: [CollectionTree],
  templateUrl: './collection-explorer.html',
  styles: `
    :host {
      display: flex;
      flex-shrink: 0;
      height: 100%;
      min-height: 0;
    }
  `,
})
export class CollectionExplorer {
  readonly store = inject(ApiTesterStore);

  onFilterInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.store.setFilter(value);
  }
}
