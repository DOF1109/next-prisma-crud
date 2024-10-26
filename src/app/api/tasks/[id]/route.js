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

export const PUT = async (request, { params }) => {
  const data = await request.json();

  try {
    const updatedTask = await prisma.tasks.update({
      where: {
        id: parseInt(params.id),
      },
      data: data, // this updates the task if data have title or description or both
    });
    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json(error.message);
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const taskRemoved = await prisma.tasks.delete({
      where: {
        id: parseInt(params.id),
      },
    });
    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
};
