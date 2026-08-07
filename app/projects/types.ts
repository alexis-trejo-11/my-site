/**
 * Domain types for portfolio projects (Json columns in Prisma).
 * Nested `services` reuse the same shape with synthetic ids.
 */

export type Link = {
  type: "github" | "demo" | "docs" | "external";
  url: string;
  label?: string;
};

export type ProjectType = "backend" | "frontend" | "infra" | "fullstack";

export type ProjectStatus = "active" | "wip" | "archived";

export type CodeSnippet = {
  language: string;
  code: string;
};

export interface Feature {
  title: string;
  description: string;
  link?: Link;
}

export interface Decision {
  title: string;
  rationale: string;
  tradeoff?: string;
  snippet?: CodeSnippet;
  link?: Link;
}

export interface PipelineStep {
  step: string;
  tool: string;
  description?: string;
  snippet?: CodeSnippet;
  link?: Link;
}

export interface ProjectOverview {
  description?: string;
  features?: Feature[];
  exampleRequest?: {
    title: string;
    language: string;
    code: string;
  };
}

export interface ProjectArchitecture {
  description?: string;
  why?: string;
  diagram?: {
    format: "image" | "terminal-tree" | "mermaid";
    content: string;
  };
  decisions?: Decision[];
}

export interface ProjectInfra {
  pipeline?: PipelineStep[];
  monitoring?: {
    description?: string;
    link?: Link;
  };
}

export type StackGroup = { category: string; items: string[] };

export type RecentChange = {
  title: string;
  date: string;
  tag?: string;
};

/** Serializable project used across the workspace UI. */
export type Project = {
  id: string;
  slug: string;
  name: string;
  type: ProjectType;
  tagline: string;
  status?: ProjectStatus;
  tags: string[];
  overview?: ProjectOverview;
  architecture?: ProjectArchitecture;
  infra?: ProjectInfra;
  stack?: StackGroup[];
  services?: Project[];
  apiExplorer?: unknown;
  links?: Link[];
  recentChanges?: RecentChange[];
};
