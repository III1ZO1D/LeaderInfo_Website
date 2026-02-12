'use client';

import { useRef } from 'react';
import { Building2, HardHat, Leaf, Factory } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import type { CaseStudy } from '@/types/case-study';

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  Building2,
  HardHat,
  Leaf,
  Factory,
};

const industryConfig: Record<
  string,
  { name: string; icon: string; hsl: string; dotColor: string }
> = {
  construction: {
    name: 'Строительство',
    icon: 'Building2',
    hsl: 'hsl(220 90% 60%)',
    dotColor: 'bg-primary',
  },
  safety: {
    name: 'Охрана труда',
    icon: 'HardHat',
    hsl: 'hsl(12 80% 65%)',
    dotColor: 'bg-accent',
  },
  ecology: {
    name: 'Экология',
    icon: 'Leaf',
    hsl: 'hsl(165 60% 60%)',
    dotColor: 'bg-secondary',
  },
  industrial: {
    name: 'Промышленность',
    icon: 'Factory',
    hsl: 'hsl(270 60% 65%)',
    dotColor: 'bg-accent-violet',
  },
};

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

export function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const config = industryConfig[caseStudy.industry];
  const Icon = iconMap[config?.icon || 'Building2'] || Building2;

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from('[data-case-badge]', {
        opacity: 0,
        y: 15,
        duration: 0.4,
        ease: 'power3.out',
      })
        .from(
          '[data-case-heading]',
          { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' },
          '-=0.2'
        )
        .from(
          '[data-case-challenge]',
          { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        );
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="pt-10 pb-24 relative overflow-hidden">
      <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid-60" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Industry badge */}
          <div data-case-badge className="flex items-center gap-3 mb-6">
            {config && (
              <>
                <div
                  className="inline-flex h-10 w-10 rounded-xl items-center justify-center"
                  style={{
                    backgroundColor: `${config.hsl.replace(')', ' / 0.15)')}`,
                  }}
                >
                  <Icon
                    className="h-5 w-5"
                    style={{ color: config.hsl }}
                  />
                </div>
                <span
                  className="text-sm font-medium"
                  style={{ color: config.hsl }}
                >
                  {config.name}
                </span>
              </>
            )}
          </div>

          {/* Client */}
          <p className="text-sm text-muted-foreground mb-2">
            {caseStudy.client}
          </p>

          {/* Title */}
          <h1
            data-case-heading
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            {caseStudy.title}
          </h1>

          {/* Challenge */}
          <div data-case-challenge className="mt-8">
            <span className="label-mono text-accent mb-3 block">Проблема</span>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
