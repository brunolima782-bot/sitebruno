import Image from "next/image";
import { Search, Compass, Rocket, LineChart, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos seu negócio, região, público e momento comercial.",
    icon: Search,
  },
  {
    number: "02",
    title: "Estratégia",
    description: "Definimos campanhas, ofertas, públicos e estrutura de aquisição.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Execução",
    description: "Criamos, configuramos e colocamos as campanhas para rodar.",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Otimização",
    description: "Analisamos os dados e ajustamos continuamente a operação.",
    icon: LineChart,
  },
  {
    number: "05",
    title: "Escala",
    description: "Encontramos oportunidades para aumentar o volume de oportunidades.",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal direction="up">
          <SectionLabel index="004" label="Como Funciona" />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
            UM PROCESSO CLARO,
            <br />
            <span className="text-gradient-blue">DO DIAGNÓSTICO À ESCALA.</span>
          </h2>
        </Reveal>

        <Reveal direction="scale" delay={0.15} className="mt-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 sm:aspect-[21/9]">
            <span className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-blue-intense/10 blur-3xl" />
            <Image
              src="/images/como-funciona.jpg"
              alt="As cinco etapas do processo: diagnóstico, estratégia, execução, otimização e escala"
              fill
              sizes="(min-width: 1024px) 80rem, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-blue-intense/60 via-white/10 to-transparent sm:block" />

          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, i) => (
              <Reveal key={step.number} direction="up" delay={0.08 * i}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-intense/40 bg-graphite text-cyan">
                    <step.icon size={22} strokeWidth={1.7} />
                  </div>
                  <div className="glass-card flex-1 rounded-2xl p-5 sm:p-6">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="section-number text-xs text-cyan">{step.number}</span>
                      <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-mist sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
