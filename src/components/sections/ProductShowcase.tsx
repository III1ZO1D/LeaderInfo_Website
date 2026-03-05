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

// Show first 6 categories on the home page
const showcaseCategories = categories.slice(0, 6);

export function ProductShowcase() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-violet/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="label-mono text-primary">Наши продукты</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Цифровой помощник{' '}
            <span className="text-gradient-primary">для каждой профессии</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Специализированные справочные системы для специалистов разных отраслей.
            Каждая система содержит полную нормативную базу с ежедневным обновлением.
          </p>
        </div>

        <ScrollOrchestrator className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {showcaseCategories.map((category) => {
            const Icon = iconMap[category.icon] || ShieldCheck;
            const gradient = categoryGradients[category.slug] || 'from-primary/20 to-blue-400/10';

            return (
              <div key={category.slug} data-animate>
                <Link href={`/products/${category.slug}`} className="block group">
                  <motion.div
                    className="relative h-full rounded-2xl glass-card glass-card-hover overflow-hidden"
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                  >
                    <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className={`relative h-32 bg-gradient-to-br ${gradient} overflow-hidden`}>
                      <div className="absolute inset-0 opacity-[0.15]">
                        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                          <rect x="10" y="15" width="35" height="50" rx="4" fill="currentColor" opacity="0.4" />
                          <rect x="55" y="25" width="30" height="40" rx="4" fill="currentColor" opacity="0.3" />
                          <rect x="95" y="10" width="40" height="60" rx="4" fill="currentColor" opacity="0.2" />
                          <rect x="145" y="20" width="25" height="45" rx="4" fill="currentColor" opacity="0.25" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-14 w-14 rounded-2xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center">
                          <Icon className="h-7 w-7 text-foreground/80" />
                        </div>
                      </div>
                      <div className="absolute inset-0 noise-overlay opacity-50 pointer-events-none" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-base font-semibold mb-2 leading-tight">
                        {category.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                        {category.description}
                      </p>

                      <ul className="space-y-2 mb-5">
                        {category.systems.slice(0, 3).map((system) => (
                          <li key={system.slug} className="flex items-start gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="text-muted-foreground">{system.title}</span>
                          </li>
                        ))}
                        {category.systems.length > 3 && (
                          <li className="text-xs text-muted-foreground/60 pl-3.5">
                            +{category.systems.length - 3} ещё
                          </li>
                        )}
                      </ul>

                      <div className="flex items-center gap-1 text-sm font-medium text-primary">
                        Смотреть системы
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-150" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            );
          })}
        </ScrollOrchestrator>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Все категории продуктов
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
