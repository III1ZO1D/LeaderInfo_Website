'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { ScrollOrchestrator } from '@/components/animations/ScrollOrchestrator';

const contactItems = [
  {
    icon: Phone,
    title: 'Телефон',
    value: '+7 (XXX) XXX-XX-XX',
    href: 'tel:+7XXXXXXXXXX',
    description: 'Пн-Пт: 9:00 — 18:00 (МСК)',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@leaderinfo.ru',
    href: 'mailto:info@leaderinfo.ru',
    description: 'Ответим в течение 2 часов',
  },
  {
    icon: MapPin,
    title: 'Адрес',
    value: 'г. Москва, Россия',
    href: undefined,
    description: 'Офис работает по предварительной записи',
  },
];

export function ContactInfo() {
  return (
    <ScrollOrchestrator className="space-y-4">
      {contactItems.map((item) => (
        <div key={item.title} data-animate>
          <div className="rounded-2xl glass-card p-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-10 w-10 shrink-0 rounded-xl items-center justify-center bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-primary hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm">{item.value}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </ScrollOrchestrator>
  );
}
