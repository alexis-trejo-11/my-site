import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProjectModel } from './projects.model';
import { PROJECTS } from './data';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  getProjects(): Observable<ProjectModel[]> {
    return of(PROJECTS);
  }
}
