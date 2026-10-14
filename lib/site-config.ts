export const site = {
  name: "Bruno Sarkozi Ads",
  shortName: "Sarkozi Ads",
  tagline: "Gestão de Tráfego Pago para o mercado de piscinas de fibra",
  url: "https://brunosarkoziads.com.br",
  locale: "Recife - PE",
  hours: "Segunda a sexta, das 08h às 17h",
  instagramHandle: "brunosarkozi.ads",
  instagramUrl: "https://instagram.com/brunosarkozi.ads",
  whatsappNumber: "5581985540488",
  whatsappDisplay: "81 98554-0488",
} as const;

const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, Bruno! Vim pelo site e gostaria de entender como funciona o trabalho de tráfego pago para minha empresa.";

export function buildWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Estratégia", href: "#estrategia" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
] as const;
