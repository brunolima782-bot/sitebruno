import Image from "next/image";
import { MapPin, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal direction="left" className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] border border-white/10 sm:max-w-sm lg:mx-0">
            <span className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-blue-intense/15 blur-3xl" />

            <Image
              src="/images/sobre-bruno.jpg"
              alt="Bruno Sarkozi, especialista em Gestão de Tráfego Pago, em frente a dashboards de Google Ads e Meta Ads"
              fill
              sizes="(min-width: 1024px) 24rem, 20rem"
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/0 to-ink/10" />

            <span className="glass-card absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-medium text-white/90">
              <MapPin size={11} className="text-cyan" /> Recife - PE
            </span>

            <span className="glass-card absolute bottom-4 left-4 right-4 flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[11px] font-medium text-white/90">
              <BadgeCheck size={13} className="shrink-0 text-cyan" />
              Meta Ads · Google Ads
            </span>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal direction="up">
            <SectionLabel index="007" label="Sobre" />
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
              BRUNO SARKOZI
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-wide text-cyan sm:text-base">
              Especialista em Tráfego Pago · Piscinas de Fibra
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
              Sou especialista em tráfego pago e meu trabalho é ajudar
              empresários a transformar anúncios em oportunidades reais de
              negócio, utilizando estratégia, dados e tráfego pago.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist/80 sm:text-base">
              Atuo focado no mercado de piscinas de fibra — entendendo a
              rotina comercial, a sazonalidade e o comportamento de compra
              desse público específico para construir campanhas que geram
              conversas reais no WhatsApp.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
