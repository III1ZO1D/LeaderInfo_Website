import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Package, Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Спасибо за заявку',
  robots: { index: false, follow: false },
};

const steps = [
  {
    number: '1',
    title: 'Заявка получена',
    description: 'Мы уже видим вашу заявку и начинаем работу',
  },
  {
    number: '2',
    title: 'Подбор решения',
    description: 'Наш эксперт подберёт оптимальное решение для вашей компании',
  },
  {
    number: '3',
    title: 'Связь с вами',
    description: 'Свяжемся в течение 2 часов для обсуждения деталей',
  },
];

export default function ThankYouPage() {
  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="relative mx-auto mb-8 w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-secondary/20 animate-ping" />
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 border border-secondary/20">
            <CheckCircle className="h-10 w-10 text-secondary" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
          Спасибо за заявку!
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Мы ценим ваш интерес к нашим решениям
        </p>

        {/* Steps */}
        <div className="space-y-4 mb-10 text-left">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-white/[0.06]"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-sm font-bold text-primary">{step.number}</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-white/[0.05] border border-white/[0.08] text-foreground font-medium hover:bg-white/[0.08] transition-colors"
          >
            <Home className="h-4 w-4" />
            На главную
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            <Package className="h-4 w-4" />
            Смотреть продукты
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Contact info */}
        <p className="mt-10 text-sm text-muted-foreground">
          Срочный вопрос? Звоните:{' '}
          <a href="tel:+7XXXXXXXXXX" className="text-primary hover:underline">
            +7 (XXX) XXX-XX-XX
          </a>
        </p>
      </div>
    </main>
  );
}
