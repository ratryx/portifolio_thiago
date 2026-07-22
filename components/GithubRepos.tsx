'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import SectionHeading from './SectionHeading';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let isMounted = true;

    async function fetchRepos() {
      try {
        const res = await fetch(
          'https://api.github.com/users/ratryx/repos?sort=updated&per_page=6',
          { headers: { Accept: 'application/vnd.github+json' } }
        );

        if (!res.ok) throw new Error('Falha ao consultar a API do GitHub');

        const data: Repo[] = await res.json();
        if (isMounted) {
          setRepos(data);
          setStatus('ready');
        }
      } catch (err) {
        if (isMounted) setStatus('error');
      }
    }

    fetchRepos();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <SectionHeading
        eyebrow="GitHub"
        title="Repositórios recentes"
        subtitle="Puxado em tempo real do GitHub — o que está sendo commitado agora."
      />

      {status === 'loading' && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-40 animate-pulse rounded-3xl border border-white/[0.06] bg-base-800/60"
            />
          ))}
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-3xl border border-white/[0.06] bg-base-800/60 p-8 text-center text-sm text-ice-400">
          Não foi possível carregar os repositórios agora.{' '}
          <a
            href="https://github.com/ratryx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ice-200 underline underline-offset-4"
          >
            Veja diretamente no GitHub
          </a>
          .
        </div>
      )}

      {status === 'ready' && repos.length === 0 && (
        <div className="rounded-3xl border border-white/[0.06] bg-base-800/60 p-8 text-center text-sm text-ice-400">
          Nenhum repositório público encontrado no momento.
        </div>
      )}

      {status === 'ready' && repos.length > 0 && (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {repos.map((repo) => (
            <motion.div key={repo.id} variants={item}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <SpotlightCard className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="truncate font-display text-base font-semibold text-ice-100">
                      {repo.name}
                    </h3>
                    {repo.stargazers_count > 0 && (
                      <span className="shrink-0 font-mono text-xs text-ice-400">
                        ★ {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ice-400">
                    {repo.description || 'Sem descrição disponível.'}
                  </p>
                  {repo.language && (
                    <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-ice-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-ice-300" />
                      {repo.language}
                    </span>
                  )}
                </SpotlightCard>
              </a>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
