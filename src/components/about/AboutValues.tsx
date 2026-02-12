'use client';

import { Shield, Users, TrendingUp, Award } from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import type { CompanyValue } from '@/data/company';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Users,
  TrendingUp,
  Award,
};

interface AboutValuesProps {
  values: CompanyValue[];
}

export function AboutValues({ values }: AboutValuesProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-primary">Наши ценности</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Что нас{' '}
            <span className="text-gradient-primary">отличает</span>
          </h2>
        </div>

        <ScrollOrchestrator className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = iconMap[value.icon] || Shield;
            return (
              <div key={value.title} data-animate>
                <div className="h-full rounded-2xl glass-card p-6">
                  <div className="inline-flex h-12 w-12 rounded-xl items-center justify-center bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
