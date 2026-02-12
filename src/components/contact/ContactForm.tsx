'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { contactSchema, type ContactFormData } from '@/lib/validations';
import { trackContactSubmit } from '@/lib/analytics';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.status === 429) {
        toast.error('Слишком много сообщений. Попробуйте через минуту.');
        setStatus('idle');
        return;
      }

      if (!response.ok) {
        toast.error('Не удалось отправить сообщение. Попробуйте ещё раз.');
        setStatus('idle');
        return;
      }

      setStatus('success');
      reset();
      trackContactSubmit();
    } catch {
      toast.error('Ошибка сети. Проверьте подключение к интернету.');
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <CheckCircle className="h-12 w-12 text-secondary mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Сообщение отправлено</h3>
        <p className="text-muted-foreground">
          Спасибо за обращение! Мы свяжемся с вами в течение 2 часов.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Имя
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          placeholder="Ваше имя"
          className="flex h-11 w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 placeholder:text-muted-foreground/50"
        />
        {errors.name && (
          <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <input
          {...register('email')}
          id="email"
          type="email"
          placeholder="email@company.ru"
          className="flex h-11 w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 placeholder:text-muted-foreground/50"
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-1.5">
          Компания
        </label>
        <input
          {...register('company')}
          id="company"
          type="text"
          placeholder="Название компании"
          className="flex h-11 w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 placeholder:text-muted-foreground/50"
        />
        {errors.company && (
          <p className="text-xs text-destructive mt-1">{errors.company.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
          Телефон <span className="text-muted-foreground">(необязательно)</span>
        </label>
        <input
          {...register('phone')}
          id="phone"
          type="tel"
          placeholder="+7 (XXX) XXX-XX-XX"
          className="flex h-11 w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 placeholder:text-muted-foreground/50"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Сообщение
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          placeholder="Опишите ваш вопрос или задачу..."
          className="flex w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary/50 placeholder:text-muted-foreground/50 resize-none"
        />
        {errors.message && (
          <p className="text-xs text-destructive mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full"
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Отправка...
          </>
        ) : (
          'Отправить сообщение'
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <a href="/privacy" className="underline hover:text-foreground transition-colors">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );
}
