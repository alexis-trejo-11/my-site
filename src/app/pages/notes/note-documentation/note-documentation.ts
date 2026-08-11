import {
  Component,
  computed,
  inject,
  input,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';
import { NotesStore } from '../notes.store';

@Component({
  selector: 'app-note-documentation',
  imports: [MarkdownComponent],
  templateUrl: './note-documentation.html',
  encapsulation: ViewEncapsulation.None,
  styles: `
    app-note-documentation {
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 0;
      height: 100%;
    }

    .note-markdown {
      color: var(--color-on-surface-variant);
      font-family: var(--font-body-md);
      line-height: 1.7;
    }

    .note-markdown h1,
    .note-markdown h2,
    .note-markdown h3 {
      font-family: var(--font-headline-md);
      color: var(--color-on-surface);
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }

    .note-markdown h1 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-top: 0;
    }

    .note-markdown h2 {
      font-size: 1.25rem;
      font-weight: 600;
    }

    .note-markdown p {
      margin-bottom: 1em;
    }

    .note-markdown strong {
      color: var(--color-on-surface);
      font-weight: 600;
    }

    .note-markdown a {
      color: var(--color-primary-container);
    }

    .note-markdown code:not(pre code) {
      font-family: var(--font-code-sm);
      font-size: 0.85em;
      background: color-mix(in srgb, var(--color-surface-variant) 50%, transparent);
      color: var(--color-primary);
      padding: 0.15em 0.4em;
      border-radius: 0.25rem;
      border: 1px solid color-mix(in srgb, white 5%, transparent);
    }

    .note-markdown ul,
    .note-markdown ol {
      padding-left: 1.25rem;
      margin-bottom: 1em;
    }

    .note-markdown li {
      margin-bottom: 0.35em;
    }

    .note-markdown pre {
      margin-bottom: 1rem;
      border-radius: 0.5rem;
      overflow-x: auto;
    }
  `,
})
export class NoteDocumentation {
  readonly store = inject(NotesStore);

  explorerOpen = input(true);
  metadataOpen = input(true);

  explorerToggle = output<void>();
  metadataToggle = output<void>();

  readonly note = computed(() => this.store.activeNote());
  readonly breadcrumbs = computed(() => this.store.breadcrumbs());

  readonly folderCrumbs = computed(() =>
    this.breadcrumbs().filter((crumb) => crumb.type === 'folder'),
  );
}
