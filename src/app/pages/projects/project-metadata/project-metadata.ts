import { Component, input } from '@angular/core';
import { ProjectMetadataModel } from '../projects.model';

@Component({
  selector: 'app-project-metadata',
  imports: [],
  templateUrl: './project-metadata.html',
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
export class ProjectMetadata {
  metadata = input<ProjectMetadataModel>();

  getLastCommitTime(date: Date | undefined): string {
    if (!date) {
      return 'N/A';
    }
    const diffInMs = Date.now() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    if (diffInDays <= 0) {
      const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
      if (diffInHours <= 0) {
        const diffInMinutes = Math.max(1, Math.floor(diffInMs / (1000 * 60)));
        return `${diffInMinutes}m ago`;
      }
      return `${diffInHours}h ago`;
    }
    return `${diffInDays}d ago`;
  }

  shortRepo(url: string | undefined): string {
    if (!url) return 'N/A';
    return url.replace(/^https?:\/\/(www\.)?github\.com\//, 'github.com/');
  }
}
