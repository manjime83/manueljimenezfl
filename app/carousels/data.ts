export type Slide =
  | { type: "cover"; eyebrow: string; title: string; subtitle?: string }
  | { type: "body"; eyebrow?: string; headline: string; bullets?: string[]; body?: string }
  | { type: "cta"; eyebrow?: string; headline: string; cta: string; phone?: string };

export interface Carousel {
  slug: string;
  title: string;
  description: string;
  slides: Slide[];
}

export const SLIDE_SIZE = 1080;

export function projectLabel(carousel: Carousel): string {
  return `CAROUSEL · ${carousel.slug.toUpperCase()}`;
}

export function carouselFilename(carousel: Carousel, index: number, total: number, slideType: Slide["type"]): string {
  const idx = String(index).padStart(2, "0");
  const tot = String(total).padStart(2, "0");
  return `${carousel.slug}-${idx}-of-${tot}-${slideType}.png`;
}

export const carousels: Record<string, Carousel> = {
  "first-home-buyer": {
    slug: "first-home-buyer",
    title: "First-time home buyer in Central Florida",
    description:
      "Five-slide carousel: cover hook, three body slides covering pre-approval, location strategy and inspection, plus a CTA to message me on WhatsApp.",
    slides: [
      {
        type: "cover",
        eyebrow: "Guide · 01",
        title: "Your first home in Central Florida",
        subtitle: "Five things nobody tells you before you sign.",
      },
      {
        type: "body",
        eyebrow: "Step 01 · Pre-approval",
        headline: "Get pre-approved first.",
        bullets: [
          "Lock your real budget — taxes, HOA, insurance.",
          "Compare two or three lenders the same week.",
          "A pre-approval letter wins competitive offers.",
        ],
      },
      {
        type: "body",
        eyebrow: "Step 02 · Location",
        headline: "Pick the zip code first.",
        bullets: [
          "Commute, schools, flood zone shape long-term value.",
          "Walk the block at night and on weekends, not just noon.",
          "Get insurance quotes before you write an offer.",
        ],
      },
      {
        type: "body",
        eyebrow: "Step 03 · Inspection",
        headline: "Never skip the inspection.",
        body: "It's the cheapest insurance you'll buy. It surfaces roof age, AC, plumbing and electrical issues — and tells you what to negotiate before closing.",
      },
      {
        type: "cta",
        eyebrow: "Work with me",
        headline: "Let's find your first home.",
        cta: "Send me a message",
      },
    ],
  },
  "inversion-extranjera": {
    slug: "inversion-extranjera",
    title: "Invertir en bienes raíces desde otro país",
    description:
      "Carrusel de cinco slides para inversionistas extranjeros: el verdadero freno no es el capital sino la confianza, por qué represento solo a compradores, cómo comprar a distancia con datos claros, y una CTA para agendar una asesoría sin compromiso.",
    slides: [
      {
        type: "cover",
        eyebrow: "Inversión · 01",
        title: "Invertir desde otro país",
        subtitle: "No tiene por qué sentirse como apostar a ciegas.",
      },
      {
        type: "body",
        eyebrow: "El problema",
        headline: "No es el capital. Es la confianza.",
        bullets: [
          "¿Quién verifica la propiedad en el terreno?",
          "¿Quién revisa si los números cierran?",
          "¿Quién cuida tus intereses sin ti?",
        ],
      },
      {
        type: "body",
        eyebrow: "Mi función",
        headline: "Solo represento compradores.",
        body: "Mi lealtad es contigo, no con quien vende. Antes de invertir un dólar analizamos juntos la renta, los gastos reales, la zona y la plusvalía con cifras claras.",
      },
      {
        type: "body",
        eyebrow: "A distancia",
        headline: "Comprar a distancia es viable.",
        bullets: [
          "Documentación 100% remota.",
          "Inspecciones confiables en cada paso.",
          "Reportes honestos, no la versión bonita.",
        ],
      },
      {
        type: "cta",
        eyebrow: "— Trabaja conmigo —",
        headline: "Comprar bien, no rápido.",
        cta: "Agenda tu asesoría",
      },
    ],
  },
};
