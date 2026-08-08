import { Component, computed, input, output, signal } from '@angular/core';
import { ProjectModel } from '../../projects.model';
import { ProjectFolder } from '../project-folder/project-folder';
import { ProjectSectionKey } from '../project-folder/project-folder.helpers';

@Component({
  selector: 'app-project-tree',
  imports: [ProjectFolder],
  templateUrl: './project-tree.html',
  styleUrl: './project-tree.css',
})
export class ProjectTree {
  projects = input<ProjectModel[]>([]);
  activeSlug = input<string | null>(null);
  activeSection = input<ProjectSectionKey | null>(null);

  projectSelect = output<string>();
  sectionSelect = output<{ slug: string; section: ProjectSectionKey }>();

  filter = signal('');
  openIds = signal<Set<string>>(new Set());

  filtered = computed(() => {
    const q = this.filter().trim().toLowerCase();
    const projects = this.projects();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        p.services?.some(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.slug.toLowerCase().includes(q),
        ),
    );
  });

  onFilterInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filter.set(value);
  }

  toggleOpen(id: string) {
    this.openIds.update((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  selectProject(slug: string) {
    this.projectSelect.emit(slug);
  }

  selectSection(event: { slug: string; section: ProjectSectionKey }) {
    this.sectionSelect.emit(event);
  }

  isOpen(slug: string): boolean {
    return this.openIds().has(slug);
  }
}
