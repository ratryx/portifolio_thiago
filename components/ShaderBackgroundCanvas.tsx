'use client';

import {
  ShaderGradient,
  ShaderGradientCanvas,
} from '@shadergradient/react';
import { useEffect, useState } from 'react';

export default function ShaderBackgroundCanvas() {
  const [canRender, setCanRender] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const compactScreenQuery = window.matchMedia(
      '(max-width: 767px)'
    );

    function updateRenderingMode() {
      const shouldReduceMotion = reducedMotionQuery.matches;
      const isCompactScreen = compactScreenQuery.matches;

      setCanRender(!shouldReduceMotion && !isCompactScreen);
    }

    function updateVisibility() {
      setIsDocumentVisible(
        document.visibilityState === 'visible'
      );
    }

    updateRenderingMode();
    updateVisibility();

    reducedMotionQuery.addEventListener(
      'change',
      updateRenderingMode
    );

    compactScreenQuery.addEventListener(
      'change',
      updateRenderingMode
    );

    document.addEventListener(
      'visibilitychange',
      updateVisibility
    );

    return () => {
      reducedMotionQuery.removeEventListener(
        'change',
        updateRenderingMode
      );

      compactScreenQuery.removeEventListener(
        'change',
        updateRenderingMode
      );

      document.removeEventListener(
        'visibilitychange',
        updateVisibility
      );
    };
  }, []);

  if (!canRender) {
    return null;
  }

  return (
    <ShaderGradientCanvas
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
      pixelDensity={0.8}
      fov={45}
      powerPreference="low-power"
    >
      <ShaderGradient
        control="props"
        animate={isDocumentVisible ? 'on' : 'off'}
        brightness={1.05}
        cAzimuthAngle={180}
        cDistance={3.6}
        cPolarAngle={90}
        cameraZoom={1}
        color1="#000000"
        color2="#410000"
        color3="#460000"
        envPreset="city"
        grain="off"
        lightType="3d"
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        shader="defaults"
        type="waterPlane"
        uAmplitude={1}
        uDensity={1.3}
        uFrequency={5.5}
        uSpeed={0.28}
        uStrength={4}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}