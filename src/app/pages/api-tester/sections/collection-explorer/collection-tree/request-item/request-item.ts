import { Component, computed, inject, input } from '@angular/core';
import { CollectionRequestItem } from '../../../../api-tester.model';
import { ApiTesterStore } from '../../../../api-tester.store';
import {
  requestBadge,
  requestDisplayName,
} from '../../request-badge.helpers';

@Component({
  selector: 'app-request-item',
  imports: [],
  templateUrl: './request-item.html',
})
export class RequestItem {
  private readonly store = inject(ApiTesterStore);

  request = input.required<CollectionRequestItem>();
  depth = input(0);

  readonly badge = computed(() => requestBadge(this.request().request));
  readonly label = computed(() => requestDisplayName(this.request()));
  readonly selected = computed(() => this.store.activeRequestId() === this.request().id);

  paddingLeft(): string {
    return `${8 + this.depth() * 12}px`;
  }

  onSelect(): void {
    this.store.openRequest(this.request().id);
  }
}
