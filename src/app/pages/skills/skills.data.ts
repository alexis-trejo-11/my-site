import { SkillCategory } from './skills.model';

/**
 * Seed data for the skills workspace.
 * Replace or extend entries here — the UI reads only through SkillsService.
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'software-architecture',
    name: 'Software Architecture',
    skills: [
      {
        id: 'hexagonal',
        name: 'Hexagonal',
        title: 'Hexagonal Architecture',
        icon: 'data_object',
        contentSrc: '/skills/software-architecture/hexagonal.md',
        callout: {
          icon: 'lightbulb',
          title: 'Why I use this',
          body: 'I default to Hexagonal Architecture for complex domains where business logic changes independently of delivery mechanisms (like REST APIs or Message Queues). It guarantees my core logic remains unpolluted by framework specifics.',
        },
        actions: [
          {
            label: 'Ver ejemplo →',
            icon: 'code',
            routerLink: '/projects',
          },
          {
            label: 'Ver notas →',
            icon: 'menu_book',
            routerLink: '/notes',
          },
        ],
        relatedProjects: [
          {
            name: 'Drugstore-API',
            description: 'Production implementation using NestJS and TypeORM.',
            routerLink: '/projects',
          },
          {
            name: 'Social Events API',
            description: 'Event-driven microservice.',
            routerLink: '/projects',
          },
        ],
        relatedSkillIds: ['clean-architecture', 'onion', 'ddd'],
      },
      {
        id: 'clean-architecture',
        name: 'Clean Architecture',
        title: 'Clean Architecture',
        icon: 'description',
        contentSrc: '/skills/software-architecture/clean-architecture.md',
        relatedSkillIds: ['hexagonal', 'onion', 'ddd'],
      },
      {
        id: 'layered',
        name: 'Layered',
        title: 'Layered Architecture',
        icon: 'layers',
        contentSrc: '/skills/software-architecture/layered.md',
        relatedSkillIds: ['hexagonal', 'clean-architecture'],
      },
      {
        id: 'onion',
        name: 'Onion',
        title: 'Onion Architecture',
        icon: 'all_out',
        contentSrc: '/skills/software-architecture/onion.md',
        relatedSkillIds: ['hexagonal', 'clean-architecture', 'ddd'],
      },
      {
        id: 'ddd',
        name: 'DDD',
        title: 'Domain-Driven Design',
        icon: 'hub',
        contentSrc: '/skills/software-architecture/ddd.md',
        relatedSkillIds: ['hexagonal', 'clean-architecture', 'onion'],
      },
    ],
  },
  {
    id: 'systems-protocols',
    name: 'Systems & Protocols',
    skills: [
      {
        id: 'rest',
        name: 'REST',
        title: 'REST APIs',
        icon: 'api',
        contentSrc: '/skills/systems-protocols/rest.md',
      },
      {
        id: 'graphql',
        name: 'GraphQL',
        title: 'GraphQL',
        icon: 'share',
        contentSrc: '/skills/systems-protocols/graphql.md',
      },
      {
        id: 'grpc',
        name: 'gRPC',
        title: 'gRPC',
        icon: 'swap_horiz',
        contentSrc: '/skills/systems-protocols/grpc.md',
      },
    ],
  },
  {
    id: 'data-persistence',
    name: 'Data & Persistence',
    skills: [
      {
        id: 'sql',
        name: 'SQL',
        title: 'Relational Databases',
        icon: 'database',
        contentSrc: '/skills/data-persistence/sql.md',
      },
      {
        id: 'orm',
        name: 'ORM',
        title: 'Object-Relational Mapping',
        icon: 'schema',
        contentSrc: '/skills/data-persistence/orm.md',
      },
    ],
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    skills: [
      {
        id: 'docker',
        name: 'Docker',
        title: 'Docker',
        icon: 'deployed_code',
        contentSrc: '/skills/cloud-infrastructure/docker.md',
      },
      {
        id: 'aws',
        name: 'AWS',
        title: 'Amazon Web Services',
        icon: 'cloud',
        contentSrc: '/skills/cloud-infrastructure/aws.md',
      },
    ],
  },
  {
    id: 'ai-augmented',
    name: 'AI-Augmented Engineering',
    skills: [
      {
        id: 'prompt-engineering',
        name: 'Prompting',
        title: 'Prompt Engineering',
        icon: 'psychology',
        contentSrc: '/skills/ai-augmented/prompt-engineering.md',
      },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      {
        id: 'angular',
        name: 'Angular',
        title: 'Angular',
        icon: 'web',
        contentSrc: '/skills/frontend/angular.md',
      },
    ],
  },
];
