'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  ShieldCheck,
  Leaf,
  FileText,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { products } from '@/data/products';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  ShieldCheck,
  Leaf,
  FileText,
  Zap,
};

const productGradients: Record<string, string> = {
  stroytekhnolog: 'from-primary/20 to-blue-400/10',
  'ohrana-truda': 'from-accent/20 to-accent-amber/10',
  ekologiya: 'from-secondary/20 to-emerald-400/10',
  normy: 'from-accent-violet/20 to-purple-400/10',
  elektroenergetika: 'from-accent-amber/20 to-yellow-400/10',
};

export function ProductShowcase() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-violet/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="label-mono text-primary">Наши продукты</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Справочные системы{' '}
            <span className="text-gradient-primary">для каждой отрасли</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Выберите систему, которая подходит для вашей сферы деятельности.
            Каждая включает полную базу актуальных нормативных документов.
          </p>
        </div>

        <ScrollOrchestrator className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => {
            const Icon = iconMap[product.icon] || FileText;
            const gradient =
              productGradients[product.slug] || 'from-primary/20 to-blue-400/10';

            return (
              <div key={product.slug} data-animate>
                <Link
                  href={`/products/${product.slug}`}
                  className="block group"
                >
                  <motion.div
                    className="relative h-full rounded-2xl glass-card glass-card-hover overflow-hidden"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                  >
                    {/* Gradient accent line at top */}
                    <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Product visual header */}
                    <div
                      className={`relative h-32 bg-gradient-to-br ${gradient} overflow-hidden`}
                    >
                      {/* Abstract pattern */}
                      <div className="absolute inset-0 opacity-[0.15]">
                        <svg
                          viewBox="0 0 200 100"
                          className="w-full h-full"
                          preserveAspectRatio="xMidYMid slice"
                        >
                          <rect
                            x="10"
                            y="15"
                            width="35"
                            height="50"
                            rx="4"
                            fill="currentColor"
                            opacity="0.4"
                          />
                          <rect
                            x="55"
                            y="25"
                            width="30"
                            height="40"
                            rx="4"
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <rect
                            x="95"
                            y="10"
                            width="40"
                            height="60"
                            rx="4"
                            fill="currentColor"
                            opacity="0.2"
                          />
                          <rect
                            x="145"
                            y="20"
                            width="25"
                            height="45"
                            rx="4"
                            fill="currentColor"
                            opacity="0.25"
                          />
                          <line
                            x1="5"
                            y1="75"
                            x2="195"
                            y2="75"
                            stroke="currentColor"
                            strokeWidth="1"
                            opacity="0.15"
                          />
                          <line
                            x1="5"
                            y1="85"
                            x2="150"
                            y2="85"
                            stroke="currentColor"
                            strokeWidth="1"
                            opacity="0.1"
                          />
                        </svg>
                      </div>

                      {/* Icon centered */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-14 w-14 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center">
                          <Icon className="h-7 w-7 text-foreground/80" />
                        </div>
                      </div>

                      {/* Noise */}
                      <div className="absolute inset-0 noise-overlay opacity-50 pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">
                        {product.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {product.shortDescription}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {product.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-1 text-sm font-medium text-primary">
                        Подробнее
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-150" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
