"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const faqs = [
  {
    question: "Vocês trabalham somente com empresas de piscinas?",
    answer:
      "O foco principal é o mercado de piscinas de fibra — lojistas, fabricantes e revendedores. Essa especialização é o que permite estratégias e criativos mais assertivos para o seu público.",
  },
  {
    question: "Vocês cuidam dos anúncios?",
    answer:
      "Sim. Toda a operação de tráfego pago é conduzida internamente: configuração de campanhas, criativos, segmentação, otimização e acompanhamento de resultados.",
  },
  {
    question: "Preciso ter uma equipe comercial?",
    answer:
      "É recomendável ter alguém disponível para responder o WhatsApp com agilidade. Orientamos sobre a melhor forma de organizar esse atendimento durante o diagnóstico.",
  },
  {
    question: "Qual o investimento mínimo em anúncios?",
    answer:
      "Varia de acordo com a região, o objetivo e o momento comercial da empresa. Esse valor é definido junto com você após o diagnóstico inicial.",
  },
  {
    question: "Vocês atendem empresas de outras cidades?",
    answer:
      "Sim. O trabalho é 100% remoto e atende empresas de piscinas de fibra em qualquer cidade do Brasil.",
  },
  {
    question: "Como funciona a contratação?",
    answer:
      "O primeiro passo é uma conversa pelo WhatsApp para entender seu negócio. A partir disso, é apresentada uma proposta e a operação é iniciada com o diagnóstico.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal direction="up">
          <SectionLabel index="008" label="FAQ" />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
            PERGUNTAS <span className="text-gradient-blue">FREQUENTES.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
          <Reveal direction="left" delay={0.15}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 lg:sticky lg:top-28 lg:mx-0">
              <span className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-blue-intense/10 blur-3xl" />
              <Image
                src="/images/faq.jpg"
                alt="Painel de atendimento e suporte com piscina ao fundo"
                fill
                sizes="(min-width: 1024px) 24rem, 20rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
          </Reveal>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-cyan transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-white/5" : ""
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm leading-relaxed text-mist sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
