import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "Getting tasks" });
};

export const POST = () => {
  return NextResponse.json({ message: "Creating tasks" });
};
