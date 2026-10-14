import Image from "next/image";
import { TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { buildWhatsAppLink } from "@/lib/site-config";

// Case real (nome e numeros autorizados pela cliente)
const megaSol = {
  client: "Mega Sol Piscinas",
  city: "Recife - PE",
  channels: "Google Ads · Meta Ads",
  highlights: [
    { label: "Antes", value: "até 3", detail: "piscinas vendidas por mês" },
    { label: "Hoje", value: "+10", detail: "piscinas vendidas por mês" },
    { label: "Toda semana", value: "+300", detail: "potenciais novos clientes" },
  ],
  googleAds: [
    { label: "Cliques nos anúncios", value: "423" },
    { label: "Pessoas querendo ir até a loja", value: "212" },
    { label: "Ligações recebidas", value: "32" },
  ],
  googleAdsPeriod: "Google Ads · 21/09 a 12/10",
};

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
            Resultados reais de uma loja de piscinas de fibra que confiou o tráfego pago à
            nossa operação.
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

        <Reveal direction="up" delay={0.1} className="mt-10">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/30 text-cyan">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <p className="font-display text-xl font-bold uppercase tracking-wide sm:text-2xl">
                    {megaSol.client}
                  </p>
                  <p className="text-sm text-mist">{megaSol.city}</p>
                </div>
              </div>
              <span className="w-fit rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-mist">
                {megaSol.channels}
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {megaSol.highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs uppercase tracking-wide text-mist">{item.label}</p>
                  <p className="mt-2 font-display text-4xl font-bold text-gradient-blue sm:text-5xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-mist">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-wide text-mist/70">{megaSol.googleAdsPeriod}</p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {megaSol.googleAds.map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm sm:block">
                    <span className="font-mono text-lg text-white sm:text-2xl">{item.value}</span>
                    <span className="text-mist sm:mt-1 sm:block">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center">
            <p className="text-sm text-mist sm:text-base">
              Quer resultados assim na sua loja de piscinas?
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
