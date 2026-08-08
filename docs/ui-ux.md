# UI/UX — Alexis Trejo portfolio

Human-facing summary of the visual system. Agents should prefer the Cursor skill [`.cursor/skills/portfolio-ui/`](../.cursor/skills/portfolio-ui/SKILL.md).

## Intent

The site should feel like a **developer tool you open to work**, not a generic portfolio brochure.

| Inspiration | What we take |
|-------------|----------------|
| **Yaak** | Dark Catppuccin chrome, soft lavender/cyan/green glows, noise texture, glass header, quiet borders, purple hover glow |
| **Postman** | Workspace IA: left explorer, center document/request surface, right context/metadata |

## Source of truth

| Layer | Location |
|-------|----------|
| CSS tokens & atmosphere | `src/styles.css` |
| Root chrome | `src/index.html`, `src/app/app.ts`, `src/app/shared/` |
| Workspace | `src/app/pages/projects/` |
| Marketing | `src/app/pages/home/`, `src/app/pages/contact/` |
| Routes | `src/app/app.routes.ts` |
| Agent skill | `.cursor/skills/portfolio-ui/` (`SKILL.md`, `tokens.md`, `layouts.md`, `components.md`) |
| Legacy (deprecated) | `next/` — migration reference only; do not add new UI there |

Components may be incomplete on data by design; **layout, density, and class language are intentional**.

## Visual pillars

1. **Dark Macchiato base** (`#11111b`) with lavender primary `#cba6f7`
2. **Layered surfaces** (`surface-container-*`) instead of heavy shadows
3. **Mono for UI chrome** (JetBrains Mono labels, trees, code); **Geist** body; **Hanken Grotesk** display/headlines
4. **Material Symbols** only
5. **Dashed hairlines** for soft section breaks; solid faint borders for IDE panes
6. **Two shells only:** marketing column vs 3-pane workspace (≈280 / flex / ≈300)

## Do / don’t

**Do**

- Reuse `@theme` tokens and utilities (`page-bg`, `gradient-text`, `card-border`, `glow-hover`, `dashed-divider`)
- Match existing sidebar/tab/chip recipes when adding features
- Keep workspace dense and tool-like; keep home hero sparse
- Build UI in Angular under `src/app/`

**Don’t**

- Reintroduce the old light “Serene Human” / terracotta / Newsreader system
- Invent parallel color names or light mode as default
- Turn the first marketing viewport into a dashboard of cards and stats
- Add new UI to the deprecated `next/` app

## Related reading

- Skill entry: `.cursor/skills/portfolio-ui/SKILL.md`
- Tokens: `.cursor/skills/portfolio-ui/tokens.md`
- Layouts: `.cursor/skills/portfolio-ui/layouts.md`
- Components: `.cursor/skills/portfolio-ui/components.md`
