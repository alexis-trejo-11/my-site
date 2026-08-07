---
name: portfolio-ui
description: >-
  UI/UX system for Alexis Trejo's portfolio (Next.js app/). Dark Catppuccin
  Macchiato theme with Yaak-style atmosphere (soft glows, noise, glass chrome)
  and Postman-style workspace layouts (3-pane explorer / content / metadata).
  Use when building or editing pages, components, layouts, Tailwind classes,
  globals.css tokens, sidebars, tabs, code blocks, chips, CTAs, or any visual
  work in app/. Reference existing dummy components as the source of truth for
  intent.
---

# Portfolio UI (Yaak × Postman)

## North star

- **Yaak** = look & feel: dark IDE chrome, lavender primary, soft radial glows, subtle noise, glass/blur nav, quiet borders, purple glow on hover.
- **Postman** = information architecture: dense tool workspace — left explorer, center document/request surface, right context panel — not a marketing dashboard.

Brand: **AlexisTrejo**. Developer portfolio that feels like a product you open to work, not a brochure.

## Before you write UI

1. Read tokens from `app/globals.css` (`@theme`) — do not invent new palette names.
2. Mirror patterns in existing dummy components (they encode intent even when data is fake):
   - Workspace: `app/projects/`, `app/skills/`
   - Marketing: `app/hero/`, `app/page.tsx`, `app/contact/`
   - Chrome: `app/component/layout/`, `app/layout.tsx`
3. For deeper recipes, read sibling files in this skill:
   - [tokens.md](tokens.md) — colors, type, radius, utilities
   - [layouts.md](layouts.md) — page shells & breakpoints
   - [components.md](components.md) — sidebars, tabs, chips, code panels, CTAs

## Hard rules

- **Dark only.** Root is `className="dark"`. Background `#11111b` / `bg-surface`.
- **Use design tokens**, not raw hex in components (except matching an existing utility like `gradient-text` / `page-bg`).
- **No card-heavy dashboards.** Cards exist for interactive clusters (expertise tiles, related-project links, code panels) — not for every block.
- **No cream/serif “warm editorial” look.** No Inter/Roboto/Arial defaults. Fonts are Hanken Grotesk, Geist, JetBrains Mono.
- **Atmosphere comes from `page-bg`**, not flat fills. Keep the fixed glow + noise layer from layout.
- **Icons:** Material Symbols Outlined only (`material-symbols-outlined`).
- **Borders:** prefer `border-white/5`, `card-border`, or `border ide-border` (IDE hairline ≈ white/5). Prefer dashed dividers (`dashed-divider`, `border-dashed border-white/10`) for section breaks.
- **Motion:** short color/opacity/border transitions; soft purple glow (`glow-hover`); optional pulse on availability dots. No noisy parallax.

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

Used by `/projects`, `/skills`:

```
[ Header sticky glass ]
[ Left ~280px | Main flex-1 | Right ~300px ]
```

- Full height under header: `flex flex-1 overflow-hidden min-h-0 w-full`
- Left: explorer / filter / folder tree
- Center: title + actions + optional editor tabs + scrollable prose/code
- Right: metadata stacks (tech, links, related, activity) — hide below `lg` when needed
- Reference: `app/projects/page.tsx`, `app/skills/page.tsx`

### B. Marketing / profile

Used by `/`, `/contact`:

- Centered column `max-w-container-max` or `max-w-4xl`
- Hero: status pill → big name → one sentence → CTA pair
- Expertise grid + tools; contact uses availability glow + rounded-full CTAs
- Reference: `app/hero/Hero.tsx`, `app/hero/Skills.tsx`, `app/contact/page.tsx`

## When extending the UI

- Prefer extending an existing dummy pattern over inventing a new layout language.
- Keep left/right sidebar widths at **280 / 300** unless there is a strong reason.
- Selected tree item: tinted bg + left accent border (`border-l-2 border-primary` / `primary-container`).
- Primary CTA: filled `bg-primary-container text-on-primary` (or `text-surface`); secondary: outline `border-primary/30` or `border-outline`.
- Inline tech terms: mono chip on `bg-surface-variant` with semantic text color.

## Anti-patterns

- Light mode surfaces, parchment backgrounds, terracotta CTAs, Newsreader/Public Sans (old wrong DESIGN.md).
- Purple-on-white marketing templates unrelated to Catppuccin tokens.
- Inset hero media cards / floating badge stacks on the home hero.
- Dense stat strips or dashboard widgets in the first viewport of marketing pages.
- Defining one-off colors that duplicate `@theme` tokens.
