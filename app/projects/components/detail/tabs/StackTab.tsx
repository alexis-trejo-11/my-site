import type { Project } from "../../../types";

const CHIP_COLORS = [
  "text-on-surface",
  "text-secondary",
  "text-primary-container",
  "text-error",
  "text-tertiary",
];

export function StackTab({ project }: { project: Project }) {
  const stack = project.stack;
  if (!stack || stack.length === 0) return null;

  return (
    <div className="space-y-6">
      {stack.map((group) => (
        <section key={group.category}>
          <h2 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-3">
            {group.category}
          </h2>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item, i) => (
              <span
                key={item}
                className={`px-2.5 py-1 bg-surface-variant rounded text-code-sm font-code-sm border border-white/5 ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
