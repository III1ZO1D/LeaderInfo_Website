'use client';

import {
  PenTool,
  ClipboardCheck,
  SearchCheck,
  ClipboardList,
  FileEdit,
  ListChecks,
  FileBarChart,
  Calculator,
  Recycle,
  Award,
  BadgeCheck,
  FileCog,
  Cpu,
  Wrench,
  GraduationCap,
  FileText,
} from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import type { UseCase } from '@/types/product';

const useCaseIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PenTool,
  ClipboardCheck,
  SearchCheck,
  ClipboardList,
  FileEdit,
  ListChecks,
  FileBarChart,
  Calculator,
  Recycle,
  Award,
  BadgeCheck,
  FileCog,
  Cpu,
  Wrench,
  GraduationCap,
};

interface ProductUseCasesProps {
  useCases: UseCase[];
}

export function ProductUseCases({ useCases }: ProductUseCasesProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-accent">Применение</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Сценарии{' '}
            <span className="text-gradient-primary">использования</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Как система помогает решать реальные задачи бизнеса
          </p>
        </div>

        <ScrollOrchestrator className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
              ? useCaseIconMap[useCase.icon] || FileText
              : FileText;

            return (
              <div key={useCase.title} data-animate>
                <div className="relative h-full rounded-2xl glass-card p-7">
                  {/* Number badge */}
                  <div className="absolute top-5 right-5 text-4xl font-bold text-white/[0.04]">
                    0{index + 1}
                  </div>

                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {useCase.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
