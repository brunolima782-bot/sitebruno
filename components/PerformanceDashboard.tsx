"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Wallet, Target, Percent, TrendingUp, MessageCircle } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const barHeights = [
  [30, 42, 38, 55, 48, 66, 74],
  [50, 44, 60, 52, 68, 62, 78],
  [70, 62, 58, 50, 44, 38, 30],
  [40, 46, 52, 58, 66, 72, 80],
];

function MiniBars({ heights, color }: { heights: number[]; color: string }) {
  return (
    <div className="mt-4 flex h-16 items-end gap-1.5">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-sm"
          style={{ background: color }}
        />
      ))}
    </div>
  );
}

function RadialProgress({ value, color }: { value: number; color: string }) {
  const circumference = 2 * Math.PI * 34;
  return (
    <div className="relative mt-4 flex h-24 w-24 items-center justify-center">
      <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
        <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="7" />
        <motion.circle
          cx="40"
          cy="40"
          r="34"
          fill="none"
          stroke={color}
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * (1 - value / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <span className="absolute font-display text-lg font-bold text-white">{value}%</span>
    </div>
  );
}

const cards = [
  {
    icon: Users,
    label: "Leads gerados",
    value: 312,
    prefix: "+",
    accent: "#00B7FF",
    render: () => <MiniBars heights={barHeights[0]} color="#00B7FF" />,
  },
  {
    icon: Wallet,
    label: "Investimento em anúncios",
    value: 4180,
    prefix: "R$ ",
    accent: "#0A84FF",
    render: () => <MiniBars heights={barHeights[1]} color="#0A84FF" />,
  },
  {
    icon: Target,
    label: "Custo por lead",
    value: 3.24,
    prefix: "R$ ",
    decimals: 2,
    accent: "#00B7FF",
    render: () => <MiniBars heights={barHeights[2]} color="#00B7FF" />,
  },
  {
    icon: Percent,
    label: "Taxa de conversão",
    value: 38,
    accent: "#0A84FF",
    render: () => <RadialProgress value={38} color="#0A84FF" />,
  },
  {
    icon: TrendingUp,
    label: "ROAS médio",
    value: 5.7,
    suffix: "x",
    decimals: 1,
    accent: "#00B7FF",
    render: () => <MiniBars heights={barHeights[3]} color="#00B7FF" />,
  },
  {
    icon: MessageCircle,
    label: "Mensagens no WhatsApp",
    value: 268,
    prefix: "+",
    accent: "#0A84FF",
    render: () => <RadialProgress value={72} color="#00B7FF" />,
  },
];

export default function PerformanceDashboard() {
  return (
    <section id="performance" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="grid-overlay pointer-events-none absolute inset-0 -z-20 opacity-60" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal direction="up">
          <SectionLabel index="005" label="Performance" />
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
            DECISÕES BASEADAS EM DADOS.
            <br />
            <span className="text-gradient-blue">NÃO EM ACHISMOS.</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Toda operação é acompanhada de perto: leads, custo, conversão e
            retorno guiam cada ajuste de campanha.
          </p>
        </Reveal>

        <Reveal direction="scale" delay={0.2} className="mt-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-white/10">
            <span className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-blue-intense/10 blur-3xl" />
            <Image
              src="/images/dashboard-performance.jpg"
              alt="Operador acompanhando painel de performance de campanhas em tempo real"
              fill
              sizes="(min-width: 1024px) 80rem, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.label} direction="up" delay={0.06 * i}>
              <div className="glass-card h-full rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-mist">
                    <card.icon size={16} />
                  </span>
                  <span className="text-[10px] uppercase tracking-wide text-mist/60">2026</span>
                </div>
                <p
                  className="mt-4 font-display text-2xl font-bold sm:text-3xl"
                  style={{ color: card.accent }}
                >
                  <AnimatedCounter
                    value={card.value}
                    prefix={card.prefix}
                    suffix={card.suffix}
                    decimals={card.decimals ?? 0}
                  />
                </p>
                <p className="mt-1 text-sm text-mist">{card.label}</p>
                {card.render()}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.2}>
          <p className="mt-8 text-center text-xs uppercase tracking-wide text-mist/50">
            * Painel ilustrativo — números de demonstração, não representam resultados reais de clientes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
