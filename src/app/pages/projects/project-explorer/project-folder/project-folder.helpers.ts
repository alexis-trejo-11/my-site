import { ProjectModel, ProjectType } from '../../projects.model';

export type ProjectSectionKey =
  | 'overview'
  | 'architecture'
  | 'features'
  | 'infrastructure'
  | 'apiExplorer'
  | 'services';

export type ProjectSection = {
  key: ProjectSectionKey;
  label: string;
  icon: string;
};

const FOLDER_COLOR_BY_TYPE: Record<ProjectType, string> = {
  backend: 'text-primary-container',
  frontend: 'text-secondary',
  infra: 'text-tertiary',
  fullstack: 'text-error',
};

export function folderColorForType(type: ProjectType): string {
  return FOLDER_COLOR_BY_TYPE[type];
}

/** Returns available content section leaves for a project. Services render as nested folders. */
export function sectionsForProject(project: ProjectModel): ProjectSection[] {
  const sections: ProjectSection[] = [];
  const docs = project.docs;

  if (docs?.overview) {
    sections.push({ key: 'overview', label: 'Overview', icon: 'description' });
  }
  if (docs?.architecture) {
    sections.push({ key: 'architecture', label: 'Architecture', icon: 'architecture' });
  }
  if (docs?.features) {
    sections.push({ key: 'features', label: 'Features', icon: 'layers' });
  }
  if (docs?.infrastructure) {
    sections.push({ key: 'infrastructure', label: 'Deployment', icon: 'rocket_launch' });
  }
  if (docs?.apiExplorer) {
    sections.push({ key: 'apiExplorer', label: 'API Explorer', icon: 'api' });
  }
  if (docs?.services && (project.services?.length ?? 0) > 0) {
    sections.push({ key: 'services', label: 'Services', icon: 'account_tree' });
  }

  return sections;
}
