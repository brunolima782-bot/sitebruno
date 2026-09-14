import { Megaphone, Eye, UserPlus, MessageCircle, Headset, CheckCircle2, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";

const pillars = [
  "Tráfego pago",
  "Criativos",
  "Segmentação",
  "Oferta",
  "Geração de leads",
  "Otimização",
  "Análise de dados",
];

const flow = [
  { label: "ANÚNCIO", icon: Megaphone },
  { label: "ATENÇÃO", icon: Eye },
  { label: "LEAD", icon: UserPlus },
  { label: "WHATSAPP", icon: MessageCircle },
  { label: "ATENDIMENTO", icon: Headset },
  { label: "VENDA", icon: CheckCircle2 },
];

export default function SolutionSection() {
  return (
    <section id="estrategia" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-electric/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal direction="up">
          <SectionLabel index="002" label="A Solução" />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
            UM SISTEMA DE AQUISIÇÃO
            <br />
            <span className="text-gradient-blue">PENSADO PARA O SEU MERCADO.</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            A estratégia combina tráfego, criativos e dados em um único sistema —
            desenhado para transformar cliques em conversas reais de venda.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar} direction="up" delay={0.05 * i}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-mist sm:text-sm">
                <span className="section-number text-cyan">{String(i + 1).padStart(2, "0")}</span>
                {pillar}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Flow diagram */}
        <Reveal direction="up" delay={0.2} className="mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <span className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-blue-intense/10 blur-3xl" />
            <div className="relative aspect-video w-full">
              <BackgroundVideo
                src="/videos/solucao.mp4"
                poster="/images/solucao-funil.png"
                alt="Fluxo de aquisição: anúncio, atenção, lead, WhatsApp, atendimento e venda"
                sizes="(min-width: 1024px) 80rem, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-4 sm:gap-x-2">
            {flow.map((step, i) => (
              <div key={step.label} className="flex items-center gap-1.5 sm:gap-2">
                <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5">
                  <step.icon size={13} className="text-cyan" strokeWidth={1.8} />
                  <span className="section-number text-[10px] font-semibold uppercase text-white sm:text-[11px]">
                    {step.label}
                  </span>
                </div>
                {i < flow.length - 1 && (
                  <ChevronRight size={14} className="shrink-0 text-mist/40" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
