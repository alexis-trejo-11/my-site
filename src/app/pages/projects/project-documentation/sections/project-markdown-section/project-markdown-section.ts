import { Component, input, ViewEncapsulation } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-project-markdown-section',
  imports: [MarkdownComponent],
  templateUrl: './project-markdown-section.html',
  styles: `
    app-project-markdown-section {
      display: block;
    }
  `,
  // None so shiki styles from .md-prose apply to rendered markdown HTML
  encapsulation: ViewEncapsulation.None,
})
export class ProjectMarkdownSection {
  /** URL to the .md file, e.g. /docs/drugstore-platform/architecture.md */
  src = input.required<string>();
}
