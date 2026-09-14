import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { buildWhatsAppLink } from "@/lib/site-config";

const fields = ["Cliente", "Investimento", "Leads", "CPL", "Vendas", "ROAS"];

const placeholders = [
  "CASE EM BREVE",
  "SEU RESULTADO PODE ESTAR AQUI",
  "CASE EM BREVE",
];

export default function ResultsSection() {
  return (
    <section id="resultados" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal direction="up">
          <SectionLabel index="006" label="Resultados" />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
            QUANDO A ESTRATÉGIA ENCONTRA A EXECUÇÃO,
            <br />
            <span className="text-gradient-blue">OS NÚMEROS APARECEM.</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Esta operação está em construção de portfólio. Os espaços abaixo
            estão reservados para os próximos cases de clientes reais.
          </p>
        </Reveal>

        <Reveal direction="scale" delay={0.2} className="mt-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10 sm:aspect-[21/9]">
            <span className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-blue-intense/10 blur-3xl" />
            <Image
              src="/images/resultados-cases.jpg"
              alt="Trajetória de crescimento representada por trilha de luz azul sobre piscina ao entardecer"
              fill
              sizes="(min-width: 1024px) 80rem, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((placeholder, i) => (
            <Reveal key={i} direction="up" delay={0.08 * i}>
              <div className="relative h-full rounded-2xl border border-dashed border-white/15 bg-white/[0.015] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-mist">
                  <Sparkles size={16} />
                </div>

                <p className="mt-6 font-display text-lg font-bold uppercase tracking-wide text-white/70">
                  {placeholder}
                </p>

                <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                  {fields.map((field) => (
                    <div key={field} className="flex items-center justify-between text-sm">
                      <span className="text-mist">{field}</span>
                      <span className="font-mono text-white/30">— — —</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.3}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center">
            <p className="text-sm text-mist sm:text-base">
              Quer ser um dos primeiros cases de sucesso da operação?
            </p>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-sm font-semibold text-cyan underline-offset-4 hover:underline"
            >
              Falar com Bruno agora →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
