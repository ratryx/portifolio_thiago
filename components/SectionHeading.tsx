'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 max-w-2xl"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-ice-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ice-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-balance text-base leading-relaxed text-ice-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
