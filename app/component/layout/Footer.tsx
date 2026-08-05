export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-surface-container-lowest text-tertiary dark:text-tertiary font-label-md text-label-md full-width py-12 border-t border-dashed border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-element-gap">
        <div className="font-headline-md text-headline-md font-black text-on-surface">
          AlexisTrejo
        </div>
        <div className="flex gap-6">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors Opacity shift on hover"
            href="#"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors Opacity shift on hover"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors Opacity shift on hover"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors Opacity shift on hover"
            href="#"
          >
            Documentation
          </a>
        </div>
        <div className="text-on-surface-variant text-sm">
          © 2024 Developer Portfolio. Built with precision.
        </div>
      </div>
    </footer>
  );
}
