import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getUserPalettes, createPalette } from "@/lib/google-sheets";

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
    const userPalettes = await getUserPalettes(session.user.id);

    if (userPalettes.length >= 2) {
      return NextResponse.json(
        {
          error: "You have reached the free limit of 2 palettes. Upgrade to Premium for unlimited palettes.",
          requiresPremium: true,
        },
        { status: 402 }
      );
    }

    const palette = await createPalette({
      name,
      colors,
      userId: session.user.id,
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

    const palettes = await getUserPalettes(session.user.id);

    return NextResponse.json(palettes);
  } catch (error) {
    console.error("Get palettes error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 