import type { Metadata } from "next";
import Link from "next/link";
import { renderSlide } from "./components";
import { carousels, projectLabel, type Slide } from "./data";
import { ScaledSlide } from "./ScaledSlide";

export const metadata: Metadata = {
  title: "Manuel Jimenez FL | Instagram carousels",
  description:
    "MiniMax-style 1:1 Instagram carousels — cover, body and CTA slides exportable as PNG or as a full ZIP sequence.",
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4" fill="none">
      <path
        d="M4 10h11m0 0-4.4-4.4M15 10l-4.4 4.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SlideKindBadge({ kind }: { kind: Slide["type"] }) {
  const label = kind === "cover" ? "Cover" : kind === "cta" ? "CTA" : "Body";
  return (
    <span className="font-minimax-mono inline-flex items-center rounded-full border border-[#2a3038] bg-[#0a0a0a] px-3 py-1 text-[11px] tracking-[0.18em] text-[#c5c9cf] uppercase">
      {label}
    </span>
  );
}

function CarouselSection({ slug }: { slug: string }) {
  const carousel = carousels[slug];
  if (!carousel) return null;
  const total = carousel.slides.length;
  const label = projectLabel(carousel);
  const zipHref = `/api/carousels/${carousel.slug}/zip`;

  return (
    <section className="mt-16">
      <div className="flex flex-wrap items-end justify-between gap-5 border-b border-[#2a3038] pb-6">
        <div>
          <p className="font-minimax-mono text-[11px] tracking-[0.18em] text-[#7a808a] uppercase">{label}</p>
          <h2 className="font-minimax-display mt-3 text-4xl leading-tight font-semibold md:text-5xl">{carousel.title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.55] text-[#c5c9cf]">{carousel.description}</p>
        </div>
        <a
          href={zipHref}
          className="group inline-flex items-center gap-2 rounded-full bg-[#c8ff00] px-5 py-2.5 text-sm font-medium text-[#181e25] transition-colors hover:bg-[#d8ff3a] focus:ring-2 focus:ring-[#9bcc00] focus:outline-none"
        >
          Download full sequence (ZIP)
          <span className="transition-transform group-hover:translate-x-0.5">
            <ArrowIcon />
          </span>
        </a>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {carousel.slides.map((slide, i) => {
          const index = i + 1;
          const downloadHref = `/api/carousels/${carousel.slug}/${index}`;
          return (
            <article key={index} className="grid gap-4 border border-[#2a3038] bg-[#0a0a0a] p-5">
              <header className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <SlideKindBadge kind={slide.type} />
                  <span className="font-minimax-mono text-[11px] tracking-[0.16em] text-[#7a808a] uppercase">
                    {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")} · 1080 × 1080
                  </span>
                </div>
                <a
                  href={downloadHref}
                  className="group inline-flex items-center gap-2 rounded-full border border-[#2a3038] bg-[#181e25] px-4 py-2 text-xs font-medium tracking-[0.04em] text-white transition-colors hover:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
                >
                  PNG
                  <span className="transition-transform group-hover:translate-x-0.5">
                    <ArrowIcon />
                  </span>
                </a>
              </header>
              <ScaledSlide>{renderSlide(slide, { index, total, projectLabel: label })}</ScaledSlide>
            </article>
          );
        })}
      </div>
    </section>
  );
}

const replicationPrompt = `You are designing an Instagram carousel for Manuel Jiménez FL, a real estate agent in Central Florida. Output is a sequence of 1:1 (1080×1080) slides, dark cinematic "MiniMax" lab style.

Rules
- Aspect ratio: 1:1, 1080×1080 per slide.
- Sequence: exactly one cover slide, then 1–10 body slides, then exactly one CTA (end) slide.
- Tone: research-trailer / cinematic lab. Calm authority, no hype. Sentences are short, declarative, useful.
- Language: match the language the user asked for; default to English. Avoid emojis.

Visual system
- Canvas: pure black (#000000) with a faint white dot pattern overlay.
- Accent: neon lime #c8ff00 — used for one moment per slide (an underline bar, a bullet dot, the CTA pill, a frame). Never tints body text.
- Borders: 1px hairline in #2a3038. Cinematic L-brackets (3px lime) frame the cover and CTA slides.
- Typography:
  * Display: Outfit 600–700, tight tracking. Headlines balanced, max 3 lines.
  * Body: DM Sans 400/500. Color #c5c9cf.
  * Mono / labels: JetBrains Mono, uppercase, letter-spacing 6–8. Color #7a808a (dim) for chrome, #c8ff00 for accent eyebrows.
- Top chrome on every slide: mono label left ("CAROUSEL · {SLUG}"), pagination right ("01 / 05").
- Bottom chrome on every slide: site URL left ("MANUELJIMENEZFL.COM"), region right ("— CENTRAL FLORIDA —").
- No drop shadows. Flat surfaces only.

Slide types
1) Cover — stop the scroll. Left-aligned. Inverted logo top-left, eyebrow tag top-right. Massive display headline, lime accent bar under it, one- or two-line subtitle hook. L-brackets frame the canvas.

2) Body — deliver one idea. Lime mono eyebrow ("STEP 02 · LOCATION"), left-aligned display headline, lime accent bar, then EITHER 2–3 bulleted points OR a single paragraph (3–5 lines). No L-brackets.

3) CTA — convert. Centered. Mono eyebrow with em-dashes ("— WORK WITH ME —"), centered display headline, centered lime accent bar, lime pill CTA, WhatsApp icon + phone, name + role line, license line. L-brackets frame.

Hard length limits — content is rendered at large sizes for feed legibility, so each field has tight budgets. The renderer auto-shrinks the display size by character count, but layout breaks if you exceed the hard max. Respect them.

  Field                        | Hard max | Sweet spot
  --------------------------------------------------------
  eyebrow (any slide)          | 24 chars | 14–20
  cover.title                  | 50 chars | 16–28
  cover.subtitle               | 70 chars | 30–55
  body.headline                | 48 chars | 14–24
  body.bullets[] (max 3 items) | 56 chars | 28–46
  body.body (paragraph)        | 180 chars| 100–160
  cta.headline                 | 36 chars | 14–24
  cta.cta (pill label)         | 20 chars | 10–16

Use bullets OR a paragraph for body slides — never both. If your copy exceeds the hard max, REWRITE it shorter — punchier copy reads better at scale.

Content checklist
- Cover headline: one specific, concrete promise. Subtitle states the payoff in one sentence.
- Body headlines: one verb-led idea per slide. Bullets or paragraph teach, not sell.
- CTA: action-oriented second-person ("Let's find your first home."). Pill text is a verb phrase.

Constants (already wired into the renderer — do NOT include them in the slide content)
- Name: Manuel Jiménez
- Role: Real Estate Agent
- License: SL3658224
- Site: manueljimenezfl.com
- Region: Central Florida
- Phone (WhatsApp): +1 (407) 301-0492

Output
Return JSON in this shape, which slots into the carousels map in app/carousels/data.ts:

{
  "slug": "kebab-case-topic",
  "title": "Human-readable title",
  "description": "One sentence describing the carousel.",
  "slides": [
    { "type": "cover", "eyebrow": "Guide · 01", "title": "...", "subtitle": "..." },
    { "type": "body",  "eyebrow": "Step 01 · ...", "headline": "...", "bullets": ["...", "..."] },
    { "type": "body",  "eyebrow": "Step 02 · ...", "headline": "...", "body": "..." },
    { "type": "cta",   "eyebrow": "Work with me", "headline": "...", "cta": "Send me a message" }
  ]
}`;

export default function CarouselsPage() {
  return (
    <main className="font-minimax-sans min-h-screen bg-black text-white">
      <section className="mx-auto w-full max-w-7xl px-5 py-12 md:px-8">
        <header className="max-w-3xl">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-minimax-mono text-[11px] tracking-[0.18em] text-[#7a808a] uppercase hover:text-[#c8ff00]"
            >
              ← Back to site
            </Link>
          </div>
          <p className="font-minimax-mono mt-6 text-[12px] tracking-[0.18em] text-[#7a808a] uppercase">
            Instagram · 1:1 carousels
          </p>
          <h1 className="font-minimax-display mt-4 text-5xl leading-[0.96] font-semibold md:text-7xl">
            Carousels.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.55] text-[#c5c9cf]">
            Square 1080×1080 slides in the MiniMax cinematic lab style. Each carousel runs one cover slide to stop the
            scroll, between one and ten body slides to deliver the idea, and a final CTA slide to convert. Download a
            single PNG, or pull the whole sequence as a ZIP.
          </p>
        </header>

        {Object.keys(carousels).map((slug) => (
          <CarouselSection key={slug} slug={slug} />
        ))}

        <section className="mt-20 border-t border-[#2a3038] pt-12">
          <p className="font-minimax-mono text-[11px] tracking-[0.18em] text-[#7a808a] uppercase">
            Replication prompt
          </p>
          <h2 className="font-minimax-display mt-4 text-3xl leading-tight font-semibold md:text-4xl">
            Paste this into Claude or ChatGPT to generate a new carousel.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-[1.55] text-[#c5c9cf]">
            The prompt locks the visual rules, the slide-type rhythm, the character budgets and the tone of voice. The
            model returns JSON that matches the <code className="font-minimax-mono text-[#c8ff00]">Carousel</code> type
            in <code className="font-minimax-mono text-[#c8ff00]">app/carousels/data.ts</code> — drop it into the{" "}
            <code className="font-minimax-mono text-[#c8ff00]">carousels</code> map and the slides render automatically.
          </p>
          <pre className="font-minimax-mono mt-8 max-h-[640px] overflow-auto border border-[#2a3038] bg-[#0a0a0a] p-6 text-[12px] leading-[1.65] whitespace-pre-wrap text-[#c5c9cf]">
            {replicationPrompt}
          </pre>
        </section>
      </section>
    </main>
  );
}
