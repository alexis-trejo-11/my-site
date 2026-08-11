import { Component, input, output } from '@angular/core';
import { NoteDoc } from '../../notes.model';

@Component({
  selector: 'app-note-leaf-item',
  imports: [],
  templateUrl: './note-leaf-item.html',
})
export class NoteLeafItem {
  note = input.required<NoteDoc>();
  depth = input(0);
  selected = input(false);

  select = output<void>();

  paddingLeft(): string {
    return `${8 + this.depth() * 12}px`;
  }

  onSelect(): void {
    this.select.emit();
  }
}
