'use client';

import dynamic from 'next/dynamic';

const ShaderBackgroundCanvas = dynamic(() => import('./ShaderBackgroundCanvas'), {
  ssr: false,
  loading: () => null,
});

export default function ShaderBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(86,0,0,0.28),transparent_34%),linear-gradient(145deg,#050505_0%,#0b0809_48%,#120607_100%)]" />
      <ShaderBackgroundCanvas />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.30)_0%,rgba(5,5,5,0.60)_48%,rgba(5,5,5,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.38)_72%,rgba(0,0,0,0.72)_100%)]" />
    </div>
  );
}
