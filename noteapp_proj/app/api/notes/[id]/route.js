import dbConnect from "@/lib/db";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

// UPDATE note
export async function PUT(request, { params }) {
  try {
    const { id } = params; // ✅ FIXED
    await dbConnect();

    const body = await request.json();

    const note = await Note.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!note) {
      return NextResponse.json(
        { success: false, error: "Note not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: note });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// DELETE note
export async function DELETE(request, { params }) {
  try {
    const { id } = params; // ✅ FIXED
    await dbConnect();

    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return NextResponse.json(
        { success: false, error: "Note not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}