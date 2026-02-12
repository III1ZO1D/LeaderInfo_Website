'use client';

import { CheckCircle, XCircle } from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import type { ComparisonRow } from '@/data/pricing';

interface PricingComparisonProps {
  data: ComparisonRow[];
}

export function PricingComparison({ data }: PricingComparisonProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-accent">Сравнение</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Почему{' '}
            <span className="text-gradient-primary">ЛидерИнфо</span>?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Сравните наши условия с прямой покупкой у производителя
          </p>
        </div>

        <ScrollOrchestrator className="max-w-3xl mx-auto">
          <div data-animate>
            <div className="rounded-2xl glass-card overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/[0.06]">
                <div className="text-sm font-medium text-muted-foreground">
                  Параметр
                </div>
                <div className="text-sm font-semibold text-primary text-center">
                  ЛидерИнфо
                </div>
                <div className="text-sm font-medium text-muted-foreground text-center">
                  Конкуренты
                </div>
              </div>

              {/* Rows */}
              {data.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 gap-4 p-6 ${
                    index < data.length - 1
                      ? 'border-b border-white/[0.04]'
                      : ''
                  }`}
                >
                  <div className="text-sm font-medium">{row.feature}</div>
                  <div className="flex items-center justify-center">
                    {typeof row.leaderinfo === 'boolean' ? (
                      row.leaderinfo ? (
                        <CheckCircle className="h-5 w-5 text-secondary" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive/60" />
                      )
                    ) : (
                      <span className="text-sm text-secondary font-medium text-center">
                        {row.leaderinfo}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    {typeof row.competitors === 'boolean' ? (
                      row.competitors ? (
                        <CheckCircle className="h-5 w-5 text-secondary" />
                      ) : (
                        <XCircle className="h-5 w-5 text-muted-foreground/40" />
                      )
                    ) : (
                      <span className="text-sm text-muted-foreground text-center">
                        {row.competitors}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
