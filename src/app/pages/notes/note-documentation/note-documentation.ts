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
import { WIKI_NOTE_ID_ATTR } from '../wiki-links';

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

  onMarkdownClick(event: MouseEvent): void {
    if (event.defaultPrevented || event.button !== 0) {
      return;
    }
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const anchor = target.closest('a.wiki-link');
    if (!(anchor instanceof HTMLAnchorElement)) {
      return;
    }

    const id = anchor.getAttribute(WIKI_NOTE_ID_ATTR);
    if (!id) {
      return;
    }

    event.preventDefault();
    this.store.selectNote(id);
  }
}
