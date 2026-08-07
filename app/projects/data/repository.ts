import { prisma } from "@/app/lib/prisma";
import type {
  Feature,
  Link,
  PipelineStep,
  Project,
  ProjectArchitecture,
  ProjectInfra,
  ProjectOverview,
  ProjectStatus,
  ProjectType,
  RecentChange,
  StackGroup,
} from "../types";

const PROJECT_TYPES: ProjectType[] = [
  "backend",
  "frontend",
  "infra",
  "fullstack",
];

const PROJECT_STATUSES: ProjectStatus[] = ["active", "wip", "archived"];

const LINK_TYPES: Link["type"][] = ["github", "demo", "docs", "external"];

function isProjectType(value: string): value is ProjectType {
  return (PROJECT_TYPES as string[]).includes(value);
}

function isProjectStatus(value: string): value is ProjectStatus {
  return (PROJECT_STATUSES as string[]).includes(value);
}

function parseJson(value: unknown): unknown {
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value) as unknown;
  } catch {
    return value;
  }
}

function asStringArray(value: unknown): string[] {
  const parsed = parseJson(value);
  if (!Array.isArray(parsed)) return [];
  return parsed.filter((item): item is string => typeof item === "string");
}

function asLink(value: unknown): Link | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return undefined;
  }
  const obj = value as Record<string, unknown>;
  if (typeof obj.url !== "string") return undefined;
  if (typeof obj.type !== "string") return undefined;
  if (!(LINK_TYPES as string[]).includes(obj.type)) return undefined;
  return {
    type: obj.type as Link["type"],
    url: obj.url,
    label: typeof obj.label === "string" ? obj.label : undefined,
  };
}

function asFeature(value: unknown): Feature | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return undefined;
  }
  const obj = value as Record<string, unknown>;
  if (typeof obj.title !== "string" || typeof obj.description !== "string") {
    return undefined;
  }
  return {
    title: obj.title,
    description: obj.description,
    link: asLink(obj.link),
  };
}

function asOverview(value: unknown): ProjectOverview | undefined {
  const parsed = parseJson(value);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return undefined;
  }
  const obj = parsed as Record<string, unknown>;
  const overview: ProjectOverview = {};

  if (typeof obj.description === "string") {
    overview.description = obj.description;
  }

  if (Array.isArray(obj.features)) {
    const features = obj.features
      .map((item) => {
        if (typeof item === "string") {
          return { title: item, description: "" } satisfies Feature;
        }
        return asFeature(item);
      })
      .filter((f): f is Feature => f != null);
    if (features.length > 0) overview.features = features;
  }

  if (obj.exampleRequest && typeof obj.exampleRequest === "object") {
    const er = obj.exampleRequest as Record<string, unknown>;
    if (
      typeof er.title === "string" &&
      typeof er.language === "string" &&
      typeof er.code === "string"
    ) {
      overview.exampleRequest = {
        title: er.title,
        language: er.language,
        code: er.code,
      };
    }
  }

  if (!overview.description && !overview.features && !overview.exampleRequest) {
    return undefined;
  }
  return overview;
}

function asArchitecture(value: unknown): ProjectArchitecture | undefined {
  const parsed = parseJson(value);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return undefined;
  }
  return parsed as ProjectArchitecture;
}

function asInfra(value: unknown): ProjectInfra | undefined {
  const parsed = parseJson(value);
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    return undefined;
  }
  const obj = parsed as Record<string, unknown>;
  const infra: ProjectInfra = {};

  if (Array.isArray(obj.pipeline)) {
    const pipeline = obj.pipeline.filter(
      (step): step is PipelineStep =>
        !!step &&
        typeof step === "object" &&
        typeof (step as PipelineStep).step === "string" &&
        typeof (step as PipelineStep).tool === "string",
    );
    if (pipeline.length > 0) infra.pipeline = pipeline;
  }

  if (obj.monitoring && typeof obj.monitoring === "object") {
    const m = obj.monitoring as Record<string, unknown>;
    infra.monitoring = {
      description:
        typeof m.description === "string" ? m.description : undefined,
      link: asLink(m.link),
    };
  }

  if (!infra.pipeline && !infra.monitoring) return undefined;
  return infra;
}

function asStack(value: unknown): StackGroup[] | undefined {
  const parsed = parseJson(value);
  if (!Array.isArray(parsed) || parsed.length === 0) return undefined;
  return parsed as StackGroup[];
}

function asLinks(value: unknown): Link[] | undefined {
  const parsed = parseJson(value);
  if (!Array.isArray(parsed) || parsed.length === 0) return undefined;
  const links = parsed
    .map(asLink)
    .filter((link): link is Link => link != null);
  return links.length > 0 ? links : undefined;
}

function asRecentChanges(value: unknown): RecentChange[] | undefined {
  const parsed = parseJson(value);
  if (!Array.isArray(parsed) || parsed.length === 0) return undefined;
  const changes = parsed.filter(
    (item): item is RecentChange =>
      !!item &&
      typeof item === "object" &&
      typeof (item as RecentChange).title === "string" &&
      typeof (item as RecentChange).date === "string",
  );
  return changes.length > 0 ? changes : undefined;
}

function asNestedProject(value: unknown, parentId: string): Project | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return undefined;
  }
  const obj = value as Record<string, unknown>;
  if (typeof obj.slug !== "string" || typeof obj.name !== "string") {
    return undefined;
  }

  const type =
    typeof obj.type === "string" && isProjectType(obj.type)
      ? obj.type
      : "backend";
  const id = `${parentId}/${obj.slug}`;

  const status =
    typeof obj.status === "string" && isProjectStatus(obj.status)
      ? obj.status
      : undefined;

  return {
    id,
    slug: obj.slug,
    name: obj.name,
    type,
    tagline: typeof obj.tagline === "string" ? obj.tagline : "",
    status,
    tags: asStringArray(obj.tags),
    overview: asOverview(obj.overview),
    architecture: asArchitecture(obj.architecture),
    infra: asInfra(obj.infra),
    stack: asStack(obj.stack),
    services: asServices(obj.services, id),
    apiExplorer: parseJson(obj.apiExplorer) ?? undefined,
    links: asLinks(obj.links),
    recentChanges: asRecentChanges(obj.recentChanges),
  };
}

function asServices(value: unknown, parentId: string): Project[] | undefined {
  const parsed = parseJson(value);
  if (!Array.isArray(parsed) || parsed.length === 0) return undefined;
  const services = parsed
    .map((item) => asNestedProject(item, parentId))
    .filter((p): p is Project => p != null);
  return services.length > 0 ? services : undefined;
}

function mapProject(row: {
  id: string;
  slug: string;
  name: string;
  type: string;
  tagline: string;
  status: string | null;
  tags: unknown;
  overview: unknown;
  architecture: unknown;
  infra: unknown;
  stack: unknown;
  services: unknown;
  apiExplorer: unknown;
  links?: unknown;
  recentChanges?: unknown;
}): Project {
  const type: ProjectType = isProjectType(row.type) ? row.type : "backend";
  const status =
    row.status && isProjectStatus(row.status) ? row.status : undefined;

  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    type,
    tagline: row.tagline,
    status,
    tags: asStringArray(row.tags),
    overview: asOverview(row.overview),
    architecture: asArchitecture(row.architecture),
    infra: asInfra(row.infra),
    stack: asStack(row.stack),
    services: asServices(row.services, row.id),
    apiExplorer: parseJson(row.apiExplorer) ?? undefined,
    links: asLinks(row.links),
    recentChanges: asRecentChanges(row.recentChanges),
  };
}

export async function listProjects(): Promise<Project[]> {
  const rows = await prisma.project.findMany({
    orderBy: { name: "asc" },
  });
  return rows.map(mapProject);
}
