import { Component, inject } from '@angular/core';
import { RequestPanel } from './sections/request-panel/request-panel';
import { ResponsePanel } from './sections/response-panel/response-panel';
import { CollectionExplorer } from './sections/collection-explorer/collection-explorer';
import { COLLECTIONS } from './data';
import { ApiTesterStore } from './api-tester.store';

@Component({
  selector: 'app-api-tester',
  imports: [CollectionExplorer, RequestPanel, ResponsePanel],
  providers: [ApiTesterStore],
  template: `
    <app-collection-explorer></app-collection-explorer>
    <app-request-panel></app-request-panel>
    <app-response-panel></app-response-panel>
  `,
  styleUrl: './api-tester.css',
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
