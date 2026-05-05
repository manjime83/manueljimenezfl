"use client";

import type { CSSProperties, ReactNode } from "react";

const whatsappUrl = "https://wa.me/13853713775";
const websiteUrl = "https://manueljimenezfl.com";
const phoneDisplay = "385-371-3775";
const phoneHref = "tel:+13853713775";
const handle = "@manueljimenezfl";

const qrPath =
  "M4 4.5h7m1 0h1m2 0h4m3 0h7M4 5.5h1m5 0h1m2 0h1m1 0h1m3 0h1m2 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h1m1 0h2m3 0h1m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h2m1 0h5m2 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h1m1 0h1m1 0h2m1 0h1M4 12.5h1m3 0h1m1 0h4m2 0h4m1 0h5m2 0h1M5 13.5h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m2 0h1m4 0h2m1 0h1M6 14.5h2m2 0h2m1 0h1m1 0h2m2 0h3m1 0h4M4 15.5h1m1 0h1m1 0h1m3 0h2m2 0h1m1 0h3m2 0h1m2 0h2M4 16.5h2m2 0h6m2 0h1m3 0h1m1 0h1m2 0h4M4 17.5h2m1 0h3m3 0h2m2 0h2m5 0h1m2 0h1M6 18.5h1m2 0h3m1 0h2m4 0h1m2 0h5M14 19.5h1m1 0h1m4 0h4m1 0h2M4 20.5h2m1 0h1m1 0h2m2 0h1m1 0h1m1 0h10M12 21.5h3m1 0h1m1 0h1m1 0h1m3 0h1M4 22.5h7m1 0h1m2 0h4m1 0h1m1 0h1m1 0h1M4 23.5h1m5 0h1m2 0h1m1 0h1m1 0h1m1 0h2m3 0h5M4 24.5h1m1 0h3m1 0h1m1 0h2m2 0h2m2 0h8M4 25.5h1m1 0h3m1 0h1m2 0h2m2 0h3m1 0h3m2 0h1m1 0h1M4 26.5h1m1 0h3m1 0h1m9 0h3m2 0h1m1 0h1M4 27.5h1m5 0h1m2 0h1m2 0h1m1 0h2m2 0h6M4 28.5h7m1 0h1m1 0h2m1 0h3m1 0h2m3 0h3";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/manueljimenezfl" },
  { label: "YouTube", href: "https://www.youtube.com/@manueljimenezfl" },
  { label: "Facebook", href: "https://www.facebook.com/manueljimenezfl" },
];

type QrColors = {
  surface: string;
  border: string;
  ink: string;
  hoverBorder: string;
  ringColor?: string;
};

function QrCode({ colors }: { colors: QrColors }) {
  return (
    <a
      href={whatsappUrl}
      aria-label="Open WhatsApp chat with Manuel Jiménez"
      className="grid aspect-square w-full place-items-center rounded-[22px] p-5 transition-colors focus:ring-2 focus:outline-none"
      style={
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
          borderWidth: 1,
          color: colors.ink,
          "--tw-ring-color": colors.ringColor ?? "#4c6ee6",
        } as CSSProperties
      }
    >
      <svg
        viewBox="0 0 33 33"
        shapeRendering="crispEdges"
        role="img"
        aria-label="WhatsApp QR code"
        className="size-full"
      >
        <rect width="33" height="33" fill={colors.surface} />
        <path d={qrPath} fill="none" stroke="currentColor" />
      </svg>
    </a>
  );
}

function CardShell({
  children,
  background,
  border,
  text,
}: {
  children: ReactNode;
  background: string;
  border: string;
  text: string;
}) {
  return (
    <article
      className="relative flex aspect-[0.586/1] min-h-[734px] w-full max-w-[430px] flex-col overflow-hidden rounded-[22px]"
      style={{ backgroundColor: background, color: text, borderColor: border, borderWidth: 1 }}
    >
      {children}
    </article>
  );
}

function AgentPhoto({
  className = "",
  variant = "cover",
}: {
  className?: string;
  variant?: "cover" | "circle" | "square";
}) {
  const fit =
    variant === "cover"
      ? "object-cover object-top"
      : variant === "circle"
        ? "object-cover object-top"
        : "object-cover object-top";
  return (
    <img
      src="/agent-photo.jpg"
      alt="Manuel Jiménez, Realtor"
      className={`${fit} h-full w-full ${className}`}
      onError={(event) => {
        event.currentTarget.src = "/agent-photo.svg";
      }}
    />
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Variation 1 — Dark Navy / Financial Services
// ──────────────────────────────────────────────────────────────────────────

function V1Front() {
  return (
    <CardShell background="#071829" border="#0d2236" text="#ffffff">
      <div className="flex items-center justify-between px-7 pt-7">
        <span className="font-mono text-xs tracking-[0.28px] text-white/70 uppercase">My Realty Group</span>
        <span className="font-mono text-xs tracking-[0.28px] text-white/55 uppercase">FL · 2025</span>
      </div>

      <div className="relative mx-7 mt-6 overflow-hidden rounded-[16px] border border-white/10">
        <div className="aspect-[4/5]">
          <AgentPhoto />
        </div>
      </div>

      <div className="mt-auto px-7 pb-9">
        <span className="inline-flex items-center rounded-full border border-[#1863dc] bg-[#1863dc]/15 px-3 py-1 font-mono text-[11px] tracking-[0.28px] text-[#9bb6ff] uppercase">
          Realtor
        </span>
        <h2 className="mt-5 text-5xl leading-[1] font-normal tracking-[-0.96px] text-balance">Manuel Jiménez</h2>
        <p className="mt-4 max-w-[18rem] text-base leading-6 text-white/70">Consultor en Negocios Inmobiliarios</p>
      </div>
    </CardShell>
  );
}

function V1Back() {
  return (
    <CardShell background="#071829" border="#0d2236" text="#ffffff">
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between border-b border-white/15 pb-5">
          <span className="font-mono text-xs tracking-[0.28px] text-white/70 uppercase">WhatsApp</span>
          <span className="rounded-full border border-white/25 px-3 py-1 text-xs leading-none">Scan</span>
        </div>

        <div className="mx-auto mt-9 w-full max-w-[230px]">
          <QrCode colors={{ surface: "#ffffff", border: "#ffffff", ink: "#071829", hoverBorder: "#1863dc" }} />
        </div>

        <p className="mx-auto mt-5 max-w-[260px] text-center text-sm leading-5 text-white/65">
          Scan to start a direct conversation.
        </p>

        <div className="mt-auto">
          <div className="divide-y divide-white/15 border-y border-white/15">
            <a
              href={phoneHref}
              className="flex items-center justify-between gap-5 py-4 text-white transition-colors hover:text-[#9bb6ff]"
            >
              <span className="font-mono text-xs tracking-[0.28px] text-white/55 uppercase">Phone</span>
              <span className="text-base">{phoneDisplay}</span>
            </a>
            <a
              href={websiteUrl}
              className="flex items-center justify-between gap-5 py-4 text-white transition-colors hover:text-[#9bb6ff]"
            >
              <span className="font-mono text-xs tracking-[0.28px] text-white/55 uppercase">Web</span>
              <span className="text-base">manueljimenezfl.com</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-white/80">{handle}</p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-white/25 px-3 py-1 text-xs text-white/85 transition-colors hover:border-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Variation 2 — White Editorial / Coral Taxonomy
// ──────────────────────────────────────────────────────────────────────────

function V2Front() {
  return (
    <CardShell background="#ffffff" border="#f2f2f2" text="#212121">
      <div className="flex items-center justify-between px-7 pt-7">
        <span className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">My Realty Group</span>
        <span className="rounded-full border border-[#ffad9b] bg-[#fff6f3] px-3 py-1 text-xs text-[#17171c]">
          Realtor
        </span>
      </div>

      <div className="px-7 pt-9">
        <h2 className="text-[64px] leading-[1] font-normal tracking-[-1.28px] text-balance text-[#17171c]">
          Manuel
          <br />
          Jiménez
        </h2>
        <p className="mt-5 max-w-[20rem] text-lg leading-[1.4] text-[#212121]">
          Consultor en Negocios Inmobiliarios
        </p>
      </div>

      <div className="mx-7 mt-auto mb-9 overflow-hidden rounded-[22px] border border-[#f2f2f2] bg-[#eeece7]">
        <div className="aspect-[16/10]">
          <AgentPhoto />
        </div>
      </div>
    </CardShell>
  );
}

function V2Back() {
  return (
    <CardShell background="#ffffff" border="#f2f2f2" text="#212121">
      <div className="flex flex-1 flex-col p-7">
        <span className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">Contact</span>

        <div className="mx-auto mt-7 w-full max-w-[260px]">
          <QrCode colors={{ surface: "#ffffff", border: "#d9d9dd", ink: "#17171c", hoverBorder: "#17171c" }} />
        </div>

        <p className="mx-auto mt-4 max-w-[260px] text-center text-sm text-[#75758a]">Scan to message on WhatsApp.</p>

        <div className="mt-auto">
          <div className="divide-y divide-[#d9d9dd] border-y border-[#d9d9dd]">
            <a
              href={phoneHref}
              className="flex items-center justify-between py-4 text-[#212121] transition-colors hover:text-[#1863dc]"
            >
              <span className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">Phone</span>
              <span className="text-base">{phoneDisplay}</span>
            </a>
            <a
              href={websiteUrl}
              className="flex items-center justify-between py-4 text-[#212121] transition-colors hover:text-[#1863dc]"
            >
              <span className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">Web</span>
              <span className="text-base">manueljimenezfl.com</span>
            </a>
          </div>

          <p className="mt-6 text-base text-[#212121]">{handle}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="rounded-full border border-[#ffad9b] bg-[#fff6f3] px-3 py-1 text-xs text-[#17171c] transition-colors hover:border-[#17171c]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </CardShell>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Variation 3 — Pale Green Wash / North-style
// ──────────────────────────────────────────────────────────────────────────

function V3Front() {
  return (
    <CardShell background="#edfce9" border="#cfe6c6" text="#003c33">
      <div className="flex items-center justify-between px-7 pt-7">
        <span className="font-mono text-xs tracking-[0.28px] text-[#003c33]/65 uppercase">My Realty Group</span>
        <span className="font-mono text-xs tracking-[0.28px] text-[#003c33]/55 uppercase">Florida</span>
      </div>

      <div className="mx-7 mt-6 overflow-hidden rounded-[22px] bg-[#003c33]">
        <div className="aspect-[4/5]">
          <AgentPhoto />
        </div>
      </div>

      <div className="mt-auto px-7 pb-9">
        <p className="font-mono text-xs tracking-[0.28px] text-[#003c33]/70 uppercase">Realtor</p>
        <h2 className="mt-3 text-[56px] leading-[1] font-normal tracking-[-1.12px] text-balance">Manuel Jiménez</h2>
        <p className="mt-4 max-w-[18rem] text-base leading-6 text-[#003c33]/80">
          Consultor en Negocios Inmobiliarios
        </p>
      </div>
    </CardShell>
  );
}

function V3Back() {
  return (
    <CardShell background="#edfce9" border="#cfe6c6" text="#003c33">
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.28px] text-[#003c33]/70 uppercase">WhatsApp</span>
          <span className="rounded-full border border-[#003c33]/30 px-3 py-1 text-xs text-[#003c33]">Scan</span>
        </div>

        <div className="mt-6 rounded-[22px] border border-[#cfe6c6] bg-white p-6">
          <div className="mx-auto w-full max-w-[230px]">
            <QrCode colors={{ surface: "#ffffff", border: "#d9d9dd", ink: "#003c33", hoverBorder: "#003c33" }} />
          </div>
          <p className="mx-auto mt-4 max-w-[260px] text-center text-sm text-[#75758a]">
            Direct chat on WhatsApp.
          </p>
        </div>

        <div className="mt-auto">
          <div className="divide-y divide-[#003c33]/15 border-y border-[#003c33]/15">
            <a
              href={phoneHref}
              className="flex items-center justify-between py-4 text-[#003c33] transition-colors hover:text-[#1863dc]"
            >
              <span className="font-mono text-xs tracking-[0.28px] text-[#003c33]/60 uppercase">Phone</span>
              <span className="text-base">{phoneDisplay}</span>
            </a>
            <a
              href={websiteUrl}
              className="flex items-center justify-between py-4 text-[#003c33] transition-colors hover:text-[#1863dc]"
            >
              <span className="font-mono text-xs tracking-[0.28px] text-[#003c33]/60 uppercase">Web</span>
              <span className="text-base">manueljimenezfl.com</span>
            </a>
          </div>

          <p className="mt-5 text-base text-[#003c33]">{handle}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="rounded-full border border-[#003c33]/30 px-3 py-1 text-xs text-[#003c33] transition-colors hover:border-[#003c33]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </CardShell>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Variation 4 — Soft Stone / Warm Editorial
// ──────────────────────────────────────────────────────────────────────────

function V4Front() {
  return (
    <CardShell background="#eeece7" border="#d9d6cf" text="#17171c">
      <div className="flex items-center justify-between px-7 pt-7">
        <span className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">My Realty Group</span>
        <span className="rounded-full border border-[#17171c]/20 px-3 py-1 text-xs text-[#17171c]">Florida</span>
      </div>

      <div className="relative mx-7 mt-6 overflow-hidden rounded-full border border-[#d9d6cf] bg-white">
        <div className="aspect-square">
          <AgentPhoto variant="circle" />
        </div>
      </div>

      <div className="mt-7 px-7">
        <p className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">Realtor</p>
        <h2 className="mt-3 text-[44px] leading-[1.05] font-normal tracking-[-0.88px] text-balance">
          Manuel Jiménez
        </h2>
        <p className="mt-3 max-w-[20rem] text-base leading-6 text-[#212121]">
          Consultor en Negocios Inmobiliarios
        </p>
      </div>

      <div className="mt-auto px-7 pb-7">
        <div className="flex items-center justify-between border-t border-[#17171c]/15 pt-5">
          <span className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">{handle}</span>
          <span className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">{phoneDisplay}</span>
        </div>
      </div>
    </CardShell>
  );
}

function V4Back() {
  return (
    <CardShell background="#eeece7" border="#d9d6cf" text="#17171c">
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">Contact</span>
          <span className="rounded-full border border-[#17171c]/20 px-3 py-1 text-xs text-[#17171c]">WhatsApp</span>
        </div>

        <div className="mx-auto mt-9 w-full max-w-[240px]">
          <QrCode colors={{ surface: "#ffffff", border: "#d9d6cf", ink: "#17171c", hoverBorder: "#17171c" }} />
        </div>

        <p className="mx-auto mt-4 max-w-[260px] text-center text-sm text-[#75758a]">Scan to chat directly.</p>

        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#17171c]/15 pt-6">
            <div>
              <p className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">Phone</p>
              <a href={phoneHref} className="mt-1 block text-base text-[#17171c] hover:text-[#1863dc]">
                {phoneDisplay}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">Web</p>
              <a href={websiteUrl} className="mt-1 block text-base text-[#17171c] hover:text-[#1863dc]">
                manueljimenezfl.com
              </a>
            </div>
            <div className="col-span-2">
              <p className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">Social</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="rounded-full border border-[#ffad9b] bg-white/70 px-3 py-1 text-xs text-[#17171c] transition-colors hover:border-[#17171c]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Variation 5 — Near-Black / Coral Accent
// ──────────────────────────────────────────────────────────────────────────

function V5Front() {
  return (
    <CardShell background="#17171c" border="#2a2a31" text="#ffffff">
      <div className="absolute inset-0">
        <AgentPhoto />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(23,23,28,0) 0%, rgba(23,23,28,0.25) 45%, rgba(23,23,28,0.95) 100%)",
          }}
        />
      </div>

      <div className="relative mt-auto p-7">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#ff7759]" aria-hidden />
          <span className="font-mono text-xs tracking-[0.28px] text-[#ff7759] uppercase">Realtor</span>
        </div>
        <h2 className="mt-5 text-[60px] leading-[1] font-normal tracking-[-1.2px] text-balance">Manuel Jiménez</h2>
        <p className="mt-4 max-w-[20rem] text-lg leading-[1.4] text-white/82">
          Consultor en Negocios Inmobiliarios
        </p>

        <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-4">
          <span className="font-mono text-xs tracking-[0.28px] text-white/65 uppercase">My Realty Group</span>
          <span className="font-mono text-xs tracking-[0.28px] text-white/55 uppercase">Florida</span>
        </div>
      </div>
    </CardShell>
  );
}

function V5Back() {
  return (
    <CardShell background="#17171c" border="#2a2a31" text="#ffffff">
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.28px] text-[#ff7759] uppercase">WhatsApp</span>
          <span className="rounded-full border border-[#ff7759]/60 bg-[#ff7759]/10 px-3 py-1 text-xs text-[#ffad9b]">
            Scan
          </span>
        </div>

        <div className="mx-auto mt-9 w-full max-w-[230px]">
          <QrCode
            colors={{
              surface: "#ffffff",
              border: "#ff7759",
              ink: "#17171c",
              hoverBorder: "#ff7759",
              ringColor: "#ff7759",
            }}
          />
        </div>

        <p className="mx-auto mt-4 max-w-[260px] text-center text-sm text-white/65">
          Direct chat — scan to start.
        </p>

        <div className="mt-auto">
          <div className="divide-y divide-white/12 border-y border-white/12">
            <a
              href={phoneHref}
              className="flex items-center justify-between py-4 text-white transition-colors hover:text-[#ff7759]"
            >
              <span className="font-mono text-xs tracking-[0.28px] text-white/55 uppercase">Phone</span>
              <span className="text-base">{phoneDisplay}</span>
            </a>
            <a
              href={websiteUrl}
              className="flex items-center justify-between py-4 text-white transition-colors hover:text-[#ff7759]"
            >
              <span className="font-mono text-xs tracking-[0.28px] text-white/55 uppercase">Web</span>
              <span className="text-base">manueljimenezfl.com</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-white/85">{handle}</p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="rounded-full border border-[#ff7759]/50 bg-[#ff7759]/10 px-3 py-1 text-xs text-[#ffad9b] transition-colors hover:border-[#ff7759] hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardShell>
  );
}

// ──────────────────────────────────────────────────────────────────────────
// Page
// ──────────────────────────────────────────────────────────────────────────

const variations: { id: string; title: string; subtitle: string; front: ReactNode; back: ReactNode }[] = [
  {
    id: "v1",
    title: "Variation 1 — Dark Navy / Financial",
    subtitle: "Deep navy band, photo as a contained 16px media card, blue editorial accent.",
    front: <V1Front />,
    back: <V1Back />,
  },
  {
    id: "v2",
    title: "Variation 2 — White Editorial",
    subtitle: "Canvas white, oversized black headline, coral taxonomy chip, photo card below.",
    front: <V2Front />,
    back: <V2Back />,
  },
  {
    id: "v3",
    title: "Variation 3 — Pale Green Wash",
    subtitle: "North-style pale green section with a deep enterprise green photo card.",
    front: <V3Front />,
    back: <V3Back />,
  },
  {
    id: "v4",
    title: "Variation 4 — Soft Stone / Warm",
    subtitle: "Warm stone surface with a circular portrait, restrained mono labels.",
    front: <V4Front />,
    back: <V4Back />,
  },
  {
    id: "v5",
    title: "Variation 5 — Near-Black / Coral",
    subtitle: "Full-bleed photo with coral accents and editorial dark-product tone.",
    front: <V5Front />,
    back: <V5Back />,
  },
];

export default function Variations() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 text-[#17171c] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12">
          <p className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">Business Card · Variations</p>
          <h1 className="mt-4 text-5xl leading-[1] font-normal tracking-[-0.96px] text-balance">
            Five takes on Manuel Jiménez&rsquo;s card
          </h1>
          <p className="mt-5 max-w-[40rem] text-lg leading-[1.4] text-[#212121]">
            Each variation pairs a front (photo) with a back (WhatsApp QR), all using the same DESIGN.md tokens.
          </p>
        </header>

        <div className="space-y-20">
          {variations.map((v) => (
            <section key={v.id} aria-labelledby={`${v.id}-title`}>
              <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4 border-b border-[#d9d9dd] pb-5">
                <h2
                  id={`${v.id}-title`}
                  className="text-2xl leading-[1.2] font-normal tracking-[-0.32px] text-[#17171c]"
                >
                  {v.title}
                </h2>
                <p className="max-w-[28rem] text-sm leading-5 text-[#75758a]">{v.subtitle}</p>
              </div>

              <div className="grid w-full items-start justify-center gap-8 lg:grid-cols-[430px_430px]">
                {v.front}
                {v.back}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
