import { ProjectModel } from './projects.model';

export const PROJECTS: ProjectModel[] = [
  {
    slug: 'drugstore-platform',
    name: 'Drugstore Platform',
    logo: '/logos/java.svg',
    type: 'backend',
    description:
      'A RESTful API for managing drugstore data — inventory, prescriptions, and sales — built with Java, Spring Boot, and MySQL. Designed for easy integration with third-party systems.',
    status: 'production',
    docs: {
      overview: {
        techStack: [
          { icon: '/logos/java.svg', label: 'Java' },
          { icon: '/logos/docker.svg', label: 'Docker' },
          { icon: '/logos/aws.svg', label: 'AWS' },
        ],
        highlightedFeatures: [
          {
            icon: 'speed',
            label: 'High Performance',
            description:
              'Optimized query layer with connection pooling ensures sub-10ms response times on inventory lookups.',
          },
          {
            icon: 'architecture',
            label: 'Modular Architecture',
            description:
              'Hexagonal architecture with clear domain boundaries makes the codebase easy to extend and test.',
          },
          {
            icon: 'verified_user',
            label: 'Secure by Default',
            description:
              'JWT-based auth, role-scoped endpoints, and strict input validation out of the box.',
          },
          {
            icon: 'sync_alt',
            label: 'Third-party Ready',
            description:
              'Webhooks and a versioned REST interface let external systems integrate without downtime.',
          },
        ],
        highlightedCommand: {
          title: 'Example: search inventory',
          command: `curl -X GET "https://api.drugstore.local/v1/products?q=aspirin&page=1&limit=3" \\
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
      repositoryLink: 'https://github.com/alexis-trejo-11/drugstore-platform',
      deploymentLink: 'https://api.drugstore.alexis-trejo.com',
      license: 'MIT',
      version: '1.0.0',
      recentCommits: [],
      metrics: [
        { label: 'Lines of Code', value: 4200 },
        { label: 'Endpoints', value: 18 },
        { label: 'Modules', value: 6 },
      ],
    },
  },
];
