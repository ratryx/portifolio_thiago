'use client';

import { motion } from 'framer-motion';

const contacts = [
  {
    label: 'WhatsApp',
    detail: '(12) 99227-7250',
    href: 'https://wa.me/5512992277250',
  },
  {
    label: 'LinkedIn',
    detail: 'thiago-bettin-ramos',
    href: 'https://linkedin.com/in/thiago-bettin-ramos-91b878238/',
  },
  {
    label: 'GitHub',
    detail: 'ratryx',
    href: 'https://github.com/ratryx',
  },
];

export default function Footer() {
  return (
    <footer id="contato" className="mx-auto max-w-6xl px-6 pb-16 pt-8 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-4xl border border-white/[0.06] bg-base-800/60 px-8 py-14 text-center shadow-soft sm:px-14"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ice-400">
          Vamos conversar
        </span>
        <h2 className="mx-auto mt-3 max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-ice-100 sm:text-4xl">
          Tem um projeto de back-end ou automação em mente?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-balance text-sm leading-relaxed text-ice-400">
          Escolha o canal que preferir — respondo o mais rápido possível.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-ice-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              {contact.label}
              <span className="text-ice-400 transition-colors group-hover:text-ice-200">
                {contact.detail}
              </span>
            </a>
          ))}
        </div>
      </motion.div>

      <p className="mt-10 text-center font-mono text-xs text-ice-400/70">
        © {new Date().getFullYear()} Thiago Bettin Ramos. Todos os direitos reservados.
      </p>
    </footer>
  );
}
