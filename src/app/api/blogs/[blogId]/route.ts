/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import dbConnect from "@/lib/database";
import { BlogModel } from "@/schemas/blog.schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  try {
    await dbConnect();

    const { blogId } = await context.params;

    if (!blogId) {
      return NextResponse.json({
        message: "blog ID is required",
        status: 400,
      });
    }

    const blog = await BlogModel.findById(blogId);

    if (!blog) {
      return NextResponse.json({ message: "blog not found", status: 404 });
    }

    return NextResponse.json({
      data: blog,
      message: "blog fetched successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({
      message: "Failed to fetch blog",
      status: 500,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

export async function PATCH(req: NextRequest, context: any) {
  try {
    await dbConnect();
    const { blogId } = await context.params;
    const data = await req.json();

    const updatedBlog = await BlogModel.findByIdAndUpdate(blogId, data, {
      new: true,
    });

    if (!updatedBlog) {
      return NextResponse.json({ message: "blog not found", status: 404 });
    }

    return NextResponse.json({
      data: updatedBlog,
      message: "blog updated successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to update blog",
      status: 500,
      error,
    });
  }
}

// DELETE a blog by ID
export async function DELETE(req: NextRequest, context: any) {
  try {
    await dbConnect();
    const { blogId } = await context.params;

    await BlogModel.findByIdAndDelete(blogId);
    return NextResponse.json({
      message: "blog deleted successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to delete blog",
      status: 500,
      error,
    });
  }
}
