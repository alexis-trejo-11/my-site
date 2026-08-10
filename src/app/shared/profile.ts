export type ProfileLink = {
  id: string;
  label: string;
  href: string;
  displayHref: string;
  icon: string;
  download?: boolean;
  external?: boolean;
  internal?: boolean;
};

export type OffDutyItem = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

export const PROFILE = {
  brand: 'AlexisTrejo',
  displayName: 'Alexis Trejo',
  title: 'Software Developer',
  availability: 'Available for new opportunities',
  bio: 'Building robust, scalable applications. Proficient in Java, Angular, Docker, and cloud-native architectures. Focused on clean code, performance, and delivering exceptional user experiences.',
  contactIntro:
    'Reach out through any of the channels below — happy to talk about new projects and collaborations.',
  links: {
    github: {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/alexis-trejo-11',
      displayHref: 'github.com/alexis-trejo-11',
      icon: 'account_tree',
      external: true,
    },
    linkedin: {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      displayHref: 'linkedin.com',
      icon: 'work',
      external: true,
    },
    twitter: {
      id: 'twitter',
      label: 'Twitter',
      href: 'https://x.com/',
      displayHref: 'x.com',
      icon: 'alternate_email',
      external: true,
    },
    documentation: {
      id: 'documentation',
      label: 'Documentation',
      href: '/projects',
      displayHref: 'projects',
      icon: 'menu_book',
      internal: true,
    },
    cv: {
      id: 'cv',
      label: 'Download CV',
      href: '/resume/CV.pdf',
      displayHref: 'resume/CV.pdf',
      icon: 'download',
      download: true,
    },
  },
  offDuty: {
    intro:
      'When I step away from the IDE, you can usually find me exploring abstract 3D modeling, studying typography, or experimenting with minimal graphic design.',
    items: [
      {
        id: 'modeling',
        title: '3D Modeling',
        icon: 'view_in_ar',
        description: 'Abstract forms and studio lighting studies',
      },
      {
        id: 'typography',
        title: 'Typography',
        icon: 'text_fields',
        description: 'Type systems and poster layout',
      },
      {
        id: 'design',
        title: 'Graphic Design',
        icon: 'palette',
        description: 'Minimal marks and visual systems',
      },
    ] satisfies readonly OffDutyItem[],
  },
} as const satisfies {
  brand: string;
  displayName: string;
  title: string;
  availability: string;
  bio: string;
  contactIntro: string;
  links: Record<string, ProfileLink>;
  offDuty: {
    intro: string;
    items: readonly OffDutyItem[];
  };
};

export const CONTACT_LINKS: readonly ProfileLink[] = Object.values(PROFILE.links);
