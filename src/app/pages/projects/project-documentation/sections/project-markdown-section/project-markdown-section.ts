import { Component, input, ViewEncapsulation } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-project-markdown-section',
  imports: [MarkdownComponent],
  templateUrl: './project-markdown-section.html',
  styleUrl: './project-markdown-section.css',
  // None so that prose + shiki styles are not scoped and apply to rendered markdown HTML
  encapsulation: ViewEncapsulation.None,
})
export class ProjectMarkdownSection {
  /** URL to the .md file, e.g. /docs/drugstore-platform/architecture.md */
  src = input.required<string>();
}
