import { Component, computed, inject, signal } from '@angular/core';
import { ApiTesterStore } from '../../api-tester.store';

type ResponseSection = 'BODY' | 'HEADERS';

@Component({
  selector: 'app-response-panel',
  imports: [],
  templateUrl: './response-panel.html',
  styles: `
    :host {
      display: none;
    }

    @media (min-width: 1024px) {
      :host {
        display: contents;
      }
    }
  `,
})
export class ResponsePanel {
  readonly store = inject(ApiTesterStore);
  readonly activeSection = signal<ResponseSection>('BODY');
  readonly execution = computed(() => this.store.activeExecution());
  readonly activeRequestType = computed(() => this.store.activeRequest()?.request.type ?? null);
  readonly response = computed(() => {
    const execution = this.execution();
    return execution.status === 'SUCCESS' ? execution.response : null;
  });
  readonly errorMessage = computed(() => {
    const execution = this.execution();
    return execution.status === 'ERROR' ? execution.error : '';
  });
  readonly graphQLErrors = computed(() => {
    const response = this.response();
    return response?.protocol === 'GRAPHQL' ? response.graphQLErrors : [];
  });

  readonly formattedBody = computed(() => {
    const execution = this.execution();
    if (execution.status !== 'SUCCESS') {
      return '';
    }

    try {
      return JSON.stringify(JSON.parse(execution.response.body), null, 2);
    } catch {
      return execution.response.body;
    }
  });

  readonly bodyFormat = computed(() => {
    const execution = this.execution();
    if (execution.status !== 'SUCCESS') {
      return 'TEXT';
    }

    try {
      JSON.parse(execution.response.body);
      return 'JSON';
    } catch {
      return 'TEXT';
    }
  });

  selectSection(section: ResponseSection): void {
    this.activeSection.set(section);
  }

  statusClass(status: number, hasGraphQLErrors = false): string {
    if (hasGraphQLErrors) {
      return 'text-error';
    }
    if (status >= 200 && status < 300) {
      return 'text-tertiary';
    }
    if (status >= 400) {
      return 'text-error';
    }
    return 'text-secondary';
  }

  formatDuration(durationMs: number): string {
    return durationMs < 1000
      ? `${Math.round(durationMs)} ms`
      : `${(durationMs / 1000).toFixed(2)} s`;
  }

  formatBytes(bytes: number): string {
    if (bytes < 1024) {
      return `${bytes} B`;
    }
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  async copyBody(): Promise<void> {
    const body = this.formattedBody();
    if (body && navigator.clipboard) {
      await navigator.clipboard.writeText(body);
    }
  }
}
