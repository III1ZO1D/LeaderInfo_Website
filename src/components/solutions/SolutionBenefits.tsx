'use client';

import { CheckCircle } from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';

interface SolutionBenefitsProps {
  benefits: string[];
}

export function SolutionBenefits({ benefits }: SolutionBenefitsProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-secondary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-secondary">Результат</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Преимущества{' '}
            <span className="text-gradient-primary">соответствия</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Что получает ваше предприятие при работе с актуальной нормативной базой
          </p>
        </div>

        <ScrollOrchestrator className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {benefits.map((benefit) => (
            <div key={benefit} data-animate>
              <div className="flex items-start gap-3 p-4 rounded-xl glass-card glass-card-hover">
                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{benefit}</span>
              </div>
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
