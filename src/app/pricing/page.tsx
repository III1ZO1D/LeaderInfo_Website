import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { ProductBreadcrumb } from '@/components/products/ProductBreadcrumb';
import { PricingHero } from '@/components/pricing/PricingHero';
import { PricingPlans } from '@/components/pricing/PricingPlans';
import { PricingComparison } from '@/components/pricing/PricingComparison';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';
import { CTASection } from '@/components/sections/CTASection';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo';
import { pricingPlans, comparisonData, pricingFaqs } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Цены на справочные системы ТехЭксперт - ЛидерИнфо',
  description:
    'Цены на справочные системы ТехЭксперт и Кодекс на 30% ниже. Стандарт, Профессионал и Корпоративный тарифы. Бесплатная консультация и демо-доступ.',
  keywords: [
    'техэксперт цена',
    'справочная система стоимость',
    'кодекс купить',
    'стройтехнолог цена',
    'нормативная документация подписка',
  ],
  openGraph: {
    title: 'Цены на справочные системы - ЛидерИнфо',
    description:
      'Справочные системы ТехЭксперт по ценам на 30% ниже конкурентов. Полный сервис включён.',
    type: 'website',
    url: 'https://leaderinfo.ru/pricing',
    locale: 'ru_RU',
  },
  alternates: {
    canonical: 'https://leaderinfo.ru/pricing',
  },
};

export default function PricingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://leaderinfo.ru' },
    { name: 'Цены' },
  ]);

  const faqSchema = generateFAQSchema(pricingFaqs);

  return (
    <>
      <Header />
      <main id="main-content">
        <ProductBreadcrumb
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Цены' },
          ]}
        />

        <PricingHero />

        <SectionDivider />

        <PricingPlans plans={pricingPlans} />

        <SectionDivider />

        <PricingComparison data={comparisonData} />

        <SectionDivider />

        <PricingFAQ faqs={pricingFaqs} />

        <SectionDivider />

        <CTASection />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
