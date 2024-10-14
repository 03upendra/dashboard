import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const allUsers = await db.select().from(users);
    return NextResponse.json(allUsers, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  try {
    const { name, email, age } = await req.json();
    console.log(name);
    const newUser = await db
      .insert(users)
      .values({ name, email, age })
      .returning();
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
};
