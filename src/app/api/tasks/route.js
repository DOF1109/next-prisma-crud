import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma.js";

export const GET = async () => {
  const tasks = await prisma.tasks.findMany();
  return NextResponse.json(tasks);
};

export const POST = async (request) => {
  const { title, description } = await request.json();
  const newTask = await prisma.tasks.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(newTask);
};
