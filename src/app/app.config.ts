import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { MARKED_EXTENSIONS, provideMarkdown } from 'ngx-markdown';
import { getSingletonHighlighter, type Highlighter } from 'shiki';

import { routes } from './app.routes';

const SHIKI_LANGS = [
  'bash',
  'java',
  'yaml',
  'typescript',
  'javascript',
  'sql',
  'json',
  'shell',
  'xml',
  'dockerfile',
  'plaintext',
] as const;

/**
 * Module-level singleton. Populated by APP_INITIALIZER before any component renders.
 * Using a module-level reference keeps the renderer closure synchronous.
 */
let _hl: Highlighter | null = null;

async function initShiki(): Promise<void> {
  _hl = await getSingletonHighlighter({
    themes: ['catppuccin-macchiato'],
    langs: [...SHIKI_LANGS],
  });
}

/**
 * Synchronous marked renderer extension that replaces code fences with Shiki HTML.
 * Stays synchronous because the highlighter is pre-loaded via APP_INITIALIZER.
 */
const shikiCodeExtension = {
  renderer: {
    code({ text, lang }: { text: string; lang?: string }): string {
      if (!_hl) {
        return `<pre><code>${text}</code></pre>`;
      }
      const resolvedLang = (SHIKI_LANGS as readonly string[]).includes(lang ?? '')
        ? (lang as (typeof SHIKI_LANGS)[number])
        : 'plaintext';
      try {
        return _hl.codeToHtml(text, { lang: resolvedLang, theme: 'catppuccin-macchiato' });
      } catch {
        return `<pre><code>${text}</code></pre>`;
      }
    },
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: () => initShiki,
      multi: true,
    },
    provideMarkdown({
      markedExtensions: [
        {
          provide: MARKED_EXTENSIONS,
          useValue: shikiCodeExtension,
          multi: true,
        },
      ],
    }),
  ],
};
