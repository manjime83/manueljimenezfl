import { ImageResponse } from "next/og";
import { NextResponse, type NextRequest } from "next/server";
import { renderSlide } from "../../../../carousels/components";
import { carousels, carouselFilename, projectLabel, SLIDE_SIZE } from "../../../../carousels/data";
import { loadCarouselFonts } from "../../../../carousels/fonts";
import { buildZip } from "../../zip";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const carousel = carousels[slug];
  if (!carousel) {
    return NextResponse.json({ error: "Unknown carousel" }, { status: 404 });
  }

  const total = carousel.slides.length;
  const label = projectLabel(carousel);
  const fonts = await loadCarouselFonts();

  const entries = await Promise.all(
    carousel.slides.map(async (slide, i) => {
      const response = new ImageResponse(renderSlide(slide, { index: i + 1, total, projectLabel: label }), {
        width: SLIDE_SIZE,
        height: SLIDE_SIZE,
        fonts,
      });
      const buf = await response.arrayBuffer();
      return {
        name: carouselFilename(carousel, i + 1, total, slide.type),
        data: new Uint8Array(buf),
      };
    }),
  );

  const zip = buildZip(entries);
  const filename = `${carousel.slug}-carousel.zip`;
  return new NextResponse(new Uint8Array(zip), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
