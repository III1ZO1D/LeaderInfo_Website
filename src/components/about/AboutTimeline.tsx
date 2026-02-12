'use client';

import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import type { TimelineEvent } from '@/data/company';

interface AboutTimelineProps {
  events: TimelineEvent[];
}

export function AboutTimeline({ events }: AboutTimelineProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-violet/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-accent-violet">История</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Наш{' '}
            <span className="text-gradient-primary">путь</span>
          </h2>
        </div>

        <ScrollOrchestrator className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          {events.map((event) => (
            <div
              key={event.year}
              data-animate
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div className="absolute left-4 top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />

              <div className="text-2xl font-bold text-primary mb-1">
                {event.year}
              </div>
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
