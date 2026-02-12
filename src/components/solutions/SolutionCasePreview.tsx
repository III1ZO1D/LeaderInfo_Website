'use client';

import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import { caseStudies } from '@/data/case-studies';

interface SolutionCasePreviewProps {
  industrySlug: string;
}

export function SolutionCasePreview({ industrySlug }: SolutionCasePreviewProps) {
  const cases = caseStudies.filter((c) => c.industry === industrySlug);

  if (cases.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-accent">Кейсы</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Реальные{' '}
            <span className="text-gradient-primary">результаты</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Как наши клиенты решают задачи с помощью справочных систем
          </p>
        </div>

        <ScrollOrchestrator
          className={`grid gap-6 ${
            cases.length === 1 ? 'max-w-lg mx-auto' : 'md:grid-cols-2 max-w-4xl mx-auto'
          }`}
        >
          {cases.map((c) => (
            <div key={c.slug} data-animate>
              <CaseStudyCard caseStudy={c} />
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
