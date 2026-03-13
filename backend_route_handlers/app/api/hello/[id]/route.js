import { NextResponse } from "next/server";
import { users } from "../route";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const foundUser = users.find((u) => u.id === parseInt(id, 10));

    if (!foundUser) {
      return NextResponse.json(
        {
          status: "error",
          error: "User not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        user: foundUser,
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        error: "Failed to fetch user data",
      },
      { status: 500 }
    );
  }
}