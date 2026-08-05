export default function RightPanel() {
  return (
    <aside className="w-[300px] bg-surface border-l ide-border hidden lg:flex flex-col shrink-0 overflow-y-auto">
      <div className="p-6 space-y-8">
        {/* Block: Related Projects */}
        <div>
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">
              integration_instructions
            </span>
            Related Projects
          </h3>
          <div className="flex flex-col gap-3">
            <a
              className="p-3 bg-surface-container rounded border ide-border hover:border-primary/50 transition-colors group"
              href="#"
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">
                  Drugstore-API
                </span>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </div>
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                Production implementation using NestJS and TypeORM.
              </span>
            </a>
            <a
              className="p-3 bg-surface-container rounded border ide-border hover:border-primary/50 transition-colors group"
              href="#"
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">
                  Social Events API
                </span>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </div>
              <span className="font-code-sm text-code-sm text-on-surface-variant">
                Event-driven microservice.
              </span>
            </a>
          </div>
        </div>
        {/* Block: Related Concepts */}
        <div>
          <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">
              account_tree
            </span>
            Related Concepts
          </h3>
          <div className="flex flex-wrap gap-2">
            <a
              className="px-3 py-1 bg-surface-container-high rounded border ide-border font-code-sm text-code-sm text-on-surface hover:text-primary hover:border-primary/30 transition-colors"
              href="#"
            >
              Clean Architecture
            </a>
            <a
              className="px-3 py-1 bg-surface-container-high rounded border ide-border font-code-sm text-code-sm text-on-surface hover:text-primary hover:border-primary/30 transition-colors"
              href="#"
            >
              Onion Architecture
            </a>
            <a
              className="px-3 py-1 bg-surface-container-high rounded border ide-border font-code-sm text-code-sm text-on-surface hover:text-primary hover:border-primary/30 transition-colors"
              href="#"
            >
              DDD
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
