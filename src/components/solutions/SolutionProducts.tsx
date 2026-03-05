'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { SystemCard } from '@/components/products/SystemCard';
import { categories } from '@/data/categories';

// Mapping from solution (industry) slug to category slugs
const solutionToCategoryMap: Record<string, string[]> = {
  construction: ['stroitelyu'],
  safety: ['bezopasnost'],
  ecology: ['bezopasnost', 'promyshlennost'],
  industrial: ['promyshlennost', 'mashinostroenie'],
};

interface SolutionProductsProps {
  industrySlug: string;
}

export function SolutionProducts({ industrySlug }: SolutionProductsProps) {
  const categorySlugs = solutionToCategoryMap[industrySlug] ?? [];

  // Get first category and its systems for the primary solution
  const primaryCategory = categories.find((c) => categorySlugs.includes(c.slug));
  if (!primaryCategory) return null;

  // Show first 3 systems of the primary category
  const relevantSystems = primaryCategory.systems.slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-primary">Наши решения</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Справочные системы{' '}
            <span className="text-gradient-primary">для вашей отрасли</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Подберём оптимальный набор систем под ваши задачи
          </p>
        </div>

        <ScrollOrchestrator
          className={`grid gap-6 ${
            relevantSystems.length === 1
              ? 'max-w-md mx-auto'
              : relevantSystems.length === 2
                ? 'md:grid-cols-2 max-w-3xl mx-auto'
                : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {relevantSystems.map((system) => (
            <div key={system.slug} data-animate>
              <SystemCard system={system} categorySlug={primaryCategory.slug} />
            </div>
          ))}
        </ScrollOrchestrator>

        {primaryCategory.systems.length > 3 && (
          <div className="mt-10 text-center">
            <Link
              href={`/products/${primaryCategory.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Все системы для {primaryCategory.shortTitle.toLowerCase()}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
