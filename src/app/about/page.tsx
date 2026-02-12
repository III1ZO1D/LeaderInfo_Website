import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { ProductBreadcrumb } from '@/components/products/ProductBreadcrumb';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutValues } from '@/components/about/AboutValues';
import { AboutTimeline } from '@/components/about/AboutTimeline';
import { AboutTeam } from '@/components/about/AboutTeam';
import { CTASection } from '@/components/sections/CTASection';
import {
  generateBreadcrumbSchema,
  generateOrganizationSchema,
} from '@/lib/seo';
import {
  companyValues,
  companyTimeline,
  teamMembers,
} from '@/data/company';

export const metadata: Metadata = {
  title: 'О компании ЛидерИнфо - Официальный дистрибьютор ТехЭксперт',
  description:
    'ЛидерИнфо — официальный дистрибьютор справочных систем ТехЭксперт и Кодекс с 2000 года. 25+ лет на рынке, 1000+ клиентов, полный комплекс услуг.',
  keywords: [
    'ЛидерИнфо',
    'о компании',
    'дистрибьютор ТехЭксперт',
    'справочные системы',
    'нормативная документация',
  ],
  openGraph: {
    title: 'О компании ЛидерИнфо',
    description:
      'Официальный дистрибьютор справочных систем ТехЭксперт и Кодекс с 2000 года.',
    type: 'website',
    url: 'https://leaderinfo.ru/about',
    locale: 'ru_RU',
  },
  alternates: {
    canonical: 'https://leaderinfo.ru/about',
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://leaderinfo.ru' },
    { name: 'О компании' },
  ]);

  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <Header />
      <main id="main-content">
        <ProductBreadcrumb
          items={[
            { label: 'Главная', href: '/' },
            { label: 'О компании' },
          ]}
        />

        <AboutHero />

        <SectionDivider />

        <AboutValues values={companyValues} />

        <SectionDivider />

        <AboutTimeline events={companyTimeline} />

        <SectionDivider />

        <AboutTeam members={teamMembers} />

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
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}
