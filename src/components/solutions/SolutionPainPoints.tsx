'use client';

import {
  AlertTriangle,
  Clock,
  XCircle,
  ShieldAlert,
  FileWarning,
  ClipboardList,
  HeartPulse,
  Calculator,
  Layers,
  RefreshCw,
  Ban,
  Zap,
  FolderSearch,
  GraduationCap,
  FileText,
} from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import type { SolutionPainPoint } from '@/data/solutions';

const painIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  AlertTriangle,
  Clock,
  XCircle,
  ShieldAlert,
  FileWarning,
  ClipboardList,
  HeartPulse,
  Calculator,
  Layers,
  RefreshCw,
  Ban,
  Zap,
  FolderSearch,
  GraduationCap,
};

interface SolutionPainPointsProps {
  painPoints: SolutionPainPoint[];
}

export function SolutionPainPoints({ painPoints }: SolutionPainPointsProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-accent">Проблемы отрасли</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            С чем сталкиваются{' '}
            <span className="text-gradient-primary">специалисты</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Без актуальной нормативной базы предприятия рискуют столкнуться с серьёзными проблемами
          </p>
        </div>

        <ScrollOrchestrator className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {painPoints.map((point) => {
            const Icon = painIconMap[point.icon] || FileText;
            return (
              <div key={point.title} data-animate>
                <div className="relative h-full rounded-2xl glass-card p-6">
                  <div className="h-11 w-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
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
