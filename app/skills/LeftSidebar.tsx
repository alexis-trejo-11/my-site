export default function LeftSidebar() {
  return (
    <aside className="w-[280px] bg-surface-container-low border-r ide-border flex flex-col shrink-0 overflow-y-auto hidden md:flex">
      <div className="p-4 border-b ide-border">
        <h2 className="font-code-sm text-code-sm text-on-surface-variant uppercase tracking-wider">
          Explorer
        </h2>
        <div className="mt-2 flex items-center gap-2">
          <img
            className="w-6 h-6 rounded-full object-cover"
            data-alt="A small, stylized avatar image of a developer, lit with soft neon purple and blue tones, set against a dark background. The style is modern and digital."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcS0YaXkg4vqflrPuHGvbpFRWKu4V4JmPkc2Rupf13wnOSVZMB_beiw4yEkacQtKRM1v3vf5gLIJY7Iwv-gk0e1N3bdEcGwV6lzeygJzA1QiMGwZq3dRUZRu70-WJH9zxjbGekT0Dbnqr-LDtXuA5lL0OQyU0VnkNJupKWn83XYgKqIk8SzOJFkl3etTK94c6UfF4IsBzJScKzz7nhfChlYzZMA1zVtXhW670jKqscxLnQLduF-o4"
          />
          <div className="flex flex-col">
            <span className="font-label-md text-label-md text-primary">
              Project_v1
            </span>
            <span className="font-code-sm text-code-sm text-on-surface-variant text-[11px]">
              main*
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 py-4 font-code-sm text-code-sm">
        {/* Expanded Category */}
        <div className="mb-2">
          <button className="w-full flex items-center gap-2 px-4 py-1 text-on-surface-variant hover:bg-surface-variant/20 transition-colors cursor-pointer select-none">
            <span
              className="material-symbols-outlined text-[16px] transition-transform duration-200 rotate-90"
              data-icon="folder_open"
            >
              folder_open
            </span>
            <span>Software Architecture</span>
          </button>
          <div className="pl-8 py-1">
            <div className="border-l border-white/5 ml-[7px] pl-4 flex flex-col gap-1 relative">
              <a
                className="flex items-center gap-2 px-2 py-1 bg-secondary-container/30 text-on-secondary-container border-l-2 border-primary -ml-[18px] pl-[16px] rounded-r cursor-pointer select-none"
                href="#"
              >
                <span
                  className="material-symbols-outlined text-[14px] text-primary"
                  data-icon="data_object"
                >
                  data_object
                </span>
                <span>Hexagonal</span>
              </a>
              <a
                className="flex items-center gap-2 px-2 py-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 rounded cursor-pointer select-none"
                href="#"
              >
                <span
                  className="material-symbols-outlined text-[14px]"
                  data-icon="description"
                >
                  description
                </span>
                <span>Clean Architecture</span>
              </a>
              <a
                className="flex items-center gap-2 px-2 py-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 rounded cursor-pointer select-none"
                href="#"
              >
                <span
                  className="material-symbols-outlined text-[14px]"
                  data-icon="layers"
                >
                  layers
                </span>
                <span>Layered</span>
              </a>
              <a
                className="flex items-center gap-2 px-2 py-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 rounded cursor-pointer select-none"
                href="#"
              >
                <span
                  className="material-symbols-outlined text-[14px]"
                  data-icon="all_out"
                >
                  all_out
                </span>
                <span>Onion</span>
              </a>
            </div>
          </div>
        </div>
        {/* Collapsed Categories */}
        <button className="w-full flex items-center gap-2 px-4 py-1.5 text-on-surface-variant hover:bg-surface-variant/20 transition-colors cursor-pointer select-none">
          <span
            className="material-symbols-outlined text-[16px]"
            data-icon="folder"
          >
            folder
          </span>
          <span>Systems &amp; Protocols</span>
        </button>
        <button className="w-full flex items-center gap-2 px-4 py-1.5 text-on-surface-variant hover:bg-surface-variant/20 transition-colors cursor-pointer select-none">
          <span
            className="material-symbols-outlined text-[16px]"
            data-icon="folder"
          >
            folder
          </span>
          <span>Data &amp; Persistence</span>
        </button>
        <button className="w-full flex items-center gap-2 px-4 py-1.5 text-on-surface-variant hover:bg-surface-variant/20 transition-colors cursor-pointer select-none">
          <span
            className="material-symbols-outlined text-[16px]"
            data-icon="folder"
          >
            folder
          </span>
          <span>Cloud &amp; Infrastructure</span>
        </button>
        <button className="w-full flex items-center gap-2 px-4 py-1.5 text-on-surface-variant hover:bg-surface-variant/20 transition-colors cursor-pointer select-none">
          <span
            className="material-symbols-outlined text-[16px]"
            data-icon="folder"
          >
            folder
          </span>
          <span>AI-Augmented Engineering</span>
        </button>
        <button className="w-full flex items-center gap-2 px-4 py-1.5 text-on-surface-variant hover:bg-surface-variant/20 transition-colors cursor-pointer select-none">
          <span
            className="material-symbols-outlined text-[16px]"
            data-icon="folder"
          >
            folder
          </span>
          <span>Frontend</span>
        </button>
      </div>
    </aside>
  );
}
