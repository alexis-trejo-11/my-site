export default function Header() {
  return (
    <nav className="bg-surface/80 backdrop-blur-xl dark:bg-surface/80 text-primary dark:text-primary font-body-md text-body-md docked full-width top-0 z-50 border-b border-white/5 flex justify-between items-center px-6 py-4 max-w-container-max mx-auto sticky">
      <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary">
        AlexisTrejo
      </div>
      <div className="hidden md:flex gap-6 items-center">
        <a
          className="text-primary border-b-2 border-primary pb-1 Active: scale-95 duration-150"
          href="#"
        >
          Home
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 transition-all px-2 py-1 rounded"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 transition-all px-2 py-1 rounded"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 transition-all px-2 py-1 rounded"
          href="#contact"
        >
          Contact
        </a>
      </div>
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
            code
          </span>
          Download CV
        </button>
        <div className="flex gap-2">
          <span
            className="material-symbols-outlined cursor-pointer hover:text-white transition-colors"
            data-icon="terminal"
          >
            terminal
          </span>
        </div>
      </div>
    </nav>
  );
}
