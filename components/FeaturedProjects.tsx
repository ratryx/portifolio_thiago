'use client';

import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import SectionHeading from './SectionHeading';

const projects = [
  {
    title: 'Projeto Vurx',
    role: 'Arquitetura de dados',
    description:
      'Arquitetura e configuração de conexões assíncronas com banco de dados, focada em otimização de performance e redução de latência.',
    tags: ['Python', 'PostgreSQL', 'Async'],
  },
  {
    title: 'Sistema de Chamados',
    role: 'Backend de suporte',
    description:
      'Estruturação do banco de dados do sistema de chamados, com acesso de leitura e escrita em PostgreSQL 17 para abertura, andamento e histórico dos atendimentos.',
    tags: ['Python', 'PostgreSQL 17', 'Read/Write'],
  },
  {
    title: 'Sistema de Atendimento Médico',
    role: 'Integração de dados',
    description:
      'Integração com a base do atendimento médico em modo somente leitura, isolada do sistema de chamados por questões de segurança e integridade dos dados.',
    tags: ['Python', 'PostgreSQL 17', 'Read-Only'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function FeaturedProjects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <SectionHeading
        eyebrow="Projetos"
        title="Projetos em destaque"
        subtitle="Trabalhos reais, com foco em estruturar dados e sistemas por trás de uma boa experiência."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-5 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={item} className="h-full">
            <SpotlightCard className="flex h-full flex-col p-7 sm:p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ice-400">
                {project.role}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ice-100">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ice-400">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
