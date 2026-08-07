import type { Project } from "../../../types";
import { CodeSnippetLink } from "../CodeSnippetLink";

export function ArchitectureTab({ project }: { project: Project }) {
  const architecture = project.architecture;
  if (!architecture) return null;

  const diagram = architecture.diagram;

  return (
    <div className="space-y-8">
      {diagram ? (
        <section>
          {diagram.format === "image" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={diagram.content}
              alt={`${project.name} architecture diagram`}
              className="max-w-full rounded-lg border border-white/5"
            />
          ) : (
            <pre className="p-4 bg-surface-container rounded-lg border border-white/5 font-code-sm text-code-sm text-on-surface-variant overflow-x-auto whitespace-pre">
              {diagram.content}
            </pre>
          )}
        </section>
      ) : null}

      {architecture.description ? (
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {architecture.description}
        </p>
      ) : null}

      {architecture.decisions && architecture.decisions.length > 0 ? (
        <section className="space-y-4">
          <h2 className="font-headline-md text-headline-md font-semibold text-primary-fixed-dim flex items-center gap-2">
            <span className="material-symbols-outlined">account_tree</span>
            Decisions
          </h2>
          {architecture.decisions.map((decision) => (
            <div
              key={decision.title}
              className="p-4 bg-surface-container rounded-lg border ide-border space-y-2"
            >
              <CodeSnippetLink snippet={decision.snippet} link={decision.link}>
                <h3 className="font-headline-md text-on-surface font-semibold">
                  {decision.title}
                </h3>
                <p className="font-body-md text-on-surface-variant mt-1">
                  {decision.rationale}
                </p>
                {decision.tradeoff ? (
                  <p className="font-body-md text-secondary mt-2">
                    <span className="font-medium text-on-surface">
                      Trade-off:{" "}
                    </span>
                    {decision.tradeoff}
                  </p>
                ) : null}
              </CodeSnippetLink>
            </div>
          ))}
        </section>
      ) : null}

      {architecture.why ? (
        <aside className="p-4 rounded-lg border ide-border bg-primary-container/5 flex gap-3">
          <span className="material-symbols-outlined text-primary-container shrink-0">
            lightbulb
          </span>
          <div>
            <h3 className="font-label-md text-label-md text-primary-container uppercase tracking-wider mb-1">
              Why I use this
            </h3>
            <p className="font-body-md text-on-surface-variant">
              {architecture.why}
            </p>
          </div>
        </aside>
      ) : null}
    </div>
  );
}
