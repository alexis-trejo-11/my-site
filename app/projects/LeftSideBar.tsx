export default function LeftSideBar() {
  return (
    // Left Sidebar (Projects)
    <aside className="w-[280px] border-r ide-border bg-surface-container-lowest flex flex-col shrink-0">
      <div className="p-4 border-b ide-border">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
            search
          </span>
          <input
            className="w-full bg-surface-container border ide-border rounded px-9 py-1.5 text-sm font-code-sm focus:outline-none focus:border-primary-container/50 transition-colors"
            placeholder="Filter projects..."
            type="text"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2 font-code-sm text-code-sm">
        {/* Project Item */}
        <div className="mb-1">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-surface-variant/50 cursor-pointer text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
            <span className="material-symbols-outlined text-[16px] text-secondary">
              folder
            </span>
            <span>Social Events API</span>
          </div>
        </div>
        {/* Project Item */}
        <div className="mb-1">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-surface-variant/50 cursor-pointer text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
            <span className="material-symbols-outlined text-[16px] text-tertiary">
              folder
            </span>
            <span>Bank API</span>
          </div>
        </div>
        {/* Active Project (Expanded) */}
        <div className="mb-1">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-surface-variant/30 cursor-pointer text-on-surface">
            <span className="material-symbols-outlined text-[16px]">
              expand_more
            </span>
            <span className="material-symbols-outlined text-[16px] text-primary-container">
              folder_open
            </span>
            <span className="font-medium">Drugstore-API</span>
          </div>
          {/* Nested Items */}
          <div className="ml-6 mt-1 border-l border-white/5 pl-2 space-y-1">
            <div className="flex items-center gap-2 px-2 py-1 rounded bg-primary-container/10 text-primary-container cursor-pointer border-l-2 border-primary-container -ml-[9px] pl-[9px]">
              <span className="material-symbols-outlined text-[14px]">
                description
              </span>
              <span>Overview</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-surface-variant/50 text-on-surface-variant cursor-pointer">
              <span className="material-symbols-outlined text-[14px]">
                architecture
              </span>
              <span>Architecture</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-surface-variant/50 text-on-surface-variant cursor-pointer">
              <span className="material-symbols-outlined text-[14px]">
                layers
              </span>
              <span>Stack</span>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-surface-variant/50 text-on-surface-variant cursor-pointer">
              <span className="material-symbols-outlined text-[14px]">
                rocket_launch
              </span>
              <span>Deployment</span>
            </div>
          </div>
        </div>
        {/* Project Item */}
        <div className="mb-1 mt-2">
          <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-surface-variant/50 cursor-pointer text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">
              chevron_right
            </span>
            <span className="material-symbols-outlined text-[16px] text-error">
              folder
            </span>
            <span>CRM API</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
