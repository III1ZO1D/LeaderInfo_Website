'use client';

import { useRef } from 'react';
import { BadgePercent } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

export function PricingHero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from('[data-pr-badge]', {
        opacity: 0,
        y: 15,
        duration: 0.4,
        ease: 'power3.out',
      })
        .from(
          '[data-pr-heading]',
          { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' },
          '-=0.2'
        )
        .from(
          '[data-pr-desc]',
          { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        );
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="pt-10 pb-24 relative overflow-hidden">
      <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-secondary/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid-60" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div data-pr-badge className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-10 w-10 rounded-xl items-center justify-center bg-secondary/15">
              <BadgePercent className="h-5 w-5 text-secondary" />
            </div>
            <span className="text-sm font-medium text-secondary">
              Официальный дистрибьютор
            </span>
          </div>

          <h1
            data-pr-heading
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            Прозрачные{' '}
            <span className="text-gradient-primary">цены</span>
          </h1>

          <p
            data-pr-desc
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Как официальный дистрибьютор, мы предлагаем справочные системы
            ТехЭксперт и Кодекс по ценам на{' '}
            <span className="text-secondary font-semibold">30% ниже</span>,
            чем при покупке напрямую. Полный комплекс услуг включён в стоимость.
          </p>
        </div>
      </div>
    </section>
  );
}
