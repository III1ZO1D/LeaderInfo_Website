import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { footerNavigation } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent-violet">
                <span className="text-lg font-bold text-white">Л</span>
              </div>
              <span className="text-xl font-bold">
                Лидер<span className="text-primary">Инфо</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-6">
              Официальный дистрибьютор справочных систем ТехЭксперт и Кодекс.
              Профессиональные решения для работы с нормативно-технической
              документацией.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+7XXXXXXXXXX"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+7 (XXX) XXX-XX-XX</span>
              </a>
              <a
                href="mailto:info@leaderinfo.ru"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@leaderinfo.ru</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Россия, г. Москва</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">
              {footerNavigation.products.title}
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.products.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">
              {footerNavigation.solutions.title}
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.solutions.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">
              {footerNavigation.company.title}
            </h3>
            <ul className="space-y-2.5">
              {footerNavigation.company.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ЛидерИнфо. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
