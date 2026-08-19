import {
  Component,
  computed,
  inject,
  input,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { SkillsStore } from '../skills.store';

@Component({
  selector: 'app-skill-documentation',
  imports: [MarkdownComponent, RouterLink],
  templateUrl: './skill-documentation.html',
  encapsulation: ViewEncapsulation.None,
  styles: `
    app-skill-documentation {
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 0;
      height: 100%;
    }
  `,
})
export class SkillDocumentation {
  readonly store = inject(SkillsStore);

  explorerOpen = input(true);
  metadataOpen = input(true);

  explorerToggle = output<void>();
  metadataToggle = output<void>();

  readonly skill = computed(() => this.store.activeSkill());
  readonly category = computed(() => this.store.activeCategory());
}
