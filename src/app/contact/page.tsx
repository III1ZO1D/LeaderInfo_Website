import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { ProductBreadcrumb } from '@/components/products/ProductBreadcrumb';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Контакты - ЛидерИнфо',
  description:
    'Свяжитесь с нами для консультации по справочным системам ТехЭксперт и Кодекс. Телефон, email, форма обратной связи. Ответим в течение 2 часов.',
  keywords: [
    'ЛидерИнфо контакты',
    'справочные системы консультация',
    'ТехЭксперт связаться',
    'заказать справочную систему',
  ],
  openGraph: {
    title: 'Контакты - ЛидерИнфо',
    description:
      'Свяжитесь с нами для консультации по справочным системам. Ответим в течение 2 часов.',
    type: 'website',
    url: 'https://leaderinfo.ru/contact',
    locale: 'ru_RU',
  },
  alternates: {
    canonical: 'https://leaderinfo.ru/contact',
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://leaderinfo.ru' },
    { name: 'Контакты' },
  ]);

  return (
    <>
      <Header />
      <main id="main-content">
        <ProductBreadcrumb
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Контакты' },
          ]}
        />

        {/* Hero */}
        <section className="pt-10 pb-16 relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid-60" />

          <div className="container relative z-10">
            <div className="max-w-2xl">
              <span className="label-mono text-primary">CONTACTS</span>
              <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Свяжитесь{' '}
                <span className="text-gradient-primary">с нами</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Задайте вопрос, запросите консультацию или предложение.
                Мы ответим в течение 2 часов в рабочее время.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Form + Info */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left — form */}
              <div className="lg:col-span-3">
                <div className="relative">
                  <div className="absolute -inset-8 -z-10 bg-radial-glow from-primary/8 via-transparent to-transparent opacity-60 blur-2xl pointer-events-none" />
                  <div className="glass-card p-8 md:p-10">
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold">
                        Напишите нам
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1.5">
                        Заполните форму — мы свяжемся с вами
                      </p>
                    </div>
                    <ContactForm />
                  </div>
                </div>
              </div>

              {/* Right — info */}
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
