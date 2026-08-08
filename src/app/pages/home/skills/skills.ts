import { Component } from '@angular/core';

type ExpertiseArea = {
  title: string;
  icon: string;
  iconClass: string;
  featured: boolean;
  description: string;
  tags: string[];
  className: string;
  decorative?: boolean;
};

type FavoriteTool = {
  name: string;
  src: string;
};

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly expertiseAreas: ExpertiseArea[] = [
    {
      title: 'Backend Engineering',
      icon: 'dns',
      iconClass: 'text-primary',
      featured: true,
      description:
        'End-to-end server-side development — APIs, microservices, authentication, security, and performance tuning.',
      tags: [
        'REST & GraphQL',
        'Microservices',
        'OAuth2 & JWT',
        'Caching & Performance',
        'Data Modeling',
      ],
      className: 'col-span-1 md:col-span-2',
    },
    {
      title: 'DevOps & Infrastructure',
      icon: 'cloud',
      iconClass: 'text-secondary',
      featured: false,
      description:
        'Server management, Linux, networking, containerized deployments, and CI/CD pipelines.',
      tags: ['Linux', 'Networking', 'Containers', 'Cloud Infra', 'CI/CD'],
      className: 'col-span-1',
    },
    {
      title: 'Design & UI',
      icon: 'web',
      iconClass: 'text-tertiary',
      featured: false,
      description: 'Clean, responsive interfaces with solid HTML/CSS foundations and visual craft.',
      tags: ['HTML', 'CSS', 'UI Design', 'Visual Design'],
      className: 'col-span-1',
    },
    {
      title: 'AI Integration',
      icon: 'psychology',
      iconClass: 'text-primary',
      featured: false,
      description:
        'Building with modern AI tooling — MCP servers, coding agents, and spec-driven workflows.',
      tags: ['MCP', 'Coding Agents', 'Agent Skills', 'Spec-Driven Dev'],
      className: 'col-span-1 md:col-span-2',
      decorative: true,
    },
  ];

  protected readonly favoriteTools: FavoriteTool[] = [
    { name: 'Java', src: '/logos/java.svg' },
    { name: 'Angular', src: '/logos/angular.svg' },
    { name: 'PostgreSQL', src: '/logos/postgres.svg' },
    { name: 'Docker', src: '/logos/docker.svg' },
    { name: 'AWS', src: '/logos/aws.svg' },
  ];
}
