import { Megaphone, UserX, TrendingDown, Compass, Users, Swords, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BackgroundVideo } from "@/components/ui/BackgroundVideo";

const problems = [
  { icon: Megaphone, title: "Anúncios que não geram contatos", description: "Campanhas rodando sem gerar conversas reais no WhatsApp." },
  { icon: UserX, title: "Leads desqualificados", description: "Contatos que nunca fecham negócio, apenas ocupam o tempo do time." },
  { icon: TrendingDown, title: "Dinheiro desperdiçado", description: "Verba de anúncio consumida sem retorno mensurável." },
  { icon: Compass, title: "Campanhas sem estratégia", description: "Impulsionar postagens não é ter um sistema de aquisição." },
  { icon: Users, title: "Dependência de indicação", description: "Vendas presas ao boca a boca, sem previsibilidade." },
  { icon: Swords, title: "Concorrentes na frente", description: "Outras empresas ocupando o espaço que deveria ser seu." },
  { icon: HelpCircle, title: "Falta de previsibilidade comercial", description: "Meses bons e meses ruins, sem controle sobre a demanda." },
];

export default function ProblemSection() {
  return (
    <section id="problema" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal direction="up">
              <SectionLabel index="001" label="O Problema" />
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
                SEU PROBLEMA NÃO É FALTA DE CLIENTES.
                <br />
                <span className="text-gradient-blue">É FALTA DE ESTRATÉGIA.</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-mist sm:text-lg">
                Todo dia sem uma operação estruturada de tráfego é uma
                oportunidade que vai para o concorrente. Os sinais costumam
                ser sempre os mesmos.
              </p>
            </Reveal>
          </div>

          <Reveal direction="scale" delay={0.15}>
            <div className="relative mx-auto aspect-video w-full max-w-md overflow-hidden rounded-3xl border border-white/10 lg:mx-0">
              <span className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-blue-intense/10 blur-3xl" />
              <BackgroundVideo
                src="/videos/problema.mp4"
                poster="/images/problema-executivo.png"
                alt="Empresário analisando queda de performance em anúncios"
                sizes="(min-width: 1024px) 28rem, 24rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, i) => (
            <Reveal key={problem.title} direction="up" delay={0.05 * i} className="h-full">
              <div className="group h-full rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-intense/40 hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan transition-colors group-hover:border-cyan/40 group-hover:text-white">
                  <problem.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{problem.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
