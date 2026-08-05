import LeftSidebar from "./LeftSidebar";
import RightPanel from "./RightPanel";

export default function SkillsPage() {
  return (
    <div className="flex flex-1 overflow-hidden relative">
      {/* Subtle Glow Overlay */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      {/* Sidebar (Left, ~280px) */}
      <LeftSidebar />
      {/* Main Content (Center) */}
      <main className="flex-1 bg-surface relative overflow-y-auto flex justify-center">
        <div className="max-w-3xl w-full p-8 md:p-12 lg:p-16 flex flex-col">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-on-surface-variant font-code-sm text-code-sm mb-6">
            <span className="hover:text-primary cursor-pointer transition-colors">
              Software Architecture
            </span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="text-primary">Hexagonal</span>
          </div>
          {/* Header */}
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 tracking-tight">
            Hexagonal Architecture
          </h1>
          {/* Content Area */}
          <div className="prose prose-invert max-w-none text-on-surface-variant font-body-lg text-body-lg leading-relaxed space-y-6">
            <p>
              The Hexagonal Architecture, or Ports and Adapters pattern, aims to
              create loosely coupled application components that can be easily
              connected to their software environment by means of
              <span className="font-code-sm bg-surface-variant/50 text-primary px-1.5 py-0.5 rounded border ide-border inline-block mx-1">
                ports
              </span>
              and
              <span className="font-code-sm bg-surface-variant/50 text-primary px-1.5 py-0.5 rounded border ide-border inline-block mx-1">
                adapters
              </span>
              . This makes components exchangeable at any level and facilitates
              test automation.
            </p>
            <p>
              The core logic is isolated from outside concerns. The application
              is driven by users, programs, automated test or batch scripts, and
              is developed and tested in isolation from its eventual run-time
              devices and databases.
            </p>
          </div>
          {/* Actions */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 text-primary font-label-md text-label-md hover:bg-primary/10 transition-all duration-300 relative overflow-hidden"
              href="#"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-[18px]">
                code
              </span>
              <span>Ver ejemplo →</span>
            </a>
            <a
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 text-primary font-label-md text-label-md hover:bg-primary/10 transition-all duration-300 relative overflow-hidden"
              href="#"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-[18px]">
                menu_book
              </span>
              <span>Ver notas →</span>
            </a>
          </div>
          {/* Subtle separator */}
          <div className="w-full h-px border-t border-dashed border-white/10 my-12"></div>
          {/* Extra visual fluff for high-end feel */}
          <div className="p-6 bg-surface-container rounded-lg border ide-border relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-surface rounded-md border ide-border flex-shrink-0">
                <span className="material-symbols-outlined text-primary">
                  lightbulb
                </span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  Why I use this
                </h3>
                <p className="text-on-surface-variant text-sm">
                  I default to Hexagonal Architecture for complex domains where
                  business logic changes independently of delivery mechanisms
                  (like REST APIs or Message Queues). It guarantees my core
                  logic remains unpolluted by framework specifics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Right Panel (Metadata, ~300px) */}
      <RightPanel />
    </div>
  );
}
