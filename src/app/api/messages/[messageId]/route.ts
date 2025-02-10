"use server";

import dbConnect from "@/lib/database";
import { MessageModel } from "@/schemas/message.schema";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { messageId: string } }
) {
  try {
    await dbConnect();

    const { messageId } = await params;

    if (!messageId) {
      return NextResponse.json({
        message: "message ID is required",
        status: 400,
      });
    }

    const message = await MessageModel.findById(messageId);

    if (!message) {
      return NextResponse.json({ message: "message not found", status: 404 });
    }

    return NextResponse.json({
      data: message,
      message: "message fetched successfully",
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching message:", error);
    return NextResponse.json({
      message: "Failed to fetch message",
      status: 500,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}


// DELETE a message by ID
export async function DELETE(
  req: Request,
  { params }: { params: { messageId: string } }
) {
  try {
    await dbConnect();
    const { messageId } = await params;

    await MessageModel.findByIdAndDelete(messageId);
    return NextResponse.json({
      message: "message deleted successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to delete message",
      status: 500,
      error,
    });
  }
}
