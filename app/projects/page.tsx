import LeftSideBar from "./LeftSideBar";
import { ProjectDetail } from "./ProjectDetail";
import { RightSideBar } from "./RightSideBar";

export default function ProjectPage() {
  return (
    <div className="flex flex-1 overflow-hidden relative">
      <LeftSideBar />
      <ProjectDetail />
      <RightSideBar />
    </div>
  );
}
