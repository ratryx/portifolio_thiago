'use client';

import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import SectionHeading from './SectionHeading';
import PythonAnimatedIcon from './icons/PythonAnimatedIcon';
import { techIcons } from './icons/techIcons';

const stack = [
  {
    key: 'python',
    name: 'Python',
    tag: 'Back-end & automação',
    description:
      'Automações, scripts de produtividade e desenvolvimento back-end, do protótipo à produção.',
  },
  {
    key: 'typescript',
    name: 'TypeScript',
    tag: 'Front-end & back-end',
    description:
      'Tipagem estática no dia a dia, tanto em APIs quanto em interfaces — código mais seguro e fácil de manter.',
  },
  {
    key: 'javascript',
    name: 'JavaScript',
    tag: 'Full stack',
    description:
      'Base sólida para construir interfaces dinâmicas e integrações no front e no back-end.',
  },
  {
    key: 'postgresql',
    name: 'PostgreSQL',
    tag: 'Modelagem & administração',
    description:
      'Forte experiência com modelagem e administração de bancos, incluindo PostgreSQL 17 — gerenciamento de instâncias 64 bits para leitura/escrita e 32 bits dedicadas à leitura.',
  },
  {
    key: 'php',
    name: 'PHP',
    tag: 'Desenvolvimento web',
    description:
      'Construção e manutenção de aplicações web server-side com foco em estabilidade e integração de dados.',
  },
  {
    key: 'async',
    name: 'Conexões Assíncronas',
    tag: 'Performance & escalabilidade',
    description:
      'Arquitetura de conexões assíncronas com banco de dados, reduzindo latência e otimizando o uso de recursos em sistemas concorrentes.',
  },
];

const previousKnowledge = [
  { key: 'c', name: 'C' },
  { key: 'java', name: 'Java' },
  { key: 'csharp', name: 'C# (mods de Minecraft)' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function TechStack() {
  return (
    <section id="tecnologias" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <SectionHeading
        eyebrow="Stack"
        title="Minhas tecnologias"
        subtitle="Desenvolvedor full stack, no último semestre de Ciências da Computação. Bibliotecas e ferramentas que uso no dia a dia para construir sistemas confiáveis, do banco de dados à interface."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        {stack.map((techItem) => {
          const iconDef = techIcons[techItem.key];
          const Icon = iconDef?.Icon;

          return (
            <motion.div key={techItem.name} variants={item}>
              <SpotlightCard className="h-full p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {techItem.key === 'python' ? (
                      <PythonAnimatedIcon />
                    ) : (
                      Icon && (
                        <motion.div
                          whileHover={{ scale: 1.12, rotate: -4 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03]"
                        >
                          <Icon className="h-7 w-7" color={iconDef.color} />
                        </motion.div>
                      )
                    )}
                    <h3 className="font-display text-xl font-semibold text-ice-100">
                      {techItem.name}
                    </h3>
                  </div>
                  <span className="hidden shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-ice-400 sm:inline-block">
                    {techItem.tag}
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ice-400">
                  {techItem.description}
                </p>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 rounded-3xl border border-white/[0.06] bg-base-800/40 p-6 sm:p-7"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ice-400">
          Conhecimento prévio
        </span>
        <div className="mt-4 flex flex-wrap gap-3">
          {previousKnowledge.map((techItem) => {
            const iconDef = techIcons[techItem.key];
            const Icon = iconDef?.Icon;
            return (
              <motion.span
                key={techItem.key}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-ice-300"
              >
                {Icon && <Icon className="h-4 w-4" color={iconDef.color} />}
                {techItem.name}
              </motion.span>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
