import fs from "node:fs";
import path from "node:path";

const LOGO_DATA_URI: string = (() => {
  try {
    const buf = fs.readFileSync(path.join(process.cwd(), "public", "logo-transparent.png"));
    return `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    return "/logo-transparent.png";
  }
})();

const COLORS = {
  bg: "#000000",
  surface: "#181e25",
  border: "#2a3038",
  borderStrong: "#3a4049",
  text: "#ffffff",
  textMuted: "#c5c9cf",
  textDim: "#7a808a",
  accent: "#c8ff00",
} as const;

const FONT_DISPLAY = "Outfit, 'Helvetica Neue', Helvetica, Arial, sans-serif";
const FONT_MONO = "'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace";

const NAME = "Manuel Jiménez";
const ROLE = "Real Estate Agent";
const SITE = "manueljimenezfl.com";
const LICENSE = "License SL3658224";
const REGION = "Central Florida";
const PHONE = "+1 (407) 301-0492";

const WHATSAPP_PATH =
  "M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zM12.04 20.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43-.14 0-.31-.01-.48-.01a.9.9 0 0 0-.66.31c-.23.25-.86.84-.86 2.04 0 1.21.89 2.37 1.01 2.53.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.48-.27z";

function whatsappIcon(x: number, y: number, size: number, color: string) {
  const s = size / 24;
  return `<g transform="translate(${x},${y}) scale(${s})" fill="${color}"><path d="${WHATSAPP_PATH}" /></g>`;
}

function dotSeparatedRow(
  cx: number,
  baselineY: number,
  fontSize: number,
  tracking: number,
  leftText: string,
  rightText: string,
  leftColor: string,
  rightColor: string,
  dotColor: string,
) {
  const charW = fontSize * 0.6 + tracking;
  const leftW = leftText.length * charW;
  const rightW = rightText.length * charW;
  const dotR = fontSize * 0.3;
  const gap = fontSize * 1.1;
  const totalW = leftW + gap + dotR * 2 + gap + rightW;
  const startX = cx - totalW / 2;
  const dotCx = startX + leftW + gap + dotR;
  const rightX = dotCx + dotR + gap;
  const dotCy = baselineY - fontSize * 0.35;
  return `<text x="${startX}" y="${baselineY}" font-family="${FONT_MONO}" font-size="${fontSize}" letter-spacing="${tracking}" fill="${leftColor}">${leftText}</text>
    <circle cx="${dotCx}" cy="${dotCy}" r="${dotR}" fill="${dotColor}" />
    <text x="${rightX}" y="${baselineY}" font-family="${FONT_MONO}" font-size="${fontSize}" letter-spacing="${tracking}" fill="${rightColor}">${rightText}</text>`;
}

function whatsappRow(
  cx: number,
  baselineY: number,
  fontSize: number,
  tracking: number,
  text: string,
  iconColor: string,
  textColor: string,
) {
  // mono advance width ≈ 0.6 × fontSize; add letter-spacing (user units) per glyph.
  const charW = fontSize * 0.6 + tracking;
  const textW = text.length * charW;
  const iconSize = fontSize * 1.3;
  const gap = fontSize * 0.5;
  const totalW = iconSize + gap + textW;
  const startX = cx - totalW / 2;
  const iconY = baselineY - iconSize * 0.82;
  return `${whatsappIcon(startX, iconY, iconSize, iconColor)}
    <text x="${startX + iconSize + gap}" y="${baselineY}" font-family="${FONT_MONO}" font-size="${fontSize}" letter-spacing="${tracking}" fill="${textColor}">${text}</text>`;
}

function dotPattern(id: string, size: number, opacity: number) {
  return `
    <pattern id="${id}" width="${size}" height="${size}" patternUnits="userSpaceOnUse">
      <circle cx="${size / 2}" cy="${size / 2}" r="1.6" fill="rgba(255,255,255,${opacity})" />
    </pattern>`;
}

function framingBrackets(x: number, y: number, w: number, h: number, len: number, stroke: number, color: string) {
  return `
    <g stroke="${color}" stroke-width="${stroke}" fill="none" stroke-linecap="square">
      <path d="M ${x} ${y + len} L ${x} ${y} L ${x + len} ${y}" />
      <path d="M ${x + w - len} ${y} L ${x + w} ${y} L ${x + w} ${y + len}" />
      <path d="M ${x + w} ${y + h - len} L ${x + w} ${y + h} L ${x + w - len} ${y + h}" />
      <path d="M ${x + len} ${y + h} L ${x} ${y + h} L ${x} ${y + h - len}" />
    </g>`;
}

function bgLayers(W: number, H: number, dotId: string) {
  return `
    <rect width="${W}" height="${H}" fill="${COLORS.bg}" />
    <rect width="${W}" height="${H}" fill="url(#${dotId})" />`;
}

export type BannerKey = "youtube" | "facebook" | "instagram";

export interface BannerSpec {
  key: BannerKey;
  platform: string;
  width: number;
  height: number;
  filename: string;
  svg: () => string;
}

// YouTube — 2560 × 1440, TV-safe 1546 × 423 centered
function youtubeBanner(): string {
  const W = 2560;
  const H = 1440;
  const safeW = 1546;
  const safeH = 423;
  const safeX = (W - safeW) / 2;
  const safeY = (H - safeH) / 2;
  const headlineFs = 188;
  const cx = W / 2;
  const accentLineW = 240;
  const accentLineH = 6;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>${dotPattern("yt-d", 36, 0.18)}</defs>
  ${bgLayers(W, H, "yt-d")}
  <text x="80" y="80" font-family="${FONT_MONO}" font-size="22" letter-spacing="6" fill="${COLORS.textDim}">REEL.001 · MJ.FL</text>
  <text x="${W - 80}" y="80" text-anchor="end" font-family="${FONT_MONO}" font-size="22" letter-spacing="6" fill="${COLORS.textDim}">02560 × 01440</text>
  <text x="80" y="${H - 60}" font-family="${FONT_MONO}" font-size="22" letter-spacing="6" fill="${COLORS.textDim}" font-variant-numeric="tabular-nums">T+ 00:00:00</text>
  <text x="${W - 80}" y="${H - 60}" text-anchor="end" font-family="${FONT_MONO}" font-size="22" letter-spacing="6" fill="${COLORS.textDim}" font-variant-numeric="tabular-nums">28.5384°N · 81.3789°W</text>
  ${framingBrackets(safeX - 48, safeY - 48, safeW + 96, safeH + 96, 72, 3, COLORS.accent)}
  <text x="${cx}" y="${safeY + 56}" text-anchor="middle" font-family="${FONT_MONO}" font-size="22" letter-spacing="8" fill="${COLORS.textDim}">— ${REGION.toUpperCase()} —</text>
  <text x="${cx}" y="${safeY + 120 + headlineFs * 0.74}" text-anchor="middle" font-family="${FONT_DISPLAY}" font-weight="600" font-size="${headlineFs}" letter-spacing="-4" fill="${COLORS.text}">${NAME}</text>
  <rect x="${cx - accentLineW / 2}" y="${safeY + 120 + headlineFs * 0.74 + 44}" width="${accentLineW}" height="${accentLineH}" fill="${COLORS.accent}" />
  <text x="${cx}" y="${safeY + safeH - 50}" text-anchor="middle" font-family="${FONT_MONO}" font-size="20" letter-spacing="6" fill="${COLORS.textDim}">${SITE.toUpperCase()}</text>
  ${dotSeparatedRow(cx, safeY + safeH - 10, 20, 6, ROLE.toUpperCase(), LICENSE.toUpperCase(), COLORS.textMuted, COLORS.textDim, COLORS.accent)}
  ${whatsappRow(cx, safeY + safeH + 30, 24, 6, PHONE, COLORS.accent, COLORS.text)}
</svg>`;
}

// Facebook — 1640 × 624
function facebookBanner(): string {
  const W = 1640;
  const H = 624;
  const padX = 88;
  const padY = 72;
  const headlineFs = 116;
  const cx = W / 2;
  const cy = H / 2;
  const accentLineW = 160;
  const accentLineH = 4;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>${dotPattern("fb-d", 32, 0.18)}</defs>
  ${bgLayers(W, H, "fb-d")}
  ${framingBrackets(padX, padY, W - padX * 2, H - padY * 2, 56, 3, COLORS.accent)}
  <text x="${cx}" y="${padY + 56}" text-anchor="middle" font-family="${FONT_MONO}" font-size="18" letter-spacing="8" fill="${COLORS.textDim}">— ${REGION.toUpperCase()} —</text>
  <text x="${cx}" y="${cy + headlineFs * 0.32}" text-anchor="middle" font-family="${FONT_DISPLAY}" font-weight="600" font-size="${headlineFs}" letter-spacing="-3" fill="${COLORS.text}">${NAME}</text>
  <rect x="${cx - accentLineW / 2}" y="${cy + headlineFs * 0.32 + 42}" width="${accentLineW}" height="${accentLineH}" fill="${COLORS.accent}" />
  <text x="${cx}" y="${H - padY - 80}" text-anchor="middle" font-family="${FONT_MONO}" font-size="14" letter-spacing="5" fill="${COLORS.textDim}">${SITE.toUpperCase()}</text>
  ${dotSeparatedRow(cx, H - padY - 48, 14, 5, ROLE.toUpperCase(), LICENSE.toUpperCase(), COLORS.textMuted, COLORS.textDim, COLORS.accent)}
  ${whatsappRow(cx, H - padY - 14, 16, 5, PHONE, COLORS.accent, COLORS.text)}
</svg>`;
}

// Instagram — 1080 × 1920
function instagramBanner(): string {
  const W = 1080;
  const H = 1920;
  const padX = 80;
  const headlineFs = 168;
  const cx = W / 2;
  const cy = (H / 2) * 1.2;
  const accentLineW = 220;
  const accentLineH = 5;
  const logoSize = 220;
  const logoX = cx - logoSize / 2;
  // pair the logo tightly above the headline by mirroring the headline→bar gap below.
  const logoNameGap = 80;
  const logoY = Math.round(cy - headlineFs * 0.94 - logoSize - logoNameGap);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>${dotPattern("ig-d", 32, 0.18)}
    <filter id="ig-logo-invert" color-interpolation-filters="sRGB">
      <feColorMatrix type="matrix" values="-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0" />
    </filter>
  </defs>
  ${bgLayers(W, H, "ig-d")}
  ${framingBrackets(padX, 200, W - padX * 2, H - 400, 64, 3, COLORS.accent)}
  <text x="${cx}" y="${300}" text-anchor="middle" font-family="${FONT_MONO}" font-size="22" letter-spacing="8" fill="${COLORS.textDim}">— ${REGION.toUpperCase()} —</text>
  <image href="${LOGO_DATA_URI}" xlink:href="${LOGO_DATA_URI}" x="${logoX}" y="${logoY}" width="${logoSize}" height="${logoSize}" preserveAspectRatio="xMidYMid meet" filter="url(#ig-logo-invert)" />
  <text x="${cx}" y="${cy - headlineFs * 0.2}" text-anchor="middle" font-family="${FONT_DISPLAY}" font-weight="600" font-size="${headlineFs}" letter-spacing="-3" fill="${COLORS.text}">Manuel</text>
  <text x="${cx}" y="${cy + headlineFs * 0.7}" text-anchor="middle" font-family="${FONT_DISPLAY}" font-weight="600" font-size="${headlineFs}" letter-spacing="-3" fill="${COLORS.text}">Jiménez</text>
  <rect x="${cx - accentLineW / 2}" y="${cy + headlineFs * 0.9 + 48}" width="${accentLineW}" height="${accentLineH}" fill="${COLORS.accent}" />
  <text x="${cx}" y="${H - 340}" text-anchor="middle" font-family="${FONT_MONO}" font-size="22" letter-spacing="6" fill="${COLORS.textDim}">${SITE.toUpperCase()}</text>
  ${dotSeparatedRow(cx, H - 280, 22, 6, ROLE.toUpperCase(), LICENSE.toUpperCase(), COLORS.textMuted, COLORS.textDim, COLORS.accent)}
  ${whatsappRow(cx, H - 220, 28, 6, PHONE, COLORS.accent, COLORS.text)}
</svg>`;
}

export const banners: Record<BannerKey, BannerSpec> = {
  youtube: {
    key: "youtube",
    platform: "YouTube channel art",
    width: 2560,
    height: 1440,
    filename: "manueljimenezfl-youtube.png",
    svg: youtubeBanner,
  },
  facebook: {
    key: "facebook",
    platform: "Facebook cover",
    width: 1640,
    height: 624,
    filename: "manueljimenezfl-facebook.png",
    svg: facebookBanner,
  },
  instagram: {
    key: "instagram",
    platform: "Instagram story / reel cover",
    width: 1080,
    height: 1920,
    filename: "manueljimenezfl-instagram.png",
    svg: instagramBanner,
  },
};
