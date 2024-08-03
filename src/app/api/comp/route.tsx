import {NextResponse} from "next/server";
import {prisma} from "@/utils/prismaDB";

export async function POST(request: Request) {
  const body = await request.json();
  const { category } = body;

  if (!category) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const formatedCategory = category.toLowerCase();

  const user = await prisma.user.findUnique({
    where: {
      email: "",
    },
  });