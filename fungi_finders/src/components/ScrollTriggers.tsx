'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export const SlideInRightEffect = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%', // When the top of the element hits 80% of the viewport
          toggleActions: 'play none none reverse', // Optional: play once or on scroll
        },
        x: 200,
        opacity: 0,
        duration: 1,
        ease: 'back.out(3)', // Nicer springy easing
      });
    },
    { scope: containerRef },
  );

  return <div ref={containerRef}>{children}</div>;
};
