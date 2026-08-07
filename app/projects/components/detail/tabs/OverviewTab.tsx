import type { Project } from "../../../types";
import { CodeBlock } from "../CodeBlock";
import { CodeSnippetLink } from "../CodeSnippetLink";

export function OverviewTab({ project }: { project: Project }) {
  const overview = project.overview;
  if (!overview) return null;

  return (
    <div className="space-y-8">
      {overview.description ? (
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {overview.description}
        </p>
      ) : null}

      {overview.features && overview.features.length > 0 ? (
        <section>
          <h2 className="font-headline-md text-headline-md font-semibold text-primary-fixed-dim mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined">api</span>
            Key Features
          </h2>
          <ul className="space-y-3 font-body-lg text-body-lg text-on-surface-variant border-l border-dashed border-white/10 pl-6 ml-2">
            {overview.features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed-dim mt-1 shrink-0">
                  check_circle
                </span>
                <div className="min-w-0 flex-1">
                  <CodeSnippetLink link={feature.link}>
                    <div>
                      <strong className="text-on-surface">
                        {feature.title}
                        {feature.description ? ": " : ""}
                      </strong>
                      {feature.description}
                    </div>
                  </CodeSnippetLink>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {overview.exampleRequest ? (
        <CodeBlock
          title={overview.exampleRequest.title}
          code={overview.exampleRequest.code}
        />
      ) : null}
    </div>
  );
}
