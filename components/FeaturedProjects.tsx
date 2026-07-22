'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BriefcaseBusiness, Check, LockKeyhole } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { fadeUp, staggerContainer } from '@/lib/motion';
import SectionHeading from './SectionHeading';
import SpotlightCard from './SpotlightCard';

export default function FeaturedProjects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <SectionHeading
        eyebrow="Projetos"
        title="Experiência aplicada em sistemas reais"
        subtitle="Os trabalhos abaixo foram desenvolvidos para empresas e não possuem código-fonte ou demonstrações públicas. O conteúdo apresenta apenas o escopo técnico que pode ser divulgado."
      />

      <motion.div
        variants={fadeUp}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ice-400"
      >
        <LockKeyhole className="h-3.5 w-3.5" />
        Projetos privados · informações limitadas por confidencialidade
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="grid grid-cols-1 gap-5 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.article key={project.title} variants={fadeUp} className="h-full">
            <SpotlightCard className="flex h-full flex-col p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-ice-300">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-ice-400/70">0{index + 1}</span>
              </div>

              <span className="mt-7 font-mono text-[11px] uppercase tracking-[0.15em] text-ice-400">
                {project.role}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ice-100">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-ice-400">{project.description}</p>

              <ul className="mt-6 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-ice-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04]">
                      <Check className="h-3 w-3" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-ice-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
