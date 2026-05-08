import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    title: "Business Card",
    eyebrow: "Personal contact",
    href: "/business-card",
    description:
      "Digital two-sided card for Manuel Jimenez with QR, WhatsApp, email, website, social links, and license details.",
    surface: "bg-[#003c33] text-white",
    action: "Open card",
  },
  {
    title: "Design System",
    eyebrow: "Enterprise AI System",
    href: "/design-system",
    description:
      "Living documentation for the alpha design language: colors, typography, component treatments, product patterns, forms, and footer.",
    surface: "bg-[#eeece7] text-[#17171c]",
    action: "Open system",
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

function DesignPreview() {
  return (
    <div className="flex h-full min-h-[220px] flex-col justify-between rounded-[8px] border border-[#d9d9dd] bg-white p-5">
      <div className="flex h-2 overflow-hidden rounded-full">
        {["#17171c", "#003c33", "#071829", "#eeece7", "#edfce9", "#1863dc", "#ff7759"].map((color) => (
          <span key={color} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>
      <div>
        <p className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">Tokens</p>
        <p className="mt-3 text-3xl leading-tight text-[#17171c]">Enterprise AI System</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <span className="h-16 rounded-[8px] bg-[#17171c]" />
        <span className="h-16 rounded-[8px] bg-[#003c33]" />
        <span className="h-16 rounded-[8px] bg-[#eeece7]" />
      </div>
    </div>
  );
}

function CardPreview() {
  return (
    <div className="relative h-full min-h-[220px] overflow-hidden rounded-[22px] border border-white/24 bg-[#003c33] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.16),rgba(0,60,51,0)_48%)]" />
      <div className="relative flex h-full flex-col items-center justify-center gap-5 text-center text-white">
        <Image
          src="/magnific_crea-una-foto-professiona_2927400751.png"
          alt="Preview portrait for Manuel Jimenez business card"
          width={2048}
          height={2048}
          priority
          className="size-28 rounded-[18px] border border-white/30 object-cover object-top ring-8 ring-white/10"
        />
        <div>
          <p className="font-display text-3xl leading-none">Manuel Jimenez</p>
          <p className="mt-2 font-mono text-sm text-white/65 uppercase">Real Estate Agent</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 py-12 md:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">manueljimenezfl.com</p>
          <h1 className="font-display mt-5 text-6xl leading-none text-[#17171c] md:text-8xl">Site Index</h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.4] text-[#616161]">
            Choose the public business card or the internal design system guide. Both pages stay separate so each one
            can evolve without crowding the other.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {destinations.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group grid gap-5 rounded-[8px] border border-[#d9d9dd] bg-white p-5 transition-colors hover:border-[#17171c] focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none md:grid-cols-[0.9fr_1.1fr]"
            >
              <div className={item.href === "/business-card" ? "" : "order-1 md:order-none"}>
                {item.href === "/business-card" ? <CardPreview /> : <DesignPreview />}
              </div>
              <div className={`flex min-h-[220px] flex-col justify-between rounded-[8px] p-6 ${item.surface}`}>
                <div>
                  <p className="font-mono text-sm tracking-[0.28px] uppercase opacity-65">{item.eyebrow}</p>
                  <h2 className="mt-4 text-4xl leading-tight">{item.title}</h2>
                  <p className="mt-5 text-base leading-[1.5] opacity-72">{item.description}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm leading-[1.71] font-medium">
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
