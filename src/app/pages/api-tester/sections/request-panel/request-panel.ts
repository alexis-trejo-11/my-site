import { Component, computed, inject } from '@angular/core';
import { ApiTesterStore } from '../../api-tester.store';
import {
  requestBadge,
  requestDisplayName,
  requestPathLabel,
} from '../collection-explorer/request-badge.helpers';
import { CollectionRequestItem } from '../../api-tester.model';

@Component({
  selector: 'app-request-panel',
  imports: [],
  templateUrl: './request-panel.html',
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class RequestPanel {
  readonly store = inject(ApiTesterStore);

  readonly openTabs = computed(() =>
    this.store
      .openTabIds()
      .map((id) => this.store.findRequestById(id))
      .filter((item): item is CollectionRequestItem => item !== null),
  );

  readonly active = computed(() => this.store.activeRequest());

  readonly activeBadge = computed(() => {
    const item = this.active();
    return item ? requestBadge(item.request) : null;
  });

  readonly activePath = computed(() => {
    const item = this.active();
    return item ? requestPathLabel(item.request) : '';
  });

  badgeFor = requestBadge;
  labelFor = requestDisplayName;

  activateTab(id: string): void {
    this.store.activateTab(id);
  }

  closeTab(event: Event, id: string): void {
    event.stopPropagation();
    this.store.closeTab(id);
  }
}
