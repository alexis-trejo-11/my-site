import { Component, input, output } from '@angular/core';
import { ProjectModel } from '../../projects.model';
import {
  folderColorForType,
  ProjectSectionKey,
  sectionsForProject,
} from './project-folder.helpers';

@Component({
  selector: 'app-project-folder',
  imports: [ProjectFolder],
  templateUrl: './project-folder.html',
})
export class ProjectFolder {
  project = input.required<ProjectModel>();
  open = input(false);
  isActiveFolder = input(false);
  activeSection = input<ProjectSectionKey | null>(null);
  openIds = input<ReadonlySet<string>>(new Set());
  activeSlug = input<string | null>(null);
  depth = input(0);

  toggle = output<void>();
  activate = output<void>();
  selectSection = output<{ slug: string; section: ProjectSectionKey }>();
  activateProject = output<string>();
  toggleId = output<string>();

  sectionsFor = sectionsForProject;
  folderColorFor = folderColorForType;

  onFolderClick() {
    this.activate.emit();
    this.toggle.emit();
  }

  onSectionClick(section: ProjectSectionKey) {
    this.selectSection.emit({ slug: this.project().slug, section });
  }

  onChildActivate(slug: string) {
    this.activateProject.emit(slug);
  }

  onChildToggle(slug: string) {
    this.toggleId.emit(slug);
  }

  onChildSelectSection(event: { slug: string; section: ProjectSectionKey }) {
    this.selectSection.emit(event);
  }

  isOpen(slug: string): boolean {
    return this.openIds().has(slug);
  }

  paddingLeft(): string | null {
    const depth = this.depth();
    return depth > 0 ? `${8 + depth * 12}px` : null;
  }

  nestedMarginLeft(): string {
    return `${24 + this.depth() * 12}px`;
  }
}
