# Layouts

Two shells. Pick one per route; do not mix a marketing hero into a workspace pane without reason.

## App chrome (all pages)

From `app/layout.tsx`:

```
html.dark
  body.min-h-screen.flex.flex-col
    .page-bg (fixed, aria-hidden)
    Header (sticky glass)
    main.flex-1.flex.flex-col
    Footer
```

**Header** (`app/component/layout/Header.tsx`):

- `bg-surface/80 backdrop-blur-xl border-b border-white/5 sticky`
- Left: wordmark `AlexisTrejo` (`font-headline-md font-bold text-primary`)
- Center (md+): text links — active = `text-primary border-b-2`; idle = `text-on-surface-variant` + soft hover fill
- Right: primary `Projects` button (`bg-primary-container rounded-lg`) + terminal icon

**Footer**: `bg-surface-container-lowest`, top `border-dashed border-white/10`, brand + social links + copyright.

---

## Workspace shell (Postman)

**Routes:** `/projects`, `/skills`  
**Pattern:** three columns under the header; height consumes remaining viewport.

```tsx
<div className="flex flex-1 overflow-hidden relative min-h-0 w-full">
  <LeftSidebar />   {/* ~280px */}
  <Main />          {/* flex-1 */}
  <RightPanel />    {/* ~300px */}
</div>
```

| Pane | Width | Surface | Responsibility |
|------|-------|---------|----------------|
| Left | `w-[280px] shrink-0` | `bg-surface-container-lowest` or `surface-container-low` | Search/filter, folder tree, “Explorer” |
| Center | `flex-1 min-w-0` | `bg-surface` | Title, actions, tabs, document / code |
| Right | `w-[300px] shrink-0` | `surface` or `surface-container-lowest` | Stack, resources, related, activity |

**Responsive:**

- Left: often `hidden md:flex`
- Right: often `hidden lg:flex`
- On small screens, center takes full width; navigation can later become drawers — keep the **mental model** of explorer / document / context.

**Center column variants:**

1. **Project workspace** (`ProjectDetail`): header block with title + action buttons → editor-style tabs → scrollable body (`p-8`, content `max-w-3xl mx-auto`).
2. **Knowledge workspace** (`skills/page`): breadcrumb (mono) → H1 → prose → CTA pills → dashed separator → callout panel. Optional ambient glow orb behind content.

**Do not** put marketing-width expertise grids inside workspace panes.

---

## Marketing shell

**Routes:** `/`, `/contact`

```tsx
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-16 pb-32">
  {/* centered sections */}
</div>
```

**Home composition** (`app/page.tsx`):

1. Hero — status pill, gradient name, one supporting sentence, two CTAs, tiny OS meta
2. `dashed-divider`
3. Expertise section — headline with italic `text-secondary` word, bento-ish grid (`md:grid-cols-3`, featured tiles `md:col-span-2`), then favorite tools row

**Contact composition:**

- Centered availability pill with pulsed green dot
- Large display name + role
- Bio with inline mono highlight chips
- CTA row: filled rounded-full email + outline socials
- Dashed divider → “Off Duty” media grid (grayscale → color on hover)

**Hero budget:** brand name dominates; one headline idea; one short paragraph; one CTA group. No stats strip, schedule, or address blocks in the first viewport.

---

## Spacing rhythm

- Workspace chrome: tight (`p-2`–`p-4` trees, `p-6` right panels).
- Document reading: generous (`p-8`–`p-16`, `space-y-6`–`space-y-8`).
- Marketing sections: large vertical gaps (`mb-16`, `pt-20`, `section-gap`).
