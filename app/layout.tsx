import type { Metadata } from "next";
import { Unbounded, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site-config";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Bruno Sarkozi Ads | Gestão de Tráfego para Empresas de Piscinas",
  description:
    "Gestão de tráfego pago e estratégias digitais para empresas e lojas de piscinas de fibra. Gere mais oportunidades através de anúncios estratégicos.",
  keywords: [
    "tráfego pago piscinas",
    "gestor de tráfego piscinas de fibra",
    "marketing digital para piscinas",
    "geração de leads WhatsApp",
    "Bruno Sarkozi Ads",
  ],
  authors: [{ name: "Bruno Sarkozi" }],
  openGraph: {
    title: "Bruno Sarkozi Ads | Gestão de Tráfego para Empresas de Piscinas",
    description:
      "Transformamos investimento em anúncios em oportunidades reais de venda para lojas e empresas do mercado de piscinas de fibra.",
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Sarkozi Ads | Gestão de Tráfego para Empresas de Piscinas",
    description:
      "Gestão de tráfego pago e estratégias digitais para empresas e lojas de piscinas de fibra.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${unbounded.variable} ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-ink text-white antialiased selection:bg-blue-electric">
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
