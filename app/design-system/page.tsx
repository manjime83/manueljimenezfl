import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Manuel Jimenez FL | Design System",
  description:
    "MiniMax cinematic-lab design system — colors, typography, spacing, components, and composition examples.",
};

// ---------------------------------------------------------------------------
// Tokens (mirrors DESIGN.md)
// ---------------------------------------------------------------------------

const colorGroups: {
  title: string;
  blurb: string;
  swatches: { name: string; value: string; role: string; ink: "light" | "dark" }[];
}[] = [
  {
    title: "Canvas & surfaces",
    blurb:
      "Pure black is the full-bleed media canvas. Charcoal `--surface` is the resting chrome state — cards, nav, inline UI all sit here.",
    swatches: [
      { name: "--bg", value: "#000000", role: "Canvas / hero media", ink: "light" },
      { name: "--bg-alt", value: "#0a0a0a", role: "Inset blocks", ink: "light" },
      { name: "--surface", value: "#181e25", role: "Chrome / cards", ink: "light" },
      { name: "--surface-2", value: "#232a33", role: "Elevated cards", ink: "light" },
    ],
  },
  {
    title: "Text",
    blurb: "Three weights of ink. Body copy stays muted; pure white is reserved for headlines and key labels.",
    swatches: [
      { name: "--text", value: "#ffffff", role: "Headlines / key labels", ink: "dark" },
      { name: "--text-muted", value: "#c5c9cf", role: "Body copy", ink: "dark" },
      { name: "--text-dim", value: "#7a808a", role: "Eyebrows / metadata", ink: "dark" },
    ],
  },
  {
    title: "Borders",
    blurb: "Hard 1px borders carry depth — never use shadows on cards or buttons.",
    swatches: [
      { name: "--border", value: "#2a3038", role: "Resting border", ink: "light" },
      { name: "--border-strong", value: "#3a4049", role: "Inputs / focused chrome", ink: "light" },
    ],
  },
  {
    title: "Accent — neon lime",
    blurb:
      "One lime moment per viewport. Reserved for the primary CTA, the active state, or a single signal element. Never tints body text.",
    swatches: [
      { name: "--accent", value: "#c8ff00", role: "Primary action / brand", ink: "dark" },
      { name: "--accent-hover", value: "#d8ff3a", role: "Button hover", ink: "dark" },
      { name: "--accent-deep", value: "#9bcc00", role: "Pressed / ink-on-light", ink: "dark" },
      { name: "--accent-soft", value: "#e9ff86", role: "Tinted callout backgrounds", ink: "dark" },
    ],
  },
  {
    title: "Inverse — paper sections",
    blurb: "Used only for spec sheets, papers, or invoices. The inversion is the framing device, not a theme switch.",
    swatches: [
      { name: "--bg-inverse", value: "#ffffff", role: "Paper canvas", ink: "dark" },
      { name: "--text-inverse", value: "#181e25", role: "Paper ink", ink: "light" },
      { name: "--border-inverse", value: "#e1e3e6", role: "Paper border", ink: "dark" },
    ],
  },
  {
    title: "System feedback",
    blurb: "Status colors stay confined to status — never decorative.",
    swatches: [
      { name: "--success", value: "#6ee7b7", role: "Confirmations", ink: "dark" },
      { name: "--warning", value: "#ffd166", role: "Cautionary banners", ink: "dark" },
      { name: "--danger", value: "#ff5d5d", role: "Destructive confirm", ink: "light" },
    ],
  },
];

const typeScale: { px: number; label: string; note: string; family: "display" | "sans" | "mono" }[] = [
  { px: 112, label: "Display XL", note: "Launch hero only", family: "display" },
  { px: 80, label: "Display L", note: "Section opener", family: "display" },
  { px: 56, label: "H1", note: "Page hero", family: "display" },
  { px: 40, label: "H2", note: "Section title", family: "display" },
  { px: 28, label: "H3", note: "Card / subsection", family: "display" },
  { px: 20, label: "Lead", note: "Intro paragraphs", family: "sans" },
  { px: 16, label: "Body", note: "Default body", family: "sans" },
  { px: 14, label: "UI", note: "Buttons, labels", family: "sans" },
  { px: 12, label: "Caption / mono", note: "Eyebrows, footnotes", family: "mono" },
];

const spacingScale = [
  { token: "1", px: 8 },
  { token: "2", px: 16 },
  { token: "3", px: 24 },
  { token: "4", px: 32 },
  { token: "6", px: 48 },
  { token: "8", px: 64 },
  { token: "12", px: 96 },
  { token: "16", px: 128 },
];

// ---------------------------------------------------------------------------
// Reusable bits
// ---------------------------------------------------------------------------

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

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4" fill="none">
      <path d="m4 10 4 4 8-8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4" fill="none">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function Section({
  number,
  eyebrow,
  title,
  intro,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[#2a3038] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <header className="grid gap-6 border-b border-[#2a3038] pb-10 md:grid-cols-[auto_1fr] md:gap-12">
          <div className="font-minimax-mono text-xs tracking-[0.16em] text-[#7a808a] uppercase md:pt-3">
            <span className="text-[#c8ff00]">{number}</span>
            <span className="ml-3">{eyebrow}</span>
          </div>
          <div>
            <h2 className="font-minimax-display max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.01em] text-balance md:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-[1.6] text-[#c5c9cf] md:text-lg">{intro}</p>
          </div>
        </header>
        <div className="pt-12">{children}</div>
      </div>
    </section>
  );
}

function CodeChip({ children }: { children: ReactNode }) {
  return (
    <code className="font-minimax-mono inline-flex items-center border border-[#2a3038] bg-[#0a0a0a] px-2 py-0.5 text-[12px] text-[#c5c9cf]">
      {children}
    </code>
  );
}

// ---------------------------------------------------------------------------
// Showcases
// ---------------------------------------------------------------------------

function ColorSwatch({ swatch }: { swatch: { name: string; value: string; role: string; ink: "light" | "dark" } }) {
  return (
    <div className="grid gap-3">
      <div
        className="relative flex h-28 items-end justify-between border border-[#2a3038] p-3"
        style={{ background: swatch.value }}
      >
        <span
          className={`font-minimax-mono text-[11px] tracking-[0.08em] uppercase ${
            swatch.ink === "light" ? "text-white/70" : "text-black/60"
          }`}
        >
          {swatch.value}
        </span>
      </div>
      <div>
        <p className="font-minimax-mono text-xs tracking-[0.04em] text-white uppercase">{swatch.name}</p>
        <p className="mt-1 text-sm leading-[1.5] text-[#c5c9cf]">{swatch.role}</p>
      </div>
    </div>
  );
}

function ButtonShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="flex flex-col gap-5 border border-[#2a3038] bg-[#181e25] p-6">
        <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Primary — pill</p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="rounded-full bg-[#c8ff00] px-6 py-3 text-sm font-medium text-[#181e25] transition-colors hover:bg-[#d8ff3a]"
          >
            Schedule a tour
          </button>
          <button
            type="button"
            className="rounded-full bg-[#9bcc00] px-6 py-3 text-sm font-medium text-[#181e25]"
            aria-pressed
          >
            Pressed
          </button>
          <button
            type="button"
            className="cursor-not-allowed rounded-full bg-[#c8ff00]/30 px-6 py-3 text-sm font-medium text-[#181e25]/60"
            disabled
          >
            Disabled
          </button>
        </div>
        <p className="text-sm leading-[1.55] text-[#c5c9cf]">
          Lime fill, charcoal ink, 60px radius, weight 500. No lift, no scale on hover — only the color shift to{" "}
          <CodeChip>--accent-hover</CodeChip>.
        </p>
      </div>

      <div className="flex flex-col gap-5 border border-[#2a3038] bg-[#181e25] p-6">
        <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Secondary — rectangle</p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-[#181e25] transition-opacity hover:opacity-90"
          >
            Download brief
          </button>
          <button
            type="button"
            className="rounded-xl border border-[#3a4049] bg-transparent px-5 py-3 text-sm font-medium text-white hover:border-[#c8ff00]"
          >
            View specs
          </button>
        </div>
        <p className="text-sm leading-[1.55] text-[#c5c9cf]">
          The geometric collision — pill primary + 12px-radius rectangle secondary — is the brand. Don’t round the
          secondary.
        </p>
      </div>

      <div className="flex flex-col gap-5 border border-[#2a3038] bg-[#181e25] p-6">
        <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Tertiary — link</p>
        <div className="flex flex-wrap items-center gap-5">
          <a className="group inline-flex items-center gap-2 text-sm font-medium text-white" href="#">
            <span className="bg-[linear-gradient(#c8ff00,#c8ff00)] bg-[length:0_1px] bg-[position:0_100%] bg-no-repeat pb-0.5 transition-[background-size] duration-200 group-hover:bg-[length:100%_1px]">
              Read the full case
            </span>
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </a>
          <a className="text-sm font-medium text-[#c8ff00] underline decoration-[#c8ff00]/40 underline-offset-4" href="#">
            Active link
          </a>
        </div>
        <p className="text-sm leading-[1.55] text-[#c5c9cf]">White ink, lime underline animates in on hover.</p>
      </div>

      <div className="flex flex-col gap-5 border border-[#2a3038] bg-[#181e25] p-6">
        <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Destructive</p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="rounded-xl bg-[#ff5d5d] px-5 py-3 text-sm font-medium text-white hover:bg-[#ff4646]"
          >
            Delete listing
          </button>
        </div>
        <p className="text-sm leading-[1.55] text-[#c5c9cf]">
          <CodeChip>--danger</CodeChip> fill, white text — only inside confirm modals. Never in primary nav surfaces.
        </p>
      </div>
    </div>
  );
}

function CardShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="group flex flex-col justify-between gap-5 border border-[#2a3038] bg-[#181e25] p-6 transition-colors hover:border-[#c8ff00]">
        <div>
          <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Resting card</p>
          <h3 className="font-minimax-display mt-3 text-2xl leading-[1.1] font-semibold">Buyer search lab</h3>
          <p className="mt-3 text-sm leading-[1.55] text-[#c5c9cf]">
            Surface fill, 1px border, 12px radius, 24px padding. Hover swaps the border to lime in 200ms.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-[#c8ff00]">
          Open lab
          <span className="transition-transform group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </span>
      </div>

      <div className="relative flex flex-col justify-end overflow-hidden border border-[#2a3038] bg-black p-6 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="relative">
          <p className="font-minimax-mono text-xs tracking-[0.08em] text-white/60 uppercase">Demo tile</p>
          <h3 className="font-minimax-display mt-3 text-2xl leading-[1.1] font-semibold">Looping demo card</h3>
          <p className="mt-3 text-sm leading-[1.55] text-[#c5c9cf]">
            Hero tiles run autoplay-muted-loop video. The bottom scrim guarantees legibility for white text.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-5 border border-[#e1e3e6] bg-white p-6 text-[#181e25]">
        <div>
          <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Inverse — spec card</p>
          <h3 className="font-minimax-display mt-3 text-2xl leading-[1.1] font-semibold">Florida license SL3658224</h3>
          <p className="mt-3 text-sm leading-[1.55] text-[#3a4049]">
            Inverse is reserved for paper-style sections — license details, invoices, spec breakdowns.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-[#9bcc00]">
          View record
          <ArrowIcon />
        </span>
      </div>
    </div>
  );
}

function InputShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <label className="flex flex-col gap-2 border border-[#2a3038] bg-[#181e25] p-6">
        <span className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Default input</span>
        <input
          className="rounded-xl border border-[#3a4049] bg-[#0a0a0a] px-3.5 py-3 text-sm text-white placeholder:text-[#7a808a] focus:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00] focus:ring-offset-1 focus:ring-offset-[#181e25] focus:outline-none"
          placeholder="Search neighborhoods…"
        />
        <span className="text-xs leading-[1.5] text-[#7a808a]">
          <CodeChip>--bg-alt</CodeChip> fill, 1px <CodeChip>--border-strong</CodeChip>, focus ring uses{" "}
          <CodeChip>--accent</CodeChip>.
        </span>
      </label>

      <label className="flex flex-col gap-2 border border-[#2a3038] bg-[#181e25] p-6">
        <span className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Error state</span>
        <input
          className="rounded-xl border border-[#ff5d5d] bg-[#0a0a0a] px-3.5 py-3 text-sm text-white"
          defaultValue="not-an-email"
        />
        <span className="text-xs leading-[1.5] text-[#ff5d5d]">Enter a valid email address.</span>
      </label>
    </div>
  );
}

function NavShowcase() {
  return (
    <div className="overflow-hidden border border-[#2a3038]">
      <div className="relative flex items-center justify-between border-b border-[#2a3038] bg-black/80 px-6 py-4 backdrop-blur-md">
        <span className="font-minimax-display text-lg font-semibold tracking-[-0.01em] text-white">Manuel Jimenez</span>
        <ul className="hidden items-center gap-6 text-sm text-white md:flex">
          <li>
            <a className="border-b border-[#c8ff00] pb-1" href="#">
              Listings
            </a>
          </li>
          <li>
            <a className="text-white/80 hover:text-white" href="#">
              Buyer lab
            </a>
          </li>
          <li>
            <a className="text-white/80 hover:text-white" href="#">
              Seller room
            </a>
          </li>
          <li>
            <a className="text-white/80 hover:text-white" href="#">
              Contact
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="rounded-full bg-[#c8ff00] px-5 py-2 text-sm font-medium text-[#181e25] hover:bg-[#d8ff3a]"
        >
          Schedule a call
        </button>
      </div>
      <div className="bg-[#0a0a0a] p-6 text-sm leading-[1.55] text-[#c5c9cf]">
        Fixed nav uses 80% black + 12px backdrop blur, white links, lime underline on the active route. The pill CTA
        sits right of the nav on desktop and collapses into the drawer below 1024px.
      </div>
    </div>
  );
}

function BadgesShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="flex flex-col gap-3 border border-[#2a3038] bg-[#181e25] p-6">
        <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Status pills</p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6ee7b7]/15 px-3 py-1 text-xs font-medium text-[#6ee7b7]">
            <span className="size-1.5 rounded-full bg-[#6ee7b7]" />
            Closed
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ffd166]/15 px-3 py-1 text-xs font-medium text-[#ffd166]">
            <span className="size-1.5 rounded-full bg-[#ffd166]" />
            Pending
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ff5d5d]/15 px-3 py-1 text-xs font-medium text-[#ff5d5d]">
            <span className="size-1.5 rounded-full bg-[#ff5d5d]" />
            Withdrawn
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#c8ff00]/15 px-3 py-1 text-xs font-medium text-[#c8ff00]">
            <span className="size-1.5 rounded-full bg-[#c8ff00]" />
            Active
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 border border-[#2a3038] bg-[#181e25] p-6">
        <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Eyebrow tags</p>
        <div className="flex flex-wrap gap-2">
          <span className="font-minimax-mono text-[11px] tracking-[0.16em] text-[#c8ff00] uppercase">Search</span>
          <span className="font-minimax-mono text-[11px] tracking-[0.16em] text-[#7a808a] uppercase">List</span>
          <span className="font-minimax-mono text-[11px] tracking-[0.16em] text-[#7a808a] uppercase">Move</span>
        </div>
        <p className="text-xs leading-[1.55] text-[#c5c9cf]">
          Mono tracking +16% uppercase, 11–12px. Used as the only categorical signal in chrome.
        </p>
      </div>

      <div className="flex flex-col gap-3 border border-[#2a3038] bg-[#181e25] p-6">
        <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Numeric callouts</p>
        <div className="grid grid-cols-2 gap-2 font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
          <div className="border border-[#2a3038] p-3">
            <p className="font-minimax-display text-3xl font-semibold text-white">1.7×</p>
            <p className="mt-1 text-[11px] tracking-[0.04em] text-[#7a808a] uppercase">Faster brief</p>
          </div>
          <div className="border border-[#2a3038] p-3">
            <p className="font-minimax-display text-3xl font-semibold text-white">+43%</p>
            <p className="mt-1 text-[11px] tracking-[0.04em] text-[#7a808a] uppercase">Showings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompositionHero() {
  return (
    <div className="relative overflow-hidden border border-[#2a3038] bg-black p-8 md:p-14">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#7a808a] uppercase">EX. 01 — Hero</p>
          <h3 className="font-minimax-display mt-6 text-5xl leading-[0.98] font-semibold tracking-[-0.01em] text-balance md:text-7xl">
            Search Florida real estate with one signal.
          </h3>
          <p className="mt-6 max-w-xl text-base leading-[1.6] text-[#c5c9cf] md:text-lg">
            Display headline at 80–112px, body at 16–18px <CodeChip>--text-muted</CodeChip>. The lime CTA carries the
            single moment per viewport. Secondary button keeps the rectangular geometry.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="rounded-full bg-[#c8ff00] px-7 py-3.5 text-sm font-medium text-[#181e25] hover:bg-[#d8ff3a]"
            >
              Start a brief
            </button>
            <button
              type="button"
              className="rounded-xl border border-[#3a4049] bg-transparent px-6 py-3.5 text-sm font-medium text-white hover:border-[#c8ff00]"
            >
              See active listings
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["407", "Network reach"],
            ["24h", "Brief turnaround"],
            ["1:1", "Search guidance"],
            ["SL3658224", "FL license"],
          ].map(([value, label]) => (
            <div key={label} className="border border-[#2a3038] bg-[#181e25] p-4 tabular-nums">
              <p className="font-minimax-display text-2xl leading-none font-semibold text-white">{value}</p>
              <p className="mt-2 font-minimax-mono text-[11px] tracking-[0.12em] text-[#7a808a] uppercase">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompositionInverse() {
  return (
    <div className="border border-[#e1e3e6] bg-white p-8 text-[#181e25] md:p-14">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#7a808a] uppercase">EX. 02 — Inverse / Spec</p>
          <h3 className="font-minimax-display mt-6 text-4xl leading-[1.05] font-semibold tracking-[-0.01em] text-balance md:text-5xl">
            License & disclosures.
          </h3>
          <p className="mt-5 max-w-md text-base leading-[1.6] text-[#3a4049]">
            Light surfaces are a deliberate inversion — paper, not theme. Use them for licenses, agreements, and dense
            spec tables.
          </p>
        </div>
        <dl className="grid gap-0 border-t border-[#e1e3e6] tabular-nums">
          {[
            ["Florida license", "SL3658224"],
            ["Brokerage", "Manuel Jimenez FL"],
            ["MLS regions", "Stellar / MFRMLS"],
            ["Service area", "Central Florida"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="grid grid-cols-[140px_1fr] items-baseline gap-6 border-b border-[#e1e3e6] py-4 md:grid-cols-[200px_1fr]"
            >
              <dt className="font-minimax-mono text-xs tracking-[0.12em] text-[#7a808a] uppercase">{label}</dt>
              <dd className="text-base font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

function CompositionTable() {
  const rows = [
    ["Neighborhood scan", "Schools, commute, insurance, HOA", "Same day", "Active"],
    ["Offer prep", "Terms, contingencies, timing", "Before submit", "Active"],
    ["Listing readiness", "Pricing, repairs, media plan", "Pre-market", "Pending"],
    ["Closing path", "Inspection, appraisal, title", "Tracked weekly", "Pending"],
  ];
  return (
    <div className="overflow-hidden border border-[#2a3038] bg-[#0a0a0a]">
      <div className="flex items-center justify-between border-b border-[#2a3038] px-6 py-4">
        <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#7a808a] uppercase">EX. 03 — Spec table</p>
        <span className="font-minimax-mono text-xs text-[#c8ff00]">Tabular numerals on</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm tabular-nums">
          <thead className="bg-[#181e25] text-left font-minimax-mono text-[11px] tracking-[0.12em] text-[#7a808a] uppercase">
            <tr>
              <th className="px-6 py-3 font-normal">Stage</th>
              <th className="px-6 py-3 font-normal">Scope</th>
              <th className="px-6 py-3 font-normal">Cadence</th>
              <th className="px-6 py-3 font-normal">Status</th>
            </tr>
          </thead>
          <tbody className="text-[#c5c9cf]">
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-[#2a3038]">
                <td className="px-6 py-4 font-medium text-white">{row[0]}</td>
                <td className="px-6 py-4">{row[1]}</td>
                <td className="px-6 py-4">{row[2]}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                      row[3] === "Active"
                        ? "bg-[#c8ff00]/15 text-[#c8ff00]"
                        : "bg-[#ffd166]/15 text-[#ffd166]"
                    }`}
                  >
                    <span
                      className={`size-1.5 rounded-full ${row[3] === "Active" ? "bg-[#c8ff00]" : "bg-[#ffd166]"}`}
                    />
                    {row[3]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CompositionForm() {
  return (
    <div className="grid gap-8 border border-[#2a3038] bg-[#181e25] p-8 md:grid-cols-[1fr_1fr] md:p-12">
      <div>
        <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#7a808a] uppercase">EX. 04 — Form / CTA</p>
        <h3 className="font-minimax-display mt-6 text-3xl leading-[1.05] font-semibold tracking-[-0.01em] md:text-4xl">
          Tell us what you’re looking for.
        </h3>
        <p className="mt-5 max-w-md text-base leading-[1.6] text-[#c5c9cf]">
          Inputs sit on <CodeChip>--bg-alt</CodeChip>. The lime focus ring is the only place lime appears inside form
          chrome — keep it for the field actually being edited.
        </p>
      </div>
      <form className="grid gap-4">
        <label className="grid gap-2">
          <span className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Name</span>
          <input
            className="rounded-xl border border-[#3a4049] bg-[#0a0a0a] px-3.5 py-3 text-sm text-white placeholder:text-[#7a808a] focus:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
            placeholder="Jane Doe"
          />
        </label>
        <label className="grid gap-2">
          <span className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Email</span>
          <input
            className="rounded-xl border border-[#3a4049] bg-[#0a0a0a] px-3.5 py-3 text-sm text-white placeholder:text-[#7a808a] focus:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
            placeholder="jane@email.com"
          />
        </label>
        <label className="grid gap-2">
          <span className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Brief</span>
          <textarea
            rows={3}
            className="resize-none rounded-xl border border-[#3a4049] bg-[#0a0a0a] px-3.5 py-3 text-sm text-white placeholder:text-[#7a808a] focus:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
            placeholder="Three-bed near good schools, under $650k…"
          />
        </label>
        <div className="mt-2 flex items-center gap-3">
          <button
            type="button"
            className="rounded-full bg-[#c8ff00] px-6 py-3 text-sm font-medium text-[#181e25] hover:bg-[#d8ff3a]"
          >
            Send brief
          </button>
          <button type="button" className="text-sm font-medium text-[#c5c9cf] hover:text-white">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function DesignSystemPage() {
  return (
    <main className="font-minimax-sans min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#2a3038] px-5 py-20 md:px-8 md:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="font-minimax-mono inline-flex items-center gap-2 text-xs tracking-[0.16em] text-[#7a808a] uppercase hover:text-white"
            >
              <span className="rotate-180">
                <ArrowIcon />
              </span>
              Index
            </Link>
            <span className="font-minimax-mono text-xs tracking-[0.16em] text-[#7a808a] uppercase">
              v1 — MiniMax cinematic lab
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#c8ff00] uppercase">Design system</p>
              <h1 className="font-minimax-display mt-6 text-6xl leading-[0.95] font-semibold tracking-[-0.015em] text-balance md:text-8xl lg:text-9xl">
                MiniMax design system.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-[1.6] text-[#c5c9cf] md:text-xl">
                Pure black canvas, charcoal chrome, one neon-lime moment per viewport. Geometric Outfit display paired
                with DM Sans body, JetBrains Mono for labels and numerals. This page documents every token and shows
                how to compose them.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#colors"
                  className="rounded-full bg-[#c8ff00] px-6 py-3 text-sm font-medium text-[#181e25] hover:bg-[#d8ff3a]"
                >
                  Explore tokens
                </a>
                <a
                  href="#examples"
                  className="rounded-xl border border-[#3a4049] px-5 py-3 text-sm font-medium text-white hover:border-[#c8ff00]"
                >
                  Jump to examples
                </a>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-3 tabular-nums">
              {[
                ["#000000", "Canvas"],
                ["#181e25", "Surface"],
                ["#c8ff00", "Accent"],
                ["#ffffff", "Ink"],
              ].map(([value, label]) => (
                <li
                  key={value}
                  className="flex flex-col justify-between border border-[#2a3038] p-4"
                  style={{ background: value }}
                >
                  <span
                    className={`font-minimax-mono text-[11px] tracking-[0.08em] uppercase ${
                      value === "#ffffff" || value === "#c8ff00" ? "text-black/60" : "text-white/70"
                    }`}
                  >
                    {value}
                  </span>
                  <span
                    className={`font-minimax-display mt-12 text-2xl font-semibold ${
                      value === "#ffffff" || value === "#c8ff00" ? "text-black" : "text-white"
                    }`}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Table of contents" className="border-t border-[#2a3038] pt-8">
            <ol className="grid grid-cols-2 gap-x-6 gap-y-2 font-minimax-mono text-xs tracking-[0.08em] text-[#c5c9cf] uppercase md:grid-cols-3 lg:grid-cols-6">
              {[
                ["01", "Colors", "#colors"],
                ["02", "Typography", "#typography"],
                ["03", "Spacing", "#spacing"],
                ["04", "Components", "#components"],
                ["05", "Do / Don’t", "#guidelines"],
                ["06", "Examples", "#examples"],
              ].map(([num, label, href]) => (
                <li key={href}>
                  <a className="flex items-center gap-2 hover:text-white" href={href}>
                    <span className="text-[#c8ff00]">{num}</span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* 01 - Colors */}
      <div id="colors" />
      <Section
        number="01"
        eyebrow="Tokens"
        title="Color is hierarchy, not decoration."
        intro={
          <>
            The palette runs in roles, not shades. Black is canvas, charcoal is chrome, lime is action. Every component
            below maps to one of the variables in <CodeChip>DESIGN.md §2</CodeChip>.
          </>
        }
      >
        <div className="grid gap-12">
          {colorGroups.map((group) => (
            <div key={group.title} className="grid gap-6 md:grid-cols-[280px_1fr] md:gap-12">
              <div>
                <h3 className="font-minimax-display text-2xl leading-[1.1] font-semibold">{group.title}</h3>
                <p className="mt-3 text-sm leading-[1.6] text-[#c5c9cf]">{group.blurb}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {group.swatches.map((s) => (
                  <ColorSwatch key={s.name} swatch={s} />
                ))}
              </div>
            </div>
          ))}
          <div className="border border-[#c8ff00]/30 bg-[#c8ff00]/5 p-6">
            <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#c8ff00] uppercase">Rule</p>
            <p className="mt-3 max-w-3xl text-base leading-[1.6] text-white">
              Lime carries one moment per viewport and never tints body text. If you’re using lime for a paragraph,
              decorative chrome, or a second CTA, you’re using it wrong.
            </p>
          </div>
        </div>
      </Section>

      {/* 02 - Typography */}
      <div id="typography" />
      <Section
        number="02"
        eyebrow="Typography"
        title="Geometric display, neutral body, mono for signal."
        intro={
          <>
            Three families do all the work. Outfit reads like a model architecture diagram on launches, DM Sans keeps
            paragraphs readable, and JetBrains Mono carries labels, eyebrows, and tabular numerals.
          </>
        }
      >
        <div className="grid gap-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col gap-5 border border-[#2a3038] bg-[#181e25] p-6">
              <div className="flex items-center justify-between">
                <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">01 — Display</p>
                <span className="font-minimax-mono text-[11px] text-[#c8ff00]">Outfit</span>
              </div>
              <p className="font-minimax-display text-7xl leading-[0.9] font-semibold tracking-[-0.02em]">
                Search with signal.
              </p>
              <div className="font-minimax-display flex flex-wrap items-baseline gap-x-4 gap-y-1 text-2xl font-medium tracking-[-0.005em]">
                <span>AaBbCc</span>
                <span>0123456789</span>
                <span className="text-base">&amp; ? ! @</span>
              </div>
              <p className="text-sm leading-[1.55] text-[#c5c9cf]">
                Geometric sans, weights 500–700. Tight tracking <CodeChip>-0.01em</CodeChip> at large sizes,{" "}
                <CodeChip>text-wrap: balance</CodeChip> on headlines. Reads as &ldquo;model architecture diagram.&rdquo;
              </p>
              <p className="font-minimax-mono mt-auto text-[11px] tracking-[0.12em] text-[#7a808a] uppercase">
                Headlines · launches · hero
              </p>
            </div>

            <div className="flex flex-col gap-5 border border-[#2a3038] bg-[#181e25] p-6">
              <div className="flex items-center justify-between">
                <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">02 — Body / UI</p>
                <span className="font-minimax-mono text-[11px] text-[#c8ff00]">DM Sans</span>
              </div>
              <p className="font-minimax-sans text-2xl leading-[1.4] font-normal text-white">
                Cinematic black-canvas pages for Manuel Jimenez FL — buyer briefs, listings, and seller launches.
              </p>
              <div className="font-minimax-sans flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xl font-medium">
                <span>AaBbCc</span>
                <span>0123456789</span>
                <span className="text-base">&amp; ? ! @</span>
              </div>
              <p className="font-minimax-sans text-sm leading-[1.6] text-[#c5c9cf]">
                Neutral geometric sans, weights 400/500. Line-height <CodeChip>1.5–1.6</CodeChip>,{" "}
                <CodeChip>text-wrap: pretty</CodeChip> on paragraphs to fix orphans. Holds 16px on mobile.
              </p>
              <p className="font-minimax-mono mt-auto text-[11px] tracking-[0.12em] text-[#7a808a] uppercase">
                Paragraphs · UI · buttons
              </p>
            </div>

            <div className="flex flex-col gap-5 border border-[#2a3038] bg-[#181e25] p-6">
              <div className="flex items-center justify-between">
                <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">03 — Mono</p>
                <span className="font-minimax-mono text-[11px] text-[#c8ff00]">JetBrains Mono</span>
              </div>
              <p className="font-minimax-mono text-xl leading-[1.5] font-medium text-white">
                <span className="text-[#c8ff00]">$</span> brief --area orlando --bed 3
                <br />
                <span className="text-[#7a808a]"># status: ready</span>
              </p>
              <div className="font-minimax-mono flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xl font-medium tabular-nums">
                <span>AaBbCc</span>
                <span>0123456789</span>
                <span className="text-base">&amp; ? ! @</span>
              </div>
              <p className="font-minimax-sans text-sm leading-[1.6] text-[#c5c9cf]">
                Fixed-width signal font. Eyebrows, code, hashes, license numbers, tabular numerals. Uppercase + tracking{" "}
                <CodeChip>+0.16em</CodeChip> for category labels.
              </p>
              <p className="font-minimax-mono mt-auto text-[11px] tracking-[0.12em] text-[#7a808a] uppercase">
                Eyebrows · numerics · code
              </p>
            </div>
          </div>

          {/* Same string, three families — direct comparison */}
          <div className="grid gap-0 border border-[#2a3038] bg-[#0a0a0a]">
            <div className="flex items-center justify-between border-b border-[#2a3038] bg-[#181e25] px-6 py-3">
              <p className="font-minimax-mono text-[11px] tracking-[0.16em] text-[#7a808a] uppercase">
                Same string, three families
              </p>
              <p className="font-minimax-mono text-[11px] tracking-[0.16em] text-[#c8ff00] uppercase">A / B / C</p>
            </div>
            {[
              {
                family: "font-minimax-display" as const,
                name: "Outfit — Display",
                weight: "font-semibold tracking-[-0.01em]",
                size: "text-3xl md:text-4xl",
              },
              {
                family: "font-minimax-sans" as const,
                name: "DM Sans — Body / UI",
                weight: "font-normal",
                size: "text-3xl md:text-4xl",
              },
              {
                family: "font-minimax-mono" as const,
                name: "JetBrains Mono — Mono",
                weight: "font-medium",
                size: "text-2xl md:text-3xl",
              },
            ].map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-1 items-baseline gap-3 border-b border-[#2a3038] px-6 py-6 last:border-0 md:grid-cols-[220px_1fr]"
              >
                <span className="font-minimax-mono text-[11px] tracking-[0.12em] text-[#7a808a] uppercase">
                  {row.name}
                </span>
                <span className={`${row.family} ${row.size} ${row.weight} leading-[1.1] text-white`}>
                  Manuel Jimenez FL — 1.7× faster brief.
                </span>
              </div>
            ))}
          </div>

          {/* Type scale — each row in its actual family */}
          <div className="border border-[#2a3038] bg-[#0a0a0a]">
            <div className="grid grid-cols-[140px_1fr_140px] border-b border-[#2a3038] bg-[#181e25] px-6 py-3 font-minimax-mono text-[11px] tracking-[0.12em] text-[#7a808a] uppercase">
              <span>Size · role</span>
              <span>Sample (rendered in its family)</span>
              <span className="text-right">Family</span>
            </div>
            {typeScale.map((row) => {
              const familyClass =
                row.family === "display"
                  ? "font-minimax-display font-semibold tracking-[-0.01em]"
                  : row.family === "mono"
                    ? "font-minimax-mono font-medium tracking-[0.04em]"
                    : "font-minimax-sans font-normal";
              const familyLabel =
                row.family === "display" ? "Outfit" : row.family === "mono" ? "JetBrains Mono" : "DM Sans";
              return (
                <div
                  key={row.label}
                  className="grid grid-cols-[140px_1fr_140px] items-center gap-6 border-b border-[#2a3038] px-6 py-5 last:border-0"
                >
                  <span className="font-minimax-mono text-xs text-[#c5c9cf] tabular-nums">
                    {row.px}px / <span className="text-[#c8ff00]">{row.label}</span>
                  </span>
                  <span
                    className={`${familyClass} truncate text-white`}
                    style={{ fontSize: Math.min(row.px, 56), lineHeight: 1.05 }}
                  >
                    Search with signal
                  </span>
                  <span className="text-right font-minimax-mono text-[11px] tracking-[0.12em] text-[#7a808a] uppercase">
                    {familyLabel}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-[#2a3038] bg-[#181e25] p-6">
              <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Tabular numerals</p>
              <p className="font-minimax-display mt-4 text-4xl font-semibold tabular-nums">1.7× · 2.5× · +43%</p>
              <p className="mt-3 text-sm leading-[1.55] text-[#c5c9cf]">
                Always <CodeChip>tabular-nums</CodeChip> on benchmark deltas, parameter counts, latency. The columns
                must align.
              </p>
            </div>
            <div className="border border-[#2a3038] bg-[#181e25] p-6">
              <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Eyebrow / label</p>
              <p className="font-minimax-mono mt-4 text-sm tracking-[0.16em] text-[#c8ff00] uppercase">
                Buyer search lab — 01
              </p>
              <p className="mt-3 text-sm leading-[1.55] text-[#c5c9cf]">
                Mono, uppercase, +16% tracking, 11–14px. The only categorical signal in chrome.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 03 - Spacing */}
      <div id="spacing" />
      <Section
        number="03"
        eyebrow="Layout"
        title="8px base, generous vertical air."
        intro={
          <>
            Everything snaps to an 8px grid. Sections breathe at 96–128px between blocks. Content lives inside a 1280px
            max-width with a 32px gutter on a 12-column rhythm.
          </>
        }
      >
        <div className="grid gap-10">
          <div className="border border-[#2a3038] bg-[#0a0a0a] p-6">
            <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Spacing scale</p>
            <ul className="mt-6 grid gap-3">
              {spacingScale.map((s) => (
                <li key={s.token} className="grid grid-cols-[80px_60px_1fr] items-center gap-4">
                  <span className="font-minimax-mono text-xs text-[#c5c9cf]">space-{s.token}</span>
                  <span className="font-minimax-mono text-xs text-[#7a808a] tabular-nums">{s.px}px</span>
                  <div className="h-3 bg-[#c8ff00]" style={{ width: `${s.px * 2}px`, maxWidth: "100%" }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-[#2a3038] bg-[#181e25] p-6">
              <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Container</p>
              <p className="font-minimax-display mt-3 text-3xl font-semibold tabular-nums">1280px</p>
              <p className="mt-3 text-sm leading-[1.55] text-[#c5c9cf]">
                Max content width. 32px gutter. 12-column rhythm.
              </p>
            </div>
            <div className="border border-[#2a3038] bg-[#181e25] p-6">
              <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Section rhythm</p>
              <p className="font-minimax-display mt-3 text-3xl font-semibold tabular-nums">96 / 128px</p>
              <p className="mt-3 text-sm leading-[1.55] text-[#c5c9cf]">
                Vertical padding between sections. Don’t go below 64px on desktop.
              </p>
            </div>
            <div className="border border-[#2a3038] bg-[#181e25] p-6">
              <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">Hero</p>
              <p className="font-minimax-display mt-3 text-3xl font-semibold tabular-nums">100vw / 80–100vh</p>
              <p className="mt-3 text-sm leading-[1.55] text-[#c5c9cf]">
                Full-bleed media canvas anchored on a demo loop.
              </p>
            </div>
          </div>

          <div className="border border-[#2a3038] bg-[#0a0a0a] p-6">
            <p className="font-minimax-mono text-xs tracking-[0.08em] text-[#7a808a] uppercase">12-column grid</p>
            <div className="mt-5 grid grid-cols-12 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="h-16 border border-[#2a3038] bg-[#181e25]" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-[1.55] text-[#c5c9cf]">
              Use the full 12 columns sparingly — most editorial layouts read better as 8/4 or 7/5 splits.
            </p>
          </div>
        </div>
      </Section>

      {/* 04 - Components */}
      <div id="components" />
      <Section
        number="04"
        eyebrow="Components"
        title="A small kit, used precisely."
        intro={
          <>
            Pill primary CTAs collide with rectangular secondaries — the geometry is the brand. Cards stay flat with
            hard 1px borders. Inputs use a subtler fill so the lime focus ring reads.
          </>
        }
      >
        <div className="grid gap-12">
          <div>
            <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#c8ff00] uppercase">Buttons</p>
            <div className="mt-4">
              <ButtonShowcase />
            </div>
          </div>

          <div>
            <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#c8ff00] uppercase">Cards</p>
            <div className="mt-4">
              <CardShowcase />
            </div>
          </div>

          <div>
            <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#c8ff00] uppercase">Inputs</p>
            <div className="mt-4">
              <InputShowcase />
            </div>
          </div>

          <div>
            <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#c8ff00] uppercase">Navigation</p>
            <div className="mt-4">
              <NavShowcase />
            </div>
          </div>

          <div>
            <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#c8ff00] uppercase">Tags & numerics</p>
            <div className="mt-4">
              <BadgesShowcase />
            </div>
          </div>
        </div>
      </Section>

      {/* 05 - Guidelines */}
      <div id="guidelines" />
      <Section
        number="05"
        eyebrow="Guidelines"
        title="Do this. Not that."
        intro={
          <>
            The system breaks fastest at the edges — multiple accents, soft chrome, hero stock photography. Use the
            pairs below as your lint rules.
          </>
        }
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 border border-[#2a3038] bg-[#181e25] p-6">
            <div className="flex items-center gap-2 font-minimax-mono text-xs tracking-[0.16em] text-[#6ee7b7] uppercase">
              <CheckIcon /> Do
            </div>
            <ul className="grid gap-3 text-sm leading-[1.6] text-[#c5c9cf]">
              <li>Open with a full-bleed model demo loop. No stock photography.</li>
              <li>
                Reserve lime for the single CTA moment per viewport — pair it with a rectangular{" "}
                <CodeChip>12px</CodeChip> secondary.
              </li>
              <li>Oversize launch headlines to 80–112px on hero. Lock body to 16px.</li>
              <li>Use tabular numerals for benchmark deltas (1.7×, 2.5×, +43%).</li>
              <li>Use the inverse light surface only for license / paper / spec sections.</li>
            </ul>
          </div>
          <div className="grid gap-4 border border-[#2a3038] bg-[#181e25] p-6">
            <div className="flex items-center gap-2 font-minimax-mono text-xs tracking-[0.16em] text-[#ff5d5d] uppercase">
              <CrossIcon /> Don’t
            </div>
            <ul className="grid gap-3 text-sm leading-[1.6] text-[#c5c9cf]">
              <li>Tint body text or paragraphs with lime.</li>
              <li>Use multiple accent colors in a single viewport.</li>
              <li>Soften card corners past 16px or add drop shadows.</li>
              <li>Switch the marketing default to a light theme.</li>
              <li>Add purple-to-pink gradients, glassmorphism, or rainbow accents.</li>
            </ul>
          </div>

          <div className="border border-[#2a3038] bg-black p-6">
            <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#6ee7b7] uppercase">Correct accent use</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="flex flex-col justify-between border border-[#2a3038] bg-[#181e25] p-4">
                <p className="text-sm leading-[1.55] text-[#c5c9cf]">Body copy stays muted, link uses lime underline.</p>
                <a className="mt-3 text-sm font-medium text-white underline decoration-[#c8ff00] underline-offset-4" href="#">
                  Read the brief
                </a>
              </div>
              <div className="flex items-end justify-end border border-[#2a3038] bg-[#181e25] p-4">
                <button
                  type="button"
                  className="rounded-full bg-[#c8ff00] px-5 py-2.5 text-sm font-medium text-[#181e25]"
                >
                  Single CTA
                </button>
              </div>
            </div>
          </div>
          <div className="border border-[#ff5d5d]/40 bg-black p-6">
            <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#ff5d5d] uppercase">Wrong accent use</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="border border-[#2a3038] bg-[#181e25] p-4">
                <p className="text-sm leading-[1.55] text-[#c8ff00]">
                  Body copy tinted lime — destroys hierarchy and breaks the rule.
                </p>
              </div>
              <div className="flex flex-wrap items-end justify-end gap-2 border border-[#2a3038] bg-[#181e25] p-4">
                <button type="button" className="rounded-full bg-[#c8ff00] px-4 py-2 text-xs font-medium text-[#181e25]">
                  CTA A
                </button>
                <button type="button" className="rounded-full bg-[#6ee7b7] px-4 py-2 text-xs font-medium text-[#181e25]">
                  CTA B
                </button>
                <button type="button" className="rounded-full bg-[#ffd166] px-4 py-2 text-xs font-medium text-[#181e25]">
                  CTA C
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 06 - Examples */}
      <div id="examples" />
      <Section
        number="06"
        eyebrow="Composition"
        title="The system, in motion."
        intro={
          <>
            Four fully-composed examples — hero, inverse spec, dense table, and form. Each one obeys the rules above:
            single accent moment, geometric headline, charcoal chrome, hard borders.
          </>
        }
      >
        <div className="grid gap-8">
          <CompositionHero />
          <CompositionInverse />
          <CompositionTable />
          <CompositionForm />
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[#2a3038] px-5 py-12 md:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4">
          <p className="font-minimax-mono text-xs tracking-[0.16em] text-[#7a808a] uppercase">
            Manuel Jimenez FL · MiniMax cinematic lab
          </p>
          <Link
            href="/"
            className="font-minimax-mono inline-flex items-center gap-2 text-xs tracking-[0.16em] text-[#c5c9cf] uppercase hover:text-white"
          >
            <span className="rotate-180">
              <ArrowIcon />
            </span>
            Back to index
          </Link>
        </div>
      </footer>
    </main>
  );
}
