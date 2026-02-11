import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { SocialProofBar } from '@/components/sections/SocialProofBar';
import { Features } from '@/components/sections/Features';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { IndustrySolutions } from '@/components/sections/IndustrySolutions';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTASection } from '@/components/sections/CTASection';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/seo';
import { faqs } from '@/data/faqs';

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

      <main>
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
