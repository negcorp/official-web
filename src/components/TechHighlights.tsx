"use client";

import { motion } from "framer-motion";
import { Calendar, Globe, Cpu, UserCheck } from "lucide-react";
import type { Dictionary } from "@/lib/getDictionary";

const highlights = [
  { key: "calendar" as const, icon: Calendar },
  { key: "timezone" as const, icon: Globe },
  { key: "ai" as const, icon: Cpu },
  { key: "personalization" as const, icon: UserCheck },
];

export default function TechHighlights({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-blue/30 bg-neon-blue/10 px-4 py-1.5 text-sm text-neon-blue-light">
            {dict.techHighlights.badge}
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {dict.techHighlights.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary text-lg">
            {dict.techHighlights.description}
          </p>
        </motion.div>

        {/* Bento Grid - 2x2 */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {highlights.map((item, i) => {
            const data = dict.techHighlights.items[item.key];
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-border bg-surface-light/30 p-8 hover:border-neon-blue/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon-blue/10">
                    <Icon className="h-6 w-6 text-neon-blue-light" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {data.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      {data.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
