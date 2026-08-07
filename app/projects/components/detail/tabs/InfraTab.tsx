"use client";

import { useState } from "react";
import type { PipelineStep, Project } from "../../../types";
import { CodeSnippetLink } from "../CodeSnippetLink";
import { linkIcon, linkLabel } from "../../../lib/link-defaults";

export function InfraTab({ project }: { project: Project }) {
  const infra = project.infra;
  if (!infra) return null;

  return (
    <div className="space-y-8">
      {infra.pipeline && infra.pipeline.length > 0 ? (
        <section>
          <h2 className="font-headline-md text-headline-md font-semibold text-primary-fixed-dim mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">rocket_launch</span>
            Pipeline
          </h2>
          <div className="flex flex-wrap items-stretch gap-2">
            {infra.pipeline.map((step, index) => (
              <div key={step.step} className="flex items-stretch gap-2">
                <PipelineStepCard step={step} />
                {index < infra.pipeline!.length - 1 ? (
                  <span className="material-symbols-outlined text-on-surface-variant self-center">
                    arrow_forward
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {infra.monitoring ? (
        <section className="p-4 bg-surface-container rounded-lg border ide-border space-y-2">
          <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">
              monitoring
            </span>
            Monitoring
          </h2>
          {infra.monitoring.description ? (
            <p className="font-body-md text-on-surface-variant">
              {infra.monitoring.description}
            </p>
          ) : null}
          {infra.monitoring.link ? (
            <a
              href={infra.monitoring.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-container hover:underline font-body-md"
            >
              <span className="material-symbols-outlined text-[18px]">
                {linkIcon(infra.monitoring.link)}
              </span>
              {linkLabel(infra.monitoring.link)}
              <span className="material-symbols-outlined text-[16px]">
                arrow_outward
              </span>
            </a>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}

function PipelineStepCard({ step }: { step: PipelineStep }) {
  const [open, setOpen] = useState(false);
  const hasDetails = !!(step.description || step.snippet || step.link);

  return (
    <div className="min-w-[140px] max-w-[220px] bg-surface-container rounded-lg border ide-border overflow-hidden">
      <button
        type="button"
        onClick={() => hasDetails && setOpen((v) => !v)}
        className={`w-full text-left px-3 py-3 ${hasDetails ? "cursor-pointer hover:bg-surface-variant/30" : "cursor-default"}`}
      >
        <div className="font-label-md text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px] text-secondary">
            build
          </span>
          {step.tool}
        </div>
        <div className="text-code-sm font-code-sm text-on-surface-variant mt-1">
          {step.step}
        </div>
      </button>
      {open && hasDetails ? (
        <div className="px-3 pb-3 border-t border-white/5 pt-2 space-y-2">
          <CodeSnippetLink snippet={step.snippet} link={step.link}>
            {step.description ? (
              <p className="font-body-md text-sm text-on-surface-variant">
                {step.description}
              </p>
            ) : (
              <span className="sr-only">{step.tool}</span>
            )}
          </CodeSnippetLink>
        </div>
      ) : null}
    </div>
  );
}
