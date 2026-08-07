# Tokens

Source of truth: `app/globals.css` (`@theme` + utility classes).

## Palette (Catppuccin Macchiato–inspired)

| Token | Hex | Role |
|-------|-----|------|
| `background` / `surface` / `surface-dim` | `#11111b` | Page base |
| `surface-container-lowest` | `#0d0d1c` | Sidebars, footer weight |
| `surface-container-low` | `#181825` | Secondary chrome |
| `surface-container` | `#1e1e2e` | Panels, cards |
| `surface-container-high` | `#292839` | Code chrome headers, denser chips |
| `surface-container-highest` / `surface-bright` | `#45475a` / `#383849` | Elevated chips |
| `surface-variant` | `#313244` | Inputs, tags, hover targets |
| `on-surface` / `on-background` | `#cad3f5` | Primary text |
| `on-surface-variant` | `#a5adcb` | Muted text / labels |
| `primary` / `primary-container` | `#cba6f7` | Brand lavender |
| `primary-fixed-dim` | `#d9b9ff` | Soft headline accent |
| `on-primary` | `#11111b` | Text on filled primary |
| `secondary` | `#8bd5ca` | Cyan/teal accent |
| `secondary-container` | `#00707e` | Active tree tint base |
| `tertiary` | `#a6da95` | Green success / status |
| `error` | `#ed8796` | Semantic red (sparing) |
| `outline` | `#585b70` | Stronger outlines (secondary buttons) |

Folder icons in explorers often tint with `text-secondary`, `text-tertiary`, `text-primary-container`, or `text-error` only as **visual variety**, not hard semantics — except when status is real.

## Typography

| Token | Family | Size / weight | Use |
|-------|--------|---------------|-----|
| `font-display-lg` / `text-display-lg` | Hanken Grotesk | 64px / 800 | Hero name |
| `font-headline-lg` / `text-headline-lg` | Hanken Grotesk | 48px / 700 | Page titles (32px mobile) |
| `font-headline-md` / `text-headline-md` | Hanken Grotesk | 24px / 600 | Section titles, brand wordmark |
| `font-body-lg` / `text-body-lg` | Geist | 18px / 400 | Prose |
| `font-body-md` / `text-body-md` | Geist | 16px / 400 | Default UI |
| `font-label-md` / `text-label-md` | JetBrains Mono | 14px / 500 | Buttons, panel headers (`uppercase tracking-wider`) |
| `font-code-sm` / `text-code-sm` | JetBrains Mono | 13px / 400 | Trees, code, meta timestamps |

Loaded in `app/layout.tsx` from Google Fonts (+ Material Symbols).

## Radius & spacing

| Token | Value |
|-------|-------|
| `--radius` | `0.25rem` (inputs, small chips) |
| `--radius-lg` | `0.5rem` (buttons, cards) |
| `--radius-xl` | `0.75rem` (expertise tiles) |
| `--radius-full` | pills / status badges / outline CTAs in workspace |
| `--spacing-margin-mobile` | `16px` |
| `--spacing-gutter` | `24px` |
| `--spacing-element-gap` | `1.5rem` |
| `--spacing-section-gap` | `8rem` |
| `--spacing-container-max` / `max-w-container-max` | `1200px` |

## Atmosphere utilities

Defined in `app/globals.css` — reuse, do not reimplement:

- **`page-bg`** — fixed full-viewport layer: base `#11111b`, lavender/cyan/green radial glows, SVG noise overlay (`mix-blend-mode: overlay`). Mount once in root layout.
- **`gradient-text`** — lavender → green gradient clip for hero name.
- **`dashed-divider`** — `1px dashed rgba(255,255,255,0.1)`.
- **`card-border`** — `1px solid rgba(255,255,255,0.1)`.
- **`glow-hover`** — on hover: soft purple box-shadow + brighter border.

## Border convention: `ide-border`

Components use the class `ide-border` as IDE hairline chrome. Treat it as equivalent to a faint white border (`border-white/5` / `card-border`). If the utility is missing from CSS, add:

```css
.ide-border {
  border-color: rgba(255, 255, 255, 0.05);
}
```

(or compose with Tailwind `border-white/5`).

## Depth model

1. Base: `page-bg` glows (never opaque competing gradients in content).
2. Chrome layers: `surface-container-lowest` sidebars vs `surface` main.
3. Panels: `bg-surface-container` + `border-white/5` / `ide-border`.
4. Selection: translucent primary (`bg-primary-container/10`, `bg-secondary-container/30`).
5. Optional local blur orbs in content: `bg-primary-container/5 rounded-full blur-[100px]`.
6. Elevation interaction: `glow-hover` or `shadow-[0_0_15px_rgba(203,166,247,0.2)]` on primary CTA — never heavy multi-layer shadows.
