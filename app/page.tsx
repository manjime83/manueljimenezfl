"use client";

const whatsappUrl = "https://wa.me/13853713775";

const qrPath =
  "M4 4.5h7m1 0h1m2 0h4m3 0h7M4 5.5h1m5 0h1m2 0h1m1 0h1m3 0h1m2 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h1m1 0h2m3 0h1m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h1m3 0h1m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h2m1 0h5m2 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h1m1 0h1m1 0h2m1 0h1M4 12.5h1m3 0h1m1 0h4m2 0h4m1 0h5m2 0h1M5 13.5h1m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m2 0h1m4 0h2m1 0h1M6 14.5h2m2 0h2m1 0h1m1 0h2m2 0h3m1 0h4M4 15.5h1m1 0h1m1 0h1m3 0h2m2 0h1m1 0h3m2 0h1m2 0h2M4 16.5h2m2 0h6m2 0h1m3 0h1m1 0h1m2 0h4M4 17.5h2m1 0h3m3 0h2m2 0h2m5 0h1m2 0h1M6 18.5h1m2 0h3m1 0h2m4 0h1m2 0h5M14 19.5h1m1 0h1m4 0h4m1 0h2M4 20.5h2m1 0h1m1 0h2m2 0h1m1 0h1m1 0h10M12 21.5h3m1 0h1m1 0h1m1 0h1m3 0h1M4 22.5h7m1 0h1m2 0h4m1 0h1m1 0h1m1 0h1M4 23.5h1m5 0h1m2 0h1m1 0h1m1 0h1m1 0h2m3 0h5M4 24.5h1m1 0h3m1 0h1m1 0h2m2 0h2m2 0h8M4 25.5h1m1 0h3m1 0h1m2 0h2m2 0h3m1 0h3m2 0h1m1 0h1M4 26.5h1m1 0h3m1 0h1m9 0h3m2 0h1m1 0h1M4 27.5h1m5 0h1m2 0h1m2 0h1m1 0h2m2 0h6M4 28.5h7m1 0h1m1 0h2m1 0h3m1 0h2m3 0h3";

const socialChannels = [
  { label: "Instagram", href: "https://www.instagram.com/manueljimenezfl" },
  { label: "YouTube", href: "https://www.youtube.com/@manueljimenezfl" },
  { label: "Facebook", href: "https://www.facebook.com/manueljimenezfl" },
];

function QrCode() {
  return (
    <a
      href={whatsappUrl}
      aria-label="Open WhatsApp chat with Manuel Jiménez"
      className="grid aspect-square w-full place-items-center rounded-[22px] border border-[#d9d9dd] bg-white p-5 text-[#17171c] transition-colors hover:border-[#17171c] focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none"
    >
      <svg
        viewBox="0 0 33 33"
        shapeRendering="crispEdges"
        role="img"
        aria-label="WhatsApp QR code"
        className="size-full"
      >
        <rect width="33" height="33" fill="#ffffff" />
        <path d={qrPath} fill="none" stroke="currentColor" />
      </svg>
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eeece7] px-4 py-8 text-[#17171c] sm:px-8 sm:py-12">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl place-items-center">
        <div className="grid w-full items-center justify-center gap-8 lg:grid-cols-[430px_430px]">
          <article className="relative flex aspect-[0.586/1] min-h-[734px] w-full max-w-[430px] flex-col overflow-hidden rounded-[22px] border border-[#d9d9dd] bg-[#003c33] text-white">
            <div className="relative min-h-0 flex-1">
              <img
                src="/agent-photo.jpg"
                alt="Manuel Jiménez, Realtor"
                className="absolute inset-0 h-full w-full object-cover object-top"
                onError={(event) => {
                  event.currentTarget.src = "/agent-photo.svg";
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(0,60,51,0) 0%, rgba(0,60,51,0.18) 60%, rgba(0,60,51,0.92) 100%)",
                }}
              />
            </div>

            <div className="border-t border-white/20 p-8">
              <div className="flex items-center justify-between border-b border-white/20 pb-5">
                <span className="font-mono text-xs tracking-normal text-white/70 uppercase">My Realty Group</span>
                <span className="rounded-full border border-white/30 px-4 py-2 text-sm leading-none">Florida</span>
              </div>

              <p className="mt-8 font-mono text-xs tracking-normal text-white/60 uppercase">Realtor</p>
              <h1 className="mt-4 text-6xl leading-none font-normal tracking-normal text-balance">Manuel Jiménez</h1>
              <p className="mt-6 max-w-xs text-xl leading-7 text-white/82">Consultor en Negocios Inmobiliarios</p>
            </div>
          </article>

          <article className="relative flex aspect-[0.586/1] min-h-[734px] w-full max-w-[430px] flex-col justify-between overflow-hidden rounded-[22px] border border-[#d9d9dd] bg-white p-8">
            <div>
              <div className="flex items-center justify-between border-b border-[#d9d9dd] pb-5">
                <span className="font-mono text-xs tracking-normal text-[#75758a] uppercase">WhatsApp</span>
                <span className="rounded-full border border-[#d9d9dd] px-4 py-2 text-sm leading-none text-[#212121]">
                  Scan
                </span>
              </div>

              <div className="mx-auto mt-10 w-full max-w-[230px]">
                <QrCode />
              </div>

              <p className="mx-auto mt-6 max-w-[250px] text-center text-base leading-6 text-[#212121]">
                Scan to start a direct conversation.
              </p>
            </div>

            <div>
              <div className="divide-y divide-[#d9d9dd] border-y border-[#d9d9dd]">
                <a
                  href="tel:+13853713775"
                  className="flex items-center justify-between gap-5 py-5 text-[#212121] transition-colors hover:text-[#1863dc] focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none"
                >
                  <span className="font-mono text-xs tracking-normal text-[#75758a] uppercase">Phone</span>
                  <span className="text-lg">385-371-3775</span>
                </a>
                <a
                  href="https://manueljimenezfl.com"
                  className="flex items-center justify-between gap-5 py-5 text-[#212121] transition-colors hover:text-[#1863dc] focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none"
                >
                  <span className="font-mono text-xs tracking-normal text-[#75758a] uppercase">Web</span>
                  <span className="text-right text-lg">manueljimenezfl.com</span>
                </a>
              </div>

              <div className="mt-8">
                <p className="text-lg text-[#212121]">@manueljimenezfl</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {socialChannels.map((channel) => (
                    <a
                      key={channel.label}
                      href={channel.href}
                      className="rounded-full border border-[#ffad9b] bg-[#fff6f3] px-4 py-2 text-sm text-[#17171c] transition-colors hover:border-[#17171c] focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none"
                    >
                      {channel.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
