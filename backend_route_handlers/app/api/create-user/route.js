import { NextResponse } from "next/server";
import { users } from "../hello/route";

export async function POST(request) {
  try {
    const { name, email, age } = await request.json();

    if (!name || !email || !age) {
      return NextResponse.json(
        {
          status: "error",
          error: "Name, email, and age are required",
        },
        { status: 400 }
      );
    }

    const emailexists = users.find((u) => u.email === email);

    if (emailexists) {
      return NextResponse.json(
        {
          status: "error",
          error: "Email already exists",
        },
        { status: 400 }
      );
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
      age,
    };

    users.push(newUser);

    return NextResponse.json(
      {
        status: "success",
        message: "User created successfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        error: "Failed to create user",
      },
      { status: 500 }
    );
  }
}