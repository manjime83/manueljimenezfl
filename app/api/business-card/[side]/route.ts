import { NextResponse, type NextRequest } from "next/server";
import { type CardSide, cardFilename, screenshotCard } from "../../../business-card-minimax/screenshot";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SIDES: CardSide[] = ["front", "back"];

export async function GET(request: NextRequest, { params }: { params: Promise<{ side: string }> }) {
  const { side } = await params;
  if (!SIDES.includes(side as CardSide)) {
    return NextResponse.json({ error: "Unknown side" }, { status: 404 });
  }

  const buffer = await screenshotCard(request.nextUrl.origin, side as CardSide);
  return new NextResponse(buffer as BodyInit, {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": `attachment; filename="${cardFilename(side as CardSide)}"`,
      "Cache-Control": "no-store",
    },
  });
}
