import { ProjectsTree } from "./ProjectsTree";

export default function LeftSideBar() {
  return (
    <aside className="w-[280px] border-r ide-border bg-surface-container-lowest flex flex-col shrink-0">
      <ProjectsTree />
    </aside>
  );
}
