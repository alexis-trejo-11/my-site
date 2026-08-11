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

    .skill-markdown {
      color: var(--color-on-surface-variant);
      font-family: var(--font-body-md);
      line-height: 1.7;
    }

    .skill-markdown h1,
    .skill-markdown h2,
    .skill-markdown h3 {
      font-family: var(--font-headline-md);
      color: var(--color-on-surface);
      margin-top: 1.5em;
      margin-bottom: 0.5em;
    }

    .skill-markdown h1 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-top: 0;
    }

    .skill-markdown h2 {
      font-size: 1.25rem;
      font-weight: 600;
    }

    .skill-markdown p {
      margin-bottom: 1em;
    }

    .skill-markdown strong {
      color: var(--color-on-surface);
      font-weight: 600;
    }

    .skill-markdown a {
      color: var(--color-primary-container);
    }

    .skill-markdown code:not(pre code) {
      font-family: var(--font-code-sm);
      font-size: 0.85em;
      background: color-mix(in srgb, var(--color-surface-variant) 50%, transparent);
      color: var(--color-primary);
      padding: 0.15em 0.4em;
      border-radius: 0.25rem;
      border: 1px solid color-mix(in srgb, white 5%, transparent);
    }

    .skill-markdown ul,
    .skill-markdown ol {
      padding-left: 1.25rem;
      margin-bottom: 1em;
    }

    .skill-markdown li {
      margin-bottom: 0.35em;
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
