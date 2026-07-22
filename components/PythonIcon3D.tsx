'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Abstract 3D interpretation of the Python "two interlocking snakes" mark,
 * built from primitive geometry (no external model files) so it renders
 * anywhere without extra assets. Kept monochrome + one muted steel-blue
 * accent to stay inside the dark, corporate palette.
 */
function PythonMark() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.25;
    }
  });

  const bodyMaterialTop = (
    <meshStandardMaterial color="#5B7A99" roughness={0.35} metalness={0.35} />
  );
  const bodyMaterialBottom = (
    <meshStandardMaterial color="#D8D6CF" roughness={0.4} metalness={0.2} />
  );

  return (
    <group ref={group}>
      {/* Top loop */}
      <group position={[0.35, 0.35, 0]} rotation={[0, 0, Math.PI / 4]}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[0.62, 0.22, 32, 64, Math.PI * 1.5]} />
          {bodyMaterialTop}
        </mesh>
        {/* Eye */}
        <mesh position={[0.58, 0.35, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#111111" roughness={0.6} />
        </mesh>
      </group>

      {/* Bottom loop */}
      <group position={[-0.35, -0.35, 0]} rotation={[0, 0, Math.PI * 1.25]}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[0.62, 0.22, 32, 64, Math.PI * 1.5]} />
          {bodyMaterialBottom}
        </mesh>
        <mesh position={[0.58, 0.35, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#0d0d0d" roughness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

export default function PythonIcon3D() {
  return (
    <div className="h-[280px] w-full sm:h-[340px] lg:h-[400px]" aria-hidden="true">
      <Canvas
        shadows
        camera={{ position: [0, 0, 4.2], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[3, 4, 2]}
          intensity={1.1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-3, -2, -2]} intensity={0.4} color="#8C8C88" />

        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
            <PythonMark />
          </Float>
          <Environment preset="city" />
        </Suspense>

        <ContactShadows
          position={[0, -1.3, 0]}
          opacity={0.45}
          scale={6}
          blur={2.8}
          far={2}
        />
      </Canvas>
    </div>
  );
}
