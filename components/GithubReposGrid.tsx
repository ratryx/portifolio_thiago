'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion';
import SpotlightCard from './SpotlightCard';

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
}

export default function GithubReposGrid({ repos }: { repos: GithubRepo[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={staggerContainer}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {repos.map((repo) => (
        <motion.article key={repo.id} variants={fadeUp}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <SpotlightCard className="flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 truncate font-display text-base font-semibold text-ice-100">
                  {repo.name}
                </h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ice-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ice-400">
                {repo.description || 'Repositório público sem descrição cadastrada.'}
              </p>

              <div className="mt-5 flex items-center justify-between gap-3">
                {repo.language ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-ice-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-ice-300" />
                    {repo.language}
                  </span>
                ) : (
                  <span />
                )}

                {repo.stargazers_count > 0 && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ice-400">
                    <Star className="h-3.5 w-3.5" />
                    {repo.stargazers_count}
                  </span>
                )}
              </div>
            </SpotlightCard>
          </a>
        </motion.article>
      ))}
    </motion.div>
  );
}
