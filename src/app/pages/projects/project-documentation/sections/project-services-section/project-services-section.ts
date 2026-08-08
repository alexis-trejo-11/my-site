import { Component, input } from '@angular/core';
import { ProjectModel } from '../../../projects.model';

@Component({
  selector: 'app-project-services-section',
  imports: [],
  templateUrl: './project-services-section.html',
})
export class ProjectServicesSection {
  services = input<ProjectModel[]>([]);
}
