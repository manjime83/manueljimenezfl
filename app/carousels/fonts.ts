interface FontSpec {
  family: string;
  weight: 400 | 500 | 600 | 700;
}

const GOOGLE_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15";

const fontCache = new Map<string, Promise<ArrayBuffer>>();

async function fetchFont({ family, weight }: FontSpec): Promise<ArrayBuffer> {
  const key = `${family}:${weight}`;
  const cached = fontCache.get(key);
  if (cached) return cached;

  const promise = (async () => {
    const cssUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family).replace(/%20/g, "+")}:wght@${weight}`;
    const css = await fetch(cssUrl, { headers: { "User-Agent": GOOGLE_UA } }).then((r) => r.text());
    const matches = [...css.matchAll(/src:\s*url\((https:\/\/[^)]+)\)\s*format\('[^']+'\)/g)];
    if (matches.length === 0) {
      throw new Error(`Could not locate font URL for ${family} ${weight}`);
    }
    // Google Fonts orders blocks from extended Latin → Latin; the last block
    // is the basic Latin range we need for English/Spanish text.
    const fontUrl = matches[matches.length - 1][1];
    const buf = await fetch(fontUrl).then((r) => r.arrayBuffer());
    return buf;
  })();

  fontCache.set(key, promise);
  return promise;
}

export interface LoadedFont {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 500 | 600 | 700;
  style: "normal";
}

const FONT_SET: FontSpec[] = [
  { family: "Outfit", weight: 600 },
  { family: "Outfit", weight: 700 },
  { family: "DM Sans", weight: 400 },
  { family: "DM Sans", weight: 500 },
  { family: "DM Sans", weight: 600 },
  { family: "JetBrains Mono", weight: 400 },
];

export async function loadCarouselFonts(): Promise<LoadedFont[]> {
  return Promise.all(
    FONT_SET.map(async (spec) => ({
      name: spec.family,
      data: await fetchFont(spec),
      weight: spec.weight,
      style: "normal" as const,
    })),
  );
}
