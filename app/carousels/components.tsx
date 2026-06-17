import fs from "node:fs";
import path from "node:path";
import type { CSSProperties, ReactElement } from "react";
import type { Slide } from "./data";

const LOGO_DATA_URI: string = (() => {
  try {
    const buf = fs.readFileSync(path.join(process.cwd(), "public", "logo-transparent.png"));
    return `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    return "/logo-transparent.png";
  }
})();

export const COLORS = {
  bg: "#000000",
  surface: "#181e25",
  border: "#2a3038",
  text: "#ffffff",
  textMuted: "#c5c9cf",
  textDim: "#7a808a",
  accent: "#c8ff00",
} as const;

const FONT_DISPLAY = "Outfit";
const FONT_SANS = "DM Sans";
const FONT_MONO = "JetBrains Mono";

const NAME = "Manuel Jiménez";
const ROLE = "Real Estate Agent";
const LICENSE = "License SL3658224";
const PHONE = "+1 (407) 301-0492";

const DOT_BG_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='1.5' fill='rgba(255,255,255,0.18)'/%3E%3C/svg%3E\")";

const PAD = 80;
// Cover and CTA slides breathe more — bigger inset so the hero copy doesn't fill edge-to-edge.
const PAD_HERO = 140;
const SIZE = 1080;

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

// Char-budget heuristic for picking a display font size that fits the canvas
// without measuring. Tuned for Outfit 600/700 at tight tracking, 920px wide.
function pickFs(text: string, scale: { fs: number; maxChars: number }[]): number {
  const len = text.length;
  for (const step of scale) {
    if (len <= step.maxChars) return step.fs;
  }
  return scale[scale.length - 1].fs;
}

function Brackets({ color = COLORS.accent }: { color?: string }) {
  const inset = PAD - 16;
  const len = 56;
  const w = 3;
  const corner = (style: CSSProperties): CSSProperties => ({
    position: "absolute",
    width: len,
    height: len,
    display: "flex",
    ...style,
  });
  return (
    <>
      <div
        style={{
          ...corner({ top: inset, left: inset }),
          borderTop: `${w}px solid ${color}`,
          borderLeft: `${w}px solid ${color}`,
        }}
      />
      <div
        style={{
          ...corner({ top: inset, right: inset }),
          borderTop: `${w}px solid ${color}`,
          borderRight: `${w}px solid ${color}`,
        }}
      />
      <div
        style={{
          ...corner({ bottom: inset, left: inset }),
          borderBottom: `${w}px solid ${color}`,
          borderLeft: `${w}px solid ${color}`,
        }}
      />
      <div
        style={{
          ...corner({ bottom: inset, right: inset }),
          borderBottom: `${w}px solid ${color}`,
          borderRight: `${w}px solid ${color}`,
        }}
      />
    </>
  );
}

function TopChrome({ index, total }: { index: number; total: number }) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: "flex",
        justifyContent: "flex-end",
        fontFamily: FONT_MONO,
        fontSize: 30,
        letterSpacing: 6,
        color: COLORS.textMuted,
        textTransform: "uppercase",
      }}
    >
      <span>{`${pad2(index)} / ${pad2(total)}`}</span>
    </div>
  );
}

// Bounded content area between the top and bottom chrome. Using flex flow (rather
// than absolute positioning) guarantees content can never overlap the chrome —
// tall content is contained by the column instead of spilling over it.
function ContentArea({
  children,
  justify = "flex-start",
  align = "stretch",
}: {
  children: React.ReactNode;
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
}) {
  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: justify,
        alignItems: align,
        marginTop: 44,
        marginBottom: 36,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

function SlideBase({
  children,
  dots = true,
  brackets = false,
  pad = PAD,
}: {
  children: React.ReactNode;
  dots?: boolean;
  brackets?: boolean;
  pad?: number;
}) {
  return (
    <div
      style={{
        width: SIZE,
        height: SIZE,
        position: "relative",
        display: "flex",
        backgroundColor: COLORS.bg,
        backgroundImage: dots ? DOT_BG_URI : undefined,
        backgroundSize: "32px 32px",
        backgroundRepeat: "repeat",
        color: COLORS.text,
        fontFamily: FONT_SANS,
        overflow: "hidden",
      }}
    >
      {/* Brackets stay at the original inset; only the content padding grows. */}
      {brackets && <Brackets />}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: pad,
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface SlideContext {
  index: number;
  total: number;
  projectLabel: string;
}

function CoverSlide({ slide, ctx }: { slide: Extract<Slide, { type: "cover" }>; ctx: SlideContext }) {
  const titleFs = pickFs(slide.title, [
    { fs: 184, maxChars: 14 },
    { fs: 152, maxChars: 24 },
    { fs: 124, maxChars: 40 },
    { fs: 100, maxChars: 60 },
    { fs: 84, maxChars: 1000 },
  ]);

  return (
    <SlideBase brackets pad={PAD_HERO}>
      <TopChrome index={ctx.index} total={ctx.total} />

      <ContentArea justify="space-between">
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <img src={LOGO_DATA_URI} width={150} height={150} style={{ filter: "invert(1)" }} alt="" />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 26,
              letterSpacing: 6,
              color: COLORS.textDim,
              textTransform: "uppercase",
              paddingBottom: 16,
            }}
          >
            {slide.eyebrow}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", flexShrink: 0 }}>
          <div
            style={{
              fontFamily: FONT_DISPLAY,
              fontWeight: 700,
              fontSize: titleFs,
              letterSpacing: -4,
              lineHeight: 0.94,
              color: COLORS.text,
              display: "flex",
            }}
          >
            {slide.title}
          </div>
          <div
            style={{
              width: 260,
              height: 8,
              backgroundColor: COLORS.accent,
              marginTop: 48,
              display: "flex",
            }}
          />
          {slide.subtitle && (
            <div
              style={{
                fontFamily: FONT_SANS,
                fontSize: 46,
                lineHeight: 1.3,
                color: COLORS.textMuted,
                marginTop: 48,
                display: "flex",
                maxWidth: 880,
              }}
            >
              {slide.subtitle}
            </div>
          )}
        </div>
      </ContentArea>
    </SlideBase>
  );
}

function BodySlide({ slide, ctx }: { slide: Extract<Slide, { type: "body" }>; ctx: SlideContext }) {
  const headlineFs = pickFs(slide.headline, [
    { fs: 120, maxChars: 18 },
    { fs: 100, maxChars: 30 },
    { fs: 84, maxChars: 48 },
    { fs: 72, maxChars: 1000 },
  ]);

  return (
    <SlideBase>
      <TopChrome index={ctx.index} total={ctx.total} />

      <ContentArea justify="center">
        {slide.eyebrow && (
          <div
            style={{
              fontFamily: FONT_MONO,
              fontSize: 36,
              letterSpacing: 6,
              color: COLORS.accent,
              textTransform: "uppercase",
              display: "flex",
              flexShrink: 0,
            }}
          >
            {slide.eyebrow}
          </div>
        )}
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 600,
            fontSize: headlineFs,
            letterSpacing: -2,
            lineHeight: 0.96,
            color: COLORS.text,
            display: "flex",
            flexShrink: 0,
            marginTop: slide.eyebrow ? 44 : 0,
          }}
        >
          {slide.headline}
        </div>
        <div
          style={{
            width: 220,
            height: 6,
            backgroundColor: COLORS.accent,
            marginTop: 40,
            display: "flex",
            flexShrink: 0,
          }}
        />

        {slide.bullets && slide.bullets.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 52,
              gap: 30,
              flexShrink: 0,
            }}
          >
            {slide.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 28 }}>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    backgroundColor: COLORS.accent,
                    flexShrink: 0,
                    marginTop: 20,
                    display: "flex",
                  }}
                />
                <div
                  style={{
                    fontFamily: FONT_SANS,
                    fontSize: 39,
                    lineHeight: 1.36,
                    color: COLORS.textMuted,
                    display: "flex",
                    flex: 1,
                  }}
                >
                  {b}
                </div>
              </div>
            ))}
          </div>
        )}

        {slide.body && (
          <div
            style={{
              fontFamily: FONT_SANS,
              fontSize: 44,
              lineHeight: 1.4,
              color: COLORS.textMuted,
              marginTop: 52,
              display: "flex",
              flexShrink: 0,
              maxWidth: 920,
            }}
          >
            {slide.body}
          </div>
        )}
      </ContentArea>
    </SlideBase>
  );
}

function CtaSlide({ slide, ctx }: { slide: Extract<Slide, { type: "cta" }>; ctx: SlideContext }) {
  const headlineFs = pickFs(slide.headline, [
    { fs: 172, maxChars: 14 },
    { fs: 144, maxChars: 22 },
    { fs: 116, maxChars: 36 },
    { fs: 96, maxChars: 1000 },
  ]);

  return (
    <SlideBase brackets pad={PAD_HERO}>
      <TopChrome index={ctx.index} total={ctx.total} />

      <ContentArea justify="center" align="center">
        {slide.eyebrow && (
          <div
            style={{
              fontFamily: FONT_MONO,
              fontSize: 34,
              letterSpacing: 8,
              color: COLORS.textMuted,
              textTransform: "uppercase",
              display: "flex",
              flexShrink: 0,
              marginBottom: 36,
            }}
          >
            — {slide.eyebrow} —
          </div>
        )}
        <div
          style={{
            fontFamily: FONT_DISPLAY,
            fontWeight: 700,
            fontSize: headlineFs,
            letterSpacing: -3,
            lineHeight: 0.94,
            color: COLORS.text,
            display: "flex",
            flexShrink: 0,
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {slide.headline}
        </div>
        <div
          style={{
            width: 260,
            height: 8,
            backgroundColor: COLORS.accent,
            marginTop: 40,
            display: "flex",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            marginTop: 48,
            paddingTop: 26,
            paddingBottom: 26,
            paddingLeft: 56,
            paddingRight: 56,
            backgroundColor: COLORS.accent,
            borderRadius: 999,
            color: COLORS.surface,
            fontFamily: FONT_SANS,
            fontWeight: 600,
            fontSize: 40,
            letterSpacing: 3,
            textTransform: "uppercase",
            display: "flex",
            flexShrink: 0,
          }}
        >
          {slide.cta}
        </div>

        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            gap: 26,
            flexShrink: 0,
          }}
        >
          <WhatsAppIcon size={56} color={COLORS.accent} />
          <span
            style={{
              fontFamily: FONT_MONO,
              fontSize: 46,
              letterSpacing: 4,
              color: COLORS.text,
            }}
          >
            {slide.phone ?? PHONE}
          </span>
        </div>

        <div
          style={{
            fontFamily: FONT_MONO,
            fontSize: 26,
            letterSpacing: 4,
            color: COLORS.textMuted,
            textTransform: "uppercase",
            marginTop: 40,
            display: "flex",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {NAME}  ·  {ROLE}
        </div>
        <div
          style={{
            fontFamily: FONT_MONO,
            fontSize: 28,
            letterSpacing: 6,
            color: COLORS.textDim,
            textTransform: "uppercase",
            marginTop: 18,
            display: "flex",
            flexShrink: 0,
          }}
        >
          {LICENSE}
        </div>
      </ContentArea>
    </SlideBase>
  );
}

function WhatsAppIcon({ size, color }: { size: number; color: string }) {
  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zM12.04 20.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14 0-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.04 0 1.21.89 2.37 1.01 2.53.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.48-.27z"/></svg>`,
  )}`;
  return <img src={dataUri} width={size} height={size} alt="" style={{ display: "flex" }} />;
}

export function renderSlide(slide: Slide, ctx: SlideContext): ReactElement {
  if (slide.type === "cover") return <CoverSlide slide={slide} ctx={ctx} />;
  if (slide.type === "body") return <BodySlide slide={slide} ctx={ctx} />;
  return <CtaSlide slide={slide} ctx={ctx} />;
}
