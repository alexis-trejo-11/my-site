import { Component, input } from '@angular/core';
import { ProjectModel } from '../../../projects.model';

@Component({
  selector: 'app-project-api-explorer',
  imports: [],
  templateUrl: './project-api-explorer.html',
})
export class ProjectApiExplorer {
  project = input.required<ProjectModel>();
}
