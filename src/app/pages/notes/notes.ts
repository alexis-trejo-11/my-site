import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from '../../shared/header/header';
import { NoteDocumentation } from './note-documentation/note-documentation';
import { NoteExplorer } from './note-explorer/note-explorer';
import { NoteMetadata } from './note-metadata/note-metadata';
import { NotesService } from './notes.service';
import { NotesStore } from './notes.store';

@Component({
  selector: 'app-notes',
  imports: [Header, NoteExplorer, NoteDocumentation, NoteMetadata],
  providers: [NotesStore],
  templateUrl: './notes.html',
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
export class Notes implements OnInit {
  private readonly notesService = inject(NotesService);
  private readonly store = inject(NotesStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  constructor() {
    effect(() => {
      const id = this.store.activeNoteId();
      if (id) {
        this.router.navigate(['/notes', id], { replaceUrl: true });
      }
    });
  }

  explorerOpen = signal(true);
  metadataOpen = signal(true);

  gridClass = computed(() => {
    const explorer = this.explorerOpen();
    const metadata = this.metadataOpen();

    if (explorer && metadata) {
      return 'grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)_300px]';
    }
    if (explorer) {
      return 'grid-cols-[280px_minmax(0,1fr)]';
    }
    if (metadata) {
      return 'grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_300px]';
    }
    return 'grid-cols-[minmax(0,1fr)]';
  });

  toggleExplorer(): void {
    this.explorerOpen.update((open) => !open);
  }

  toggleMetadata(): void {
    this.metadataOpen.update((open) => !open);
  }

  ngOnInit(): void {
    this.notesService.getVault().subscribe((vault) => {
      this.store.setVault(vault);
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.store.selectNote(id);
      }
    });
  }
}
