import dbConnect from "@/lib/db";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

// GET all notes
export async function GET() {
  try {
    await dbConnect();
    const notes = await Note.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: notes });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// CREATE note
export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { title, content } = body;

    // ✅ validation (fixes your 400 issue)
    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: "Title and content required" },
        { status: 400 }
      );
    }

    const note = await Note.create({
      title,
      content,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      { success: true, data: note },
      { status: 201 }
    );
  } catch (error) {
    console.log("POST ERROR:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}