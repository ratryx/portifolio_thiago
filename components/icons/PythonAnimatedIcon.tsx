'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SiPython } from 'react-icons/si';

interface PythonAnimatedIconProps {
  compact?: boolean;
}

export default function PythonAnimatedIcon({ compact = false }: PythonAnimatedIconProps) {
  const reduceMotion = useReducedMotion();
  const sizeClass = compact ? 'h-12 w-12 rounded-xl' : 'h-16 w-16 rounded-2xl';
  const iconClass = compact ? 'h-7 w-7' : 'h-9 w-9';

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { scale: 1.06, rotate: -2 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-white/[0.10] bg-[linear-gradient(145deg,rgba(55,118,171,0.18),rgba(255,211,67,0.06))] ${sizeClass}`}
    >
      <motion.div
        className="absolute inset-1 rounded-full bg-[conic-gradient(from_140deg,rgba(55,118,171,0.38),transparent_38%,rgba(255,211,67,0.28),transparent_78%)] blur-md"
        animate={reduceMotion ? undefined : { rotate: 360, opacity: [0.45, 0.8, 0.45] }}
        transition={{
          rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
        className={`relative ${iconClass}`}
      >
        <SiPython
          aria-hidden="true"
          className="absolute inset-0 h-full w-full text-[#3776AB] drop-shadow-[0_3px_8px_rgba(55,118,171,0.35)]"
          style={{ clipPath: 'inset(0 0 49% 0)' }}
        />
        <SiPython
          aria-hidden="true"
          className="absolute inset-0 h-full w-full text-[#FFD343] drop-shadow-[0_3px_8px_rgba(255,211,67,0.20)]"
          style={{ clipPath: 'inset(51% 0 0 0)' }}
        />
      </motion.div>
    </motion.div>
  );
}
