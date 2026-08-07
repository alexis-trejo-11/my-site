import type { Link } from "../types";

const DEFAULT_LABELS: Record<Link["type"], string> = {
  github: "GitHub Repository",
  docs: "Documentation",
  demo: "Live Demo",
  external: "External Link",
};

const LINK_ICONS: Record<Link["type"], string> = {
  github: "code_blocks",
  docs: "menu_book",
  demo: "open_in_new",
  external: "link",
};

export function linkLabel(link: Link): string {
  return link.label ?? DEFAULT_LABELS[link.type];
}

export function linkIcon(link: Link): string {
  return LINK_ICONS[link.type];
}
