'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Jogar', href: '#snakegame' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contato', href: '#contato' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };

    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-4xl items-center justify-between rounded-full border border-white/[0.07] bg-base-900/80 px-5 py-3 shadow-soft backdrop-blur-xl sm:px-6"
      >
        <a href="#inicio" className="font-display text-sm font-semibold tracking-tight text-ice-100">
          TBR<span className="text-ice-400">.dev</span>
        </a>

        <nav className="hidden items-center gap-5 sm:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-ice-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-ice-200 after:transition-all hover:text-ice-100 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ice-100 sm:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[4.8rem] z-40 rounded-3xl border border-white/[0.07] bg-base-900/95 p-3 shadow-soft backdrop-blur-xl sm:hidden"
          >
            <nav className="flex flex-col" aria-label="Navegação mobile">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-ice-300 transition-colors hover:bg-white/[0.05] hover:text-ice-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
