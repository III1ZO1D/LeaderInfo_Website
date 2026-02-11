'use client';

import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';

export function ProductsGrid() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container">
        <ScrollOrchestrator className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.slug} data-animate>
              <ProductCard product={product} variant="full" />
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
