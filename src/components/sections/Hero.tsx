'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Search, FileText, RefreshCw, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDemoModal } from '@/components/providers/DemoModalProvider';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

const documents = [
  'СП 63.13330.2018 — Бетонные и железобетонные конструкции',
  'ГОСТ 26633-2015 — Бетоны тяжёлые и мелкозернистые',
  'СП 20.13330.2016 — Нагрузки и воздействия',
  'СНиП 12-03-2001 — Безопасность труда в строительстве',
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const demoModal = useDemoModal();

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from('[data-hero-badge]', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
      })
        .from(
          '[data-hero-heading]',
          {
            opacity: 0,
            y: 40,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '[data-hero-subtitle]',
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .from(
          '[data-hero-cta]',
          {
            opacity: 0,
            y: 25,
            duration: 0.5,
            ease: 'power3.out',
          },
          '-=0.3'
        )
        .from(
          '[data-hero-trust]',
          {
            opacity: 0,
            duration: 0.5,
          },
          '-=0.2'
        )
        .from(
          '[data-hero-visual]',
          {
            opacity: 0,
            x: 60,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=0.6'
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* === Layer 1: Base background === */}
      <div className="absolute inset-0 bg-background" />

      {/* === Layer 2: Radial ambient glows === */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-primary/[0.07] blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-secondary/[0.05] blur-[100px]" />
      <motion.div
        className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[100px]"
        animate={{ opacity: [0.04, 0.08, 0.04], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* === Layer 3: Grid pattern === */}
      <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid-60" />

      {/* === Layer 4: Noise texture === */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* === Layer 5: Content === */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div data-hero-badge>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm">
                <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-mono text-xs tracking-wider text-secondary">
                  Официальный дистрибьютор ТехЭксперт
                </span>
              </span>
            </div>

            {/* Heading */}
            <h1
              data-hero-heading
              className="mt-6 text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] tracking-tight"
            >
              Нормативная документация{' '}
              <span className="text-gradient-primary">для профессионалов</span>
            </h1>

            {/* Subtitle */}
            <p
              data-hero-subtitle
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Справочные системы ТехЭксперт и Кодекс с полным сервисом:
              подбор решения, внедрение, обучение и техническая поддержка.
              Работаем с 2000 года.
            </p>

            {/* CTAs */}
            <div data-hero-cta className="mt-8 flex flex-wrap gap-4">
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
              <Button
                variant="outline"
                size="xl"
                asChild
                className="border-white/10 hover:bg-white/[0.04] hover:border-white/20"
              >
                <Link href="/products">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Смотреть продукты
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div
              data-hero-trust
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-secondary" />
                <span>25+ лет на рынке</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Официальный дистрибьютор</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span>Полный сервис</span>
              </div>
            </div>
          </div>

          {/* Right: Visual — Premium Glass Dashboard */}
          <div data-hero-visual className="relative hidden lg:block">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-primary/[0.05] rounded-3xl blur-2xl pointer-events-none" />

            {/* Main dashboard card */}
            <div className="relative glass-card p-1 rounded-2xl overflow-hidden">
              {/* Top bar with window controls */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-accent-amber/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-secondary/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 max-w-xs mx-auto rounded-md bg-white/[0.04] flex items-center px-3">
                    <span className="text-[10px] text-muted-foreground font-mono">
                      techexpert.leaderinfo.ru
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-4 space-y-3">
                {/* Search bar */}
                <div className="h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center px-4">
                  <Search className="h-4 w-4 text-primary/60 mr-2 shrink-0" />
                  <span className="text-xs text-muted-foreground truncate">
                    СНиП 2.03.01-84 Бетонные и железобетонные конструкции
                  </span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Найдено', value: '2,847', color: 'text-primary' },
                    { label: 'Обновлено', value: '156', color: 'text-secondary' },
                    { label: 'Закладки', value: '34', color: 'text-accent' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl bg-white/[0.03] border border-white/[0.04] p-3"
                    >
                      <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                        {stat.label}
                      </div>
                      <div className={`text-lg font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Document list */}
                <div className="space-y-1.5">
                  {documents.map((doc, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-default group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
                    >
                      <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <FileText className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-[11px] text-foreground/70 truncate group-hover:text-foreground/90 transition-colors">
                        {doc}
                      </span>
                      {i === 0 && (
                        <div className="ml-auto h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <motion.div
              className="absolute -bottom-6 -left-10 glass-card p-3 w-60"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="text-secondary text-sm font-medium">✓</span>
                </div>
                <div>
                  <p className="text-[11px] font-medium">Документ обновлён</p>
                  <p className="text-[10px] text-muted-foreground">
                    СП 63.13330 — новая редакция
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating stats card */}
            <motion.div
              className="absolute -top-4 -right-6 glass-card p-3"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-secondary uppercase tracking-wider">
                    Live
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    156 обновлений
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
