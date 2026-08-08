import { Component, input } from '@angular/core';
import { ProjectOverviewData } from '../../../projects.model';

type FeatureAccent = 'primary' | 'secondary' | 'tertiary';

const TECH_ACCENTS = [
  { text: 'text-on-surface', bg: 'bg-on-surface' },
  { text: 'text-secondary', bg: 'bg-secondary' },
  { text: 'text-primary-container', bg: 'bg-primary-container' },
  { text: 'text-error', bg: 'bg-error' },
  { text: 'text-tertiary', bg: 'bg-tertiary' },
] as const;

const FEATURE_ACCENTS: FeatureAccent[] = ['primary', 'secondary', 'tertiary'];

@Component({
  selector: 'app-project-overview',
  imports: [],
  templateUrl: './project-overview.html',
})
export class ProjectOverview {
  overview = input<ProjectOverviewData | undefined>(undefined);

  techAccent(index: number) {
    return TECH_ACCENTS[index % TECH_ACCENTS.length];
  }

  techMask(icon: string): string {
    return `url(${icon}) center / contain no-repeat`;
  }

  featureAccent(index: number): FeatureAccent {
    return FEATURE_ACCENTS[index % FEATURE_ACCENTS.length];
  }
}
