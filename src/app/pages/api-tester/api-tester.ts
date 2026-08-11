import { Component, inject } from '@angular/core';
import { RequestPanel } from './sections/request-panel/request-panel';
import { ResponsePanel } from './sections/response-panel/response-panel';
import { CollectionExplorer } from './sections/collection-explorer/collection-explorer';
import { COLLECTIONS } from './data';
import { ApiTesterStore } from './api-tester.store';
import { Header } from '../../shared/header/header';

@Component({
  selector: 'app-api-tester',
  imports: [CollectionExplorer, RequestPanel, ResponsePanel, Header],
  providers: [ApiTesterStore],
  template: `
    <app-header [autoHide]="true" />
    <div
      class="grid h-[calc(100dvh-4.5rem)] min-h-0 w-full items-stretch grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)_minmax(320px,400px)]"
    >
      <app-collection-explorer />
      <app-request-panel />
      <app-response-panel />
    </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 100%;
      width: 100%;
      overflow: hidden;
    }
  `,
})
export class ApiTester {
  private readonly store = inject(ApiTesterStore);

  constructor() {
    const sortedCollections = Object.values(COLLECTIONS).sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    this.store.setCollections(sortedCollections);
  }
}
