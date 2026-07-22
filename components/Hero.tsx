'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { fadeUp, staggerContainer } from '@/lib/motion';
import PythonIcon3D from './PythonIcon3D';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative mx-auto flex min-h-svh max-w-6xl items-center px-6 pb-20 pt-32 sm:px-10 lg:py-28"
    >
      <div className="pointer-events-none absolute left-[-16rem] top-24 h-[28rem] w-[28rem] rounded-full bg-white/[0.025] blur-3xl" />

      <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-base-800/75 px-4 py-2 font-mono text-[11px] tracking-wide text-ice-300 shadow-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400/80" />
            </span>
            {profile.availability}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-ice-100 sm:text-6xl lg:text-[4.5rem]"
          >
            Thiago
            <br />
            Bettin Ramos
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 font-display text-lg font-medium text-ice-200 sm:text-xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-base leading-8 text-ice-400 sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2.5">
            {profile.specialties.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ice-400"
              >
                {specialty}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-ice-100 px-6 py-3 text-sm font-semibold text-base-900 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              Ver projetos
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-ice-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              <MessageCircle className="h-4 w-4" />
              Entrar em contato
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 34, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <PythonIcon3D />
        </motion.div>
      </div>
    </section>
  );
}
