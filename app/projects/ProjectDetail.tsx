export const ProjectDetail = () => {
  const TOKEN = "1234567890";
  return (
    <div className="flex-1 flex flex-col bg-surface overflow-hidden">
      {/* Header/Tabs */}
      <div className="border-b ide-border bg-surface-container/30 shrink-0">
        <div className="p-6 flex justify-between items-start pb-4">
          <div>
            <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-2">
              Drugstore-API
            </h1>
            <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl">
              A comprehensive RESTful API for managing pharmacy inventory,
              prescriptions, and point-of-sale operations. Built with a focus on
              high availability and secure data handling.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-1.5 rounded-full border border-primary-container/30 text-primary-container font-label-md text-label-md hover:bg-primary-container/10 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                share
              </span>
              Share
            </button>
            <button className="px-4 py-1.5 rounded-full bg-primary-container text-surface font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_15px_rgba(203,166,247,0.2)]">
              <span className="material-symbols-outlined text-[18px]">
                play_arrow
              </span>
              Run Workspace
            </button>
          </div>
        </div>
        {/* Editor Tabs */}
        <div className="flex px-4 gap-1 overflow-x-auto font-code-sm text-code-sm">
          <div className="px-4 py-2 border-t-2 border-primary-container bg-surface text-on-surface flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-[14px] text-primary-container">
              description
            </span>
            Overview.md
            <span className="material-symbols-outlined text-[14px] ml-2 text-on-surface-variant hover:text-on-surface">
              close
            </span>
          </div>
          <div className="px-4 py-2 border-t-2 border-transparent bg-surface-container-lowest text-on-surface-variant hover:bg-surface-variant/30 flex items-center gap-2 cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-[14px]">
              architecture
            </span>
            Architecture.drawio
          </div>
          <div className="px-4 py-2 border-t-2 border-transparent bg-surface-container-lowest text-on-surface-variant hover:bg-surface-variant/30 flex items-center gap-2 cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-[14px] text-secondary">
              data_object
            </span>
            schema.prisma
          </div>
        </div>
      </div>
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-8 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h2 className="font-headline-md text-headline-md font-semibold text-primary-fixed-dim mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">api</span> Key
              Features
            </h2>
            <ul className="space-y-3 font-body-lg text-body-lg text-on-surface-variant border-l border-dashed border-white/10 pl-6 ml-2">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed-dim mt-1">
                  check_circle
                </span>
                <div>
                  <strong className="text-on-surface">
                    Inventory Tracking:
                  </strong>
                  Real-time updates with optimistic concurrency control.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed-dim mt-1">
                  check_circle
                </span>
                <div>
                  <strong className="text-on-surface">
                    Prescription Validation:
                  </strong>
                  Integration with external medical databases via
                  <span className="bg-surface-variant px-1.5 py-0.5 rounded text-code-sm font-code-sm text-secondary-fixed">
                    gRPC
                  </span>
                  .
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed-dim mt-1">
                  check_circle
                </span>
                <div>
                  <strong className="text-on-surface">
                    Role-Based Access:
                  </strong>
                  Strict
                  <span className="bg-surface-variant px-1.5 py-0.5 rounded text-code-sm font-code-sm text-secondary-fixed">
                    JWT
                  </span>
                  authentication for Pharmacists vs Techs.
                </div>
              </li>
            </ul>
          </section>
          <section className="bg-surface-container rounded-lg border border-white/5 overflow-hidden">
            <div className="bg-surface-container-high px-4 py-2 border-b border-white/5 flex justify-between items-center font-code-sm text-code-sm text-on-surface-variant">
              <span>Example Request: GET /api/v1/inventory/search</span>
              <button className="hover:text-on-surface flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  content_copy
                </span>
                Copy
              </button>
            </div>
            <div className="p-4 font-code-sm text-code-sm overflow-x-auto text-on-surface-variant leading-relaxed">
              <span className="text-secondary">curl</span> -X GET
              <span className="text-tertiary-fixed">
                "https://api.drugstore.local/v1/inventory/search?query=amoxicillin"
              </span>
              \<br />
                -H
              <span className="text-tertiary-fixed">
                "Authorization: Bearer ${TOKEN}"
              </span>
              \<br />
                -H
              <span className="text-tertiary-fixed">
                "Accept: application/json"
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
