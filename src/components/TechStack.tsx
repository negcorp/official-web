"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/getDictionary";

const stackIcons: Record<string, { color: string; letter: string }> = {
  flutter: { color: "from-sky-400 to-blue-600", letter: "Fl" },
  fastapi: { color: "from-emerald-400 to-green-600", letter: "Fa" },
  python: { color: "from-yellow-400 to-amber-600", letter: "Py" },
  nextjs: { color: "from-white to-gray-400", letter: "Nx" },
  refine: { color: "from-indigo-400 to-violet-600", letter: "Re" },
  postgres: { color: "from-blue-400 to-indigo-600", letter: "Pg" },
};

export default function TechStack({ dict }: { dict: Dictionary }) {
  const items = Object.entries(dict.techStack.items);

  return (
    <section className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-sm text-neon-cyan">
            {dict.techStack.badge}
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.techStack.title}
          </h2>
        </motion.div>

        {/* Stack Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map(([key, item], i) => {
            const icon = stackIcons[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface-light/30 p-6 hover:border-neon-purple/30 transition-colors"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${icon?.color ?? "from-gray-400 to-gray-600"}`}
                >
                  <span className="text-sm font-bold text-white">
                    {icon?.letter ?? key.slice(0, 2)}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-text-primary">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted">{item.role}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
