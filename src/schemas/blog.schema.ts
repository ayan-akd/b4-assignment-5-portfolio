import { TBlog } from "@/types/types";
import mongoose, { model, Schema } from "mongoose";

const blogSchema = new Schema<TBlog>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export const BlogModel =
  mongoose.models.Blog || model<TBlog>("Blog", blogSchema);
