'use client';

import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import type { Result } from '@/types/case-study';

interface CaseStudyResultsProps {
  results: Result[];
  solution: string;
  testimonial?: string;
}

export function CaseStudyResults({
  results,
  solution,
  testimonial,
}: CaseStudyResultsProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Solution description */}
        <ScrollOrchestrator className="max-w-3xl mb-20">
          <div data-animate>
            <span className="label-mono text-secondary mb-3 block">
              Решение
            </span>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {solution}
            </p>
          </div>
        </ScrollOrchestrator>

        {/* Results header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-primary">Результаты</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Измеримые{' '}
            <span className="text-gradient-primary">результаты</span>
          </h2>
        </div>

        {/* Metrics grid */}
        <ScrollOrchestrator
          className={`grid gap-6 max-w-4xl mx-auto ${
            results.length <= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'
          }`}
        >
          {results.map((result) => (
            <div key={result.metric} data-animate>
              <div className="relative rounded-2xl glass-card p-8 text-center h-full">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {result.value}
                </div>
                <div className="text-sm font-semibold mb-1">
                  {result.metric}
                </div>
                <div className="text-xs text-muted-foreground">
                  {result.description}
                </div>
              </div>
            </div>
          ))}
        </ScrollOrchestrator>

        {/* Testimonial */}
        {testimonial && (
          <ScrollOrchestrator className="mt-20 max-w-2xl mx-auto">
            <div data-animate>
              <div className="relative rounded-2xl glass-card p-8 md:p-10">
                <div className="absolute top-6 left-8 text-6xl font-serif text-primary/20 leading-none">
                  &ldquo;
                </div>
                <blockquote className="relative z-10 pt-6">
                  <p className="text-lg leading-relaxed italic text-foreground/90">
                    {testimonial}
                  </p>
                </blockquote>
              </div>
            </div>
          </ScrollOrchestrator>
        )}
      </div>
    </section>
  );
}
