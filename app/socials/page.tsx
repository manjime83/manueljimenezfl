import type { Metadata } from "next";
import Link from "next/link";
import { banners, type BannerKey } from "./banners";

export const metadata: Metadata = {
  title: "Manuel Jimenez FL | Socials",
  description: "MiniMax-style slate banners for YouTube, Facebook, and Instagram, exportable as PNG.",
};

const order: BannerKey[] = ["youtube", "facebook", "instagram"];

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

function BannerCard({ keyName }: { keyName: BannerKey }) {
  const spec = banners[keyName];
  const svgString = spec.svg();
  const downloadHref = `/api/socials/${spec.key}`;
  const aspectRatio = `${spec.width} / ${spec.height}`;

  return (
    <article className="grid gap-5 border border-[#2a3038] bg-[#0a0a0a] p-5">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-minimax-mono text-[11px] tracking-[0.16em] text-[#7a808a] uppercase">
            {spec.width} × {spec.height}
          </p>
          <h2 className="font-minimax-display mt-2 text-3xl leading-tight font-semibold">{spec.platform}</h2>
        </div>
        <a
          href={downloadHref}
          download={spec.filename}
          className="group inline-flex items-center gap-2 rounded-full bg-[#c8ff00] px-5 py-2.5 text-sm font-medium text-[#181e25] transition-colors hover:bg-[#d8ff3a] focus:ring-2 focus:ring-[#9bcc00] focus:outline-none"
        >
          Download PNG
          <span className="transition-transform group-hover:translate-x-0.5">
            <ArrowIcon />
          </span>
        </a>
      </header>

      <div
        className="relative w-full overflow-hidden border border-[#2a3038] bg-black"
        style={{ aspectRatio }}
      >
        <div
          className="absolute inset-0 [&>svg]:h-full [&>svg]:w-full"
          dangerouslySetInnerHTML={{ __html: svgString }}
        />
      </div>
    </article>
  );
}

export default function SocialsPage() {
  return (
    <main className="font-minimax-sans min-h-screen bg-black px-4 py-8 text-white sm:px-8 sm:py-12">
      <section className="mx-auto w-full max-w-7xl">
        <Link
          href="/"
          className="font-minimax-mono text-[13px] tracking-[0.04em] text-[#7a808a] uppercase hover:text-white focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
        >
          ← Site index
        </Link>

        <div className="mt-5">
          <h1 className="font-minimax-display text-6xl leading-none font-semibold text-balance md:text-7xl">
            Socials banners.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-[1.55] text-pretty text-[#c5c9cf]">
            Three slate-minimal banners cut from the same MiniMax cinematic-lab cloth: pure black canvas, lime
            framing brackets, centered display. Each preview is the actual SVG; the download renders a 1:1 PNG via
            sharp.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          {order.map((key) => (
            <BannerCard key={key} keyName={key} />
          ))}
        </div>
      </section>
    </main>
  );
}
