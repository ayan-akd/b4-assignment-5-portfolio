import { baseUrl } from "@/utils/authOptions";
import ProjectDetailsCard from "@/components/projects-components/ProjectDetailsCard";

//generate meta data
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;
  const res = await fetch(`${baseUrl}/api/projects/${projectId}`);
  const { data: project } = await res.json();
  return {
    title: project?.title,
    description: project?.description,
  };
}


export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  
  const res = await fetch(`${baseUrl}/api/projects/${projectId}`);
  const {data:project} = await res.json();

  return (
    <div className="min-h-screen mx-auto py-16 px-4">
      <ProjectDetailsCard project={project} />
    </div>
  );
}
