import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36">
      <div className="absolute inset-0 -z-30">
        <Image
          src="/images/cta-final.jpg"
          alt="Residência de luxo com piscina ao entardecer e trilha de crescimento em luz azul"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-20 bg-ink/80" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-electric/25 blur-[140px]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-ink to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal direction="scale">
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            PRONTO PARA TRANSFORMAR
            <br />
            <span className="text-gradient-blue">CLICKS EM OPORTUNIDADES?</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Vamos analisar sua operação e entender onde existe espaço para
            gerar mais oportunidades através do tráfego pago.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.25}>
          <div className="mt-10 flex justify-center">
            <Button href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="primary">
              Falar com um especialista
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
