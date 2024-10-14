import { db } from "@/db/drizzle";
import { products } from "@/db/schema";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const allProducts = await db.select().from(products);
    return NextResponse.json(allProducts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const { title, price, quantity } = await req.json();
    const newProduct = await db
      .insert(products)
      .values({ title, price, quantity })
      .returning();
    return NextResponse.json(newProduct, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
};
