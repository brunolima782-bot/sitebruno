import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";

const highlights = [
  "Entendimento do mercado de piscinas de fibra",
  "Estratégias específicas para o nicho",
  "Criativos voltados para piscinas",
  "Campanhas focadas em geração de oportunidades",
  "Otimização baseada em dados",
];

export default function SpecializationSection() {
  return (
    <section className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal direction="up">
            <SectionLabel index="003" label="Especialização" />
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
              VOCÊ NÃO PRECISA DE MAIS UMA AGÊNCIA.
              <br />
              <span className="text-gradient-blue">
                PRECISA DE ALGUÉM QUE ENTENDA O SEU MERCADO.
              </span>
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.15}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              O posicionamento é 100% focado no segmento de piscinas de fibra —
              nada de estratégias genéricas aplicadas a qualquer negócio.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {highlights.map((item, i) => (
            <Reveal key={item} direction="left" delay={0.06 * i}>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-cyan" strokeWidth={1.8} />
                <span className="text-sm text-white/90 sm:text-base">{item}</span>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal direction="scale" delay={0.2} className="mt-14">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10">
            <span className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-blue-intense/10 blur-3xl" />
            <BackgroundVideo
              src="/videos/especializacao.mp4"
              poster="/images/especializacao-piscinas.png"
              alt="Complexo de piscinas premium com painéis de dados conectados"
              sizes="(min-width: 1024px) 80rem, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/60 to-transparent" />
            <span className="glass-card absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-medium text-white/90 sm:left-6 sm:top-6">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              Nicho: Piscinas de fibra
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
