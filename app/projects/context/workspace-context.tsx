"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultTabKey,
  findProjectById,
  findProjectBySlug,
  type ContentTabKey,
} from "../lib/project-tabs";
import type { Project } from "../types";

export type ExplorerSectionKey =
  | ContentTabKey
  | "apiExplorer";

type WorkspaceContextValue = {
  projects: Project[];
  activeId: string | null;
  activeProject: Project | null;
  activeSection: ExplorerSectionKey | null;
  selectProject: (id: string) => void;
  selectSection: (id: string, section: ExplorerSectionKey) => void;
};

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

function initialActiveId(
  projects: Project[],
  initialSlug?: string | null,
): string | null {
  if (initialSlug) {
    const bySlug = findProjectBySlug(projects, initialSlug);
    if (bySlug) return bySlug.id;
  }
  return projects[0]?.id ?? null;
}

function initialSection(
  projects: Project[],
  activeId: string | null,
): ExplorerSectionKey | null {
  if (!activeId) return null;
  const project = findProjectById(projects, activeId);
  if (!project) return null;
  return defaultTabKey(project);
}

export function ProjectWorkspaceProvider({
  projects,
  initialSlug,
  children,
}: {
  projects: Project[];
  initialSlug?: string | null;
  children: ReactNode;
}) {
  const [activeId, setActiveId] = useState<string | null>(() =>
    initialActiveId(projects, initialSlug),
  );
  const [activeSection, setActiveSection] = useState<ExplorerSectionKey | null>(
    () => initialSection(projects, initialActiveId(projects, initialSlug)),
  );

  const activeProject = useMemo(
    () => (activeId ? (findProjectById(projects, activeId) ?? null) : null),
    [projects, activeId],
  );

  const selectProject = useCallback(
    (id: string) => {
      setActiveId(id);
      const project = findProjectById(projects, id);
      setActiveSection(project ? defaultTabKey(project) : null);
      if (typeof window !== "undefined" && project) {
        const url = new URL(window.location.href);
        url.searchParams.set("p", project.slug);
        window.history.replaceState({}, "", url.toString());
      }
    },
    [projects],
  );

  const selectSection = useCallback(
    (id: string, section: ExplorerSectionKey) => {
      setActiveId(id);
      const project = findProjectById(projects, id);
      if (section === "apiExplorer") {
        setActiveSection(project ? defaultTabKey(project) : null);
      } else {
        setActiveSection(section);
      }
      if (typeof window !== "undefined" && project) {
        const url = new URL(window.location.href);
        url.searchParams.set("p", project.slug);
        window.history.replaceState({}, "", url.toString());
      }
    },
    [projects],
  );

  const value = useMemo(
    () => ({
      projects,
      activeId,
      activeProject,
      activeSection,
      selectProject,
      selectSection,
    }),
    [
      projects,
      activeId,
      activeProject,
      activeSection,
      selectProject,
      selectSection,
    ],
  );

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useProjectWorkspace() {
  const ctx = useContext(WorkspaceContext);
  if (!ctx) {
    throw new Error(
      "useProjectWorkspace must be used within ProjectWorkspaceProvider",
    );
  }
  return ctx;
}
