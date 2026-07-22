'use client';

import { motion } from 'framer-motion';

const links = [
  { label: 'Sobre', href: '#inicio' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contato', href: '#contato' },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex w-full max-w-3xl items-center justify-between rounded-full border border-white/[0.06] bg-base-900/70 px-5 py-3 backdrop-blur-xl sm:px-6"
    >
      <a href="#inicio" className="font-display text-sm font-semibold tracking-tight text-ice-100">
        TBR
        <span className="text-ice-400">.dev</span>
      </a>
      <nav className="hidden gap-6 sm:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-ice-400 transition-colors hover:text-ice-100"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#contato"
        className="rounded-full bg-ice-100 px-4 py-2 text-xs font-semibold text-base-900 transition-colors hover:bg-white sm:hidden"
      >
        Contato
      </a>
    </motion.header>
  );
}
