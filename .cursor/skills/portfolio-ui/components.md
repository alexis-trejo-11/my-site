# Component recipes

Existing Angular components encode layout, density, and class language. Copy structure and Tailwind classes; wire real data via `@Input()` / signals / services.

## Explorer (left sidebar)

References: `project-explorer/project-explorer.html`, `project-tree/project-tree.html`, `project-folder/project-folder.html`

**Anatomy:**

1. Filter strip (`p-4 border-b ide-border`): search input with icon
2. Scrollable tree (`font-code-sm text-code-sm`, `overflow-y-auto p-2`)

**Tree item states** (via `[class.*]` bindings in `project-folder.html`):

| State | Classes (essence) |
|-------|-------------------|
| Idle folder | `text-on-surface-variant hover:bg-surface-variant/50` |
| Expanded folder | `text-on-surface`, `folder_open`, optional `bg-surface-variant/30` |
| Selected section | `bg-primary-container/10` + `border-l-2 border-primary-container` + `text-primary-container` |
| Nested | `border-l border-white/5 pl-2`, depth via `[style.padding-left]` |

**Filter input:** `bg-surface-container border ide-border rounded`, search icon absolute left, `focus:border-primary-container/50`.

Icons: Material Symbols at 14–16px.

## Context panel (right sidebar)

Reference: `project-metadata/project-metadata.html`

**Section header pattern (always):**

```html
<h4 class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-4 flex items-center gap-2">
  <span class="material-symbols-outlined text-[16px]">info</span>
  Project Metadata
</h4>
```

**Blocks:** repository link, license, version, deploy time, metrics list, recent commits timeline.

**Chips / tags:**

```
px-2.5 py-1 bg-surface-variant rounded text-code-sm font-code-sm border border-white/5
```

Tint text with `text-secondary` / `text-primary-container` / `text-tertiary` / `text-error` for variety.

**Activity / commit row:** dashed vertical connector `border-l border-dashed border-white/10`; dot markers with `ring-4 ring-surface-container-low`.

## Documentation toolbar & sections

Reference: `project-documentation/project-documentation.html`

- Sticky toolbar: explorer/metadata toggle buttons with `left_panel_*` / `right_panel_*` icons
- Overview header: status badge, gradient title suffix, description, primary + outline CTAs
- Section routing: `@switch (activeSection())` → overview, markdown (`project-markdown-section`), API explorer placeholder, services

## Code / request panel

Pattern (when adding code blocks — see legacy `next/app/projects/components/detail/CodeBlock.tsx` for intent):

```
rounded-lg border border-white/5 overflow-hidden bg-surface-container
  header: bg-surface-container-high px-4 py-2 border-b … mono label + Copy
  body: p-4 font-code-sm — color tokens for syntax (secondary = cmd, tertiary-fixed = strings)
```

## Document callout

Use for skills/knowledge tips when building `/skills`:

- `bg-surface-container rounded-lg border ide-border`
- Icon in nested `bg-surface rounded-md border`
- Optional `group-hover` gradient wash `from-primary/5`
- Title `font-headline-md` + short body

Legacy reference: `next/app/skills/page.tsx`

## Inline code chips (in prose)

```
font-code-sm bg-surface-variant/50 text-primary px-1.5 py-0.5 rounded border ide-border
```

Or stronger: `text-primary-container bg-primary-container/10`.

## Buttons & CTAs

| Kind | Pattern |
|------|---------|
| Primary filled | `bg-primary-container text-on-primary` (or `text-surface`) `rounded-lg` or `rounded-full`; optional purple glow shadow |
| Primary outline | `border border-primary-container/30 text-primary-container hover:bg-primary-container/10 rounded-full` |
| Secondary outline | `border border-outline` or `border-primary/30` `hover:border-primary hover:text-primary` |
| Nav CTA | Header API Tester: `rounded-lg font-label-md` with icon |

Always pair icon + label for primary workspace actions (`play_arrow` Try it, `code` View Source).

## Status / availability pill

```
inline-flex items-center gap-2 px-4 py-1.5 rounded-full
border border-white/10 bg-surface-container-low (or bg-surface/50 backdrop-blur)
font-label-md text-on-surface-variant
+ w-2 h-2 rounded-full bg-tertiary (optional animate-pulse + green glow)
```

## Expertise cards (marketing)

Reference: `pages/home/skills/skills.html`

- Grid cell: `bg-surface-container p-8 rounded-xl card-border glow-hover`
- Featured badge: `bg-primary/15 text-primary text-code-sm uppercase`
- Tags via small chip on `bg-surface-variant`
- Optional huge decorative Material icon at low opacity

## Links

- Internal routes: `routerLink` + `routerLinkActive` — not raw `href`
- External/resource rows: trailing `arrow_outward` / `open_in_new` on hover
- Default muted → `hover:text-primary` / `primary-container`

## Angular conventions

- Standalone components: list dependencies in `imports: [...]`
- Prefer signals + `computed()` for UI state (see `projects.ts` pane toggles)
- Co-locate styles: `styleUrl: './component.css'` or inline `:host` rules for layout hosts
- Use `(click)` / `(input)` event bindings — not React handlers
- `@for (item of items; track item.id)` — always provide a `track` expression

## Motion checklist (keep lean)

1. Color/border transitions on nav, chips, cards (`transition-colors` / `transition-all`)
2. `glow-hover` on interactive surface cards
3. Availability dot pulse **or** primary CTA soft glow — not both competing in the same cluster
