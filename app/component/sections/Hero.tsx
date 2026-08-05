export default function Hero() {
  return (
    <section className="text-center pt-20 pb-8 flex flex-col items-center">
      <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-surface-container-low text-on-surface-variant font-label-md text-label-md mb-8 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-tertiary"></span>
        Available for new opportunities
      </div>
      <h1 className="font-display-lg text-display-lg md:text-[80px] leading-tight mb-6">
        <span className="gradient-text italic pr-2">Alexis Trejo</span>
        <br />
        Software Developer
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
        Building robust, scalable applications. Proficient in Java, Angular,
        Docker, and cloud-native architectures. Focused on clean code,
        performance, and delivering exceptional user experiences.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/resume/CV.pdf"
          download
          className="px-6 py-3 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-2"
        >
          <span className="material-symbols-outlined" data-weight="fill">
            download
          </span>
          Download CV
        </a>
        <a
          href="https://github.com/alexis-trejo-11"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-outline text-on-surface rounded-lg font-label-md text-label-md hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
        >
          <span className="material-symbols-outlined">account_tree</span>
          View GitHub
        </a>
      </div>
      <div className="mt-8 text-on-surface-variant font-code-sm text-code-sm flex items-center justify-center gap-4 opacity-70">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">
            terminal
          </span>{" "}
          macOS, Linux
        </span>
      </div>
    </section>
  );
}
