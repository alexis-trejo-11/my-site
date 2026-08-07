import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-surface/80 backdrop-blur-xl dark:bg-surface/80 text-primary dark:text-primary font-body-md text-body-md w-full top-0 z-50 border-b border-white/5 sticky">
      <div className="flex justify-between items-center px-margin-mobile md:px-gutter py-4 w-full">
        <Link
          href="/"
          className="font-headline-md text-headline-md font-bold text-primary dark:text-primary"
        >
          AlexisTrejo
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link
            className="text-primary border-b-2 border-primary pb-1 Active: scale-95 duration-150"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 transition-all px-2 py-1 rounded"
            href="/skills"
          >
            Skills
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/5 transition-all px-2 py-1 rounded"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              code
            </span>
            Projects
          </Link>
          <div className="flex gap-2">
            <span
              className="material-symbols-outlined cursor-pointer hover:text-white transition-colors"
              data-icon="terminal"
            >
              terminal
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
