import { ProjectModel } from '../projects.model';

export const DrugstorePlatform: ProjectModel = {
  slug: 'drugstore-platform',
  name: 'Drugstore Platform',
  logo: '/logos/java.svg',
  type: 'backend',
  description:
    'A multi-service e-commerce platform for pharmacy and drugstore domains — identity, catalog, carts, orders, payments, inventory, stores, staff, notifications, and addresses — built as a Spring Boot microservices monorepo with PostgreSQL, Redis, Kafka, and gRPC.',
  status: 'production',
  docs: {
    overview: {
      techStack: [
        { icon: '/logos/java.svg', label: 'Java' },
        { icon: '/logos/spring.svg', label: 'Spring Boot' },
        { icon: '/logos/postgresql.svg', label: 'PostgreSQL' },
        { icon: '/logos/redis.svg', label: 'Redis' },
        { icon: '/logos/kafka.svg', label: 'Kafka' },
        { icon: '/logos/docker.svg', label: 'Docker' },
      ],
      highlightedFeatures: [
        {
          icon: 'architecture',
          label: 'Microservices Architecture',
          description:
            '12 domain services, each owning its API, data, and docs, with REST, Kafka, and gRPC integration where it matters most.',
        },
        {
          icon: 'verified_user',
          label: 'Secure by Default',
          description:
            'JWT-based auth with OAuth2, role-scoped endpoints, 2FA, and strict input validation across every service.',
        },
        {
          icon: 'bolt',
          label: 'Event-Driven',
          description:
            'Async product, user, and notification events over Kafka keep services decoupled and scalable.',
        },
        {
          icon: 'sync_alt',
          label: 'Third-party Ready',
          description:
            'Versioned REST interfaces, webhooks (Stripe), and OpenAPI schemas let external systems integrate without downtime.',
        },
      ],
      highlightedCommand: {
        title: 'Example: search products',
        command: `curl -X GET "https://api.drgustore.alexis-trejo.com/product-service/api/v2/products?q=aspirin&page=1&limit=3" \\
  -H "Authorization: Bearer <token>" \\
  -H "Accept: application/json"`,
      },
    },
    architecture: true,
    features: true,
    infrastructure: true,
    apiExplorer: true,
  },
  services: [],
  metadata: {
    repositoryLink: 'https://github.com/alexisTrejo11/drugstore-platform',
    deploymentLink: 'https://api.drgustore.alexis-trejo.com/',
    license: 'MIT',
    version: '2.0.1',
    recentCommits: [
      {
        hash: '2d69cd79',
        message:
          'version 2.0.1: simplify log and decouple loki from logs and make a stateless and scalable logging',
        date: new Date('2026-07-27'),
      },
      {
        hash: '9b76896f',
        message: 'version 2.0.1: simplify docker in current services',
        date: new Date('2026-07-27'),
      },
      {
        hash: '0d50d0c0',
        message: 'version 2.0.0: add cd/ci with github action for all services',
        date: new Date('2026-07-27'),
      },
      {
        hash: 'b9005572',
        message: 'global: make servers build and dockerize correctly',
        date: new Date('2026-07-04'),
      },
      {
        hash: 'd82ee0ac',
        message:
          'notification: fix build, add missing repo interfaces, add templates with thymeleaf',
        date: new Date('2026-06-16'),
      },
    ],
    metrics: [
      { label: 'Lines of Code', value: 29614 },
      { label: 'REST Endpoints', value: 154 },
      { label: 'Microservices', value: 12 },
    ],
  },
};
