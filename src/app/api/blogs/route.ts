"use server";

import dbConnect from "@/lib/database";
import { BlogModel } from "@/schemas/blog.schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const blogs = await BlogModel.find();
    return NextResponse.json({
      data: blogs,
      message: "blogs fetched successfully",
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Failed to fetch blogs",
      status: 500,
      error: err,
    });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const data = await request.json();
    const blog = await BlogModel.create(data);
    return NextResponse.json({
      data: blog,
      message: "blog created successfully",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create blog",
      status: 500,
      error,
    });
  }
}
