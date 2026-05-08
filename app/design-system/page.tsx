import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Enterprise AI System | Design System",
  description: "Guia viva con componentes, maquetaciones y criterios de diseno para Enterprise AI System.",
};

const navItems = [
  ["Fundamentos", "#fundamentos"],
  ["Componentes", "#componentes"],
  ["Maquetaciones", "#maquetaciones"],
  ["Patrones", "#patrones"],
  ["Formularios", "#formularios"],
  ["Checklist", "#checklist"],
];

const colorGroups = [
  {
    title: "Brand & accent",
    note: "Color con rol claro: identidad, accion o taxonomia. No se usa como decoracion gratuita.",
    colors: [
      ["Black", "#000000"],
      ["Primary", "#17171c"],
      ["Deep green", "#003c33"],
      ["Dark navy", "#071829"],
      ["Action blue", "#1863dc"],
      ["Coral", "#ff7759"],
      ["Soft coral", "#ffad9b"],
    ],
  },
  {
    title: "Surface",
    note: "Las superficies hacen la composicion: blanco editorial, piedra calida y washes muy suaves.",
    colors: [
      ["Canvas", "#ffffff"],
      ["Soft stone", "#eeece7"],
      ["Pale green", "#edfce9"],
      ["Pale blue", "#f1f5ff"],
      ["Card border", "#f2f2f2"],
    ],
  },
  {
    title: "Text & rules",
    note: "La jerarquia sale de contraste, tamano y reglas finas. Las sombras casi no participan.",
    colors: [
      ["Ink", "#212121"],
      ["Muted", "#93939f"],
      ["Slate", "#75758a"],
      ["Hairline", "#d9d9dd"],
      ["Border light", "#e5e7eb"],
      ["Body muted", "#616161"],
    ],
  },
  {
    title: "State",
    note: "Los estados tienen colores reservados para foco, error y lectura sobre fondos oscuros.",
    colors: [
      ["Focus blue", "#4c6ee6"],
      ["Form focus", "#9b60aa"],
      ["Error", "#b30000"],
      ["On primary", "#ffffff"],
    ],
  },
];

const typeScale = [
  ["Hero Display", "Space Grotesk", "96", "1.00", "Home hero only"],
  ["Product Display", "Space Grotesk", "72", "1.00", "Product or research hero"],
  ["Section Display", "Inter", "60", "1.00", "Major section title"],
  ["Section Heading", "Inter", "48", "1.20", "Split section title"],
  ["Card Heading", "Inter", "32", "1.20", "Cards and lists"],
  ["Feature Heading", "Inter", "24", "1.30", "Modules and article titles"],
  ["Body Large", "Inter", "18", "1.40", "Lead copy"],
  ["Body", "Inter", "16", "1.50", "Default content"],
  ["Label", "Share Tech", "14", "1.40", "Technical marker"],
];

const componentInventory = [
  ["announcement-bar", "Micro alert", "Avisa sin competir con el hero.", "Black surface, 36px high"],
  ["button-primary", "Primary CTA", "Un solo comando principal por bloque.", "Near-black pill"],
  ["button-secondary", "Text action", "Acompana sin crear otra masa visual.", "Underline or text link"],
  ["button-pill-outline", "Taxonomy chip", "Filtra, no decora.", "Coral or hairline border"],
  ["status-chip", "System state", "Hace visible el estado operativo.", "Small mono label"],
  ["hero-photo-card", "Media proof", "La imagen da energia y realidad.", "22px media radius"],
  ["agent-console-card", "Product proof", "Muestra control, fuentes y respuesta.", "Dark flat console"],
  ["capability-card", "Open feature block", "Explica una capacidad sin encerrar todo.", "Top rule or light border"],
  ["product-card", "Product summary", "Resume oferta con bullets verificables.", "Stone 8px card"],
  ["metric-strip", "Evidence row", "Numeros compactos, no panel de vanity metrics.", "Rule-separated"],
  ["research-table", "Publication list", "Densidad editorial legible.", "Rows, pills, date"],
  ["contact-form-card", "Conversion panel", "Formulario serio con foco visible.", "White on stone/dark"],
];

const layoutExamples = [
  {
    title: "Centered editorial hero",
    use: "Para declaracion de marca o manifiesto.",
    rule: "Un titular grande, una linea de apoyo y maximo dos acciones.",
  },
  {
    title: "Split proof hero",
    use: "Para producto que necesita evidencia visual.",
    rule: "Texto a un lado, media card al otro. La media no se mete dentro de otra card.",
  },
  {
    title: "Dark product band",
    use: "Para seguridad, infraestructura o AI operativa.",
    rule: "Fondo verde/navy completo; cards translucidas solo si agrupan informacion.",
  },
  {
    title: "Research index",
    use: "Para papers, posts tecnicos y changelog.",
    rule: "Filas con reglas. Evitar cards repetidas cuando la lista necesita escaneo.",
  },
  {
    title: "Stone conversion band",
    use: "Para contacto, demo request o newsletter.",
    rule: "Superficie mineral, formulario blanco y controles rectangulares.",
  },
  {
    title: "Dashboard shell",
    use: "Para herramientas internas o consola SaaS.",
    rule: "Densidad ordenada, sidebar sobria y paneles planos con estados claros.",
  },
];

const researchRows = [
  ["Agent governance patterns", "Control", "May 2026"],
  ["Retrieval quality under enterprise constraints", "Research", "Apr 2026"],
  ["Human review loops for regulated workflows", "Security", "Mar 2026"],
  ["Audit trails for AI workflows", "Compliance", "Feb 2026"],
];

const checklist = [
  "Inter es la fuente base: body, cards, tablas, formularios, botones y texto de UI.",
  "Space Grotesk se reserva para titulares de marca o hero, no para parrafos.",
  "Share Tech solo marca labels tecnicos, estados, fechas cortas y metadata.",
  "Las secciones son bandas o layouts abiertos; cards solo para items repetidos o modulos reales.",
  "Coral se usa para taxonomia y pequenos acentos, no como CTA principal.",
  "Las sombras pesadas se evitan; profundidad por contraste, bordes y media cards.",
  "Las tablas y research lists usan reglas horizontales antes que cajas decorativas.",
  "Todo foco interactivo debe ser visible con Focus Blue o Form Focus.",
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

function CheckIcon({ className = "text-[#003c33]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className={`size-4 ${className}`} fill="none">
      <path
        d="m4 9.2 3.1 3.1L14 5.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  invert?: boolean;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-end">
      <div>
        <p
          className={`font-mono text-sm leading-[1.4] tracking-[0.28px] uppercase ${invert ? "text-white/58" : "text-[#75758a]"}`}
        >
          {eyebrow}
        </p>
        <h2
          className={`mt-4 text-5xl leading-none font-normal md:text-6xl ${invert ? "text-white" : "text-[#17171c]"}`}
        >
          {title}
        </h2>
      </div>
      <p className={`text-lg leading-[1.4] ${invert ? "text-white/72" : "text-[#616161]"}`}>{body}</p>
    </div>
  );
}

function DesignNote({ title, children, invert = false }: { title: string; children: ReactNode; invert?: boolean }) {
  return (
    <aside className={`border-t pt-4 ${invert ? "border-white/18 text-white/68" : "border-[#d9d9dd] text-[#616161]"}`}>
      <p className={`font-mono text-xs tracking-[0.28px] uppercase ${invert ? "text-[#ffad9b]" : "text-[#75758a]"}`}>
        {title}
      </p>
      <p className="mt-3 text-sm leading-[1.5]">{children}</p>
    </aside>
  );
}

function StatusChip({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "coral" | "blue" | "dark" }) {
  const tones = {
    green: "border-[#003c33]/20 bg-[#edfce9] text-[#003c33]",
    coral: "border-[#ffad9b] bg-[#fff3ef] text-[#b03d26]",
    blue: "border-[#1863dc]/20 bg-[#f1f5ff] text-[#1863dc]",
    dark: "border-white/18 bg-white/[0.08] text-white/72",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-[0.28px] uppercase ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function ButtonShowcase() {
  return (
    <div className="rounded-[8px] border border-[#e5e7eb] bg-white p-6">
      <div className="flex flex-wrap items-center gap-4">
        <button className="inline-flex items-center gap-2 rounded-[32px] bg-[#17171c] px-6 py-3 text-sm leading-[1.71] font-medium text-white transition-colors hover:bg-black focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none">
          Request demo <ArrowIcon />
        </button>
        <button className="text-base leading-[1.5] text-[#212121] underline underline-offset-4 focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none">
          Explore products
        </button>
        <button className="rounded-[30px] border border-[#17171c] px-4 py-2 text-sm leading-[1.71] text-[#17171c] focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none">
          Research
        </button>
      </div>
      <DesignNote title="Aspecto de diseno">
        El CTA lleno debe ser el comando dominante. El link secundario queda sin caja para no competir. El pill outline
        sirve para filtros o acciones livianas, no para el objetivo principal.
      </DesignNote>
    </div>
  );
}

function ConsolePreview() {
  return (
    <div className="rounded-[8px] bg-[#17171c] p-5 text-white">
      <div className="flex items-start justify-between gap-4 border-b border-white/14 pb-4">
        <div>
          <p className="font-mono text-sm tracking-[0.28px] text-white/58 uppercase">Agent console</p>
          <p className="mt-1 text-2xl leading-[1.1]">Enterprise AI System</p>
        </div>
        <StatusChip tone="dark">Live</StatusChip>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {["Policy", "CRM", "Docs"].map((item) => (
          <div key={item} className="rounded-[8px] border border-white/12 bg-white/[0.06] p-3">
            <p className="font-mono text-xs tracking-[0.28px] text-white/45 uppercase">Source</p>
            <p className="mt-4 text-sm">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-[8px] bg-white p-4 text-[#212121]">
        <p className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">Generated response</p>
        <p className="mt-3 text-base leading-[1.5]">
          Use stark editorial space, controlled product bands, and visible system states before adding color.
        </p>
      </div>
    </div>
  );
}

function MetricStrip() {
  return (
    <div className="rounded-[8px] border border-[#d9d9dd] bg-white">
      <div className="grid divide-y divide-[#d9d9dd] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {[
          ["99.9%", "Workflow uptime"],
          ["42 ms", "Median retrieval"],
          ["12", "Audited sources"],
        ].map(([value, label]) => (
          <div key={label} className="p-6">
            <p className="text-5xl leading-none text-[#17171c]">{value}</p>
            <p className="mt-3 font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">{label}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-[#d9d9dd] p-5">
        <DesignNote title="Aspecto de diseno">
          Los numeros funcionan mejor en una tira plana. Si cada metrica fuera una card con sombra, el sistema perderia
          sobriedad y el escaneo seria mas lento.
        </DesignNote>
      </div>
    </div>
  );
}

function MediaCard() {
  return (
    <div className="overflow-hidden rounded-[22px] border border-[#d9d9dd] bg-white">
      <Image
        src="/magnific_crea-una-foto-professiona_2927400751.png"
        alt="Ejemplo de media card redondeada"
        width={2048}
        height={2048}
        priority
        className="h-72 w-full object-cover object-top"
      />
      <div className="p-5">
        <p className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">Hero photo card</p>
        <p className="mt-3 text-base leading-[1.5] text-[#616161]">
          La imagen aporta tactilidad. El contenedor mantiene radio amplio y borde fino, sin sombra pesada.
        </p>
      </div>
    </div>
  );
}

function ProductCard({ title, text, checks }: { title: string; text: string; checks: string[] }) {
  return (
    <article className="rounded-[8px] bg-[#eeece7] p-8">
      <h3 className="text-3xl leading-[1.2] text-[#212121]">{title}</h3>
      <p className="mt-5 text-base leading-[1.5] text-[#616161]">{text}</p>
      <div className="mt-8 space-y-3 border-t border-[#d9d9dd] pt-5">
        {checks.map((check) => (
          <p key={check} className="flex items-center gap-3 text-sm leading-[1.4] text-[#212121]">
            <CheckIcon /> {check}
          </p>
        ))}
      </div>
    </article>
  );
}

function DashboardShell() {
  return (
    <div className="grid overflow-hidden rounded-[8px] border border-[#d9d9dd] bg-white lg:grid-cols-[240px_1fr]">
      <aside className="border-b border-[#d9d9dd] bg-[#f7f6f2] p-5 lg:border-r lg:border-b-0">
        <p className="font-display text-xl leading-none text-[#17171c]">EAIS</p>
        <div className="mt-8 space-y-2">
          {["Agents", "Sources", "Reviews", "Audit"].map((item, index) => (
            <div
              key={item}
              className={`rounded-[4px] px-3 py-2 text-sm ${index === 0 ? "bg-[#17171c] text-white" : "text-[#616161]"}`}
            >
              {item}
            </div>
          ))}
        </div>
      </aside>
      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#d9d9dd] pb-5">
          <div>
            <p className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">Agent queue</p>
            <h3 className="mt-2 text-3xl leading-tight text-[#17171c]">Review operations</h3>
          </div>
          <StatusChip tone="green">Healthy</StatusChip>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {["Pending", "Escalated", "Approved"].map((label, index) => (
            <div key={label} className="rounded-[8px] border border-[#e5e7eb] p-4">
              <p className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">{label}</p>
              <p className="mt-6 text-4xl leading-none text-[#17171c]">{[18, 3, 142][index]}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 border-t border-[#d9d9dd]">
          {["Policy conflict detected", "New source connected", "Human review completed"].map((row) => (
            <div key={row} className="flex items-center justify-between gap-4 border-b border-[#f2f2f2] py-4">
              <span className="text-base text-[#212121]">{row}</span>
              <span className="font-mono text-xs tracking-[0.28px] text-[#93939f] uppercase">Now</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResearchTable() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-3">
        {["All", "Control", "Research", "Security", "Compliance"].map((chip, index) => (
          <button
            key={chip}
            className={`rounded-[30px] border px-4 py-2 text-sm leading-[1.71] transition-colors focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none ${
              index === 0
                ? "border-[#ff7759] bg-[#ff7759] text-[#17171c]"
                : "border-[#ffad9b] bg-transparent text-[#ff7759] hover:bg-[#fff3ef]"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>
      <div className="border-t border-[#d9d9dd]">
        {researchRows.map(([title, topic, date]) => (
          <div
            key={title}
            className="grid gap-3 border-b border-[#d9d9dd] py-6 md:grid-cols-[1fr_auto_140px] md:items-center"
          >
            <a href="#" className="text-lg leading-[1.4] text-[#1863dc] underline-offset-4 hover:underline">
              {title}
            </a>
            <span className="w-fit rounded-[30px] border border-[#d9d9dd] px-3 py-1 text-sm text-[#212121]">
              {topic}
            </span>
            <span className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase md:text-right">{date}</span>
          </div>
        ))}
      </div>
      <DesignNote title="Aspecto de diseno">
        Este patron evita cards para cada articulo. Las reglas horizontales permiten comparar titulos, temas y fechas
        con menos ruido visual.
      </DesignNote>
    </div>
  );
}

function BlogCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {[
        ["Governance", "How to make agents accountable", "#ff7759"],
        ["Security", "Designing review loops for risk", "#071829"],
        ["Open science", "Readable research surfaces", "#1863dc"],
      ].map(([tag, title, color]) => (
        <article key={title} className="rounded-[8px] border border-[#e5e7eb] bg-white">
          <div className="h-36 rounded-t-[8px]" style={{ backgroundColor: color }} />
          <div className="p-5">
            <p className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">{tag}</p>
            <h3 className="mt-4 text-2xl leading-[1.3] text-[#212121]">{title}</h3>
            <p className="mt-4 text-sm leading-[1.5] text-[#616161]">
              La card editorial admite color en la media, mientras la caja de texto se mantiene blanca y sobria.
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function ContactForm() {
  return (
    <form className="rounded-[22px] bg-white p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">Nombre</span>
          <input
            className="w-full rounded-[4px] border border-[#d9d9dd] px-4 py-3 text-base outline-none focus:border-[#9b60aa]"
            placeholder="Nombre completo"
          />
        </label>
        <label className="space-y-2">
          <span className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">Email</span>
          <input
            className="w-full rounded-[4px] border border-[#d9d9dd] px-4 py-3 text-base outline-none focus:border-[#9b60aa]"
            placeholder="correo@empresa.com"
          />
        </label>
      </div>
      <label className="mt-4 block space-y-2">
        <span className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">Mensaje</span>
        <textarea
          className="min-h-32 w-full resize-y rounded-[4px] border border-[#d9d9dd] px-4 py-3 text-base outline-none focus:border-[#9b60aa]"
          placeholder="Describe la superficie que quieres disenar"
        />
      </label>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button className="inline-flex items-center gap-2 rounded-[32px] bg-[#17171c] px-6 py-3 text-sm leading-[1.71] font-medium text-white hover:bg-black focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none">
          Submit <ArrowIcon />
        </button>
        <p className="text-sm leading-[1.4] text-[#75758a]">
          Focus usa Form Focus Violet para separar entrada de navegacion.
        </p>
      </div>
    </form>
  );
}

function EmptyState() {
  return (
    <div className="rounded-[8px] border border-dashed border-[#d9d9dd] bg-white p-8 text-center">
      <div className="mx-auto grid size-14 place-items-center rounded-full bg-[#edfce9] text-[#003c33]">
        <CheckIcon />
      </div>
      <h3 className="mt-5 text-2xl leading-[1.3] text-[#212121]">No risks waiting</h3>
      <p className="mx-auto mt-3 max-w-sm text-base leading-[1.5] text-[#616161]">
        El estado vacio debe confirmar contexto y ofrecer una accion discreta si aplica.
      </p>
      <button className="mt-5 rounded-[32px] border border-[#17171c] px-4 py-2 text-sm leading-[1.71] text-[#17171c] focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none">
        View audit log
      </button>
    </div>
  );
}

function Timeline() {
  return (
    <div className="rounded-[8px] border border-[#e5e7eb] bg-white p-6">
      {["Prompt received", "Sources checked", "Reviewer approved", "Response delivered"].map((event, index) => (
        <div key={event} className="grid grid-cols-[28px_1fr] gap-4 pb-6 last:pb-0">
          <div className="flex flex-col items-center">
            <span className={`size-3 rounded-full ${index < 3 ? "bg-[#003c33]" : "bg-[#d9d9dd]"}`} />
            {index < 3 && <span className="mt-2 h-full w-px bg-[#d9d9dd]" />}
          </div>
          <div>
            <p className="text-base leading-[1.5] text-[#212121]">{event}</p>
            <p className="font-mono text-xs tracking-[0.28px] text-[#93939f] uppercase">Step {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#212121]">
      <div className="flex h-9 items-center justify-center bg-black px-4 text-center text-xs leading-[1.4] text-white">
        <span>
          Enterprise AI System alpha{" "}
          <a className="underline underline-offset-4" href="#componentes">
            Ver componentes
          </a>
        </span>
      </div>

      <nav className="sticky top-0 z-30 border-b border-[#e5e7eb] bg-white/94 px-5 py-4 backdrop-blur md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="font-display text-xl leading-none text-[#17171c] focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none"
          >
            EAIS
          </Link>
          <div className="hidden items-center gap-6 text-sm text-[#212121] lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="hover:underline">
                {label}
              </a>
            ))}
          </div>
          <a
            href="/business-card"
            className="justify-self-end rounded-[32px] bg-[#17171c] px-5 py-3 text-sm leading-[1.71] font-medium text-white transition-colors hover:bg-black focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none"
          >
            Business card
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-5 pt-16 pb-24 md:px-8 md:pt-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-mono text-sm leading-[1.4] tracking-[0.28px] text-[#75758a] uppercase">Version alpha</p>
          <h1 className="font-display mt-5 text-6xl leading-none font-normal text-[#17171c] md:text-8xl">
            Enterprise AI System
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-[1.4] text-[#616161]">
            Guia viva para construir interfaces de AI empresarial con espacio editorial, producto oscuro, superficies
            minerales, media cards y una jerarquia tipografica controlada.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#fundamentos"
              className="rounded-[32px] bg-[#17171c] px-6 py-3 text-sm leading-[1.71] font-medium text-white transition-colors hover:bg-black focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none"
            >
              Explorar fundamentos
            </a>
            <a
              href="#maquetaciones"
              className="text-base leading-[1.5] text-[#212121] underline underline-offset-4 focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none"
            >
              Ver maquetaciones
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[22px] border border-[#d9d9dd] bg-[#eeece7] p-4 md:p-7">
            <ConsolePreview />
          </div>
          <MediaCard />
        </div>
      </section>

      <section id="fundamentos" className="border-y border-[#d9d9dd] bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Fundamentos"
            title="El sistema se siente controlado antes de sentirse decorado."
            body="La identidad se construye con blanco, verde profundo, reglas finas, Inter como base y una relacion clara entre contenido editorial y prueba de producto."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              [
                "Espacio",
                "El whitespace separa marca, prueba, detalle y conversion. No se rellena cada seccion con cards.",
              ],
              [
                "Contraste",
                "Las bandas oscuras aparecen para producto, seguridad o infraestructura. No son fondos ornamentales.",
              ],
              ["Densidad", "La densidad vive en tablas, dashboards y forms. Las areas narrativas respiran mas."],
            ].map(([title, text], index) => (
              <div key={title} className="border-t border-[#d9d9dd] pt-5">
                <p className="font-mono text-sm leading-[1.4] tracking-[0.28px] text-[#93939f] uppercase">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-2xl leading-[1.3] text-[#212121]">{title}</h3>
                <p className="mt-3 text-base leading-[1.5] text-[#616161]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tokens" className="bg-[#eeece7] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Tokens"
            title="Paleta, tipo, radio y uso real."
            body="Cada token se documenta junto a una decision. El objetivo no es memorizar hex codes, sino saber cuando usar cada superficie, regla y acento."
          />

          <div id="colors" className="mt-14 grid gap-4 lg:grid-cols-4">
            {colorGroups.map((group) => (
              <section key={group.title} className="rounded-[8px] border border-[#e5e7eb] bg-white p-6">
                <h3 className="text-2xl leading-[1.3] text-[#212121]">{group.title}</h3>
                <p className="mt-3 min-h-16 text-sm leading-[1.5] text-[#616161]">{group.note}</p>
                <div className="mt-6 space-y-3">
                  {group.colors.map(([name, hex]) => (
                    <div key={name} className="flex items-center justify-between gap-4 border-t border-[#f2f2f2] pt-3">
                      <span className="flex items-center gap-3 text-sm leading-[1.4] text-[#212121]">
                        <span
                          className="size-6 rounded-[4px] border border-[#d9d9dd]"
                          style={{ backgroundColor: hex }}
                        />
                        {name}
                      </span>
                      <code className="font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase">{hex}</code>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div id="type" className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.55fr]">
            <div className="overflow-hidden rounded-[8px] border border-[#e5e7eb] bg-white">
              <div className="grid grid-cols-[1.1fr_0.7fr_0.35fr_0.35fr_0.75fr] gap-4 border-b border-[#d9d9dd] px-5 py-4 font-mono text-xs tracking-[0.28px] text-[#75758a] uppercase max-md:hidden">
                <span>Rol</span>
                <span>Fuente</span>
                <span>Size</span>
                <span>Line</span>
                <span>Uso</span>
              </div>
              {typeScale.map(([role, font, size, line, use]) => (
                <div
                  key={role}
                  className="grid gap-2 border-b border-[#f2f2f2] px-5 py-4 last:border-b-0 md:grid-cols-[1.1fr_0.7fr_0.35fr_0.35fr_0.75fr] md:gap-4"
                >
                  <span
                    className={
                      font === "Space Grotesk"
                        ? "font-display text-3xl leading-[1.2]"
                        : font === "Share Tech"
                          ? "font-mono text-sm tracking-[0.28px] uppercase"
                          : "text-2xl leading-[1.3]"
                    }
                  >
                    {role}
                  </span>
                  <span className="text-sm text-[#616161]">{font}</span>
                  <span className="font-mono text-sm text-[#75758a]">{size}px</span>
                  <span className="font-mono text-sm text-[#75758a]">{line}</span>
                  <span className="text-sm text-[#616161]">{use}</span>
                </div>
              ))}
            </div>

            <div className="rounded-[8px] border border-[#e5e7eb] bg-white p-6">
              <p className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">Font audit</p>
              <h3 className="mt-4 text-3xl leading-[1.2] text-[#212121]">Inter esta bien aplicada.</h3>
              <p className="mt-5 text-base leading-[1.5] text-[#616161]">
                `layout.tsx` carga Inter como `--font-inter`, `globals.css` lo mapea a `font-sans` y el `body` usa
                `font-sans`. Esta pagina tambien declara `font-sans` en el `main` para que los textos de UI, parrafos,
                tablas, inputs y botones partan de Inter.
              </p>
              <div className="mt-6 space-y-3 border-t border-[#d9d9dd] pt-5">
                {["Body/UI: Inter", "Hero brand: Space Grotesk", "Labels: Share Tech"].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-sm leading-[1.4] text-[#212121]">
                    <CheckIcon /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="componentes" className="bg-[#003c33] px-5 py-24 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Componentes"
            title="Biblioteca aplicada, no catalogo decorativo."
            body="Cada componente incluye una razon visual. La idea es que sirva como referencia directa para construir nuevas pantallas sin romper la personalidad del sistema."
            invert
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {componentInventory.map(([name, role, reason, treatment]) => (
              <div key={name} className="rounded-[8px] border border-white/14 bg-white/[0.06] p-6">
                <p className="font-mono text-sm tracking-[0.28px] text-[#ffad9b] uppercase">{name}</p>
                <p className="mt-5 text-2xl leading-[1.3]">{role}</p>
                <p className="mt-4 text-sm leading-[1.5] text-white/64">{reason}</p>
                <div className="mt-8 border-t border-white/14 pt-4 text-sm text-white/58">{treatment}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-[8px] border border-white/14 bg-white/[0.06] p-6">
              <p className="font-mono text-sm tracking-[0.28px] text-[#ffad9b] uppercase">Status system</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <StatusChip tone="dark">Queued</StatusChip>
                <StatusChip tone="dark">Review</StatusChip>
                <StatusChip tone="dark">Approved</StatusChip>
              </div>
              <DesignNote title="Aspecto de diseno" invert>
                Los chips pequenos ayudan a leer estado sin convertir el dashboard en una pantalla llena de color.
              </DesignNote>
            </div>
            <ConsolePreview />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Component examples"
            title="Botones, metricas, media y estados."
            body="Estos bloques son piezas copiables para futuras pantallas. Cada uno muestra una decision concreta de jerarquia, superficie o interaccion."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <ButtonShowcase />
            <MetricStrip />
            <MediaCard />
            <EmptyState />
          </div>
        </div>
      </section>

      <section id="maquetaciones" className="bg-[#eeece7] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Maquetaciones"
            title="Seis estructuras para iniciar nuevas pantallas."
            body="La maquetacion debe decidir el ritmo antes de elegir componentes. Estas composiciones cubren marketing, producto, research, conversion y dashboards."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {layoutExamples.map((layout) => (
              <article key={layout.title} className="rounded-[8px] border border-[#e5e7eb] bg-white p-6">
                <p className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">Layout</p>
                <h3 className="mt-4 text-2xl leading-[1.3] text-[#212121]">{layout.title}</h3>
                <p className="mt-4 text-base leading-[1.5] text-[#616161]">{layout.use}</p>
                <DesignNote title="Regla de diseno">{layout.rule}</DesignNote>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-5">
            <div className="rounded-[22px] bg-[#071829] p-6 text-white md:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="font-mono text-sm tracking-[0.28px] text-white/58 uppercase">Dark product band</p>
                  <h3 className="mt-4 text-5xl leading-none">Security operations need a quiet surface.</h3>
                  <p className="mt-5 text-lg leading-[1.4] text-white/70">
                    El fondo oscuro concentra la atencion en riesgo, control y evidencia. No necesita gradientes ni
                    brillo decorativo.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {["Observe", "Review", "Approve"].map((item) => (
                    <div key={item} className="rounded-[8px] border border-white/14 bg-white/[0.06] p-5">
                      <p className="font-mono text-xs tracking-[0.28px] text-[#ffad9b] uppercase">Step</p>
                      <p className="mt-12 text-2xl leading-[1.2]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <DashboardShell />
          </div>
        </div>
      </section>

      <section id="patrones" className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Patrones"
            title="Producto, editorial e investigacion con la misma gramatica."
            body="Los patrones muestran como cambiar de marketing a operaciones o contenido tecnico sin abandonar los mismos tokens."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <ProductCard
              title="Orchestration"
              text="Dark product fields, status chips, integration badges, and quiet rules make automation feel observable and governed."
              checks={["Near-black UI shell", "White response cards", "Small technical markers"]}
            />
            <ProductCard
              title="Knowledge"
              text="Warm stone cards frame enterprise information without adding decorative chrome or unnecessary shadows."
              checks={["8px card radius", "Thin dividers", "Measured Inter copy"]}
            />
            <ProductCard
              title="Research"
              text="Editorial rows, topic pills, and blue links keep dense publishing surfaces direct and scannable."
              checks={["Rule-separated rows", "Coral taxonomy", "Blue action emphasis"]}
            />
          </div>

          <div className="mt-16 grid gap-12">
            <ResearchTable />
            <BlogCards />
          </div>
        </div>
      </section>

      <section id="formularios" className="bg-[#eeece7] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="font-mono text-sm tracking-[0.28px] text-[#75758a] uppercase">Forms & flow</p>
              <h2 className="mt-4 text-5xl leading-[1.1] text-[#17171c]">Conversion sin abandonar sobriedad.</h2>
              <p className="mt-5 text-lg leading-[1.4] text-[#616161]">
                Los formularios usan Inter, campos rectangulares, bordes finos y foco violeta. La card blanca sobre
                piedra crea suficiente separacion sin sombras.
              </p>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-1">
                <Timeline />
                <DesignNote title="Aspecto de diseno">
                  El flujo ayuda a explicar procesos de AI: recibido, validado, revisado y entregado. La linea vertical
                  funciona mejor que una fila de cards cuando hay secuencia.
                </DesignNote>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section id="checklist" className="bg-white px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Checklist"
            title="Antes de aprobar una nueva pantalla."
            body="Usa esta lista como control de calidad. Si una pantalla falla varios puntos, probablemente se esta alejando del sistema."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} className="flex gap-4 border-t border-[#d9d9dd] pt-5">
                <CheckIcon />
                <p className="text-base leading-[1.5] text-[#212121]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#17171c] px-5 py-14 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-sm tracking-[0.28px] text-[#ff7759] uppercase">Footer newsletter</p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-[1.2] md:text-5xl">
              Un cierre oscuro, editorial y compacto.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-[1.5] text-white/58">
              El footer conserva la voz tecnica, usa coral como etiqueta editorial y deja la accion de email como linea
              simple.
            </p>
          </div>
          <div className="flex border-b border-white/24">
            <input
              className="w-full bg-transparent py-3 text-sm text-white placeholder:text-white/45 focus:outline-none"
              placeholder="Email"
            />
            <button
              aria-label="Enviar newsletter"
              className="px-3 text-white focus:ring-2 focus:ring-[#4c6ee6] focus:outline-none"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
