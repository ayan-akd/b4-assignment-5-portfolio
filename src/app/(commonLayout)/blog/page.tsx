import { TExtendedBlog } from "@/app/(dashboardLayout)/dashboard/blogs/page";
import BlogCard from "@/components/blog-components/BlogCard";
import { baseUrl } from "@/utils/authOptions";

export const metadata = {
  title: 'Portfolio | Blogs',
  description: 'Explore my blogs',
};
async function getBlogs() {
  const res = await fetch(`${baseUrl}/api/blogs`, {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  const { data } = await res.json();
  return data as TExtendedBlog[];
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
