import { Component, inject } from '@angular/core';
import { ExplorerTree } from '../../../shared/explorer-tree';
import { NotesStore } from '../notes.store';
import { NoteLeafItem } from './note-leaf-item/note-leaf-item';

@Component({
  selector: 'app-note-explorer',
  imports: [ExplorerTree, NoteLeafItem],
  templateUrl: './note-explorer.html',
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class NoteExplorer {
  readonly store = inject(NotesStore);

  onFilterInput(event: Event): void {
    this.store.setFilter((event.target as HTMLInputElement).value);
  }

  onToggleId(id: string): void {
    this.store.toggleExpanded(id);
  }

  onSelectLeaf(id: string): void {
    this.store.selectNote(id);
  }
}
