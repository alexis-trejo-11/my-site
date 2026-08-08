import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  styles: `
    :host {
      display: block;
      width: 100%;
      flex-shrink: 0;
    }
  `,
  template: `
    <footer
      class="bg-surface-container-lowest dark:bg-surface-container-lowest text-tertiary dark:text-tertiary font-label-md text-label-md full-width py-12 border-t border-dashed border-white/10"
    >
      <div
        class="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-gutter max-w-container-max mx-auto gap-element-gap"
      >
        <div class="font-headline-md text-headline-md font-black text-on-surface">AlexisTrejo</div>
        <div class="flex gap-6">
          <a
            class="text-on-surface-variant hover:text-primary transition-colors Opacity shift on hover"
            href="#"
          >
            GitHub
          </a>
          <a
            class="text-on-surface-variant hover:text-primary transition-colors Opacity shift on hover"
            href="#"
          >
            LinkedIn
          </a>
          <a
            class="text-on-surface-variant hover:text-primary transition-colors Opacity shift on hover"
            href="#"
          >
            Twitter
          </a>
          <a
            class="text-on-surface-variant hover:text-primary transition-colors Opacity shift on hover"
            href="#"
          >
            Documentation
          </a>
        </div>
        <div class="text-on-surface-variant text-sm">
          © 2024 Developer Portfolio. Built with precision.
        </div>
      </div>
    </footer>
  `,
})
export class Footer {}
