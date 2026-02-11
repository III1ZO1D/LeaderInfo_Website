'use client';

import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { testimonials } from '@/data/testimonials';

const industryColors: Record<string, string> = {
  construction: 'hsl(220 90% 60%)',
  safety: 'hsl(12 80% 65%)',
  ecology: 'hsl(165 60% 60%)',
  industrial: 'hsl(270 60% 65%)',
};

export function Testimonials() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Ambient orb */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="label-mono text-primary">Отзывы клиентов</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Что говорят{' '}
            <span className="text-gradient-primary">наши клиенты</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Более 25 лет мы помогаем компаниям эффективно работать с
            нормативной документацией
          </p>
        </div>

        <ScrollOrchestrator className="grid md:grid-cols-2 gap-5">
          {testimonials.map((testimonial, index) => {
            const accentColor =
              (testimonial.industry && industryColors[testimonial.industry]) || 'hsl(220 90% 60%)';
            const initials = testimonial.author
              .split(' ')
              .map((n) => n[0])
              .join('');

            return (
              <div key={index} data-animate>
                <div className="relative h-full p-8 rounded-2xl glass-card glass-card-hover group">
                  {/* Industry color accent bar */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />

                  {/* Large decorative quote */}
                  <svg
                    className="h-16 w-16 text-white/[0.03] mb-2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z"
                    />
                  </svg>

                  <blockquote className="text-foreground/80 leading-relaxed mb-6 text-base">
                    &laquo;{testimonial.quote}&raquo;
                  </blockquote>

                  <div className="flex items-center gap-3">
                    {/* Gradient ring avatar */}
                    <div className="relative">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary to-accent opacity-50" />
                      <div className="relative h-10 w-10 rounded-full bg-card flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {initials}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {testimonial.position} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
