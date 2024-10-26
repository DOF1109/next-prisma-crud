import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma.js";

export const GET = async (request, { params }) => {
  const task = await prisma.tasks.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json(task);
};

export const PUT = (request, { params }) => {
  return NextResponse.json("Updating task " + params.id);
};

export const DELETE = async (request, { params }) => {
  const taskRemoved = await prisma.tasks.delete({
    where: {
      id: parseInt(params.id),
    },
  });
  return NextResponse.json(taskRemoved);
};
