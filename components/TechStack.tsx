'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { languages, technologies } from '@/data/portfolio';
import { fadeUp, staggerContainer } from '@/lib/motion';
import PythonAnimatedIcon from './icons/PythonAnimatedIcon';
import { techIcons } from './icons/techIcons';
import SectionHeading from './SectionHeading';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-red-500/55" />
      <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-ice-300">{children}</h3>
    </div>
  );
}

export default function TechStack() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="tecnologias" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <SectionHeading
        eyebrow="Stack"
        title="Linguagens e tecnologias"
        subtitle="Uma visão mais direta das linguagens com que trabalho e das ferramentas que uso para construir interfaces, serviços, automações e integrações."
      />

      <div>
        <SectionLabel>Linguagens</SectionLabel>

        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {languages.map((language) => {
            const iconDef = techIcons[language.key];
            const Icon = iconDef?.Icon;

            return (
              <motion.article
                key={language.key}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-red-500/[0.11] bg-[linear-gradient(145deg,rgba(20,20,22,0.96),rgba(11,11,13,0.92))] p-5 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-0.5 hover:border-red-400/25"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-400/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start gap-4">
                  {language.key === 'python' ? (
                    <PythonAnimatedIcon compact />
                  ) : (
                    Icon && (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] transition-transform duration-300 group-hover:scale-[1.04]">
                        <Icon aria-hidden="true" className="h-6 w-6" color={iconDef.color} />
                      </div>
                    )
                  )}

                  <div className="min-w-0">
                    <span
                      className={`font-mono text-[9px] uppercase tracking-[0.16em] ${
                        language.level === 'Uso atual' ? 'text-red-300' : 'text-ice-400'
                      }`}
                    >
                      {language.level}
                    </span>
                    <h4 className="mt-1 font-display text-lg font-semibold text-ice-100">
                      {language.name}
                    </h4>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ice-400">{language.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-14">
        <SectionLabel>Tecnologias e ferramentas</SectionLabel>

        <motion.div
          variants={staggerContainer}
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {technologies.map((technology) => {
            const iconDef = techIcons[technology.key];
            const Icon = iconDef?.Icon;

            return (
              <motion.div
                key={technology.key}
                variants={fadeUp}
                className="group flex min-h-28 flex-col justify-between rounded-2xl border border-white/[0.075] bg-[linear-gradient(145deg,rgba(18,18,20,0.94),rgba(10,10,12,0.90))] p-4 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-red-400/20"
              >
                <div className="flex items-start justify-between gap-3">
                  {Icon && (
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035] transition-transform duration-300 group-hover:scale-105">
                      <Icon aria-hidden="true" className="h-5 w-5" color={iconDef.color} />
                    </div>
                  )}
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-ice-400">
                    {technology.category}
                  </span>
                </div>

                <span className="mt-5 font-display text-sm font-semibold text-ice-100">
                  {technology.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
