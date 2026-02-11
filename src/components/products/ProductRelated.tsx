'use client';

import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';

interface ProductRelatedProps {
  currentSlug: string;
}

export function ProductRelated({ currentSlug }: ProductRelatedProps) {
  const relatedProducts = products.filter((p) => p.slug !== currentSlug);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-accent-violet/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-primary">Другие системы</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">
            Посмотрите{' '}
            <span className="text-gradient-primary">другие продукты</span>
          </h2>
        </div>

        <ScrollOrchestrator className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {relatedProducts.map((product) => (
            <div key={product.slug} data-animate>
              <ProductCard product={product} variant="compact" />
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
