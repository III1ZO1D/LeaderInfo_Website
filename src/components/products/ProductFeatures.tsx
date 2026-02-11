'use client';

import { CheckCircle } from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';

interface ProductFeaturesProps {
  features: string[];
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-primary">Возможности</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Что включено{' '}
            <span className="text-gradient-primary">в систему</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Полный набор инструментов для работы с нормативной документацией
          </p>
        </div>

        <ScrollOrchestrator className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div key={feature} data-animate>
              <div className="flex items-start gap-3 p-4 rounded-xl glass-card glass-card-hover">
                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{feature}</span>
              </div>
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
