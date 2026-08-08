import { Component, computed, input, output } from '@angular/core';
import { ProjectModel, ProjectStatus } from '../projects.model';
import { ProjectSectionKey } from '../project-explorer/project-folder/project-folder.helpers';
import { ProjectOverview } from './sections/project-overview/project-overview';
import { ProjectMarkdownSection } from './sections/project-markdown-section/project-markdown-section';
import { ProjectApiExplorer } from './sections/project-api-explorer/project-api-explorer';
import { ProjectServicesSection } from './sections/project-services-section/project-services-section';

const STATUS_STYLES: Record<
  ProjectStatus,
  { label: string; badge: string; dot: string }
> = {
  production: {
    label: 'Production',
    badge: 'bg-tertiary/10 border-tertiary/30 text-tertiary',
    dot: 'bg-tertiary',
  },
  development: {
    label: 'Development',
    badge: 'bg-secondary/10 border-secondary/30 text-secondary',
    dot: 'bg-secondary',
  },
  archived: {
    label: 'Archived',
    badge: 'bg-on-surface-variant/10 border-on-surface-variant/30 text-on-surface-variant',
    dot: 'bg-on-surface-variant',
  },
};

@Component({
  selector: 'app-project-documentation',
  imports: [
    ProjectOverview,
    ProjectMarkdownSection,
    ProjectApiExplorer,
    ProjectServicesSection,
  ],
  templateUrl: './project-documentation.html',
  styleUrl: './project-documentation.css',
  host: {
    class: 'flex flex-1 min-w-0 flex-col',
  },
})
export class ProjectDocumentation {
  project = input.required<ProjectModel>();
  activeSection = input<ProjectSectionKey | null>(null);
  explorerOpen = input(true);
  metadataOpen = input(true);

  explorerToggle = output<void>();
  metadataToggle = output<void>();

  showOverviewHeader = computed(() => {
    const section = this.activeSection();
    return section === null || section === 'overview';
  });

  statusStyle = computed(() => STATUS_STYLES[this.project().status]);

  markdownSrc(section: 'architecture' | 'features' | 'infrastructure'): string {
    return `/docs/${this.project().slug}/${section}.md`;
  }

  getTitleSuffix(): string {
    const parts = this.project().name.split(' ');
    return parts[parts.length - 1] ?? '';
  }

  getTitleWords(): string {
    return this.project().name.split(' ').slice(0, -1).join(' ');
  }
}
