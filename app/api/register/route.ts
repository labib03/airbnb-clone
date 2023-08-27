import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { saltedRound } from "@src/helpers/constants/general";
import prisma from "@src/libs/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, saltedRound);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
