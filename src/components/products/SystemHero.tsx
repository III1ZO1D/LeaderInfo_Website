'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Building2,
  Factory,
  Wrench,
  FlaskConical,
  Heart,
  Scale,
  FileText,
  HardHat,
  Flame,
  ClipboardList,
  Zap,
  BookOpen,
  Cpu,
  Train,
  Settings,
  Gauge,
  HeartPulse,
  UtensilsCrossed,
  CheckSquare,
  Users,
  Receipt,
  Hospital,
  Pill,
  Database,
  ArrowRight,
  Copy,
  ListChecks,
  Ruler,
  PenTool,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDemoModal } from '@/components/providers/DemoModalProvider';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';
import type { System } from '@/types/category';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Building2,
  Factory,
  Wrench,
  FlaskConical,
  Heart,
  Scale,
  FileText,
  HardHat,
  Flame,
  ClipboardList,
  Zap,
  BookOpen,
  Cpu,
  Train,
  Settings,
  Gauge,
  HeartPulse,
  UtensilsCrossed,
  CheckSquare,
  Users,
  Receipt,
  Hospital,
  Pill,
  Copy,
  ListChecks,
  Ruler,
  PenTool,
};

const categoryGradients: Record<string, string> = {
  bezopasnost: 'from-accent/20 to-accent-amber/10',
  stroitelyu: 'from-primary/20 to-blue-400/10',
  promyshlennost: 'from-accent-violet/20 to-purple-400/10',
  mashinostroenie: 'from-secondary/20 to-emerald-400/10',
  laboratoriya: 'from-secondary/20 to-teal-400/10',
  'pishchevaya-khim-farm': 'from-accent-amber/20 to-yellow-400/10',
  medicina: 'from-accent/20 to-rose-400/10',
  'yuristu-buhgalteru': 'from-primary/20 to-indigo-400/10',
};

const categoryGlows: Record<string, string> = {
  bezopasnost: 'bg-accent/[0.06]',
  stroitelyu: 'bg-primary/[0.06]',
  promyshlennost: 'bg-accent-violet/[0.06]',
  mashinostroenie: 'bg-secondary/[0.06]',
  laboratoriya: 'bg-secondary/[0.06]',
  'pishchevaya-khim-farm': 'bg-accent-amber/[0.06]',
  medicina: 'bg-accent/[0.06]',
  'yuristu-buhgalteru': 'bg-primary/[0.06]',
};

interface SystemHeroProps {
  system: System;
  categorySlug: string;
}

export function SystemHero({ system, categorySlug }: SystemHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const demoModal = useDemoModal();
  const Icon = iconMap[system.icon] || FileText;
  const glow = categoryGlows[categorySlug] || 'bg-primary/[0.06]';
  const gradient = categoryGradients[categorySlug] || 'from-primary/20 to-blue-400/10';
  const [imgError, setImgError] = useState(false);
  const screenshotSrc = `/images/systems/${system.slug}.png`;

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.from('[data-system-icon]', {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        ease: 'power3.out',
      })
        .from(
          '[data-system-heading]',
          { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .from(
          '[data-system-desc]',
          { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' },
          '-=0.3'
        )
        .from(
          '[data-system-highlights]',
          { opacity: 0, y: 15, duration: 0.4, ease: 'power3.out' },
          '-=0.2'
        )
        .from(
          '[data-system-cta]',
          { opacity: 0, y: 15, duration: 0.4, ease: 'power3.out' },
          '-=0.2'
        )
        .from(
          '[data-system-visual]',
          { opacity: 0, x: 40, duration: 0.7, ease: 'power2.out' },
          '-=0.5'
        );
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="pt-10 pb-24 relative overflow-hidden">
      {/* Ambient orbs */}
      <div
        className={`absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full ${glow} blur-[120px] pointer-events-none`}
      />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid-60" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div data-system-icon>
              <div
                className={`inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br ${gradient} items-center justify-center mb-6`}
              >
                <Icon className="h-8 w-8 text-foreground/80" />
              </div>
            </div>

            <h1
              data-system-heading
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              {system.title}
            </h1>

            <p
              data-system-desc
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              {system.fullDescription}
            </p>

            {system.highlights.length > 0 && (
              <div data-system-highlights className="mt-6 flex flex-wrap gap-3">
                {system.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {h}
                  </span>
                ))}
              </div>
            )}

            <div data-system-cta className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="accent"
                size="xl"
                onClick={() => demoModal.open()}
                className="relative group"
              >
                <span className="relative z-10 flex items-center">
                  Получить демо-доступ
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-150" />
                </span>
                <div className="absolute inset-0 rounded-lg bg-accent/20 blur-xl group-hover:bg-accent/30 transition-all duration-300 pointer-events-none" />
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div data-system-visual className="relative hidden lg:block">
            {/* Glow behind the frame */}
            <div className="absolute -inset-4 bg-primary/[0.03] rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative glass-card p-1 rounded-2xl overflow-hidden shadow-2xl">
              {/* Window chrome — top bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex gap-1.5 shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-accent-amber/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-secondary/60" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="h-5 rounded-md bg-white/[0.05] flex items-center px-3">
                    <span className="text-[10px] text-muted-foreground/60 font-mono truncate">
                      cntd.ru — {system.title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Screenshot or fallback */}
              {!imgError ? (
                <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
                  <Image
                    src={screenshotSrc}
                    alt={`Скриншот — ${system.title}`}
                    fill
                    className="object-cover object-top"
                    onError={() => setImgError(true)}
                    sizes="(max-width: 1280px) 50vw, 640px"
                    priority
                  />
                  {/* subtle gradient overlay at the bottom so it fades into card */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card/80 to-transparent pointer-events-none" />
                </div>
              ) : (
                /* Fallback: feature list */
                <div className="p-5 space-y-2">
                  {system.features.slice(0, 6).map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02]"
                    >
                      <div className="h-5 w-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </div>
                      <span className="text-[11px] text-foreground/70 truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Reflection / depth effect */}
            <div className="absolute -bottom-6 left-4 right-4 h-6 bg-primary/[0.04] blur-xl rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
