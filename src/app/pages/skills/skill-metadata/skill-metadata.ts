import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SkillsStore } from '../skills.store';

@Component({
  selector: 'app-skill-metadata',
  imports: [RouterLink],
  templateUrl: './skill-metadata.html',
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
export class SkillMetadata {
  readonly store = inject(SkillsStore);

  selectRelated(id: string): void {
    this.store.selectSkill(id);
  }
}
