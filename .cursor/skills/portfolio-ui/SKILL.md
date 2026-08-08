---
name: portfolio-ui
description: >-
  UI/UX system for Alexis Trejo's portfolio (Angular src/app/). Dark Catppuccin
  Macchiato theme with Yaak-style atmosphere (soft glows, noise, glass chrome)
  and Postman-style workspace layouts (3-pane explorer / content / metadata).
  Use when building or editing pages, components, layouts, Tailwind classes,
  styles.css tokens, sidebars, tabs, code blocks, chips, CTAs, or any visual
  work in src/app/. Reference existing components as the source of truth for
  intent. The legacy Next.js app in next/ is deprecated — do not add new UI there.
---

# Portfolio UI (Yaak × Postman)

## North star

- **Yaak** = look & feel: dark IDE chrome, lavender primary, soft radial glows, subtle noise, glass/blur nav, quiet borders, purple glow on hover.
- **Postman** = information architecture: dense tool workspace — left explorer, center document/request surface, right context panel — not a marketing dashboard.

Brand: **AlexisTrejo**. Developer portfolio that feels like a product you open to work, not a brochure.

## Stack

- **Angular 21** standalone components (`@Component`, `templateUrl`, `styleUrl`)
- **Tailwind CSS v4** via `@import 'tailwindcss'` in `src/styles.css`
- **Routing** in `src/app/app.routes.ts`
- **Templates** use built-in control flow (`@if`, `@for`, `@switch`) — not JSX

## Before you write UI

1. Read tokens from `src/styles.css` (`@theme`) — do not invent new palette names.
2. Mirror patterns in existing components:
   - Workspace: `src/app/pages/projects/` (explorer, documentation, metadata)
   - Marketing: `src/app/pages/home/` (hero + expertise grid)
   - Contact: `src/app/pages/contact/`
   - Chrome: `src/app/shared/header/`, `src/app/shared/footer/`, shell in `src/app/app.ts`
3. For deeper recipes, read sibling files in this skill:
   - [tokens.md](tokens.md) — colors, type, radius, utilities
   - [layouts.md](layouts.md) — page shells & breakpoints
   - [components.md](components.md) — sidebars, tabs, chips, code panels, CTAs

## Hard rules

- **Dark only.** Root is `class="dark"` on `<html>` in `src/index.html`. Background `#11111b` / `bg-surface`.
- **Use design tokens**, not raw hex in components (except matching an existing utility like `gradient-text` / `page-bg`).
- **No card-heavy dashboards.** Cards exist for interactive clusters (expertise tiles, related-project links, code panels) — not for every block.
- **No cream/serif “warm editorial” look.** No Inter/Roboto/Arial defaults. Fonts are Hanken Grotesk, Geist, JetBrains Mono (loaded in `index.html`).
- **Atmosphere comes from `page-bg`**, not flat fills. Mount the fixed glow + noise layer on marketing pages (see `home.html`); workspace pages use dense chrome surfaces.
- **Icons:** Material Symbols Outlined only (`material-symbols-outlined`).
- **Borders:** prefer `border-white/5`, `card-border`, or `ide-border` (IDE hairline ≈ white/5). Prefer dashed dividers (`dashed-divider`, `border-dashed border-white/10`) for section breaks.
- **Motion:** short color/opacity/border transitions; soft purple glow (`glow-hover`); optional pulse on availability dots. No noisy parallax.
- **Angular bindings:** use `[class]` / `[class.name]` for conditional Tailwind; `routerLink` + `routerLinkActive` for nav — not `<a href>` for internal routes.

## Color roles (quick)

| Role | Token / value | Use |
|------|----------------|-----|
| Primary / accent | `primary`, `primary-container` `#cba6f7` | Brand, active nav, CTAs, selected tree items |
| Secondary / cyan | `secondary` `#8bd5ca` | Accents, italic emphasis in headlines, folder tints |
| Tertiary / green | `tertiary` `#a6da95` | Success, availability dots, check icons |
| Text | `on-surface` `#cad3f5` | Primary copy |
| Muted | `on-surface-variant` `#a5adcb` | Secondary copy, labels |
| Surfaces | `surface` → `surface-container-*` | Layered chrome (lowest = sidebars) |
| Error | `error` `#ed8796` | Rare; folder/status tint only when semantic |

## Typography (quick)

- **Display / brand hero:** `font-display-lg` — Hanken Grotesk, heavy; name often `gradient-text` + italic.
- **Headlines:** `font-headline-lg` / `font-headline-md` — Hanken Grotesk.
- **Body:** `font-body-lg` / `font-body-md` — Geist.
- **Labels / CTAs:** `font-label-md` — JetBrains Mono, often uppercase + `tracking-wider` for panel titles.
- **Code / tree / meta:** `font-code-sm` — JetBrains Mono.

## Two page modes

### A. Workspace (Postman shell)

Used by `/projects` (implemented), `/skills` (stub — migrate from `next/app/skills/` when building):

```
[ Header — auto-hide on /projects ]
[ Left ~280px | Main flex-1 | Right ~300px ]  ← CSS grid, toggleable panes
```

- Grid columns driven by `gridClass()` in `projects.ts` (`280px` / `minmax(0,1fr)` / `300px`)
- Left: `app-project-explorer` → filter + folder tree
- Center: `app-project-documentation` → title, actions, section content
- Right: `app-project-metadata` — hide below `lg` when metadata closed
- Reference: `src/app/pages/projects/projects.html`

### B. Marketing / profile

Used by `/`, `/contact`:

- Centered column `max-w-container-max` or `max-w-4xl`
- Hero: status pill → big name → one sentence → CTA pair
- Expertise grid + tools; contact uses availability glow + rounded-full CTAs
- Reference: `src/app/pages/home/home.html`, `hero/hero.html`, `home/skills/skills.html`, `contact/contact.html`

## When extending the UI

- Prefer extending an existing pattern over inventing a new layout language.
- Keep left/right sidebar widths at **280 / 300** unless there is a strong reason.
- Selected tree item: tinted bg + left accent border (`border-l-2 border-primary` / `primary-container`).
- Primary CTA: filled `bg-primary-container text-on-primary` (or `text-surface`); secondary: outline `border-primary/30` or `border-outline`.
- Inline tech terms: mono chip on `bg-surface-variant` with semantic text color.
- Generate new components with `ng generate component` under the matching `pages/` or `shared/` folder.

## Anti-patterns

- Light mode surfaces, parchment backgrounds, terracotta CTAs, Newsreader/Public Sans (old wrong DESIGN.md).
- Purple-on-white marketing templates unrelated to Catppuccin tokens.
- Inset hero media cards / floating badge stacks on the home hero.
- Dense stat strips or dashboard widgets in the first viewport of marketing pages.
- Defining one-off colors that duplicate `@theme` tokens.
- Adding UI to `next/` — that directory is the deprecated migration source only.
