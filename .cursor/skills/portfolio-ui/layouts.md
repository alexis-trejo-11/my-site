# Layouts

Two shells. Pick one per route; do not mix a marketing hero into a workspace pane without reason.

## App chrome (all pages)

From `src/index.html`, `src/app/app.ts`, `src/app/app.html`, and `src/styles.css`:

```
html.dark
  body.h-dvh.flex.flex-col.overflow-hidden
    app-root (:host flex column, min-h-0, height 100%)
      div.overflow-y-auto.flex-1          ← scrollport
        div.flex.min-h-full.flex-col     ← at least one viewport tall
          div.route-outlet.flex-1        ← grows above footer
            router-outlet
            <page-host>                  ← sibling of outlet; stretched by .route-outlet rule
          app-footer.shrink-0
```

**Height to footer:** `.route-outlet > :not(router-outlet)` in `styles.css` makes every routed page `display: flex; flex-direction: column; flex: 1; min-height: 100%` so new `ng generate` pages reach the footer without copying `:host` boilerplate. Workspace pages still add `:host { overflow: hidden }` when panes scroll internally.

**Header** (`src/app/shared/header/`):

- `bg-surface/80 backdrop-blur-xl border-b border-white/5`
- Sticky by default; on `/projects`, pass `[autoHide]="true"` — header slides away until pointer nears top edge
- Left: wordmark `AlexisTrejo` (`font-headline-md font-bold text-primary`) → `routerLink="/"`
- Center (md+): nav links via `routerLink` + `routerLinkActive` — active = `text-primary border-b-2`; idle = `text-on-surface-variant` + soft hover fill
- Right: `API Tester` CTA (`/api-tester`) + notes icon (`/notes`)

**Footer** (`src/app/shared/footer/footer.ts`):

- `bg-surface-container-lowest`, top `border-dashed border-white/10`
- Brand wordmark (primary, links home) + title + availability pulse; “Get in touch” → `/contact`; copyright
- No social row — contact channels live on `/contact`
- Brand/copy from `PROFILE` in `src/app/shared/profile.ts`

---

## Workspace shell (Postman)

**Routes:** `/projects` (live), `/skills` (stub)  
**Pattern:** CSS grid under the header; panes toggle open/closed via signals.

```html
<app-header [autoHide]="true" />
<div class="flex-1 overflow-y-auto min-h-0 w-full">
  <div class="grid w-full min-h-full items-stretch" [class]="gridClass()">
    @if (explorerOpen()) { <app-project-explorer /> }
    <app-project-documentation />
    @if (metadataOpen()) { <app-project-metadata /> }
  </div>
  <app-footer />
</div>
```

`gridClass()` in `projects.ts`:

| Panes open | Grid |
|------------|------|
| Explorer + metadata | `280px \| 1fr \| 300px` (metadata column `lg+` only) |
| Explorer only | `280px \| 1fr` |
| Metadata only | `1fr \| 300px` (metadata `lg+`) |
| Neither | `1fr` |

| Pane | Width | Surface | Responsibility |
|------|-------|---------|----------------|
| Left | `280px` | `bg-surface-container-lowest` | Filter input, folder tree (`app-project-tree`) |
| Center | `minmax(0,1fr)` | `bg-surface` | Toolbar (pane toggles), title, actions, section body |
| Right | `300px` | `bg-surface-container-low` | Repo meta, metrics, commit timeline |

**Responsive:**

- Metadata column uses `lg:grid-cols-[…_300px]` — collapses on smaller viewports
- Explorer/metadata toggles in documentation toolbar (`left_panel_open` / `right_panel_open` icons)
- On small screens, center takes full width when side panes are closed

**Center column variants** (`project-documentation.html`):

1. **Overview header:** status badge → gradient title → description → Try it / View Source CTAs
2. **Section header:** compact title bar for non-overview sections
3. **Body:** `@switch (activeSection())` renders overview, markdown sections, API explorer placeholder, or services list

**Do not** put marketing-width expertise grids inside workspace panes.

---

## Marketing shell

**Routes:** `/`, `/contact`

```html
<div class="page-bg" aria-hidden="true"></div>
<app-header />
<main class="relative w-full flex flex-col">
  <div class="min-h-[calc(100dvh-4.5rem)] … max-w-container-max mx-auto px-margin-mobile md:px-gutter">
    <!-- hero -->
  </div>
  <div class="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-32">
    <!-- sections -->
  </div>
</main>
```

**Home composition** (`pages/home/`):

1. Hero — status pill, gradient name, one supporting sentence, two CTAs, tiny OS meta (`hero/hero.html`)
2. `dashed-divider`
3. Expertise section — headline with italic `text-secondary` word, bento-ish grid (`md:grid-cols-3`, featured tiles `md:col-span-2`), then favorite tools row (`home/skills/skills.html`)

**Contact composition** (`pages/contact/contact.html`):

- Marketing shell with `page-bg` (same as home)
- Compact intro (not full-viewport hero): availability pill → display name → “Let’s connect” → short contact blurb from `PROFILE`
- Dashed divider → contact links grid (`CONTACT_LINKS` from `src/app/shared/profile.ts`) — interactive tiles (`card-border glow-hover`) for GitHub, LinkedIn, Twitter, Documentation, CV (footer stays brand + copyright only)
- Dashed divider → “Off Duty” hobby tiles from `PROFILE.offDuty` (icon tiles, no remote images)
- Personal copy and links come from `PROFILE` / `CONTACT_LINKS` — do not hardcode name or URLs in templates

**Hero budget:** brand name dominates; one headline idea; one short paragraph; one CTA group. No stats strip, schedule, or address blocks in the first viewport.

---

## Spacing rhythm

- Workspace chrome: tight (`p-2`–`p-4` trees, `p-5`–`p-6` right panels).
- Document reading: generous (`p-8`–`p-12`, `space-y-4`–`space-y-8`).
- Marketing sections: large vertical gaps (`mb-16`, `pt-20`, `section-gap`).
