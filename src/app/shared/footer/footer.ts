import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../profile';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  styles: `
    :host {
      display: block;
      width: 100%;
      flex-shrink: 0;
    }
  `,
  template: `
    <footer class="w-full border-t border-white/5 bg-surface-container-lowest">
      <div
        class="flex w-full flex-col gap-4 px-margin-mobile py-5 md:flex-row md:items-center md:justify-between md:gap-6 md:px-gutter md:py-4"
      >
        <div class="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
          <a
            routerLink="/"
            class="font-headline-md text-base font-semibold leading-none text-primary transition-colors hover:text-primary-container"
          >
            {{ profile.brand }}
          </a>
          <span class="font-code-sm text-xs text-on-surface-variant/40" aria-hidden="true">/</span>
          <span class="font-code-sm text-xs leading-none text-on-surface-variant/80">
            {{ profile.title }}
          </span>
        </div>

        <div class="flex flex-wrap items-center gap-x-1 gap-y-2 md:justify-end">
          @for (link of quickLinks; track link.id) {
            <a
              [href]="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-code-sm text-xs text-on-surface-variant transition-colors hover:bg-white/5 hover:text-on-surface"
            >
              <span class="material-symbols-outlined text-[14px]" aria-hidden="true">{{
                link.icon
              }}</span>
              {{ link.label }}
            </a>
          }

          <a
            routerLink="/contact"
            class="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-code-sm text-xs text-on-surface-variant transition-colors hover:bg-white/5 hover:text-primary"
          >
            <span class="material-symbols-outlined text-[14px]" aria-hidden="true">mail</span>
            Contact
          </a>

          <span class="mx-1 hidden h-3 w-px bg-white/10 sm:block" aria-hidden="true"></span>

          <p class="px-2.5 font-code-sm text-xs leading-none text-on-surface-variant/60">
            © {{ year }}
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();
  readonly quickLinks = [PROFILE.links.github, PROFILE.links.linkedin] as const;
}
