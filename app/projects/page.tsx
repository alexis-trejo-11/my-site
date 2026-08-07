import { ProjectWorkspaceProvider } from "./context/workspace-context";
import LeftSideBar from "./components/explorer/LeftSideBar";
import { ProjectDetail } from "./components/detail/ProjectDetail";
import { RightSideBar } from "./components/context-panel/RightSideBar";
import { listProjects } from "./data/repository";

type PageProps = {
  searchParams?: Promise<{ p?: string }>;
};

export default async function ProjectPage({ searchParams }: PageProps) {
  const projects = await listProjects();
  const params = searchParams ? await searchParams : {};
  const initialSlug = params.p ?? null;

  return (
    <ProjectWorkspaceProvider projects={projects} initialSlug={initialSlug}>
      <div className="flex flex-1 overflow-hidden relative min-h-0 w-full">
        <LeftSideBar />
        <ProjectDetail />
        <RightSideBar />
      </div>
    </ProjectWorkspaceProvider>
  );
}
