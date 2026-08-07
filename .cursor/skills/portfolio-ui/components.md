# Component recipes

Dummy components are intentional design specs. Copy structure and class language; swap data later.

## Explorer (left sidebar)

References: `app/projects/components/LeftSideBar.tsx`, `app/skills/LeftSidebar.tsx`

**Anatomy:**

1. Header strip (`p-4 border-b`): filter input **or** “Explorer” label + project/branch meta
2. Scrollable tree (`font-code-sm text-code-sm`)

**Tree item states:**

| State | Classes (essence) |
|-------|-------------------|
| Idle | `text-on-surface-variant hover:bg-surface-variant/50` (or `/20`) |
| Expanded folder | `text-on-surface`, `folder_open`, optional `bg-surface-variant/30` |
| Selected leaf | `bg-primary-container/10` or `bg-secondary-container/30` + `border-l-2 border-primary` / `primary-container`, text accent |
| Nested | `ml-* border-l border-white/5 pl-*` |

**Filter input:** `bg-surface-container border ide-border rounded`, search icon absolute left, `focus:border-primary-container/50`.

Icons: Material Symbols at 14–16px.

## Context panel (right sidebar)

References: `RightSideBar.tsx`, `RightPanel.tsx`

**Section header pattern (always):**

```
font-label-md text-label-md text-on-surface-variant uppercase tracking-wider
+ small material icon
```

**Blocks:** technology chips, resource links, related project mini-cards, related concept chips, activity timeline.

**Chips / tags:**

```
px-2.5 py-1 bg-surface-variant rounded text-code-sm font-code-sm border border-white/5
```

Tint text with `text-secondary` / `text-primary-container` / `text-tertiary` / `text-error` for variety.

**Related project card:** `p-3 bg-surface-container rounded border ide-border hover:border-primary/50`; arrow icon opacity 0 → 100 on group hover.

**Activity row:** avatar 8×8 + title + mono meta (`2 hours ago • feat/perf`); dashed vertical connector `border-dashed border-white/10`.

## Editor tabs

Reference: `ProjectDetail.tsx`

- Row under title: `font-code-sm`, horizontal scroll
- Active: `border-t-2 border-primary-container bg-surface text-on-surface` + close icon
- Inactive: `border-t-2 border-transparent bg-surface-container-lowest text-on-surface-variant hover:bg-surface-variant/30`
- Tab labels look like filenames (`Overview.md`, `schema.prisma`)

## Code / request panel

```
rounded-lg border border-white/5 overflow-hidden bg-surface-container
  header: bg-surface-container-high px-4 py-2 border-b … mono label + Copy
  body: p-4 font-code-sm — color tokens for syntax (secondary = cmd, tertiary-fixed = strings)
```

## Document callout

Reference: skills page tip card

- `bg-surface-container rounded-lg border ide-border`
- Icon in nested `bg-surface rounded-md border`
- Optional `group-hover` gradient wash `from-primary/5`
- Title `font-headline-md` + short body

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
| Nav CTA | Header Projects: `rounded-lg font-label-md` with icon |

Always pair icon + label for primary workspace actions (`play_arrow` Run, `share` Share).

## Status / availability pill

```
inline-flex items-center gap-2 px-4 py-1.5 rounded-full
border border-white/10 bg-surface-container-low (or bg-surface/50 backdrop-blur)
font-label-md text-on-surface-variant
+ w-2 h-2 rounded-full bg-tertiary (optional animate-pulse + green glow)
```

## Expertise cards (marketing)

Reference: `app/hero/Skills.tsx`

- Grid cell: `bg-surface-container p-8 rounded-xl card-border glow-hover`
- Featured badge: `bg-primary/15 text-primary text-code-sm uppercase`
- Tags via small `Tag` chip on `bg-surface-variant`
- Optional huge decorative Material icon at low opacity

## Links

- Default muted → `hover:text-primary` / `primary-container`
- External/resource rows: trailing `arrow_outward` / `arrow_forward` appears on group hover

## Motion checklist (keep lean)

1. Color/border transitions on nav, chips, cards (`transition-colors` / `transition-all`)
2. `glow-hover` on interactive surface cards
3. Availability dot pulse **or** primary CTA soft glow — not both competing in the same cluster
