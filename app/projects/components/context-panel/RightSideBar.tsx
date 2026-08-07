"use client";

import { useProjectWorkspace } from "../../context/workspace-context";
import { linkIcon, linkLabel } from "../../lib/link-defaults";

const TAG_COLORS = [
  "text-on-surface",
  "text-secondary",
  "text-primary-container",
  "text-error",
  "text-tertiary",
];

export function RightSideBar() {
  const { activeProject } = useProjectWorkspace();

  if (!activeProject) {
    return (
      <aside className="w-[300px] border-l ide-border bg-surface-container-lowest shrink-0 hidden lg:block" />
    );
  }

  const showTags = activeProject.tags.length > 0;
  const showLinks = (activeProject.links?.length ?? 0) > 0;
  const showChanges = (activeProject.recentChanges?.length ?? 0) > 0;

  if (!showTags && !showLinks && !showChanges) {
    return (
      <aside className="w-[300px] border-l ide-border bg-surface-container-lowest shrink-0 hidden lg:block" />
    );
  }

  return (
    <aside className="w-[300px] border-l ide-border bg-surface-container-lowest flex flex-col shrink-0 overflow-y-auto hidden lg:flex">
      {showTags ? (
        <div className="p-6 border-b border-white/5">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">layers</span>
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {activeProject.tags.map((tag, i) => (
              <span
                key={tag}
                className={`px-2.5 py-1 bg-surface-variant rounded text-code-sm font-code-sm border border-white/5 ${TAG_COLORS[i % TAG_COLORS.length]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {showLinks ? (
        <div className="p-6 border-b border-white/5">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">link</span>
            Resources
          </h3>
          <div className="space-y-3 font-body-md text-sm">
            {activeProject.links!.map((link) => (
              <a
                key={`${link.type}-${link.url}`}
                className="flex items-center justify-between text-on-surface hover:text-primary-container transition-colors group"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    {linkIcon(link)}
                  </span>
                  {linkLabel(link)}
                </span>
                <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_outward
                </span>
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {showChanges ? (
        <div className="p-6">
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">history</span>
            Recent Changes
          </h3>
          <div className="space-y-4">
            {activeProject.recentChanges!.map((change, index) => {
              const isLast =
                index === activeProject.recentChanges!.length - 1;
              return (
                <div key={`${change.title}-${change.date}`} className="flex gap-3 relative">
                  {!isLast ? (
                    <div className="absolute left-4 top-8 bottom-[-16px] w-px border-l border-dashed border-white/10" />
                  ) : null}
                  <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center z-10 shrink-0 border border-white/5">
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                      commit
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-on-surface">
                      {change.title}
                    </p>
                    <p className="text-xs text-on-surface-variant font-code-sm mt-1">
                      {change.date}
                      {change.tag ? ` • ${change.tag}` : ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </aside>
  );
}
