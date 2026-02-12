'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '@/types/case-study';

const industryLabels: Record<string, { name: string; color: string }> = {
  construction: { name: 'Строительство', color: 'bg-primary' },
  safety: { name: 'Охрана труда', color: 'bg-accent' },
  ecology: { name: 'Экология', color: 'bg-secondary' },
  industrial: { name: 'Промышленность', color: 'bg-accent-violet' },
};

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const industry = industryLabels[caseStudy.industry];

  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="block group">
      <motion.div
        className="relative h-full rounded-2xl glass-card glass-card-hover overflow-hidden"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="p-6">
          {/* Industry badge */}
          {industry && (
            <div className="flex items-center gap-2 mb-4">
              <div className={`h-2 w-2 rounded-full ${industry.color}`} />
              <span className="text-xs font-medium text-muted-foreground">
                {industry.name}
              </span>
            </div>
          )}

          {/* Client */}
          <p className="text-sm text-muted-foreground mb-1">{caseStudy.client}</p>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-4 leading-snug">
            {caseStudy.title}
          </h3>

          {/* Metrics */}
          <div className="flex flex-wrap gap-3 mb-5">
            {caseStudy.results.slice(0, 3).map((result) => (
              <div
                key={result.metric}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]"
              >
                <span className="text-sm font-bold text-primary">
                  {result.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {result.metric.toLowerCase()}
                </span>
              </div>
            ))}
          </div>

          {/* Link */}
          <div className="flex items-center gap-1 text-sm font-medium text-primary">
            Читать кейс
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-150" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
