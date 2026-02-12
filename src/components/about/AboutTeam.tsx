'use client';

import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import type { TeamMember } from '@/data/company';

interface AboutTeamProps {
  members: TeamMember[];
}

export function AboutTeam({ members }: AboutTeamProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-secondary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="label-mono text-secondary">Команда</span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Наша{' '}
            <span className="text-gradient-primary">команда</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Профессионалы, которые обеспечивают качество сервиса
          </p>
        </div>

        <ScrollOrchestrator className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {members.map((member) => (
            <div key={member.name} data-animate>
              <div className="h-full rounded-2xl glass-card p-6 text-center">
                {/* Avatar placeholder */}
                <div className="inline-flex h-16 w-16 rounded-full items-center justify-center bg-primary/10 mb-4">
                  <span className="text-xl font-bold text-primary">
                    {member.initials}
                  </span>
                </div>

                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mt-1">{member.position}</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
