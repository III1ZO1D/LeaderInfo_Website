'use client';

import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { SystemCard } from '@/components/products/SystemCard';
import type { Category } from '@/types/category';

interface SystemRelatedProps {
  currentSystemSlug: string;
  category: Category;
}

export function SystemRelated({ currentSystemSlug, category }: SystemRelatedProps) {
  const relatedSystems = category.systems.filter((s) => s.slug !== currentSystemSlug);

  if (relatedSystems.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent-violet/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-primary">Другие системы</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">
            Ещё системы для{' '}
            <span className="text-gradient-primary">{category.shortTitle.toLowerCase()}</span>
          </h2>
        </div>

        <ScrollOrchestrator
          className={`grid gap-5 ${
            relatedSystems.length === 1
              ? 'max-w-sm mx-auto'
              : relatedSystems.length === 2
              ? 'sm:grid-cols-2 max-w-2xl mx-auto'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {relatedSystems.map((system) => (
            <div key={system.slug} data-animate>
              <SystemCard system={system} categorySlug={category.slug} />
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
