import { ChevronDown, Target, Percent, Wallet, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";
import { buildWhatsAppLink } from "@/lib/site-config";

const trustPoints = [
  "Especialista em tráfego para o mercado de piscinas",
  "Foco em geração de leads",
  "Estratégias orientadas a vendas",
];

const indicators = [
  { icon: Target, value: 127, prefix: "+", decimals: 0, label: "Leads" },
  { icon: Percent, value: 38, prefix: "+", suffix: "%", decimals: 0, label: "Conversão" },
  { icon: Wallet, value: 3.24, prefix: "R$ ", decimals: 2, label: "CPL" },
  { icon: TrendingUp, value: 5.7, suffix: "x", decimals: 1, label: "ROAS" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 -z-20">
        <BackgroundVideo
          src="/videos/hero.mp4"
          poster="/images/hero-pool.jpg"
          alt="Piscina de luxo à noite com painéis de dados de performance"
          sizes="100vw"
          className="h-full w-full object-cover object-right"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal direction="up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-mist backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-cyan" />
              Gestão de Tráfego Pago · Piscinas de Fibra
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h1 className="font-display text-[clamp(2.5rem,9vw,3.6rem)] font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
              TRÁFEGO PAGO
              <br />
              PARA QUEM VENDE{" "}
              <span className="text-gradient-blue">PISCINAS.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              Transformamos investimento em anúncios em oportunidades reais de
              venda para lojas e empresas do mercado de piscinas de fibra.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="primary">
                Quero vender mais
              </Button>
              <Button href="#estrategia" variant="secondary" icon={false}>
                Ver como funciona
              </Button>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <div className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {indicators.map((item) => (
                <div
                  key={item.label}
                  className="glass-card flex items-center gap-2 rounded-xl px-3 py-2.5"
                >
                  <item.icon size={14} className="shrink-0 text-cyan" />
                  <div className="min-w-0 leading-tight">
                    <p className="font-display text-sm font-bold text-white sm:text-base">
                      <AnimatedCounter
                        value={item.value}
                        prefix={item.prefix}
                        suffix={item.suffix}
                        decimals={item.decimals}
                      />
                    </p>
                    <p className="text-[10px] text-mist">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.5}>
            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs text-mist sm:text-sm">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-blue-intense" />
                  {point}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 hidden justify-center sm:flex">
        <a
          href="#problema"
          aria-label="Rolar para a próxima seção"
          className="flex flex-col items-center gap-2 text-mist/60 transition-colors hover:text-white"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
