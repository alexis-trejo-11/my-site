import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestPanel } from './sections/request-panel/request-panel';
import { ResponsePanel } from './sections/response-panel/response-panel';
import { CollectionExplorer } from './sections/collection-explorer/collection-explorer';
import { COLLECTIONS } from './data';
import { ApiTesterStore } from './api-tester.store';
import { Header } from '../../shared/header/header';
import { SandboxPersistenceService } from './sandbox-persistence.service';
import { cloneCollection } from './data/collection-schema';

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
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly sandboxPersistence = inject(SandboxPersistenceService);

  constructor() {
    const sortedCollections = Object.values(COLLECTIONS)
      .map((collection) =>
        collection.kind === 'SANDBOX'
          ? this.sandboxPersistence.load(collection)
          : cloneCollection(collection),
      )
      .sort((a, b) => a.name.localeCompare(b.name));
    this.store.setCollections(sortedCollections);

    effect(() => {
      const sandbox = this.store.collections().find((collection) => collection.kind === 'SANDBOX');
      if (sandbox) {
        this.sandboxPersistence.save(sandbox);
      }
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.openRequest(id);
    }

    effect(() => {
      const activeId = this.store.activeRequestId();
      if (activeId) {
        this.router.navigate(['/api-tester', activeId], { replaceUrl: true });
      }
    });
  }
}
