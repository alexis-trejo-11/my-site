import { Component, computed, input, output } from '@angular/core';
import { CollectionRequestItem } from '../../../api-tester.model';
import { requestBadge, requestDisplayName } from '../request-badge.helpers';

@Component({
  selector: 'app-request-item',
  imports: [],
  templateUrl: './request-item.html',
})
export class RequestItem {
  request = input.required<CollectionRequestItem>();
  depth = input(0);
  selected = input(false);
  manageable = input(false);

  select = output<void>();
  rename = output<void>();
  remove = output<void>();

  readonly badge = computed(() => requestBadge(this.request().request));
  readonly label = computed(() => requestDisplayName(this.request()));

  paddingLeft(): string {
    return `${8 + this.depth() * 12}px`;
  }

  onSelect(): void {
    this.select.emit();
  }
}
