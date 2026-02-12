'use client';

import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDemoModal } from '@/components/providers/DemoModalProvider';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { cn } from '@/lib/utils';
import type { PricingPlan } from '@/data/pricing';

interface PricingPlansProps {
  plans: PricingPlan[];
}

export function PricingPlans({ plans }: PricingPlansProps) {
  const demoModal = useDemoModal();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-primary">Тарифы</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Выберите{' '}
            <span className="text-gradient-primary">подходящий план</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Все тарифы включают ежедневную актуализацию, техподдержку и обучение
          </p>
        </div>

        <ScrollOrchestrator className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div key={plan.name} data-animate>
              <div
                className={cn(
                  'relative h-full rounded-2xl glass-card p-8 flex flex-col',
                  plan.highlighted &&
                    'border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.08)] scale-[1.02]'
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Популярный
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary">
                    {plan.priceLabel}
                  </span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {plan.pricePeriod}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? 'accent' : 'outline'}
                  size="lg"
                  className="w-full"
                  onClick={() => demoModal.open()}
                >
                  {plan.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
