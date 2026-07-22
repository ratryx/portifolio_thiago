'use client';

import { motion, useReducedMotion } from 'framer-motion';

const particles = [
  { x: '17%', y: '25%', delay: 0 },
  { x: '82%', y: '20%', delay: 0.7 },
  { x: '86%', y: '70%', delay: 1.2 },
  { x: '22%', y: '79%', delay: 1.8 },
];

export default function PythonIcon3D() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-base-850/55 shadow-soft backdrop-blur-sm"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4, scale: 1.008 }}
    >
      <div className="hero-grid absolute inset-0 opacity-75" />

      <motion.div
        className="absolute left-[13%] top-[12%] h-[38%] w-[38%] rounded-full bg-[#347ab4]/20 blur-[70px]"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 18, -6, 0],
                y: [0, -10, 12, 0],
                opacity: [0.35, 0.6, 0.42, 0.35],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[10%] h-[34%] w-[34%] rounded-full bg-[#ffca1d]/12 blur-[75px]"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -12, 8, 0],
                y: [0, 14, -8, 0],
                opacity: [0.25, 0.48, 0.32, 0.25],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute inset-[9%] rounded-full border border-white/[0.075]"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#74a9d7] shadow-[0_0_20px_rgba(116,169,215,0.75)]" />
      </motion.div>

      <motion.div
        className="absolute inset-[20%] rounded-full border border-dashed border-white/[0.09]"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      />

      {particles.map((particle) => (
        <motion.span
          key={`${particle.x}-${particle.y}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-white/60"
          style={{ left: particle.x, top: particle.y }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                  opacity: [0.2, 0.9, 0.2],
                  scale: [0.8, 1.35, 0.8],
                }
          }
          transition={{
            duration: 3.8,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        className="absolute inset-[3%] z-10 flex items-center justify-center"
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src="/python-logo.svg"
          alt="Logo animado do Python"
          className="h-full w-full scale-[1.18] object-contain drop-shadow-[0_28px_42px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:scale-[1.22]"
          draggable={false}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-[12%] left-1/2 h-8 w-[42%] -translate-x-1/2 rounded-full bg-black/45 blur-xl"
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.25, 0.4, 0.25],
                scaleX: [0.92, 1.05, 0.92],
              }
        }
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.025]" />
    </motion.div>
  );
}
