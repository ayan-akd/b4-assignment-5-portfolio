import { TProjectExtended } from "@/app/(dashboardLayout)/dashboard/projects/page";
import ProjectCard from "@/components/projects-components/ProjectsCard";
import { baseUrl } from "@/utils/authOptions";

async function getProjects() {
  const res = await fetch(`${baseUrl}/api/projects`, {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  const { data } = await res.json();
  return data as TProjectExtended[];
}

export const metadata = {
  title: 'Portfolio | Projects',
  description: 'Explore my projects',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
