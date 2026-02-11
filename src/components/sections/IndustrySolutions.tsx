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

interface Industry {
  slug: string;
  title: string;
  labelEn: string;
  description: string;
  icon: LucideIcon;
  accentHsl: string;
  dotColor: string;
}

const industries: Industry[] = [
  {
    slug: 'construction',
    title: 'Строительство',
    labelEn: 'CONSTRUCTION',
    description:
      'СНиПы, ГОСТы, Своды правил и технические регламенты для проектирования и строительства',
    icon: Building2,
    accentHsl: 'hsl(220 90% 60%)',
    dotColor: 'bg-primary',
  },
  {
    slug: 'safety',
    title: 'Охрана труда',
    labelEn: 'SAFETY',
    description:
      'Нормативные документы по ОТ, инструкции, формы отчётности и требования к СОУТ',
    icon: HardHat,
    accentHsl: 'hsl(12 80% 65%)',
    dotColor: 'bg-accent',
  },
  {
    slug: 'ecology',
    title: 'Экология',
    labelEn: 'ECOLOGY',
    description:
      'Экологическое законодательство, нормативы ПДВ/ПДС, методики расчётов НВОС',
    icon: Leaf,
    accentHsl: 'hsl(165 60% 60%)',
    dotColor: 'bg-secondary',
  },
  {
    slug: 'industrial',
    title: 'Промышленность',
    labelEn: 'INDUSTRIAL',
    description:
      'ПУЭ, ПТЭЭП, нормы электробезопасности и стандарты для промышленных предприятий',
    icon: Factory,
    accentHsl: 'hsl(270 60% 65%)',
    dotColor: 'bg-accent-violet',
  },
];

export function IndustrySolutions() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Ambient orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="label-mono text-primary">Отраслевые решения</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Решения для{' '}
            <span className="text-gradient-primary">вашей отрасли</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Каждая отрасль имеет свою специфику. Мы подберём оптимальный набор
            справочных систем под ваши задачи
          </p>
        </div>

        <ScrollOrchestrator className="grid md:grid-cols-2 gap-5">
          {industries.map((industry, index) => (
            <div key={industry.slug} data-animate>
              <Link
                href={`/solutions/${industry.slug}`}
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
                    <industry.icon className="h-48 w-48" />
                  </div>

                  <div className="relative z-10">
                    {/* Color accent dot */}
                    <div
                      className={cn('h-3 w-3 rounded-full mb-6', industry.dotColor)}
                    />

                    {/* Monospace English label */}
                    <span
                      className="label-mono"
                      style={{ color: industry.accentHsl }}
                    >
                      {industry.labelEn}
                    </span>

                    <h3 className="text-2xl font-semibold mb-3 mt-2">
                      {industry.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    <div
                      className="flex items-center gap-1.5 text-sm font-medium"
                      style={{ color: industry.accentHsl }}
                    >
                      Узнать больше
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-150" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
