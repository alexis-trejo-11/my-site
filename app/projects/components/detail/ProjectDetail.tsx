"use client";

import { useState } from "react";
import { useProjectWorkspace } from "../../context/workspace-context";
import {
  defaultTabKey,
  tabsForProject,
  type ContentTabKey,
} from "../../lib/project-tabs";
import { ArchitectureTab } from "./tabs/ArchitectureTab";
import { InfraTab } from "./tabs/InfraTab";
import { OverviewTab } from "./tabs/OverviewTab";
import { StackTab } from "./tabs/StackTab";

export function ProjectDetail() {
  const { activeProject, activeId, activeSection, selectSection } =
    useProjectWorkspace();
  const [shareLabel, setShareLabel] = useState("Share");

  if (!activeProject || !activeId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-surface text-on-surface-variant font-body-md">
        Select a project from the explorer.
      </div>
    );
  }

  const project = activeProject;
  const projectId = activeId;
  const tabs = tabsForProject(project);
  const activeTab: ContentTabKey | null =
    activeSection && tabs.some((t) => t.key === activeSection)
      ? (activeSection as ContentTabKey)
      : defaultTabKey(project);

  async function handleShare() {
    const url = new URL(window.location.href);
    url.searchParams.set("p", project.slug);
    try {
      await navigator.clipboard.writeText(url.toString());
      setShareLabel("Copied!");
      window.setTimeout(() => setShareLabel("Share"), 1500);
    } catch {
      setShareLabel("Share");
    }
  }

  function handleCloseTab() {
    const first = defaultTabKey(project);
    if (first) selectSection(projectId, first);
  }

  return (
    <div className="flex-1 flex flex-col bg-surface overflow-hidden min-w-0">
      <div className="border-b ide-border bg-surface-container/30 shrink-0">
        <div className="p-6 flex justify-between items-start pb-4 gap-4">
          <div className="min-w-0">
            <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-2">
              {project.name}
            </h1>
            {project.tagline ? (
              <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl">
                {project.tagline}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={handleShare}
            className="shrink-0 px-4 py-1.5 rounded-full border border-primary-container/30 text-primary-container font-label-md text-label-md hover:bg-primary-container/10 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">share</span>
            {shareLabel}
          </button>
        </div>

        {tabs.length > 0 ? (
          <div className="flex px-4 gap-1 overflow-x-auto font-code-sm text-code-sm">
            {tabs.map((tab) => {
              const isActive = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => selectSection(projectId, tab.key)}
                  className={`px-4 py-2 border-t-2 flex items-center gap-2 cursor-pointer transition-colors shrink-0 ${
                    isActive
                      ? "border-primary-container bg-surface text-on-surface"
                      : "border-transparent bg-surface-container-lowest text-on-surface-variant hover:bg-surface-variant/30"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[14px] ${
                      isActive ? "text-primary-container" : ""
                    }`}
                  >
                    {tab.icon}
                  </span>
                  {tab.label}
                  {isActive ? (
                    <span
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseTab();
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.stopPropagation();
                          handleCloseTab();
                        }
                      }}
                      className="material-symbols-outlined text-[14px] ml-2 text-on-surface-variant hover:text-on-surface"
                    >
                      close
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="flex-1 overflow-y-auto p-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          {activeTab === "overview" ? <OverviewTab project={project} /> : null}
          {activeTab === "architecture" ? (
            <ArchitectureTab project={project} />
          ) : null}
          {activeTab === "infra" ? <InfraTab project={project} /> : null}
          {activeTab === "stack" ? <StackTab project={project} /> : null}
          {!activeTab ? (
            <p className="text-on-surface-variant font-body-md">
              This project has no detail sections yet.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
