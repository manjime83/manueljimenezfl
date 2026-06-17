import { ImageResponse } from "next/og";
import { NextResponse, type NextRequest } from "next/server";
import { renderSlide } from "../../../../carousels/components";
import { carousels, carouselFilename, projectLabel, SLIDE_SIZE } from "../../../../carousels/data";
import { loadCarouselFonts } from "../../../../carousels/fonts";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string; index: string }> },
) {
  const { slug, index } = await params;
  const carousel = carousels[slug];
  if (!carousel) {
    return NextResponse.json({ error: "Unknown carousel" }, { status: 404 });
  }
  const i = Number.parseInt(index, 10);
  if (!Number.isInteger(i) || i < 1 || i > carousel.slides.length) {
    return NextResponse.json({ error: "Slide out of range" }, { status: 404 });
  }
  const slide = carousel.slides[i - 1];
  const fonts = await loadCarouselFonts();

  const response = new ImageResponse(
    renderSlide(slide, { index: i, total: carousel.slides.length, projectLabel: projectLabel(carousel) }),
    {
      width: SLIDE_SIZE,
      height: SLIDE_SIZE,
      fonts,
    },
  );

  const buffer = await response.arrayBuffer();
  const filename = carouselFilename(carousel, i, carousel.slides.length, slide.type);
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
