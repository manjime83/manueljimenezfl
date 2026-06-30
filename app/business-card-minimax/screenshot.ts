import { type Browser, chromium } from "playwright";

export type CardSide = "front" | "back";

// Each side is captured straight from the live page (#card-front / #card-back),
// so app/business-card-minimax/page.tsx stays the single source of truth.
const CARD_PATH = "/business-card-minimax";

let browserPromise: Promise<Browser> | null = null;

function getBrowser(): Promise<Browser> {
  if (!browserPromise) {
    browserPromise = chromium.launch({ args: ["--no-sandbox"] });
  }
  return browserPromise;
}

export async function screenshotCard(origin: string, side: CardSide): Promise<Buffer> {
  const browser = await getBrowser();
  const context = await browser.newContext({
    deviceScaleFactor: 3,
    viewport: { width: 1440, height: 1200 },
  });
  try {
    const page = await context.newPage();
    await page.goto(`${origin}${CARD_PATH}`, { waitUntil: "load" });
    const card = page.locator(`#card-${side}`);
    await card.waitFor({ state: "visible" });
    // Fonts + every image inside the card must be ready before the capture.
    await page.evaluate(() => document.fonts.ready);
    await card.evaluate((node: Element) =>
      Promise.all(
        Array.from(node.querySelectorAll("img")).map((img) =>
          img.complete ? Promise.resolve() : new Promise((r) => img.addEventListener("load", r, { once: true })),
        ),
      ),
    );
    return await card.screenshot({ omitBackground: true });
  } finally {
    await context.close();
  }
}

export function cardFilename(side: CardSide): string {
  return `manuel-jimenez-business-card-${side}.png`;
}
