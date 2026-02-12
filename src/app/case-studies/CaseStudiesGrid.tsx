'use client';

import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard';
import type { CaseStudy } from '@/types/case-study';

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesGrid({ caseStudies }: CaseStudiesGridProps) {
  return (
    <ScrollOrchestrator className="grid gap-6 md:grid-cols-2">
      {caseStudies.map((cs) => (
        <div key={cs.slug} data-animate>
          <CaseStudyCard caseStudy={cs} />
        </div>
      ))}
    </ScrollOrchestrator>
  );
}
