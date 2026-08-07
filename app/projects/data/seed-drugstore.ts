import type { Project } from "../types";

type SeedProject = Omit<Project, "id" | "services"> & {
  services?: SeedProject[];
};

/** Rich payload for upserting drugstore-api (without DB id). */
export const drugstoreSeed: SeedProject = {
  slug: "drugstore-api",
  name: "Drugstore-API",
  type: "backend",
  tagline:
    "A comprehensive RESTful API for managing pharmacy inventory, prescriptions, and point-of-sale operations. Built with a focus on high availability and secure data handling.",
  status: "active",
  tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
  overview: {
    description:
      "Drugstore-API is the backbone of a pharmacy operations platform: inventory, prescriptions, and POS in one secure surface.",
    features: [
      {
        title: "Inventory Tracking",
        description:
          "Real-time updates with optimistic concurrency control across warehouses.",
        link: {
          type: "github",
          url: "https://github.com/example/drugstore-api/tree/main/src/inventory",
        },
      },
      {
        title: "Prescription Validation",
        description:
          "Integration with external medical databases via gRPC for fill-time checks.",
      },
      {
        title: "Role-Based Access",
        description:
          "Strict JWT authentication for Pharmacists vs Techs with scoped claims.",
      },
    ],
    exampleRequest: {
      title: "Example Request: GET /api/v1/inventory/search",
      language: "bash",
      code: `curl -X GET "https://api.drugstore.local/v1/inventory/search?query=amoxicillin" \\
  -H "Authorization: Bearer $TOKEN" \\
  -H "Accept: application/json"`,
    },
  },
  architecture: {
    description:
      "Hexagonal layout: HTTP adapters on the edge, domain services in the core, Postgres + Redis as driven ports.",
    diagram: {
      format: "terminal-tree",
      content: `drugstore-api/
├── apps/
│   └── api/                 # Fastify HTTP adapter
├── packages/
│   ├── domain/              # entities + use-cases
│   ├── inventory/           # inventory bounded context
│   └── prescriptions/       # Rx validation
└── infra/
    ├── postgres/
    └── redis/`,
    },
    decisions: [
      {
        title: "Hexagonal over layered MVC",
        rationale:
          "Keeps domain free of Express/Fastify so use-cases stay testable without spinning an HTTP server.",
        tradeoff:
          "More folders and ports up front; slower for tiny CRUD prototypes.",
        snippet: {
          language: "typescript",
          code: `export interface InventoryPort {
  search(query: string): Promise<Sku[]>;
}`,
        },
        link: {
          type: "docs",
          url: "https://example.com/docs/architecture",
          label: "Architecture notes",
        },
      },
    ],
    why: "I use this shape when the domain will outlive any single framework — pharmacy rules change slower than HTTP libraries.",
  },
  infra: {
    pipeline: [
      {
        step: "Containerization",
        tool: "Docker",
        description: "Multi-stage Node image; non-root runtime user.",
        snippet: {
          language: "dockerfile",
          code: `FROM node:22-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build`,
        },
      },
      {
        step: "Orchestration",
        tool: "Compose",
        description: "Local stack with API, Postgres, and Redis.",
      },
      {
        step: "CI",
        tool: "GitHub Actions",
        description: "Lint, typecheck, and push images on main.",
        link: {
          type: "github",
          url: "https://github.com/example/drugstore-api/actions",
        },
      },
    ],
    monitoring: {
      description: "Uptime and latency probes on the public /healthz route.",
      link: {
        type: "external",
        url: "https://status.drugstore.local",
        label: "Uptime Dashboard",
      },
    },
  },
  stack: [
    { category: "Runtime", items: ["Node.js", "TypeScript"] },
    { category: "API", items: ["Express", "Zod"] },
    { category: "Data", items: ["PostgreSQL", "Redis", "Prisma"] },
    { category: "Ops", items: ["Docker", "GitHub Actions"] },
  ],
  links: [
    {
      type: "github",
      url: "https://github.com/example/drugstore-api",
    },
    {
      type: "docs",
      url: "https://docs.drugstore.local",
      label: "API Documentation",
    },
    {
      type: "external",
      url: "https://status.drugstore.local",
      label: "Uptime Dashboard",
    },
  ],
  recentChanges: [
    {
      title: "Optimized inventory queries",
      date: "2 hours ago",
      tag: "feat/perf",
    },
    {
      title: "Updated JWT secret rotation",
      date: "Yesterday",
      tag: "security",
    },
    {
      title: "v2.4.0 Release deployed",
      date: "3 days ago",
      tag: "release",
    },
  ],
  apiExplorer: { endpoints: [] },
  services: [
    {
      slug: "inventory-service",
      name: "Inventory Service",
      type: "backend",
      tagline: "SKU search, stock levels, and warehouse sync.",
      status: "active",
      tags: ["PostgreSQL", "Redis"],
      overview: {
        description:
          "Owns inventory read models and publishes stock-changed events.",
        features: [
          {
            title: "Optimistic locking",
            description:
              "Version columns prevent lost updates on concurrent fills.",
          },
        ],
      },
      links: [
        {
          type: "github",
          url: "https://github.com/example/drugstore-api/tree/main/packages/inventory",
        },
      ],
    },
    {
      slug: "prescriptions-service",
      name: "Prescriptions Service",
      type: "backend",
      tagline: "Rx validation and external formulary checks.",
      status: "wip",
      tags: ["gRPC", "Node.js"],
      overview: {
        description:
          "Validates prescriptions against partner formulary services before dispense.",
      },
      architecture: {
        description: "gRPC client adapters wrap partner SDKs behind a port.",
        why: "Partners rotate SDKs often; ports keep the domain stable.",
      },
    },
    {
      slug: "pos-gateway",
      name: "POS Gateway",
      type: "fullstack",
      tagline: "Edge BFF for register clients.",
      status: "active",
      tags: ["Next.js", "BFF"],
      overview: {
        description:
          "Thin BFF that aggregates inventory + Rx checks for in-store POS tablets.",
      },
      stack: [
        { category: "Frontend", items: ["Next.js"] },
        { category: "Backend", items: ["Node.js"] },
      ],
    },
  ],
};
