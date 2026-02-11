'use client';

import { QuickLeadForm } from '@/components/forms/QuickLeadForm';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';

interface ProductCTAProps {
  productTitle: string;
}

export function ProductCTA({ productTitle }: ProductCTAProps) {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.06] to-background" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-dot-pattern bg-dot-24 pointer-events-none" />

      <div className="container relative z-10">
        <ScrollOrchestrator className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text block */}
          <div data-animate>
            <span className="label-mono text-primary mb-4 block">
              Попробуйте бесплатно
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Попробуйте{' '}
              <span className="text-gradient-primary">{productTitle}</span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Заполните форму и получите бесплатный демо-доступ к системе.
              Наш специалист поможет разобраться во всех возможностях.
            </p>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-col gap-3">
              {[
                'Бесплатная консультация',
                'Демо за 15 минут',
                'Персональный подбор решения',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-secondary/15 flex items-center justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — inline form */}
          <div data-animate>
            <div className="relative">
              {/* Ambient glow behind the form */}
              <div className="absolute -inset-8 -z-10 bg-radial-glow from-primary/8 via-transparent to-transparent opacity-60 blur-2xl pointer-events-none" />

              <div className="glass-card p-8 md:p-10">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold">
                    Получить демо-доступ
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5">
                    Заполните форму — свяжемся в течение 2 часов
                  </p>
                </div>

                <QuickLeadForm />
              </div>
            </div>
          </div>
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
