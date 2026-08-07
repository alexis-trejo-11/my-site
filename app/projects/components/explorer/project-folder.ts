import type { ProjectType } from "../../types";
import type { Project } from "../../types";
import type { ContentTabKey } from "../../lib/project-tabs";
import type { ExplorerSectionKey } from "../../context/workspace-context";

export type ProjectSectionKey = ExplorerSectionKey;

export type ProjectSection = {
  key: ProjectSectionKey;
  label: string;
  icon: string;
};

const FOLDER_COLOR_BY_TYPE: Record<ProjectType, string> = {
  backend: "text-primary-container",
  frontend: "text-secondary",
  infra: "text-tertiary",
  fullstack: "text-error",
};

export function folderColorForType(type: ProjectType): string {
  return FOLDER_COLOR_BY_TYPE[type];
}

/** Content leaves only — services render as nested folders. */
export function sectionsForProject(project: Project): ProjectSection[] {
  const sections: ProjectSection[] = [];

  if (project.overview) {
    sections.push({
      key: "overview",
      label: "Overview",
      icon: "description",
    });
  }
  if (project.architecture) {
    sections.push({
      key: "architecture",
      label: "Architecture",
      icon: "architecture",
    });
  }
  if (project.stack && project.stack.length > 1) {
    sections.push({ key: "stack", label: "Stack", icon: "layers" });
  }
  if (project.infra) {
    sections.push({
      key: "infra",
      label: "Deployment",
      icon: "rocket_launch",
    });
  }
  if (project.apiExplorer != null) {
    sections.push({
      key: "apiExplorer",
      label: "API Explorer",
      icon: "api",
    });
  }

  return sections;
}

export type { ContentTabKey };
