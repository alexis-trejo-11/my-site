export type ProjectType = 'backend' | 'frontend' | 'infra' | 'fullstack';
export type ProjectStatus = 'production' | 'development' | 'archived';

export interface ProjectModel {
  slug: string;
  name: string;
  /** Optional logo path, e.g. '/logos/java.svg'. Shown in the explorer tree. */
  logo?: string;
  type: ProjectType;
  description: string;
  status: ProjectStatus;
  docs?: ProjectDocsModel;
  metadata: ProjectMetadataModel;
  services?: ProjectModel[];
}

/**
 * Describes which documentation sections are available for a project.
 * `overview` carries the typed overview payload.
 * All other sections map to Markdown files at /docs/{slug}/{section}.md.
 */
export interface ProjectDocsModel {
  /** Typed overview data — not Markdown. */
  overview?: ProjectOverviewData;
  /** Render /docs/{slug}/architecture.md */
  architecture?: boolean;
  /** Render /docs/{slug}/features.md */
  features?: boolean;
  /** Render /docs/{slug}/infrastructure.md */
  infrastructure?: boolean;
  /** API Explorer section — only meaningful for backend/fullstack projects. */
  apiExplorer?: boolean;
  /** Render a list of nested services. */
  services?: boolean;
}

/**
 * Strongly-typed overview content, separate from the Markdown-based sections.
 */
export interface ProjectOverviewData {
  techStack: TechStackModel[];
  highlightedFeatures: HighlightedFeatureModel[];
  highlightedCommand?: HighlightCommandModel;
}

export interface TechStackModel {
  /** Path to the logo SVG, e.g. '/logos/java.svg'. */
  icon: string;
  label: string;
}

export interface HighlightedFeatureModel {
  /** Material Symbol name. */
  icon: string;
  label: string;
  description: string;
}

export interface HighlightCommandModel {
  title: string;
  command: string;
}

export interface ProjectMetadataModel {
  repositoryLink: string;
  deploymentLink?: string;
  license: string;
  version: string;
  recentCommits: CommitSummaryModel[];
  metrics: ProjectMetricModel[];
}

export interface ProjectMetricModel {
  label: string;
  value: number;
}

export interface CommitSummaryModel {
  hash: string;
  message: string;
  date: Date;
}
