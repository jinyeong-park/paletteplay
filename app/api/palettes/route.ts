import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { name, colors } = body;

    // Check if user has reached the limit of 2 palettes
    const userPalettes = await prisma.palette.findMany({
      where: {
        userId: session.user.id,
      },
    });

    if (userPalettes.length >= 2) {
      return NextResponse.json(
        {
          error: "You have reached the free limit of 2 palettes. Upgrade to Premium for unlimited palettes.",
          requiresPremium: true,
        },
        { status: 402 }
      );
    }

    const palette = await prisma.palette.create({
      data: {
        name,
        colors,
        userId: session.user.id,
      },
    });

    return NextResponse.json(palette);
  } catch (error) {
    console.error("Save palette error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const palettes = await prisma.palette.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(palettes);
  } catch (error) {
    console.error("Get palettes error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 