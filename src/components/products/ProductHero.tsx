'use client';

import { useRef } from 'react';
import {
  Building2,
  ShieldCheck,
  Leaf,
  FileText,
  Zap,
  ArrowRight,
  Database,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDemoModal } from '@/components/providers/DemoModalProvider';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import type { Product } from '@/types/product';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  ShieldCheck,
  Leaf,
  FileText,
  Zap,
};

const productGlows: Record<string, string> = {
  stroytekhnolog: 'bg-primary/[0.06]',
  'ohrana-truda': 'bg-accent/[0.06]',
  ekologiya: 'bg-secondary/[0.06]',
  'normy-pravila-standarty': 'bg-accent-violet/[0.06]',
  elektroenergetika: 'bg-accent-amber/[0.06]',
};

const productGradients: Record<string, string> = {
  stroytekhnolog: 'from-primary/20 to-blue-400/10',
  'ohrana-truda': 'from-accent/20 to-accent-amber/10',
  ekologiya: 'from-secondary/20 to-emerald-400/10',
  'normy-pravila-standarty': 'from-accent-violet/20 to-purple-400/10',
  elektroenergetika: 'from-accent-amber/20 to-yellow-400/10',
};

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const demoModal = useDemoModal();
  const Icon = iconMap[product.icon] || FileText;
  const glow = productGlows[product.slug] || 'bg-primary/[0.06]';
  const gradient =
    productGradients[product.slug] || 'from-primary/20 to-blue-400/10';

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.from('[data-product-icon]', {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: 'power3.out',
      })
        .from(
          '[data-product-heading]',
          { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .from(
          '[data-product-desc]',
          { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        )
        .from(
          '[data-product-highlights]',
          { opacity: 0, y: 15, duration: 0.4, ease: 'power3.out' },
          '-=0.2'
        )
        .from(
          '[data-product-cta]',
          { opacity: 0, y: 15, duration: 0.4, ease: 'power3.out' },
          '-=0.2'
        )
        .from(
          '[data-product-visual]',
          { opacity: 0, x: 40, duration: 0.7, ease: 'power2.out' },
          '-=0.5'
        );
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="pt-10 pb-24 relative overflow-hidden">
      {/* Ambient orbs */}
      <div
        className={`absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full ${glow} blur-[120px] pointer-events-none`}
      />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/[0.04] blur-[100px] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid-60" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Icon */}
            <div data-product-icon>
              <div
                className={`inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br ${gradient} items-center justify-center mb-6`}
              >
                <Icon className="h-8 w-8 text-foreground/80" />
              </div>
            </div>

            {/* Heading */}
            <h1
              data-product-heading
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              {product.title}
            </h1>

            {/* Description */}
            <p
              data-product-desc
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              {product.fullDescription}
            </p>

            {/* Highlights */}
            {product.highlights && (
              <div
                data-product-highlights
                className="mt-6 flex flex-wrap gap-3"
              >
                {product.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {h}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div data-product-cta className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="accent"
                size="xl"
                onClick={() => demoModal.open()}
                className="relative group"
              >
                <span className="relative z-10 flex items-center">
                  Получить демо-доступ
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-150" />
                </span>
                <div className="absolute inset-0 rounded-lg bg-accent/20 blur-xl group-hover:bg-accent/30 transition-all duration-300 pointer-events-none" />
              </Button>
            </div>
          </div>

          {/* Right: Visual element */}
          <div data-product-visual className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-primary/[0.03] rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative glass-card p-1 rounded-2xl overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-accent-amber/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-secondary/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 max-w-xs mx-auto rounded-md bg-white/[0.04] flex items-center px-3">
                    <span className="text-[10px] text-muted-foreground font-mono truncate">
                      techexpert.leaderinfo.ru/{product.slug}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content simulation */}
              <div className="p-5 space-y-4">
                {/* Document count stat */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">
                      {product.documentCount || '50,000+'}
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      документов в базе
                    </div>
                  </div>
                </div>

                {/* Feature preview list */}
                <div className="space-y-2">
                  {product.features.slice(0, 5).map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02]"
                    >
                      <div className="h-5 w-5 rounded-md bg-secondary/10 flex items-center justify-center shrink-0">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      </div>
                      <span className="text-[11px] text-foreground/70 truncate">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
