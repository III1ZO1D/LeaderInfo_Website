'use client';

import { useRef } from 'react';
import { Building } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

export function AboutHero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from('[data-ab-badge]', {
        opacity: 0,
        y: 15,
        duration: 0.4,
        ease: 'power3.out',
      })
        .from(
          '[data-ab-heading]',
          { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' },
          '-=0.2'
        )
        .from(
          '[data-ab-desc]',
          { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        )
        .from(
          '[data-ab-stats]',
          { opacity: 0, y: 15, duration: 0.4, ease: 'power3.out' },
          '-=0.2'
        );
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="pt-10 pb-24 relative overflow-hidden">
      <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent-violet/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid-60" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <div data-ab-badge className="flex items-center gap-3 mb-6">
            <div className="inline-flex h-10 w-10 rounded-xl items-center justify-center bg-primary/15">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary">
              25+ лет на рынке
            </span>
          </div>

          <h1
            data-ab-heading
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
          >
            О компании{' '}
            <span className="text-gradient-primary">ЛидерИнфо</span>
          </h1>

          <p
            data-ab-desc
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            С 2000 года мы помогаем российскому бизнесу работать с актуальной
            нормативно-технической документацией. Как официальный дистрибьютор
            справочных систем ТехЭксперт и Кодекс, мы не просто продаём
            продукты — мы обеспечиваем полный цикл сопровождения: от подбора
            решения до обучения и поддержки.
          </p>

          <div
            data-ab-stats
            className="mt-10 flex flex-wrap gap-8"
          >
            {[
              { value: '25+', label: 'лет на рынке' },
              { value: '1000+', label: 'клиентов' },
              { value: '5', label: 'справочных систем' },
              { value: '30%', label: 'экономия' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
