import { NextResponse } from "next/server";

export const GET = (request, { params }) => {
  return NextResponse.json("Getting task " + params.id);
};

export const PUT = (request, { params }) => {
  return NextResponse.json("Updating task " + params.id);
};

export const DELETE = (request, { params }) => {
  return NextResponse.json("Deleting task " + params.id);
};
