import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from '../../shared/header/header';
import { ProjectExplorer } from './project-explorer/project-explorer';
import { ProjectMetadata } from './project-metadata/project-metadata';
import { ProjectDocumentation } from './project-documentation/project-documentation';
import { ProjectModel } from './projects.model';
import { ProjectsService } from './products.service';
import { ProjectSectionKey } from './project-explorer/project-folder/project-folder.helpers';

@Component({
  selector: 'app-projects',
  imports: [Header, ProjectExplorer, ProjectDocumentation, ProjectMetadata],
  templateUrl: './projects.html',
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      min-height: 100%;
      width: 100%;
      overflow: hidden;
    }
  `,
})
export class Projects implements OnInit {
  projectService = inject(ProjectsService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  activeProject = signal<ProjectModel | null>(null);
  activeSection = signal<ProjectSectionKey | null>(null);
  projects = signal<ProjectModel[]>([]);
  explorerOpen = signal(true);
  metadataOpen = signal(true);

  gridClass = computed(() => {
    const explorer = this.explorerOpen();
    const metadata = this.metadataOpen();

    if (explorer && metadata) {
      return 'grid-cols-[280px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)_300px]';
    }
    if (explorer) {
      return 'grid-cols-[280px_minmax(0,1fr)]';
    }
    if (metadata) {
      return 'grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_300px]';
    }
    return 'grid-cols-[minmax(0,1fr)]';
  });

  selectProject(slug: string) {
    const project = this.findBySlug(this.projects(), slug);
    this.activeProject.set(project);
    this.activeSection.set(this.defaultSection(project));
    this.router.navigate(['/projects', slug], { replaceUrl: true });
  }

  selectSection(event: { slug: string; section: ProjectSectionKey }) {
    const project = this.findBySlug(this.projects(), event.slug);
    this.activeProject.set(project);
    this.activeSection.set(event.section);
    this.router.navigate(['/projects', event.slug, event.section], { replaceUrl: true });
  }

  toggleExplorer(): void {
    this.explorerOpen.update((open) => !open);
  }

  toggleMetadata(): void {
    this.metadataOpen.update((open) => !open);
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects.set(projects);
      const slug = this.route.snapshot.paramMap.get('slug');
      const section = this.route.snapshot.paramMap.get('section') as ProjectSectionKey | null;
      if (slug) {
        const project = this.findBySlug(projects, slug);
        this.activeProject.set(project);
        this.activeSection.set(section ?? this.defaultSection(project));
      } else if (!this.activeProject() && projects.length > 0) {
        this.selectProject(projects[0].slug);
      }
    });
  }

  private findBySlug(projects: ProjectModel[], slug: string): ProjectModel | null {
    for (const project of projects) {
      if (project.slug === slug) return project;
      const nested = project.services ? this.findBySlug(project.services, slug) : null;
      if (nested) return nested;
    }
    return null;
  }

  private defaultSection(project: ProjectModel | null): ProjectSectionKey | null {
    if (!project) return null;
    const docs = project.docs;
    if (docs?.overview) return 'overview';
    if (docs?.architecture) return 'architecture';
    if (docs?.features) return 'features';
    if (docs?.infrastructure) return 'infrastructure';
    return null;
  }
}
