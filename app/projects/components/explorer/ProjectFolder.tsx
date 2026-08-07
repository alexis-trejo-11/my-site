"use client";

import type { Project } from "../../types";
import {
  folderColorForType,
  sectionsForProject,
  type ProjectSectionKey,
} from "./project-folder";

type ProjectFolderProps = {
  project: Project;
  open: boolean;
  onToggle: () => void;
  onActivate: () => void;
  isActiveFolder: boolean;
  activeSection: ProjectSectionKey | null;
  onSelectSection: (projectId: string, section: ProjectSectionKey) => void;
  onActivateProject: (projectId: string) => void;
  openIds: Set<string>;
  onToggleId: (id: string) => void;
  activeId: string | null;
  depth?: number;
};

export function ProjectFolder({
  project,
  open,
  onToggle,
  onActivate,
  isActiveFolder,
  activeSection,
  onSelectSection,
  onActivateProject,
  openIds,
  onToggleId,
  activeId,
  depth = 0,
}: ProjectFolderProps) {
  const sections = sectionsForProject(project);
  const folderColor = folderColorForType(project.type);
  const nested = project.services ?? [];

  return (
    <div className="mb-1">
      <button
        type="button"
        onClick={() => {
          onActivate();
          onToggle();
        }}
        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer transition-colors text-left ${
          isActiveFolder
            ? "bg-surface-variant/30 text-on-surface"
            : open
              ? "bg-surface-variant/20 text-on-surface"
              : "text-on-surface-variant hover:bg-surface-variant/50"
        }`}
        style={depth > 0 ? { paddingLeft: `${8 + depth * 12}px` } : undefined}
      >
        <span
          className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        >
          chevron_right
        </span>
        <span className={`material-symbols-outlined text-[16px] ${folderColor}`}>
          {open ? "folder_open" : "folder"}
        </span>
        <span className={isActiveFolder || open ? "font-medium" : undefined}>
          {project.name}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-200 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          {(sections.length > 0 || nested.length > 0) && (
            <div
              className="mt-1 border-l border-white/5 pl-2 space-y-1"
              style={{ marginLeft: `${24 + depth * 12}px` }}
            >
              {sections.map((section) => {
                const isActive =
                  isActiveFolder && activeSection === section.key;
                return (
                  <button
                    key={section.key}
                    type="button"
                    onClick={() => onSelectSection(project.id, section.key)}
                    className={`w-full flex items-center gap-2 px-2 py-1 rounded cursor-pointer text-left transition-colors ${
                      isActive
                        ? "bg-primary-container/10 text-primary-container border-l-2 border-primary-container -ml-[9px] pl-[9px]"
                        : "hover:bg-surface-variant/50 text-on-surface-variant"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {section.icon}
                    </span>
                    <span>{section.label}</span>
                  </button>
                );
              })}

              {nested.map((child) => (
                <ProjectFolder
                  key={child.id}
                  project={child}
                  open={openIds.has(child.id)}
                  onToggle={() => onToggleId(child.id)}
                  onActivate={() => onActivateProject(child.id)}
                  isActiveFolder={activeId === child.id}
                  activeSection={
                    activeId === child.id ? activeSection : null
                  }
                  onSelectSection={onSelectSection}
                  onActivateProject={onActivateProject}
                  openIds={openIds}
                  onToggleId={onToggleId}
                  activeId={activeId}
                  depth={depth + 1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
