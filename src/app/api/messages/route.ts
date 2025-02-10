"use server";

import dbConnect from "@/lib/database";
import { MessageModel } from "@/schemas/message.schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const messages = await MessageModel.find();
    return NextResponse.json({
      data: messages,
      message: "messages fetched successfully",
      status: 200,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Failed to fetch messages",
      status: 500,
      error: err,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const data = await request.json();
    const message = await MessageModel.create(data);
    return NextResponse.json({
      data: message,
      message: "message created successfully",
      status: 201,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create message",
      status: 500,
      error,
    });
  }
}
