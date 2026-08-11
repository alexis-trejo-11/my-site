import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SKILL_CATEGORIES } from './skills.data';
import { SkillCategory } from './skills.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  getCategories(): Observable<SkillCategory[]> {
    return of(SKILL_CATEGORIES);
  }
}
