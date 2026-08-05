export const RightSideBar = () => {
  return (
    <aside className="w-[300px] border-l ide-border bg-surface-container-lowest flex flex-col shrink-0 overflow-y-auto">
      {/* Stack */}
      <div className="p-6 border-b border-white/5">
        <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">layers</span>
          Technology Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-2.5 py-1 bg-surface-variant rounded text-code-sm font-code-sm text-on-surface border border-white/5">
            Node.js
          </span>
          <span className="px-2.5 py-1 bg-surface-variant rounded text-code-sm font-code-sm text-secondary border border-white/5">
            Express
          </span>
          <span className="px-2.5 py-1 bg-surface-variant rounded text-code-sm font-code-sm text-primary-container border border-white/5">
            PostgreSQL
          </span>
          <span className="px-2.5 py-1 bg-surface-variant rounded text-code-sm font-code-sm text-error border border-white/5">
            Redis
          </span>
          <span className="px-2.5 py-1 bg-surface-variant rounded text-code-sm font-code-sm text-tertiary border border-white/5">
            Docker
          </span>
        </div>
      </div>
      {/* Links */}
      <div className="p-6 border-b border-white/5">
        <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">link</span>
          Resources
        </h3>
        <div className="space-y-3 font-body-md text-sm">
          <a
            className="flex items-center justify-between text-on-surface hover:text-primary-container transition-colors group"
            href="#"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                code_blocks
              </span>
              GitHub Repository
            </span>
            <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
              arrow_outward
            </span>
          </a>
          <a
            className="flex items-center justify-between text-on-surface hover:text-primary-container transition-colors group"
            href="#"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                menu_book
              </span>
              API Documentation
            </span>
            <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
              arrow_outward
            </span>
          </a>
          <a
            className="flex items-center justify-between text-on-surface hover:text-primary-container transition-colors group"
            href="#"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                monitoring
              </span>
              Uptime Dashboard
            </span>
            <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
              arrow_outward
            </span>
          </a>
        </div>
      </div>
      {/* Recent Activity */}
      <div className="p-6">
        <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[16px]">history</span>
          Recent Changes
        </h3>
        <div className="space-y-4">
          <div className="flex gap-3 relative">
            <div className="absolute left-4 top-8 bottom-[-16px] w-px border-l border-dashed border-white/10"></div>
            <img
              className="w-8 h-8 rounded-full bg-surface-variant object-cover z-10 shrink-0"
              data-alt="A small circular avatar of a software developer in a dark moody lighting style, professional and modern."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwTCuvJuyrNAOq0dmiN6e3m9oJ5c2AXzZzU1qZIq84GZ2ATeraPUCMH0Q2OHKlFbCt3crJ_Dxxy2BfG3r6EB_CwS5FnKFnU_soeyR2IfgPi9SE1E6-4uxrJgRRFYcTtKEM6oTN5WyP7k8dI8i_MgU3iSuEn0Hw__-d6_lv4t_HaP2NPyiQIh1m5sTdhgv6ZmniM2VslT9z-tRhutQmi36SiXa_x4QiagcUQHy0Lts9g-MjO-c_Gjg"
            />
            <div>
              <p className="text-sm font-medium text-on-surface">
                Optimized inventory queries
              </p>
              <p className="text-xs text-on-surface-variant font-code-sm mt-1">
                2 hours ago • feat/perf
              </p>
            </div>
          </div>
          <div className="flex gap-3 relative">
            <div className="absolute left-4 top-8 bottom-[-16px] w-px border-l border-dashed border-white/10"></div>
            <img
              className="w-8 h-8 rounded-full bg-surface-variant object-cover z-10 shrink-0"
              data-alt="A small circular avatar of a technical project manager, clean and corporate aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKHSCWaamnx4unzI8osCwat1olaK_WEeXRjBC2Zo2Q54H94wph-V3WgnM2c8bPJcSZWYGXoQBgny-sr_cBibz5nzg_Mnd0ETkYXGyrV-wdTgqcxQUHeIT8u_FJfhFxFDwxGr3EKs7rYNKo9pcnnPrH8V5Eywbe73tQHtOFevyjUC5lyk99hIHUSsqQ3eS4KkMsobVPWgEEKQmjX2Wy25c4tRhhbwRL-g4fwyuHqfZ6egBujpt_WkE"
            />
            <div>
              <p className="text-sm font-medium text-on-surface">
                Updated JWT secret rotation
              </p>
              <p className="text-xs text-on-surface-variant font-code-sm mt-1">
                Yesterday • security
              </p>
            </div>
          </div>
          <div className="flex gap-3 relative">
            <img
              className="w-8 h-8 rounded-full bg-surface-variant object-cover z-10 shrink-0"
              data-alt="A small circular icon representing an automated CI/CD bot, mechanical and sleek."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB76cAuK2D1AKUBAaVSFSIftDNepAQAWyK9ptUhGa5fp6VxFgjm3GRNAsPeRopNxPq2J5XfkzACxry4tu1qY-Gg0whZ9CQPC6jq4X7K5ma64WYGAXTX2kzxcVNTShe0ZaD0AaqeJrrcTD6VHLhMmEknmSHRRL1U1JE2XOn-I2J8-gvM1gsCRVrmY8z8gwN9jHsUxQ6fOoEbIljhW9J85YhfZQPb5UIU9FjCqjFoOF_YlPqnDBoVfnc"
            />
            <div>
              <p className="text-sm font-medium text-on-surface">
                v2.4.0 Release deployed
              </p>
              <p className="text-xs text-on-surface-variant font-code-sm mt-1">
                3 days ago • release
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
