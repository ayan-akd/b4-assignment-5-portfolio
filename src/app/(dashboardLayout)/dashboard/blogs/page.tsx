import { ContentLayout } from "@/components/admin-panel/content-layout";
import CreateBlogForm from "@/components/forms/CreateBlogForm";
import { CustomModal } from "@/components/modals/CustomModal";
import { Button } from "@/components/ui/button";

export default function ManageBlogsPage() {
  return (
    <ContentLayout title="Manage Blogs">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">All Blogs</h1>
        <CustomModal
          content={<CreateBlogForm />}
          trigger={
            <Button className="h-8" effect={"shine"}>
              Add Blog
            </Button>
          }
          title="Add Blog"
        />
      </div>
    </ContentLayout>
  );
}
