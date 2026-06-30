import { NextResponse, type NextRequest } from "next/server";
import { buildZip } from "../../carousels/zip";
import { type CardSide, cardFilename, screenshotCard } from "../../../business-card-minimax/screenshot";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SIDES: CardSide[] = ["front", "back"];

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin;

  const entries = await Promise.all(
    SIDES.map(async (side) => ({
      name: cardFilename(side),
      data: new Uint8Array(await screenshotCard(origin, side)),
    })),
  );

  const zip = buildZip(entries);
  return new NextResponse(zip as BodyInit, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="manuel-jimenez-business-card.zip"`,
      "Cache-Control": "no-store",
    },
  });
}
