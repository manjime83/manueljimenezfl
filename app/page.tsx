import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    title: "MiniMax Edition",
    eyebrow: "Cinematic real estate page",
    href: "/minimax",
    description: "Black-canvas, neon-lime version of Manuel Jimenez FL using the MiniMax cinematic lab direction.",
    action: "Open edition",
  },
  {
    title: "MiniMax Card",
    eyebrow: "Black-canvas contact card",
    href: "/business-card-minimax",
    description:
      "Two-sided digital business card using the MiniMax cinematic lab style, QR code, WhatsApp, contact links, and license details.",
    action: "Open card",
  },
  {
    title: "Design System",
    eyebrow: "Tokens, components, examples",
    href: "/design-system",
    description:
      "Full reference for the MiniMax cinematic lab system — color roles, typography scale, spacing rhythm, components, do/don'ts, and four full composition examples.",
    action: "Open system",
  },
  {
    title: "Socials Banners",
    eyebrow: "YouTube · Facebook · Instagram",
    href: "/socials",
    description:
      "MiniMax-style banner art for the three socials, previewed inline and exported as PNG via sharp from the same SVG source.",
    action: "Open banners",
  },
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

function MiniMaxPreview() {
  return (
    <div className="relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden border border-[#2a3038] bg-black p-5 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="font-minimax-mono relative flex items-center justify-between border-b border-[#2a3038] pb-3 text-xs text-white/52 uppercase">
        <span>Live search</span>
        <span className="text-[#c8ff00]">Active</span>
      </div>
      <div className="relative grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className={`h-8 border border-[#2a3038] ${[1, 6, 12].includes(index) ? "bg-[#c8ff00]" : "bg-[#181e25]"}`}
          />
        ))}
      </div>
      <div className="relative">
        <p className="font-minimax-display text-4xl leading-none font-semibold">Search with signal.</p>
        <div className="mt-4 h-2 w-24 rounded-full bg-[#c8ff00]" />
      </div>
    </div>
  );
}

function MiniMaxCardPreview() {
  return (
    <div className="relative h-full min-h-[260px] overflow-hidden border border-[#2a3038] bg-black p-5 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="relative grid h-full grid-cols-[0.82fr_1fr] gap-4">
        <div className="overflow-hidden border border-[#2a3038] bg-[#181e25]">
          <Image
            src="/magnific_crea-una-foto-professiona_2927400751.png"
            alt="Preview portrait for MiniMax business card"
            width={2048}
            height={2048}
            priority
            className="h-full w-full object-cover object-top grayscale-[20%]"
          />
        </div>
        <div className="flex min-w-0 flex-col justify-between">
          <div>
            <p className="font-minimax-mono text-xs text-white/52 uppercase">Card system</p>
            <p className="font-minimax-display mt-3 text-4xl leading-none font-semibold">Manuel Jimenez</p>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={index}
                className={`h-5 border border-[#2a3038] ${
                  [2, 6, 10].includes(index) ? "bg-[#c8ff00]" : "bg-[#181e25]"
                }`}
              />
            ))}
          </div>
          <div className="h-9 rounded-full bg-[#c8ff00]" />
        </div>
      </div>
    </div>
  );
}

function PreviewFor({ href }: { href: string }) {
  if (href === "/business-card-minimax") {
    return <MiniMaxCardPreview />;
  }

  return <MiniMaxPreview />;
}

export default function Home() {
  return (
    <main className="font-minimax-sans min-h-screen bg-black text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-12 md:px-8">
        <div className="max-w-3xl">
          <p className="font-minimax-mono text-sm tracking-[0.04em] text-[#7a808a] uppercase">manueljimenezfl.com</p>
          <h1 className="font-minimax-display mt-5 text-6xl leading-none font-semibold md:text-8xl">MiniMax</h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.55] text-[#c5c9cf]">
            Cinematic black-canvas pages for Manuel Jimenez FL. Only the MiniMax edition and MiniMax business card
            remain in this build.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {destinations.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group grid gap-5 border border-[#2a3038] bg-[#0a0a0a] p-5 transition-colors hover:border-[#c8ff00] focus:ring-2 focus:ring-[#c8ff00] focus:outline-none"
            >
              <PreviewFor href={item.href} />
              <div className="flex min-h-[220px] flex-col justify-between border border-[#2a3038] bg-[#181e25] p-6">
                <div>
                  <p className="font-minimax-mono text-sm tracking-[0.04em] text-[#7a808a] uppercase">{item.eyebrow}</p>
                  <h2 className="font-minimax-display mt-4 text-4xl leading-tight font-semibold">{item.title}</h2>
                  <p className="mt-5 text-base leading-[1.5] text-[#c5c9cf]">{item.description}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm leading-[1.71] font-semibold text-[#c8ff00]">
                  {item.action}
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
