'use client';

import { useRef } from 'react';
import {
  Building2,
  HardHat,
  Leaf,
  Factory,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDemoModal } from '@/components/providers/DemoModalProvider';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import type { Solution } from '@/data/solutions';

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  Building2,
  HardHat,
  Leaf,
  Factory,
};

const solutionGlows: Record<string, string> = {
  construction: 'bg-primary/[0.06]',
  safety: 'bg-accent/[0.06]',
  ecology: 'bg-secondary/[0.06]',
  industrial: 'bg-accent-violet/[0.06]',
};

interface SolutionHeroProps {
  solution: Solution;
}

export function SolutionHero({ solution }: SolutionHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const demoModal = useDemoModal();
  const Icon = iconMap[solution.icon] || Building2;
  const glow = solutionGlows[solution.slug] || 'bg-primary/[0.06]';

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from('[data-sol-icon]', {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: 'power3.out',
      })
        .from('[data-sol-heading]', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from('[data-sol-desc]', { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.3')
        .from('[data-sol-cta]', { opacity: 0, y: 15, duration: 0.4, ease: 'power3.out' }, '-=0.2');
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="pt-10 pb-24 relative overflow-hidden">
      <div
        className={`absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full ${glow} blur-[120px] pointer-events-none`}
      />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid-60" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div data-sol-icon>
            <div
              className="inline-flex h-16 w-16 rounded-2xl items-center justify-center mb-6"
              style={{ backgroundColor: `${solution.accentHsl.replace(')', ' / 0.15)')}` }}
            >
              <Icon className="h-8 w-8" style={{ color: solution.accentHsl }} />
            </div>
          </div>

          <span className="label-mono" style={{ color: solution.accentHsl }}>
            {solution.labelEn}
          </span>

          <h1
            data-sol-heading
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Решения для отрасли{' '}
            <span className="text-gradient-primary">{solution.title.toLowerCase()}</span>
          </h1>

          <p
            data-sol-desc
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            {solution.fullDescription}
          </p>

          <div data-sol-cta className="mt-8 flex flex-wrap gap-4">
            <Button
              variant="accent"
              size="xl"
              onClick={() => demoModal.open()}
              className="relative group"
            >
              <span className="relative z-10 flex items-center">
                Консультация специалиста
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-150" />
              </span>
              <div className="absolute inset-0 rounded-lg bg-accent/20 blur-xl group-hover:bg-accent/30 transition-all duration-300 pointer-events-none" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
