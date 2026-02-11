'use client';

import {
  Shield,
  GraduationCap,
  Headphones,
  RefreshCw,
  Search,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';
import { MagneticHover } from '@/components/animations/MagneticHover';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  hue: number;
}

const features: Feature[] = [
  {
    icon: RefreshCw,
    title: 'Ежедневная актуализация',
    description:
      'Все документы обновляются каждый день. Вы всегда работаете с актуальной редакцией нормативов и стандартов.',
    hue: 165,
  },
  {
    icon: Search,
    title: 'Умный поиск',
    description:
      'Находите нужные документы за секунды. Поиск по ключевым словам, номерам, контексту и перекрёстным ссылкам.',
    hue: 220,
  },
  {
    icon: GraduationCap,
    title: 'Обучение сотрудников',
    description:
      'Проводим профессиональное обучение вашей команды. Очно, онлайн или в формате видеоинструкций.',
    hue: 38,
  },
  {
    icon: Headphones,
    title: 'Техническая поддержка',
    description:
      'Персональный менеджер и оперативная техподдержка на всех этапах использования системы.',
    hue: 270,
  },
  {
    icon: Shield,
    title: 'Официальный дистрибьютор',
    description:
      'Гарантия подлинности и полного функционала. Прямые поставки от разработчика систем.',
    hue: 12,
  },
  {
    icon: Users,
    title: 'Персональный подход',
    description:
      'Подберём оптимальное решение под задачи вашей компании. Индивидуальные условия для корпоративных клиентов.',
    hue: 345,
  },
];

export function Features() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Ambient background orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="label-mono text-primary">Почему выбирают нас</span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold">
            Полный сервис для работы с{' '}
            <span className="text-gradient-primary">
              нормативной документацией
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Мы не просто продаём справочные системы — мы обеспечиваем полный
            цикл от подбора решения до обучения и постоянной поддержки
          </p>
        </div>

        <ScrollOrchestrator className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div key={feature.title} data-animate>
              <MagneticHover strength={0.12}>
                <div className="group relative h-full p-7 rounded-2xl glass-card glass-card-hover">
                  {/* Hover border glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `inset 0 0 0 1px hsl(${feature.hue} 70% 60% / 0.2)`,
                    }}
                  />

                  {/* Icon with diagonal hover movement */}
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05]">
                    <feature.icon className="h-6 w-6 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </MagneticHover>
            </div>
          ))}
        </ScrollOrchestrator>
      </div>
    </section>
  );
}
