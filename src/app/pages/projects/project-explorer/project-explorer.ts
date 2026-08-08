import { Component, input, output } from '@angular/core';
import { ProjectModel } from '../projects.model';
import { ProjectTree } from './project-tree/project-tree';
import { ProjectSectionKey } from './project-folder/project-folder.helpers';

@Component({
  selector: 'app-project-explorer',
  imports: [ProjectTree],
  templateUrl: './project-explorer.html',
  styleUrl: './project-explorer.css',
})
export class ProjectExplorer {
  projects = input<ProjectModel[]>([]);
  activeSlug = input<string | null>(null);
  activeSection = input<ProjectSectionKey | null>(null);

  projectSelect = output<string>();
  sectionSelect = output<{ slug: string; section: ProjectSectionKey }>();
}
