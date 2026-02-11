'use client';

import { Award, Users, Calendar, CheckCircle, type LucideIcon } from 'lucide-react';
import { CountUp } from '@/components/animations/CountUpAnimation';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';

interface Stat {
  icon: LucideIcon;
  numericValue: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: Calendar,
    numericValue: 25,
    suffix: '+',
    label: 'лет на рынке',
  },
  {
    icon: Users,
    numericValue: 1000,
    suffix: '+',
    label: 'клиентов',
  },
  {
    icon: Award,
    numericValue: 5,
    suffix: '',
    label: 'справочных систем',
  },
  {
    icon: CheckCircle,
    numericValue: 50000,
    suffix: '+',
    label: 'документов в базе',
  },
];

export function SocialProofBar() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container">
        <ScrollOrchestrator className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} data-animate className="text-center relative">
              {/* Divider between items (desktop) */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-border" />
              )}

              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] mb-3">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>

              <div className="text-3xl md:text-4xl font-bold">
                <CountUp
                  end={stat.numericValue}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>

              <div className="label-mono mt-2">{stat.label}</div>
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
