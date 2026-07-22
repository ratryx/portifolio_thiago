'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Gamepad2 } from 'lucide-react';
import { snakeGame } from '@/data/portfolio';

const snakeSegments = [
  { left: '18%', top: '30%', delay: 0 },
  { left: '28%', top: '30%', delay: 0.08 },
  { left: '38%', top: '30%', delay: 0.16 },
  { left: '48%', top: '30%', delay: 0.24 },
  { left: '58%', top: '30%', delay: 0.32 },
  { left: '58%', top: '43%', delay: 0.4 },
  { left: '58%', top: '56%', delay: 0.48 },
  { left: '68%', top: '56%', delay: 0.56 },
];

export default function SnakeGameCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="snakegame" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        className="group relative overflow-hidden rounded-[2.25rem] border border-white/[0.08] bg-base-800/55 shadow-soft"
      >
        <motion.div
          aria-hidden="true"
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/[0.07] blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 26, 0],
                  y: [0, 18, 0],
                  opacity: [0.55, 0.9, 0.55],
                }
          }
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-[#3776ab]/[0.08] blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -20, 0],
                  y: [0, -14, 0],
                  opacity: [0.45, 0.8, 0.45],
                }
          }
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative grid items-center gap-10 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.055] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-200/80">
              <Gamepad2 className="h-3.5 w-3.5" />
              {snakeGame.eyebrow}
            </div>

            <h2 className="mt-5 max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-ice-100 sm:text-4xl">
              {snakeGame.heading}
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-ice-400">
              {snakeGame.description}
            </p>

            <a
              href={snakeGame.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ice-100 px-6 py-3 text-sm font-semibold text-base-900 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_35px_-18px_rgba(255,255,255,0.45)]"
            >
              Venha jogar
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0b0d0c]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:34px_34px] opacity-65" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_40%,rgba(52,211,153,0.09),transparent_45%)]" />

            {snakeSegments.map((segment, index) => (
              <motion.span
                key={`${segment.left}-${segment.top}`}
                className={`absolute h-[9%] w-[9%] rounded-[28%] border ${
                  index === snakeSegments.length - 1
                    ? 'border-emerald-200/40 bg-emerald-300 shadow-[0_0_22px_rgba(110,231,183,0.35)]'
                    : 'border-emerald-200/20 bg-emerald-400/80'
                }`}
                style={{ left: segment.left, top: segment.top }}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -4, 0],
                        opacity: [0.72, 1, 0.72],
                      }
                }
                transition={{
                  duration: 2.4,
                  delay: segment.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {index === snakeSegments.length - 1 && (
                  <>
                    <span className="absolute right-[20%] top-[22%] h-1 w-1 rounded-full bg-[#0b0d0c]" />
                    <span className="absolute right-[20%] bottom-[22%] h-1 w-1 rounded-full bg-[#0b0d0c]" />
                  </>
                )}
              </motion.span>
            ))}

            <motion.span
              className="absolute right-[17%] top-[25%] h-[8%] w-[8%] rounded-md bg-rose-400 shadow-[0_0_20px_rgba(251,113,133,0.35)]"
              animate={reduceMotion ? undefined : { scale: [1, 1.16, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
              SnakeGame
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
