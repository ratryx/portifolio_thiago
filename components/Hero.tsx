'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// The R3F canvas touches window/WebGL, so it must never be server-rendered.
const PythonIcon3D = dynamic(() => import('./PythonIcon3D'), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-28 pb-16 sm:px-10"
    >
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-base-800/70 px-4 py-1.5 font-mono text-xs tracking-wide text-ice-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
            Disponível para projetos freelance
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-ice-100 sm:text-5xl lg:text-6xl"
          >
            Thiago Bettin Ramos
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-3 font-display text-lg font-medium text-ice-300 sm:text-xl"
          >
            Desenvolvedor Full Stack
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ice-400 sm:text-lg"
          >
            Cursando o último semestre de Ciências da Computação, com forte
            foco em back-end, automações, integrações de banco de dados e
            arquitetura de sistemas — construindo soluções sólidas do banco de
            dados até a última linha de código, tanto no back-end quanto no
            front-end.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projetos"
              className="rounded-full bg-ice-100 px-6 py-3 text-sm font-semibold text-base-900 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-ice-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              Entrar em contato
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-white/[0.03] blur-3xl" />
          <PythonIcon3D />
        </motion.div>
      </div>
    </section>
  );
}
