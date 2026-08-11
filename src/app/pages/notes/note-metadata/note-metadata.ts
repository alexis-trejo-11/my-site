import { Component, inject } from '@angular/core';
import { NotesStore } from '../notes.store';

@Component({
  selector: 'app-note-metadata',
  imports: [],
  templateUrl: './note-metadata.html',
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
export class NoteMetadata {
  readonly store = inject(NotesStore);

  selectNote(id: string): void {
    this.store.selectNote(id);
  }
}
