'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { contacts } from '@/data/portfolio';
import { fadeUp } from '@/lib/motion';

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer id="contato" className="mx-auto max-w-6xl px-6 pb-16 pt-8 sm:px-10">
      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative overflow-hidden rounded-4xl border border-white/[0.07] bg-base-800/60 px-8 py-14 text-center shadow-soft sm:px-14"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5b7a99]/15 blur-3xl" />

        <span className="relative font-mono text-xs uppercase tracking-[0.2em] text-ice-400">
          Vamos conversar
        </span>
        <h2 className="relative mx-auto mt-3 max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-ice-100 sm:text-4xl">
          Tem um projeto de back-end, integração ou automação em mente?
        </h2>
        <p className="relative mx-auto mt-4 max-w-md text-balance text-sm leading-relaxed text-ice-400">
          Entre em contato pelo canal mais conveniente para explicar o contexto e os objetivos do projeto.
        </p>

        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-ice-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              <span>{contact.label}</span>
              <span className="hidden text-ice-400 transition-colors group-hover:text-ice-200 sm:inline">
                {contact.detail}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-ice-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </motion.div>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 text-center font-mono text-xs text-ice-400/70 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Thiago Bettin Ramos.</p>
        <a href="#inicio" className="transition-colors hover:text-ice-200">
          Voltar ao início ↑
        </a>
      </div>
    </footer>
  );
}
