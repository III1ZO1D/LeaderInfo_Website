import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { SocialProofBar } from '@/components/sections/SocialProofBar';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/seo';
import { faqs } from '@/data/faqs';

// Below-fold секции загружаются динамически для ускорения первого рендера
const Features = dynamic(
  () => import('@/components/sections/Features').then((m) => ({ default: m.Features })),
  { ssr: false }
);
const ProductShowcase = dynamic(
  () => import('@/components/sections/ProductShowcase').then((m) => ({ default: m.ProductShowcase })),
  { ssr: false }
);
const IndustrySolutions = dynamic(
  () => import('@/components/sections/IndustrySolutions').then((m) => ({ default: m.IndustrySolutions })),
  { ssr: false }
);
const Testimonials = dynamic(
  () => import('@/components/sections/Testimonials').then((m) => ({ default: m.Testimonials })),
  { ssr: false }
);
const FAQ = dynamic(
  () => import('@/components/sections/FAQ').then((m) => ({ default: m.FAQ })),
  { ssr: false }
);
const CTASection = dynamic(
  () => import('@/components/sections/CTASection').then((m) => ({ default: m.CTASection })),
  { ssr: false }
);

export const metadata: Metadata = {
  title:
    'ЛидерИнфо - Справочные системы ТехЭксперт и Кодекс | Официальный дистрибьютор',
  description:
    'Официальный дистрибьютор справочных систем ТехЭксперт и Кодекс. Полный сервис: подбор решения, внедрение, обучение, техническая поддержка. Работаем с 2000 года.',
  keywords: [
    'техэксперт',
    'кодекс',
    'справочная система',
    'нормативная документация',
    'техэксперт купить',
    'справочная система строительство',
    'охрана труда документация',
  ],
};

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* Structured Data для SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Header />

      <main id="main-content">
        <Hero />
        <SectionDivider />
        <SocialProofBar />
        <SectionDivider />
        <Features />
        <SectionDivider />
        <ProductShowcase />
        <SectionDivider />
        <IndustrySolutions />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
