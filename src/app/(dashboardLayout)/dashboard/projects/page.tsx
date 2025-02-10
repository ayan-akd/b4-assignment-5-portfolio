import { ContentLayout } from "@/components/admin-panel/content-layout";
import CreateProjectForm from "@/components/forms/CreateProjectForm";
import { CustomModal } from "@/components/modals/CustomModal";
import { Button } from "@/components/ui/button";

export default function ManageProjectsPage() {
    return (
        <ContentLayout title="Manage Projects">
            <div className="flex justify-between items-center">
            <h1 className="text-xl font-medium">All Projects</h1>
            <CustomModal 
            trigger={<Button className="h-8" effect={"shine"}>Add Project</Button>}
            title="Add Project"
            content={<CreateProjectForm />}
            />
            </div>
        </ContentLayout>
    );
}