import BlogManagement from "@/components/blog-components/BlogManagement";
import { TBlog } from "@/types/types";

export const metadata = {
    title: "Portfolio | Manage Blogs",
    description: "Manage Blogs",
};
export type TExtendedBlog = TBlog & {
  _id: string;
};
export default function ManageBlogs() {
    return (
        <BlogManagement />
    );
}