import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Manuel Jimenez FL | MiniMax Edition",
  description: "A cinematic black-and-lime version of Manuel Jimenez's real estate page, built from DESIGN-minimax.md.",
};

const contact = {
  phoneHref: "tel:+14076309767",
  phoneDisplay: "(407) 630-9767",
  whatsapp: "https://wa.me/14076309767",
  email: "mailto:manuel@manueljimenezfl.com",
  website: "https://manueljimenezfl.com",
  instagram: "https://www.instagram.com/manueljimenezfl",
  license: "SL3658224",
};

const marketStats = [
  ["407", "Central Florida network"],
  ["24h", "Buyer brief turnaround"],
  ["1:1", "Property search guidance"],
  ["SL3658224", "Florida real estate license"],
];

const services = [
  {
    title: "Buyer Search Lab",
    copy: "Narrow the search by commute, school zones, HOA rules, rental restrictions, insurance risk, and resale signals.",
    marker: "SEARCH",
  },
  {
    title: "Seller Launch Room",
    copy: "Prepare pricing, visual presentation, showing cadence, offer review, and negotiation steps before the listing goes live.",
    marker: "LIST",
  },
  {
    title: "Relocation Brief",
    copy: "Translate Florida neighborhoods into practical tradeoffs for buyers moving from another market.",
    marker: "MOVE",
  },
];

const benchmarkRows = [
  ["Neighborhood scan", "Schools, commute, insurance, HOA", "Same day"],
  ["Offer prep", "Terms, contingencies, timing", "Before submit"],
  ["Listing readiness", "Pricing, repairs, media plan", "Pre-market"],
  ["Closing path", "Inspection, appraisal, title", "Tracked weekly"],
];

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

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4" fill="none">
      <path
        d="M6.3 3.4 8 7.1 6.9 8.2c.8 1.7 2.1 3.1 3.8 3.9l1.2-1.1 3.7 1.7-.6 3.4c-.1.6-.7 1-1.3.9-5.8-.8-10.5-5.5-11.3-11.3-.1-.6.3-1.2.9-1.3l3-.6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4" fill="none">
      <path
        d="M4.2 13.4a6.5 6.5 0 1 1 2.4 2.4L3.4 16.6l.8-3.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path d="M7.2 9.6h5.6M7.2 12h3.2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function SectionHeader({
  eyebrow,
  title,
  children,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  inverse?: boolean;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-[0.92fr_1.08fr] md:items-end">
      <div>
        <p
          className={`font-minimax-mono text-[13px] leading-[1.4] tracking-[0.04em] uppercase ${
            inverse ? "text-[#7a808a]" : "text-[#c5c9cf]"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-4 max-w-3xl text-5xl leading-none font-semibold text-balance md:text-7xl ${
            inverse ? "text-[#181e25]" : "text-white"
          }`}
        >
          {title}
        </h2>
      </div>
      <p className={`max-w-2xl text-lg leading-[1.55] text-pretty ${inverse ? "text-[#4a5058]" : "text-[#c5c9cf]"}`}>
        {children}
      </p>
    </div>
  );
}

function HeroDemo() {
  return (
    <div className="relative min-h-[520px] overflow-hidden border border-[#2a3038] bg-[#0a0a0a] md:min-h-[700px]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-8 right-8 left-8 flex items-center justify-between border-b border-[#2a3038] pb-4 text-[#c5c9cf]">
        <span className="font-minimax-mono text-xs tracking-[0.04em] uppercase">Live search demo</span>
        <span className="font-minimax-mono text-xs text-[#c8ff00]">ACTIVE</span>
      </div>

      <div className="absolute top-24 right-8 left-8 grid gap-4 lg:grid-cols-[1fr_0.85fr]">
        <div className="min-h-[270px] border border-[#2a3038] bg-[#181e25]/72 p-4">
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 32 }).map((_, index) => (
              <span
                key={index}
                className={`h-10 border border-[#2a3038] ${
                  [2, 7, 11, 18, 24].includes(index) ? "bg-[#c8ff00]" : "bg-[#232a33]"
                }`}
              />
            ))}
          </div>
          <div className="mt-6 h-1 w-full overflow-hidden bg-[#232a33]">
            <span className="block h-full w-1/2 animate-[scan_4s_ease-in-out_infinite] bg-[#c8ff00] motion-reduce:animate-none" />
          </div>
        </div>

        <div className="space-y-3">
          {["Winter Garden", "Lake Nona", "Dr. Phillips"].map((area, index) => (
            <div key={area} className="border border-[#2a3038] bg-black/72 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-minimax-mono text-xs text-[#7a808a] uppercase">Match 0{index + 1}</p>
                  <p className="mt-2 text-xl font-medium text-white">{area}</p>
                </div>
                <span className="font-minimax-mono text-sm text-[#c8ff00] tabular-nums">{91 - index * 6}%</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <span className="h-2 bg-[#c8ff00]" />
                <span className="h-2 bg-[#3a4049]" />
                <span className="h-2 bg-[#3a4049]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-8 bottom-8 left-8 grid gap-4 md:grid-cols-[190px_1fr] md:items-end">
        <div className="overflow-hidden border border-[#3a4049] bg-[#181e25]">
          <Image
            src="/magnific_crea-una-foto-professiona_2927400751.png"
            alt="Portrait of Manuel Jimenez"
            width={2048}
            height={2048}
            priority
            className="aspect-square w-full object-cover object-top"
          />
        </div>
        <div className="border border-[#2a3038] bg-black/82 p-5">
          <p className="font-minimax-mono text-xs tracking-[0.04em] text-[#7a808a] uppercase">Agent console</p>
          <p className="mt-3 max-w-xl text-2xl leading-tight font-medium text-white">
            Property decisions, translated into a tight search brief.
          </p>
        </div>
      </div>
    </div>
  );
}

function PrimaryButton({ href, children, icon }: { href: string; children: ReactNode; icon?: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[60px] bg-[#c8ff00] px-6 py-3 text-sm leading-[1.71] font-semibold text-[#181e25] transition-colors hover:bg-[#d8ff3a] focus:ring-2 focus:ring-[#c8ff00] focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
    >
      {icon}
      {children}
    </a>
  );
}

function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[12px] bg-white px-5 py-3 text-sm leading-[1.71] font-semibold text-[#181e25] transition-colors hover:bg-[#c5c9cf] focus:ring-2 focus:ring-[#c8ff00] focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

export default function MiniMaxPage() {
  return (
    <main className="font-minimax-sans min-h-screen bg-black text-white">
      <style>{`
        @keyframes scan {
          0%, 100% { transform: translateX(-8%); }
          50% { transform: translateX(108%); }
        }
      `}</style>

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#2a3038] bg-black/80 px-5 backdrop-blur-[12px] md:px-8">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
          <Link
            href="/"
            className="font-minimax-display text-lg font-semibold text-white focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
          >
            Manuel Jimenez FL
          </Link>
          <div className="hidden items-center gap-6 text-sm text-[#c5c9cf] md:flex">
            <a className="hover:text-white" href="#search">
              Search
            </a>
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <a
            href={contact.whatsapp}
            className="rounded-[60px] bg-[#c8ff00] px-4 py-2 text-sm font-semibold text-[#181e25] transition-colors hover:bg-[#d8ff3a] focus:ring-2 focus:ring-[#c8ff00] focus:ring-offset-2 focus:ring-offset-black focus:outline-none"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <section className="relative grid min-h-[100svh] items-center overflow-hidden px-5 pt-24 pb-16 md:px-8 md:pt-28">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div>
            <p className="font-minimax-mono text-[13px] leading-[1.4] tracking-[0.04em] text-[#7a808a] uppercase">
              Florida Real Estate Lab / My Realty Group
            </p>
            <h1 className="font-minimax-display mt-6 max-w-4xl text-6xl leading-none font-semibold text-balance md:text-8xl lg:text-[112px]">
              Search the market with signal.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[1.55] text-pretty text-[#c5c9cf] md:text-xl">
              A cinematic MiniMax version of Manuel Jimenez&apos;s page: focused property discovery, sharp buyer
              guidance, and a clear path from first scan to closing table.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton href={contact.whatsapp} icon={<MessageIcon />}>
                Start on WhatsApp
              </PrimaryButton>
              <SecondaryLink href={contact.phoneHref}>Call Manuel</SecondaryLink>
            </div>
          </div>
          <HeroDemo />
        </div>
      </section>

      <section className="border-y border-[#2a3038] bg-[#0a0a0a] px-5 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {marketStats.map(([value, label]) => (
            <div key={value} className="border-l border-[#2a3038] pl-4">
              <p className="font-minimax-mono text-3xl leading-none text-white tabular-nums">{value}</p>
              <p className="mt-3 text-sm leading-[1.5] text-[#7a808a]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="search" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Market workflow" title="The demo is the search.">
            Instead of a generic profile page, this version frames the agent experience like a live property lab: area
            filters, risk notes, offer steps, and contact actions are all visible without ornamental chrome.
          </SectionHeader>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="min-h-[300px] border border-[#2a3038] bg-[#181e25] p-6 transition-colors hover:border-[#c8ff00]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-minimax-mono text-xs tracking-[0.04em] text-[#7a808a] uppercase">
                    {service.marker}
                  </span>
                  <span className="h-2 w-10 bg-[#c8ff00]" />
                </div>
                <h3 className="font-minimax-display mt-16 text-4xl leading-none font-semibold">{service.title}</h3>
                <p className="mt-6 text-base leading-[1.6] text-[#c5c9cf]">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-[#181e25] md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Dense spec" title="A practical brief before a showing." inverse>
            The light inversion is reserved for the useful parts: a dense operating table buyers and sellers can scan
            quickly before making the next decision.
          </SectionHeader>

          <div className="mt-12 overflow-x-auto border border-[#e1e3e6]">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#e1e3e6] bg-[#f7f7f7]">
                  <th className="font-minimax-mono px-5 py-4 text-xs tracking-[0.04em] text-[#7a808a] uppercase">
                    Phase
                  </th>
                  <th className="font-minimax-mono px-5 py-4 text-xs tracking-[0.04em] text-[#7a808a] uppercase">
                    Signal
                  </th>
                  <th className="font-minimax-mono px-5 py-4 text-xs tracking-[0.04em] text-[#7a808a] uppercase">
                    Timing
                  </th>
                </tr>
              </thead>
              <tbody>
                {benchmarkRows.map(([phase, signal, timing]) => (
                  <tr key={phase} className="border-b border-[#e1e3e6] last:border-b-0">
                    <td className="px-5 py-5 text-xl font-semibold">{phase}</td>
                    <td className="px-5 py-5 text-[#4a5058]">{signal}</td>
                    <td className="font-minimax-mono px-5 py-5 text-sm text-[#181e25] tabular-nums">{timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-minimax-mono text-[13px] leading-[1.4] tracking-[0.04em] text-[#7a808a] uppercase">
              Contact command
            </p>
            <h2 className="font-minimax-display mt-4 text-5xl leading-none font-semibold text-balance md:text-7xl">
              One action. No noise.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-[1.55] text-[#c5c9cf]">
              Use the lime path when you are ready to start. Secondary channels stay visible, but they do not compete
              with the primary next step.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryButton href={contact.whatsapp} icon={<MessageIcon />}>
                Message Manuel
              </PrimaryButton>
              <SecondaryLink href={contact.phoneHref}>
                <span className="inline-flex items-center gap-2">
                  <PhoneIcon />
                  {contact.phoneDisplay}
                </span>
              </SecondaryLink>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[220px_1fr]">
            <a
              href={contact.website}
              aria-label="Open manueljimenezfl.com"
              className="grid aspect-square place-items-center border border-[#2a3038] bg-white p-4 transition-colors hover:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
            >
              <Image src="/qr-manueljimenezfl.svg" alt="QR code for manueljimenezfl.com" width={512} height={512} />
            </a>
            <div className="border border-[#2a3038] bg-[#181e25] p-6">
              <p className="font-minimax-mono text-xs tracking-[0.04em] text-[#7a808a] uppercase">Verified channels</p>
              <div className="mt-8 divide-y divide-[#2a3038]">
                <a className="flex items-center justify-between gap-4 py-4 hover:text-[#c8ff00]" href={contact.email}>
                  <span>Email</span>
                  <span className="text-right text-[#c5c9cf]">manuel@manueljimenezfl.com</span>
                </a>
                <a
                  className="flex items-center justify-between gap-4 py-4 hover:text-[#c8ff00]"
                  href={contact.instagram}
                >
                  <span>Instagram</span>
                  <span className="text-right text-[#c5c9cf]">@manueljimenezfl</span>
                </a>
                <div className="flex items-center justify-between gap-4 py-4">
                  <span>License</span>
                  <span className="font-minimax-mono text-sm text-[#c5c9cf]">{contact.license}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
