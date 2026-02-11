import { z } from 'zod';

export const quickLeadSchema = z.object({
  name: z.string().min(2, 'Введите ваше имя'),
  email: z.string().email('Некорректный email'),
  company: z.string().min(2, 'Введите название компании'),
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Введите ваше имя'),
  email: z.string().email('Некорректный email'),
  company: z.string().min(2, 'Введите название компании'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Сообщение слишком короткое'),
});

export type QuickLeadFormData = z.infer<typeof quickLeadSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
