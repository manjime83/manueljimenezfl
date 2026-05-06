"use client";

const whatsappUrl = "https://wa.me/13853713775";
const qrUrl = "https://qr.manueljimenezfl.com";
const qrDisplay = "qr.manueljimenezfl.com";
const websiteUrl = "https://manueljimenezfl.com";
const phoneHref = "tel:+13853713775";
const phoneDisplay = "+1 385-371-3775";
const email = "manuel@manueljimenezfl.com";
const handle = "@manueljimenezfl";
const licenseNumber = "SL3658224";

const socialChannels = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/manueljimenezfl",
    icon: InstagramIcon,
    className: "bg-[linear-gradient(135deg,#9b60aa_0%,#ff7759_58%,#ffad9b_100%)]",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/manueljimenezfl",
    icon: FacebookIcon,
    className: "bg-[#1863dc]",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@manueljimenezfl",
    icon: YouTubeIcon,
    className: "bg-[#b30000]",
  },
];

const designColors = [
  { name: "primary", hex: "#17171c" },
  { name: "black", hex: "#000000" },
  { name: "ink", hex: "#212121" },
  { name: "deep-green", hex: "#003c33" },
  { name: "dark-navy", hex: "#071829" },
  { name: "canvas", hex: "#ffffff" },
  { name: "soft-stone", hex: "#eeece7" },
  { name: "pale-green", hex: "#edfce9" },
  { name: "pale-blue", hex: "#f1f5ff" },
  { name: "hairline", hex: "#d9d9dd" },
  { name: "border-light", hex: "#e5e7eb" },
  { name: "card-border", hex: "#f2f2f2" },
  { name: "muted", hex: "#93939f" },
  { name: "slate", hex: "#75758a" },
  { name: "body-muted", hex: "#616161" },
  { name: "action-blue", hex: "#1863dc" },
  { name: "focus-blue", hex: "#4c6ee6" },
  { name: "coral", hex: "#ff7759" },
  { name: "coral-soft", hex: "#ffad9b" },
  { name: "form-focus", hex: "#9b60aa" },
  { name: "on-primary", hex: "#ffffff" },
  { name: "on-dark", hex: "#ffffff" },
  { name: "error", hex: "#b30000" },
];

function DesignPaletteRail() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-2 overflow-hidden">
      {designColors.map((color) => (
        <span key={color.name} className="h-full flex-1" style={{ backgroundColor: color.hex }} />
      ))}
    </div>
  );
}

function QrCode() {
  return (
    <a
      href={qrUrl}
      aria-label={`Abrir ${qrDisplay}`}
      className="grid aspect-square w-full place-items-center rounded-[18px] border border-[#d9d9dd] bg-white p-1 text-[#17171c] transition-colors hover:border-[#17171c] focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none"
    >
      <img src="/qr-manueljimenezfl.svg" alt={`Código QR para ${qrDisplay}`} className="size-full" />
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none">
      <path
        d="M21 8.2a3 3 0 0 0-2.12-2.12C17.02 5.6 12 5.6 12 5.6s-5.02 0-6.88.48A3 3 0 0 0 3 8.2 31 31 0 0 0 2.52 12 31 31 0 0 0 3 15.8a3 3 0 0 0 2.12 2.12c1.86.48 6.88.48 6.88.48s5.02 0 6.88-.48A3 3 0 0 0 21 15.8a31 31 0 0 0 .48-3.8A31 31 0 0 0 21 8.2Z"
        fill="currentColor"
      />
      <path d="m10.4 15.25 4.7-3.25-4.7-3.25v6.5Z" fill="#b30000" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none">
      <path
        d="M14.22 8.68h2.03V5.23A24.88 24.88 0 0 0 13.3 5c-2.92 0-4.92 1.79-4.92 5.04v2.84H5.08v3.86h3.3V22h4.06v-5.26h3.18l.5-3.86h-3.68v-2.46c0-1.12.3-1.74 1.78-1.74Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none">
      <path d="M12.04 4a7.86 7.86 0 0 0-6.7 11.98L4.3 20l4.13-1.02A7.88 7.88 0 1 0 12.04 4Z" fill="currentColor" />
      <path
        d="M9.25 8.23c-.18-.4-.36-.41-.53-.42h-.45c-.15 0-.4.06-.62.29-.21.23-.81.79-.81 1.93s.83 2.24.94 2.39c.12.15 1.6 2.56 3.96 3.48 1.96.77 2.36.62 2.79.58.43-.04 1.39-.57 1.58-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.45-.28-.24-.12-1.39-.69-1.61-.77-.22-.08-.38-.12-.54.12-.16.23-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.41-1.32-1.65-.14-.23-.02-.36.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.52-1.29-.58-1.43Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eeece7] px-4 py-8 text-[#17171c] sm:px-8 sm:py-12">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl place-items-center">
        <div className="grid w-full items-center justify-center gap-8 lg:grid-cols-[430px_430px]">
          <article className="relative flex aspect-[0.586/1] min-h-[734px] w-full max-w-[430px] flex-col overflow-hidden rounded-[22px] border border-[#d9d9dd] bg-[#003c33] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.16),rgba(0,60,51,0)_48%)] text-white">
            <div
              className="flex min-h-0 flex-1 flex-col justify-center gap-9 px-6 py-8 sm:px-7"
              style={{ containerType: "inline-size" }}
            >
              <img
                src="/magnific_crea-una-foto-professiona_2927400751.png"
                alt="Retrato profesional de Manuel Jiménez"
                className="mx-auto size-[232px] rounded-[18px] border border-white/30 object-cover object-top shadow-[0_22px_52px_rgba(0,0,0,0.28)] ring-8 ring-white/10 sm:size-[248px]"
              />

              <div className="space-y-8">
                <div>
                  <h1
                    className="font-display leading-none font-normal tracking-normal whitespace-nowrap"
                    style={{ fontSize: "min(12.7cqw, 48px)" }}
                  >
                    Manuel Jiménez
                  </h1>
                  <div className="text-md mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-mono tracking-normal text-white/65">
                    <span>Real Estate Agent</span>
                    <span aria-hidden className="size-1 rounded-full bg-white/35" />
                    <span>My Realty Group</span>
                  </div>
                </div>

                <div className="divide-y divide-white/14 rounded-[14px] border border-white/16 bg-white/[0.06] px-4">
                  <a
                    href={phoneHref}
                    className="flex items-center justify-between gap-4 py-3 text-white transition-colors hover:text-[#ffad9b] focus:ring-2 focus:ring-[#ffad9b] focus:outline-none"
                  >
                    <span className="font-mono text-xs tracking-normal text-white/58 uppercase">Teléfono</span>
                    <span className="text-right text-[15px] sm:text-base">{phoneDisplay}</span>
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center justify-between gap-4 py-3 text-white transition-colors hover:text-[#ffad9b] focus:ring-2 focus:ring-[#ffad9b] focus:outline-none"
                  >
                    <span className="font-mono text-xs tracking-normal text-white/58 uppercase">Correo</span>
                    <span className="text-right text-[13px] sm:text-[15px]">{email}</span>
                  </a>
                  <a
                    href={websiteUrl}
                    className="flex items-center justify-between gap-4 py-3 text-white transition-colors hover:text-[#ffad9b] focus:ring-2 focus:ring-[#ffad9b] focus:outline-none"
                  >
                    <span className="font-mono text-xs tracking-normal text-white/58 uppercase">Web</span>
                    <span className="text-right text-[14px] sm:text-base">www.manueljimenezfl.com</span>
                  </a>
                </div>
              </div>
            </div>
            <footer className="border-t border-white/14 px-6 py-4 text-center font-mono text-xs tracking-normal text-white/58 uppercase sm:px-7">
              Licencia {licenseNumber}
            </footer>
          </article>

          <article className="relative flex aspect-[0.586/1] min-h-[734px] w-full max-w-[430px] flex-col overflow-hidden rounded-[22px] border border-[#d9d9dd] bg-white p-8">
            <div className="flex flex-1 flex-col justify-center">
              <div className="mx-auto w-full max-w-[244px]">
                <p className="mb-4 text-center text-xl leading-6 text-[#212121]">
                  Escanea para ver propiedades disponibles
                </p>
                <QrCode />
              </div>
            </div>

            <div className="border-t border-[#d9d9dd] pt-6">
              <p className="font-mono text-xs tracking-normal text-[#75758a] uppercase">Disponible por WhatsApp</p>
              <a
                href={whatsappUrl}
                className="mt-4 flex items-center justify-between gap-4 rounded-[14px] bg-[#f7f6f2] px-4 py-4 text-[#212121] transition-colors hover:bg-[#f1f0eb] focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex w-[104px] shrink-0 justify-center">
                    <span className="grid size-10 place-items-center rounded-[8px] bg-[#128c4a] text-white">
                      <WhatsAppIcon />
                    </span>
                  </span>
                  <span className="text-base">{phoneDisplay}</span>
                </span>
                <span className="font-mono text-xs tracking-normal text-[#75758a] uppercase">Escríbeme</span>
              </a>
            </div>

            <div className="mt-6 border-t border-[#d9d9dd] pt-6">
              <p className="font-mono text-xs tracking-normal text-[#75758a] uppercase">
                Sígueme en mis redes sociales:
              </p>
              <div className="mt-4 flex items-center justify-between gap-4 rounded-[14px] bg-[#f7f6f2] px-4 py-4 text-[#212121]">
                <span className="flex min-w-0 items-center gap-3">
                  <span className="flex w-[104px] shrink-0 justify-center -space-x-2">
                    {socialChannels.map((channel) => (
                      <a
                        key={channel.label}
                        href={channel.href}
                        aria-label={channel.label}
                        title={channel.label}
                        className={`grid size-10 place-items-center rounded-[8px] border-2 border-[#f7f6f2] text-white transition-transform hover:-translate-y-0.5 focus:z-10 focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none ${channel.className}`}
                      >
                        <channel.icon />
                      </a>
                    ))}
                  </span>
                  <span className="min-w-0 text-base">{handle}</span>
                </span>
                <span className="font-mono text-xs tracking-normal text-[#75758a] uppercase">Sígueme</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
