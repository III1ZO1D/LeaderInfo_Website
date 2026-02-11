'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

interface ScrollOrchestratorProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  fromVars?: gsap.TweenVars;
  toVars?: gsap.TweenVars;
  triggerStart?: string;
}

export function ScrollOrchestrator({
  children,
  className,
  stagger = 0.12,
  fromVars = { opacity: 0, y: 60, scale: 0.97 },
  toVars = { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
  triggerStart = 'top 80%',
}: ScrollOrchestratorProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll('[data-animate]');
      if (elements.length === 0) return;

      gsap.fromTo(elements, fromVars, {
        ...toVars,
        stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
