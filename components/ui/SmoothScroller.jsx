'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrollProvider = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) =>
        t === 1 ? 1 : 1 - Math.pow(2, -10 * t), // expo-out easing
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: true,
      touchMultiplier: 2.2,
      wheelMultiplier: 1.15,
      normalizeWheel: true,
    });

    lenisRef.current = lenis;

    let frameId;

    const update = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(update);
    };

    requestAnimationFrame(update);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(frameId);
    };
  }, []);

  return null;
};

export default SmoothScrollProvider;
