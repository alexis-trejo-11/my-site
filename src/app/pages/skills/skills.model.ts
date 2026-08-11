/** Material Symbols icon name. */
export type SkillIcon = string;

export interface SkillCallout {
  title: string;
  body: string;
  icon?: SkillIcon;
}

export interface SkillAction {
  label: string;
  icon: SkillIcon;
  /** External or absolute URL. */
  href?: string;
  /** In-app route, e.g. `/projects`. */
  routerLink?: string;
}

export interface SkillRelatedProject {
  name: string;
  description: string;
  href?: string;
  routerLink?: string;
}

/**
 * A leaf skill document shown in the explorer and center pane.
 * Markdown lives at `contentSrc` under `/public` (e.g. `/skills/.../hexagonal.md`).
 */
export interface SkillModel {
  id: string;
  /** Short label in the tree (e.g. "Hexagonal"). */
  name: string;
  /** Full title in the document header. */
  title: string;
  icon?: SkillIcon;
  contentSrc: string;
  callout?: SkillCallout;
  actions?: SkillAction[];
  relatedProjects?: SkillRelatedProject[];
  /** Other skill ids for the metadata "Related Concepts" chips. */
  relatedSkillIds?: string[];
}

/** Top-level folder in the skills explorer. */
export interface SkillCategory {
  id: string;
  name: string;
  skills: SkillModel[];
}
