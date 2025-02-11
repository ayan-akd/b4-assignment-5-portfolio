import { TExtendedBlog } from "@/app/(dashboardLayout)/dashboard/blogs/page";
import BlogDetailsCard from "@/components/blog-components/BlogDetailsCard";
import { baseUrl } from "@/utils/authOptions";

//generate meta data
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`${baseUrl}/api/blogs/${blogId}`);
  const { data: blog } = await res.json();
  return {
    title: blog?.title,
    description: blog?.description,
  };
}

async function getBlog(id: string) {
  const res = await fetch(`${baseUrl}/api/blogs/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch blog');
  }
  const { data } = await res.json();
  return data as TExtendedBlog;
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.blogId);

  return (
    <div className="min-h-screen container mx-auto py-16 px-4">
      <BlogDetailsCard blog={blog} />
    </div>
  );
}
