'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  HardHat,
  Leaf,
  Factory,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { cn } from '@/lib/utils';
import type { Solution } from '@/data/solutions';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  HardHat,
  Leaf,
  Factory,
};

interface SolutionsGridProps {
  solutions: Solution[];
}

export function SolutionsGrid({ solutions }: SolutionsGridProps) {
  return (
    <ScrollOrchestrator className="grid md:grid-cols-2 gap-5">
      {solutions.map((solution, index) => {
        const Icon = iconMap[solution.icon] || Building2;

        return (
          <div key={solution.slug} data-animate>
            <Link
              href={`/solutions/${solution.slug}`}
              className="group block"
            >
              <motion.div
                className={cn(
                  'relative rounded-2xl glass-card glass-card-hover overflow-hidden',
                  index === 0 || index === 3
                    ? 'p-10 min-h-[280px]'
                    : 'p-8 min-h-[240px]'
                )}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                {/* Large decorative background icon */}
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
                  <Icon className="h-48 w-48" />
                </div>

                <div className="relative z-10">
                  {/* Color accent dot */}
                  <div
                    className={cn('h-3 w-3 rounded-full mb-6', solution.dotColor)}
                  />

                  {/* Monospace English label */}
                  <span
                    className="label-mono"
                    style={{ color: solution.accentHsl }}
                  >
                    {solution.labelEn}
                  </span>

                  <h3 className="text-2xl font-semibold mb-3 mt-2">
                    {solution.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  {/* Benefits preview */}
                  <ul className="space-y-1.5 mb-6">
                    {solution.benefits.slice(0, 3).map((benefit) => (
                      <li
                        key={benefit}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: solution.accentHsl }}
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="flex items-center gap-1.5 text-sm font-medium"
                    style={{ color: solution.accentHsl }}
                  >
                    Подробнее о решении
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-150" />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        );
      })}
    </ScrollOrchestrator>
  );
}
