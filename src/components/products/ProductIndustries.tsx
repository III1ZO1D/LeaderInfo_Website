'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const industryData: Record<string, { name: string; color: string }> = {
  construction: { name: 'Строительство', color: 'bg-primary' },
  architecture: { name: 'Архитектура', color: 'bg-primary' },
  safety: { name: 'Охрана труда', color: 'bg-accent' },
  ecology: { name: 'Экология', color: 'bg-secondary' },
  industrial: { name: 'Промышленность', color: 'bg-accent-violet' },
};

interface ProductIndustriesProps {
  industries: string[];
}

export function ProductIndustries({ industries }: ProductIndustriesProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-mono text-secondary">Отрасли</span>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">
            Подходит для{' '}
            <span className="text-gradient-primary">отраслей</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry) => {
            const data = industryData[industry];
            if (!data) return null;

            const hasSolutionPage = ['construction', 'safety', 'ecology', 'industrial'].includes(industry);

            const content = (
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full glass-card glass-card-hover cursor-pointer"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
              >
                <div className={`h-2.5 w-2.5 rounded-full ${data.color}`} />
                <span className="font-medium">{data.name}</span>
                {hasSolutionPage && (
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </motion.div>
            );

            if (hasSolutionPage) {
              return (
                <Link
                  key={industry}
                  href={`/solutions/${industry}`}
                  className="block"
                >
                  {content}
                </Link>
              );
            }

            return <div key={industry}>{content}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
