'use client';

import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';

interface SolutionProductsProps {
  industrySlug: string;
}

export function SolutionProducts({ industrySlug }: SolutionProductsProps) {
  const relevantProducts = products.filter((p) =>
    p.industries.includes(industrySlug)
  );

  if (relevantProducts.length === 0) return null;

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
            relevantProducts.length === 1
              ? 'max-w-md mx-auto'
              : relevantProducts.length === 2
                ? 'md:grid-cols-2 max-w-3xl mx-auto'
                : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {relevantProducts.map((product) => (
            <div key={product.slug} data-animate>
              <ProductCard product={product} variant="full" />
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
