import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma.js";

export const GET = async () => {
  const tasks = await prisma.tasks.findMany();
  return NextResponse.json(tasks);
};

export const POST = () => {
  return NextResponse.json({ message: "Creating tasks" });
};
