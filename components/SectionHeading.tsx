'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '@/lib/motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="mb-12 max-w-2xl"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-ice-400/50" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ice-400">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-ice-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-balance text-base leading-relaxed text-ice-400">{subtitle}</p>
      )}
    </motion.div>
  );
}
