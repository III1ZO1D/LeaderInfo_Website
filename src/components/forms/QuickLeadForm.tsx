'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { quickLeadSchema, type QuickLeadFormData } from '@/lib/validations';
import { cn } from '@/lib/utils';

interface QuickLeadFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export function QuickLeadForm({
  className,
  title,
  subtitle,
}: QuickLeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuickLeadFormData>({
    resolver: zodResolver(quickLeadSchema),
  });

  async function onSubmit(data: QuickLeadFormData) {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      }
    } catch {
      // В будущем — показать toast с ошибкой
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div
        className={cn(
          'rounded-xl p-8 text-center bg-secondary/10 border border-secondary/20',
          className
        )}
      >
        <CheckCircle className="h-12 w-12 mx-auto mb-4 text-secondary" />
        <h3 className="text-xl font-semibold mb-2 text-foreground">
          Спасибо за заявку!
        </h3>
        <p className="text-muted-foreground">
          Наш специалист свяжется с вами в течение 2 часов
        </p>
      </div>
    );
  }

  return (
    <div className={cn('rounded-xl', className)}>
      {title && (
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      )}
      {subtitle && (
        <p className="text-sm mb-6 text-muted-foreground">{subtitle}</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label
            htmlFor="lead-name"
            className="block text-sm font-medium mb-1.5 text-foreground"
          >
            Имя
          </label>
          <Input
            id="lead-name"
            placeholder="Иван Петров"
            {...register('name')}
            className={cn('h-12', errors.name && 'border-red-500')}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="lead-email"
            className="block text-sm font-medium mb-1.5 text-foreground"
          >
            Рабочая почта
          </label>
          <Input
            id="lead-email"
            type="email"
            placeholder="ivan@company.ru"
            {...register('email')}
            className={cn('h-12', errors.email && 'border-red-500')}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="lead-company"
            className="block text-sm font-medium mb-1.5 text-foreground"
          >
            Компания
          </label>
          <Input
            id="lead-company"
            placeholder="ООО «Название»"
            {...register('company')}
            className={cn('h-12', errors.company && 'border-red-500')}
          />
          {errors.company && (
            <p className="text-sm text-red-500 mt-1">
              {errors.company.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          variant="accent"
          size="xl"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Получить демо-доступ
            </>
          )}
        </Button>
        <p className="text-xs text-center text-muted-foreground">
          Нажимая кнопку, вы соглашаетесь с{' '}
          <a href="/privacy" className="underline hover:no-underline">
            политикой конфиденциальности
          </a>
        </p>
      </form>
    </div>
  );
}
