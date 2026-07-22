'use client';

import type { CSSProperties, PointerEvent, ReactNode } from 'react';
import { useRef } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

type SpotlightStyles = CSSProperties & {
  '--spotlight-x': string;
  '--spotlight-y': string;
  '--spotlight-opacity': number;
};

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'touch') return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`);
  }

  function setSpotlightOpacity(value: number) {
    cardRef.current?.style.setProperty('--spotlight-opacity', String(value));
  }

  const styles: SpotlightStyles = {
    '--spotlight-x': '50%',
    '--spotlight-y': '50%',
    '--spotlight-opacity': 0,
    background:
      'linear-gradient(145deg, rgba(20,20,22,0.96), rgba(10,10,12,0.92))',
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setSpotlightOpacity(1)}
      onPointerLeave={() => setSpotlightOpacity(0)}
      style={styles}
      className={`group relative overflow-hidden rounded-3xl border border-red-500/[0.11] shadow-[0_18px_55px_-38px_rgba(0,0,0,0.95)] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-red-400/25 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: 'var(--spotlight-opacity)',
          background:
            'radial-gradient(380px circle at var(--spotlight-x) var(--spotlight-y), rgba(178,36,46,0.16), transparent 58%)',
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity: 'var(--spotlight-opacity)',
          background:
            'radial-gradient(240px circle at var(--spotlight-x) var(--spotlight-y), rgba(239,68,68,0.28), transparent 72%)',
          WebkitMaskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px',
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
