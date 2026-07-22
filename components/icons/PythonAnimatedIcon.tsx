'use client';

import { motion } from 'framer-motion';
import { SiPython } from 'react-icons/si';

/**
 * A more elaborate treatment than the other tech icons: a soft glow behind
 * it, a slow continuous rotation, and a gentle float loop — this is the
 * "special" animated icon for Python specifically.
 */
export default function PythonAnimatedIcon() {
  return (
    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
      {/* Ambient glow, pulses slowly */}
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        style={{ background: 'radial-gradient(circle, #3776AB55, transparent 70%)' }}
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        animate={{ y: [0, -5, 0], rotate: [0, 6, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.15, rotate: 0 }}
        className="relative"
      >
        <SiPython className="h-9 w-9 drop-shadow-[0_0_12px_rgba(55,118,171,0.55)]" color="#4B8BBE" />
      </motion.div>
    </div>
  );
}
