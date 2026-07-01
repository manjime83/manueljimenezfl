import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Manuel Jimenez FL | Business Card",
  description: "Black-canvas digital business card for Manuel Jimenez FL.",
};

const phoneNumber = "+1 (407) 301-0492";
const phoneDigits = phoneNumber.replace(/\D/g, "");
const socialHandle = "manueljimenezfl";

const contact = {
  whatsappUrl: `https://wa.me/${phoneDigits}`,
  qrUrl: "https://www.manueljimenezfl.com",
  websiteUrl: "https://www.manueljimenezfl.com",
  phoneHref: `tel:+${phoneDigits}`,
  phoneDisplay: phoneNumber,
  email: "manuel@manueljimenezfl.com",
  handle: `@${socialHandle}`,
  licenseNumber: "SL3658224",
  facebookUrl: `https://www.facebook.com/${socialHandle}`,
  youtubeUrl: `https://www.youtube.com/@${socialHandle}`,
  instagramUrl: `https://www.instagram.com/${socialHandle}`,
};

const channels = [
  ["Phone", contact.phoneDisplay, contact.phoneHref],
  ["Email", contact.email, `mailto:${contact.email}`],
  ["Web", "www.manueljimenezfl.com", contact.websiteUrl],
  ["Instagram", contact.handle, contact.instagramUrl],
];

const serviceSignals = ["Buyer search", "Listing prep", "Relocation", "Offer path"];

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

function WhatsAppGlyph({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M12 2.05a9.95 9.95 0 0 0-8.6 14.97L2.05 22l5.07-1.33A9.95 9.95 0 1 0 12 2.05Zm0 18.18a8.21 8.21 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.27 8.27 0 1 1 6.97 3.86Zm4.55-6.16c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.56.13-.16.25-.65.81-.79.97-.15.16-.29.18-.54.06-.25-.12-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.01-.39.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.17.86 2.3.98 2.46.12.17 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.51.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function TikTokGlyph({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1Z" />
    </svg>
  );
}

function FacebookGlyph({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M13.5 21.5v-7.8h2.6l.4-3h-3V8.8c0-.87.24-1.46 1.5-1.46h1.6V4.66c-.28-.04-1.23-.12-2.34-.12-2.31 0-3.9 1.41-3.9 4v2.16H8v3h2.36v7.8h3.14Z" />
    </svg>
  );
}

function YouTubeGlyph({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M21.6 7.2c-.23-.86-.9-1.54-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43c-.86.23-1.54.9-1.77 1.77C2 8.77 2 12 2 12s0 3.23.39 4.8c.23.86.9 1.54 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43c.86-.23 1.54-.9 1.77-1.77.39-1.57.39-4.8.39-4.8s0-3.23-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

function InstagramGlyph({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CardShell({
  children,
  label,
  id,
  tone = "dark",
}: {
  children: ReactNode;
  label: string;
  id?: string;
  tone?: "dark" | "light";
}) {
  const isDark = tone === "dark";
  return (
    <article
      id={id}
      aria-label={label}
      className={`relative flex aspect-2/3.5 w-full max-w-107.5 flex-col overflow-hidden rounded-[20px] border ${
        isDark ? "border-[#2a3038] bg-black text-white" : "border-[#e1e3e6] bg-white text-[#181e25]"
      }`}
      style={{ containerType: "inline-size" }}
    >
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1.4px)] bg-size-[18px_18px]"
            : "bg-[radial-gradient(circle,rgba(24,30,37,0.09)_1px,transparent_1.4px)] bg-size-[18px_18px]"
        }`}
      />
      <div className="relative flex min-h-0 flex-1 flex-col">{children}</div>
    </article>
  );
}

function ContactRow({
  label,
  value,
  href,
  isFirst = false,
}: {
  label: string;
  value: string;
  href: string;
  isFirst?: boolean;
}) {
  return (
    <a
      href={href}
      className={`grid grid-cols-[80px_1fr] items-baseline gap-3 px-5 py-4.5 transition-colors hover:text-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00] focus:outline-none ${
        isFirst ? "" : "border-t border-[#2a3038]"
      }`}
    >
      <span className="font-minimax-mono text-[13px] leading-[1.4] font-medium tracking-[0.12em] text-[#7a808a] uppercase">
        {label}
      </span>
      <span className="min-w-0 text-right text-[clamp(14px,3.9cqw,17px)] leading-[1.4] font-medium whitespace-nowrap text-[#c5c9cf]">
        {value}
      </span>
    </a>
  );
}

function FrontCard() {
  return (
    <CardShell id="card-front" label="Business card front" tone="dark">
      <div className="relative aspect-4/5 w-full overflow-hidden">
        <Image
          src="/magnific_cambiemos-el-fondo-por-un_XtWtCpZBfo.jpeg"
          alt="Portrait of Manuel Jiménez"
          width={1024}
          height={1024}
          priority
          className="h-full w-full origin-center object-cover transform-[translate(7%,35%)_scale(1.80)] grayscale-12"
        />
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-3/5 bg-linear-to-b from-transparent via-black/70 to-black" />
      </div>

      <div className="relative -mt-62 flex min-h-0 flex-1 flex-col px-7 pt-2 pb-12">
        <Image
          src="/logo-transparent.png"
          alt=""
          width={526}
          height={574}
          aria-hidden="true"
          priority
          className="mx-auto h-16 w-auto object-contain invert"
        />

        <h1 className="font-minimax-display mt-4 w-full text-center text-[clamp(34px,12.4cqw,52px)] leading-[0.95] font-bold tracking-[-0.015em] whitespace-nowrap">
          Manuel Jiménez
        </h1>

        <p className="mt-3 flex items-center justify-center gap-2 text-center text-[16px] font-semibold text-[#c5c9cf]">
          <span>Real Estate Agent</span>
          <span aria-hidden="true" className="size-1 rounded-full bg-[#c8ff00]" />
          <span>My Realty Group</span>
        </p>

        <div className="mt-6 rounded-[18px] border border-[#3a4049] bg-[#0a0a0a]">
          <ContactRow label="Phone" value={contact.phoneDisplay} href={contact.phoneHref} isFirst />
          <ContactRow label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactRow label="Web" value="www.manueljimenezfl.com" href={contact.websiteUrl} />
        </div>

        <p className="font-minimax-mono mt-auto pt-5 text-center text-[13px] font-medium tracking-[0.18em] text-[#7a808a] uppercase">
          License {contact.licenseNumber}
        </p>
      </div>
    </CardShell>
  );
}

function BackCard() {
  return (
    <CardShell id="card-back" label="Business card back" tone="light">
      <div className="flex min-h-0 flex-1 flex-col px-7 pt-12 pb-12">
        <Image
          src="/logo-transparent.png"
          alt=""
          width={526}
          height={574}
          aria-hidden="true"
          className="mx-auto h-20 w-auto object-contain"
        />
        <h2 className="font-minimax-display mt-4 text-center text-[clamp(24px,6.4cqw,30px)] leading-[1.15] font-bold tracking-[-0.005em] text-balance">
          Scan to browse available listings
        </h2>

        <a
          href={contact.qrUrl}
          aria-label="Open www.manueljimenezfl.com"
          className="mx-auto mt-5 grid aspect-square w-[74%] place-items-center rounded-2xl border border-[#e1e3e6] bg-white p-5 transition-colors hover:border-[#9bcc00] focus:ring-2 focus:ring-[#9bcc00] focus:outline-none"
        >
          <QRCodeSVG
            value={contact.qrUrl}
            level="M"
            marginSize={0}
            bgColor="#ffffff"
            fgColor="#181e25"
            className="size-full"
          />
        </a>
        <p className="font-minimax-mono mt-2 text-center text-[13px] font-medium tracking-[0.18em] text-[#7a808a] uppercase">
          www.manueljimenezfl.com
        </p>

        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Contact me on WhatsApp"
          className="group mt-auto flex items-center gap-3 rounded-full bg-[#c8ff00] px-5 py-3 text-[#181e25] transition-colors hover:bg-[#d8ff3a] focus:ring-2 focus:ring-[#9bcc00] focus:outline-none"
        >
          <WhatsAppGlyph className="size-8" />
          <span className="flex flex-col items-start leading-[1.2]">
            <span className="text-[16px] font-semibold">Contact me</span>
            <span className="font-minimax-mono text-[13px] font-medium tracking-[0.04em] tabular-nums opacity-75">
              {contact.phoneDisplay}
            </span>
          </span>
          <span className="ml-auto transition-transform group-hover:translate-x-0.5">
            <ArrowIcon />
          </span>
        </a>

        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Follow me on Instagram, Facebook, YouTube and TikTok"
          className="group mt-3 flex items-center gap-3 rounded-xl bg-[#181e25] px-4 py-3 text-white transition-colors hover:bg-[#232a33] focus:ring-2 focus:ring-[#9bcc00] focus:outline-none"
        >
          <span className="flex items-center gap-2.5">
            <InstagramGlyph className="size-8" />
            <FacebookGlyph className="size-4.5" />
            <YouTubeGlyph className="size-4.5" />
            <TikTokGlyph className="size-4.5" />
          </span>
          <span className="ml-2 flex flex-col items-start leading-[1.2]">
            <span className="text-[16px] font-semibold">Follow me</span>
            <span className="font-minimax-mono text-[13px] font-medium tracking-[0.04em] opacity-70">{contact.handle}</span>
          </span>
          <span className="ml-auto transition-transform group-hover:translate-x-0.5">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </CardShell>
  );
}

export default function MiniMaxBusinessCardPage() {
  return (
    <main className="font-minimax-sans min-h-screen bg-black px-4 py-8 text-white sm:px-8 sm:py-12">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
        <div className="max-w-xl">
          <Link
            href="/"
            className="font-minimax-mono text-[13px] tracking-[0.04em] text-[#7a808a] uppercase hover:text-white focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
          >
            Site index
          </Link>
          <h1 className="font-minimax-display mt-5 text-6xl leading-none font-semibold text-balance md:text-7xl">
            Business card.
          </h1>
          <p className="mt-6 text-lg leading-[1.55] text-pretty text-[#c5c9cf]">
            A darker two-sided card system: portrait on the front, scan-and-contact command on the back, with lime
            reserved for the primary action.
          </p>
          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            {serviceSignals.map((signal) => (
              <span
                key={signal}
                className="font-minimax-mono border border-[#2a3038] bg-[#181e25] px-4 py-3 text-xs tracking-[0.04em] text-[#c5c9cf] uppercase"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-6">
          <div className="grid w-full items-center justify-center gap-6 xl:grid-cols-[430px_430px]">
            <FrontCard />
            <BackCard />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/api/business-card/front"
              className="group inline-flex items-center gap-2 rounded-full border border-[#2a3038] bg-[#181e25] px-5 py-2.5 text-sm font-medium tracking-[0.04em] text-white transition-colors hover:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
            >
              PNG front
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
            <a
              href="/api/business-card/back"
              className="group inline-flex items-center gap-2 rounded-full border border-[#2a3038] bg-[#181e25] px-5 py-2.5 text-sm font-medium tracking-[0.04em] text-white transition-colors hover:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
            >
              PNG back
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
            <a
              href="/api/business-card/zip"
              className="group inline-flex items-center gap-2 rounded-full bg-[#c8ff00] px-5 py-2.5 text-sm font-medium text-[#181e25] transition-colors hover:bg-[#d8ff3a] focus:ring-2 focus:ring-[#9bcc00] focus:outline-none"
            >
              Download both (ZIP)
              <span className="transition-transform group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-start-2">
          <div className="grid gap-2 md:grid-cols-4">
            {channels.map(([label, value, href]) => (
              <a
                key={label}
                href={href}
                className="border border-[#2a3038] bg-[#0a0a0a] px-4 py-3 transition-colors hover:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
              >
                <span className="font-minimax-mono text-[11px] tracking-[0.04em] text-[#7a808a] uppercase">
                  {label}
                </span>
                <span className="mt-2 block min-w-0 truncate text-sm text-[#c5c9cf]">{value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
