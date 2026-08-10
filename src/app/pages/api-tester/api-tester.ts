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
    <app-header />
    <app-collection-explorer></app-collection-explorer>
    <app-request-panel></app-request-panel>
    <app-response-panel></app-response-panel>
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
