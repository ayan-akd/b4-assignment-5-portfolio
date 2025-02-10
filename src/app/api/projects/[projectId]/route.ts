"use server";

import dbConnect from "@/lib/database";
import { ProjectModel } from "@/schemas/project.schema";
import { NextResponse } from "next/server";

// GET a single project by ID
export async function GET(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    await dbConnect();

    const { projectId } = await params;

    if (!projectId) {
      return NextResponse.json({
        message: "Project ID is required",
        status: 400,
      });
    }

    const project = await ProjectModel.findById(projectId);

    if (!project) {
      return NextResponse.json({ message: "Project not found", status: 404 });
    }

    return NextResponse.json({
      data: project,
      message: "Project fetched successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json({
      message: "Failed to fetch project",
      status: 500,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

// PUT to update a project by ID
export async function PATCH(
  request: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    await dbConnect();
    const { projectId } = params;
    const data = await request.json();

    const updatedProject = await ProjectModel.findByIdAndUpdate(
      projectId,
      data,
      {
        new: true,
      }
    );

    if (!updatedProject) {
      return NextResponse.json({ message: "Project not found", status: 404 });
    }

    return NextResponse.json({
      data: updatedProject,
      message: "Project updated successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to update project",
      status: 500,
      error,
    });
  }
}

// DELETE a project by ID
export async function DELETE(
  req: Request,
  { params }: { params: { projectId: string } }
) {
  try {
    await dbConnect();
    const { projectId } = await params;

    await ProjectModel.findByIdAndDelete(projectId);
    return NextResponse.json({
      message: "Project deleted successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to delete project",
      status: 500,
      error,
    });
  }
}
