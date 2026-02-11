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
import type { Product } from '@/types/product';

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
  'normy-pravila-standarty': 'from-accent-violet/20 to-purple-400/10',
  elektroenergetika: 'from-accent-amber/20 to-yellow-400/10',
};

interface ProductCardProps {
  product: Product;
  variant?: 'full' | 'compact';
}

export function ProductCard({ product, variant = 'full' }: ProductCardProps) {
  const Icon = iconMap[product.icon] || FileText;
  const gradient =
    productGradients[product.slug] || 'from-primary/20 to-blue-400/10';

  if (variant === 'compact') {
    return (
      <Link href={`/products/${product.slug}`} className="block group">
        <motion.div
          className="relative h-full rounded-2xl glass-card glass-card-hover overflow-hidden p-5"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        >
          <div className="flex items-start gap-4">
            <div
              className={`h-10 w-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}
            >
              <Icon className="h-5 w-5 text-foreground/80" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold mb-1">{product.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {product.shortDescription}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm font-medium text-primary mt-4">
            Подробнее
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-150" />
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href={`/products/${product.slug}`} className="block group">
      <motion.div
        className="relative h-full rounded-2xl glass-card glass-card-hover overflow-hidden"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        {/* Gradient accent line at top */}
        <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Product visual header */}
        <div
          className={`relative h-36 bg-gradient-to-br ${gradient} overflow-hidden`}
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
            <div className="h-16 w-16 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center">
              <Icon className="h-8 w-8 text-foreground/80" />
            </div>
          </div>

          {/* Noise */}
          <div className="absolute inset-0 noise-overlay opacity-50 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{product.title}</h3>

          {/* Highlights pills */}
          {product.highlights && (
            <div className="flex flex-wrap gap-2 mb-4">
              {product.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {h}
                </span>
              ))}
            </div>
          )}

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {product.shortDescription}
          </p>

          <ul className="space-y-2 mb-6">
            {product.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
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
  );
}
