import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NOTE_VAULT } from './notes.data';
import { NoteNode } from './notes.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  getVault(): Observable<NoteNode[]> {
    return of(NOTE_VAULT);
  }
}
