import type { Project } from "../types";

export type ContentTabKey = "overview" | "architecture" | "infra" | "stack";

export type ContentTab = {
  key: ContentTabKey;
  label: string;
  icon: string;
};

export function tabsForProject(project: Project): ContentTab[] {
  const tabs: ContentTab[] = [];

  if (project.overview) {
    tabs.push({
      key: "overview",
      label: "Overview.md",
      icon: "description",
    });
  }
  if (project.architecture) {
    tabs.push({
      key: "architecture",
      label: "Architecture.drawio",
      icon: "architecture",
    });
  }
  if (project.infra) {
    tabs.push({
      key: "infra",
      label: "deploy.yml",
      icon: "rocket_launch",
    });
  }
  if (project.stack && project.stack.length > 1) {
    tabs.push({
      key: "stack",
      label: "stack.json",
      icon: "data_object",
    });
  }

  return tabs;
}

export function defaultTabKey(project: Project): ContentTabKey | null {
  return tabsForProject(project)[0]?.key ?? null;
}

/** Flatten top-level + nested services for lookup by id or slug. */
export function flattenProjects(projects: Project[]): Project[] {
  const result: Project[] = [];

  function walk(list: Project[]) {
    for (const project of list) {
      result.push(project);
      if (project.services?.length) walk(project.services);
    }
  }

  walk(projects);
  return result;
}

export function findProjectById(
  projects: Project[],
  id: string,
): Project | undefined {
  return flattenProjects(projects).find((p) => p.id === id);
}

export function findProjectBySlug(
  projects: Project[],
  slug: string,
): Project | undefined {
  return flattenProjects(projects).find((p) => p.slug === slug);
}
