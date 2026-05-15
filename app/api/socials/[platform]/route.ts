import { NextResponse, type NextRequest } from "next/server";
import sharp from "sharp";
import { banners, type BannerKey } from "../../../socials/banners";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isBannerKey(value: string): value is BannerKey {
  return value in banners;
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ platform: string }> },
) {
  const { platform } = await params;

  if (!isBannerKey(platform)) {
    return NextResponse.json({ error: "Unknown platform" }, { status: 404 });
  }

  const spec = banners[platform];
  const svg = spec.svg();
  const png = await sharp(Buffer.from(svg), { density: 96 })
    .resize(spec.width, spec.height, { fit: "fill" })
    .png({ compressionLevel: 9 })
    .toBuffer();

  return new NextResponse(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": `attachment; filename="${spec.filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
