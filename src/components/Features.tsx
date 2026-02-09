"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, Layers, Rocket } from "lucide-react";
import type { Dictionary } from "@/lib/getDictionary";

const productPalettes = [
  {
    key: "saju920" as const,
    icon: Sparkles,
    gradient: "from-purple-500 to-indigo-600",
    glow: "shadow-purple-500/20",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    key: "multiAI" as const,
    icon: Cpu,
    gradient: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/20",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    key: "easyContext" as const,
    icon: Layers,
    gradient: "from-green-400 to-emerald-500",
    glow: "shadow-green-500/20",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    key: "comingSoon" as const,
    icon: Rocket,
    gradient: "from-rose-400 to-pink-500",
    glow: "shadow-rose-500/20",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export default function Features({ dict }: { dict: Dictionary }) {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-purple/30 bg-neon-purple/10 px-4 py-1.5 text-sm text-neon-purple-light">
            {dict.features.badge}
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {dict.features.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary text-lg">
            {dict.features.description}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {productPalettes.map((product) => {
            const card = dict.features.cards[product.key];
            const Icon = product.icon;
            return (
              <motion.div
                key={product.key}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl border ${product.border} bg-surface-light/50 p-6 backdrop-blur-sm hover:shadow-lg ${product.glow} transition-shadow`}
              >
                {/* Icon */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${product.bg}`}
                >
                  <Icon className="h-6 w-6 text-white/80" />
                </div>

                {/* Name & Persona */}
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {card.name}
                </h3>
                <p
                  className={`mt-1 text-sm font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
                >
                  {card.persona}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
