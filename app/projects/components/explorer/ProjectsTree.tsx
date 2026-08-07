"use client";

import { useMemo, useState } from "react";
import { useProjectWorkspace } from "../../context/workspace-context";
import { ProjectFolder } from "./ProjectFolder";

export function ProjectsTree() {
  const { projects, activeId, activeSection, selectSection, selectProject } =
    useProjectWorkspace();
  const [filter, setFilter] = useState("");
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        p.services?.some(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.slug.toLowerCase().includes(q),
        ),
    );
  }, [projects, filter]);

  function toggleOpen(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <>
      <div className="p-4 border-b ide-border">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
            search
          </span>
          <input
            className="w-full bg-surface-container border ide-border rounded px-9 py-1.5 text-sm font-code-sm focus:outline-none focus:border-primary-container/50 transition-colors"
            placeholder="Filter projects..."
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2 font-code-sm text-code-sm">
        {filtered.map((project) => (
          <ProjectFolder
            key={project.id}
            project={project}
            open={openIds.has(project.id)}
            onToggle={() => toggleOpen(project.id)}
            onActivate={() => selectProject(project.id)}
            isActiveFolder={activeId === project.id}
            activeSection={activeId === project.id ? activeSection : null}
            onSelectSection={selectSection}
            onActivateProject={selectProject}
            openIds={openIds}
            onToggleId={toggleOpen}
            activeId={activeId}
          />
        ))}
      </div>
    </>
  );
}
