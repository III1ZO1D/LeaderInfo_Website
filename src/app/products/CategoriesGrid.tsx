'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Building2,
  Factory,
  Wrench,
  FlaskConical,
  Heart,
  Scale,
  Beaker,
  ArrowRight,
} from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { categories } from '@/data/categories';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Building2,
  Factory,
  Wrench,
  FlaskConical,
  Heart,
  Scale,
  Beaker,
};

const categoryGradients: Record<string, string> = {
  bezopasnost: 'from-accent/20 to-accent-amber/10',
  stroitelyu: 'from-primary/20 to-blue-400/10',
  promyshlennost: 'from-accent-violet/20 to-purple-400/10',
  mashinostroenie: 'from-secondary/20 to-emerald-400/10',
  laboratoriya: 'from-secondary/20 to-teal-400/10',
  'pishchevaya-khim-farm': 'from-accent-amber/20 to-yellow-400/10',
  medicina: 'from-accent/20 to-rose-400/10',
  'yuristu-buhgalteru': 'from-primary/20 to-indigo-400/10',
};

export function CategoriesGrid() {
  return (
    <section className="py-16">
      <div className="container">
        <ScrollOrchestrator className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || ShieldCheck;
            const gradient = categoryGradients[category.slug] || 'from-primary/20 to-blue-400/10';

            return (
              <div key={category.slug} data-animate>
                <Link href={`/products/${category.slug}`} className="block group h-full">
                  <motion.div
                    className="relative h-full rounded-2xl glass-card glass-card-hover overflow-hidden"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                  >
                    {/* Gradient accent line */}
                    <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Visual header */}
                    <div className={`relative h-28 bg-gradient-to-br ${gradient} overflow-hidden`}>
                      <div className="absolute inset-0 opacity-[0.12]">
                        <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                          <rect x="10" y="15" width="30" height="40" rx="6" fill="currentColor" opacity="0.5" />
                          <rect x="50" y="25" width="25" height="25" rx="6" fill="currentColor" opacity="0.35" />
                          <rect x="85" y="10" width="35" height="52" rx="6" fill="currentColor" opacity="0.25" />
                          <rect x="130" y="20" width="22" height="38" rx="6" fill="currentColor" opacity="0.3" />
                          <rect x="162" y="15" width="28" height="45" rx="6" fill="currentColor" opacity="0.2" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-14 w-14 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center">
                          <Icon className="h-7 w-7 text-foreground/80" />
                        </div>
                      </div>
                      <div className="absolute inset-0 noise-overlay opacity-50 pointer-events-none" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-sm font-semibold mb-2 leading-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {category.systems.length} {category.systems.length === 1 ? 'система' : 'системы'}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-medium text-primary">
                          Выбрать
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-150" />
                        </div>
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
