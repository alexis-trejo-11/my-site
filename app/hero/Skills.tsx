const expertiseAreas = [
  {
    title: "Backend Engineering",
    icon: "dns",
    iconClass: "text-primary",
    featured: true,
    description:
      "End-to-end server-side development — APIs, microservices, authentication, security, and performance tuning.",
    tags: [
      "REST & GraphQL",
      "Microservices",
      "OAuth2 & JWT",
      "Caching & Performance",
      "Data Modeling",
    ],
    className: "col-span-1 md:col-span-2",
  },
  {
    title: "DevOps & Infrastructure",
    icon: "cloud",
    iconClass: "text-secondary",
    featured: false,
    description:
      "Server management, Linux, networking, containerized deployments, and CI/CD pipelines.",
    tags: ["Linux", "Networking", "Containers", "Cloud Infra", "CI/CD"],
    className: "col-span-1",
  },
  {
    title: "Design & UI",
    icon: "web",
    iconClass: "text-tertiary",
    featured: false,
    description:
      "Clean, responsive interfaces with solid HTML/CSS foundations and visual craft.",
    tags: ["HTML", "CSS", "UI Design", "Visual Design"],
    className: "col-span-1",
  },
  {
    title: "AI Integration",
    icon: "psychology",
    iconClass: "text-primary",
    featured: false,
    description:
      "Building with modern AI tooling — MCP servers, coding agents, and spec-driven workflows.",
    tags: ["MCP", "Coding Agents", "Agent Skills", "Spec-Driven Dev"],
    className: "col-span-1 md:col-span-2",
    decorative: true,
  },
] as const;

const favoriteTools = [
  { name: "Java", src: "/logos/java.svg" },
  { name: "Angular", src: "/logos/angular.svg" },
  { name: "PostgreSQL", src: "/logos/postgres.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "AWS", src: "/logos/aws.svg" },
] as const;

function Tag({ children }: { children: string }) {
  return (
    <span className="px-3 py-1 bg-surface-variant text-on-surface rounded text-code-sm font-label-md">
      {children}
    </span>
  );
}

export default function Skills() {
  return (
    <section className="pt-8 pb-12" id="skills">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4">
          Technical <span className="text-secondary italic">expertise</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          From backend systems and infrastructure to AI workflows and interface
          design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {expertiseAreas.map((area) => (
          <div
            key={area.title}
            className={`${area.className} bg-surface-container p-8 rounded-xl card-border glow-hover transition-all relative overflow-hidden`}
          >
            {"decorative" in area && area.decorative ? (
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined text-[120px]">
                  smart_toy
                </span>
              </div>
            ) : null}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className={`material-symbols-outlined ${area.iconClass}`}>
                  {area.icon}
                </span>
                {area.featured ? (
                  <span className="px-2 py-0.5 rounded bg-primary/15 text-primary text-code-sm font-label-md tracking-wide uppercase">
                    Primary Focus
                  </span>
                ) : null}
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">
                {area.title}
              </h3>
              <p className="text-on-surface-variant mb-6 max-w-md">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-white/5">
        <div className="text-center mb-10">
          <h3 className="font-headline-lg text-headline-lg mb-4">
            Favorite <span className="text-secondary italic">tools</span>
          </h3>
          <p className="text-on-surface-variant text-body-md">
            The stack I reach for most when shipping software.
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-6 md:gap-10 list-none p-0 m-0">
          {favoriteTools.map((tool) => (
            <li
              key={tool.name}
              className="flex flex-col items-center gap-3 min-w-[88px]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-surface-container card-border glow-hover transition-all">
                <img
                  src={tool.src}
                  alt=""
                  width={40}
                  height={40}
                  className="w-9 h-9 md:w-10 md:h-10 brightness-0 invert opacity-90"
                />
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant">
                {tool.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
