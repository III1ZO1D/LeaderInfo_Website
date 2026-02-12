import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { CTASection } from '@/components/sections/CTASection';
import { ProductBreadcrumb } from '@/components/products/ProductBreadcrumb';
import { SolutionsGrid } from './SolutionsGrid';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { solutions } from '@/data/solutions';

export const metadata: Metadata = {
  title: 'Отраслевые решения - Справочные системы ТехЭксперт',
  description:
    'Готовые решения для строительства, охраны труда, экологии и промышленности. Подберём оптимальный набор справочных систем под вашу отрасль.',
  keywords: [
    'отраслевые решения',
    'справочные системы',
    'строительство',
    'охрана труда',
    'экология',
    'промышленность',
  ],
  openGraph: {
    title: 'Отраслевые решения - Справочные системы ТехЭксперт',
    description:
      'Готовые решения для строительства, охраны труда, экологии и промышленности.',
    type: 'website',
    url: 'https://leaderinfo.ru/solutions',
    locale: 'ru_RU',
  },
  alternates: {
    canonical: 'https://leaderinfo.ru/solutions',
  },
};

export default function SolutionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://leaderinfo.ru' },
    { name: 'Решения' },
  ]);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Отраслевые решения ЛидерИнфо',
    numberOfItems: solutions.length,
    itemListElement: solutions.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.title,
      url: `https://leaderinfo.ru/solutions/${s.slug}`,
    })),
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <ProductBreadcrumb
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Решения' },
          ]}
        />

        {/* Hero */}
        <section className="pt-16 pb-20 relative overflow-hidden">
          {/* Ambient */}
          <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/[0.04] blur-[100px] pointer-events-none" />

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="label-mono text-primary">SOLUTIONS</span>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Решения для{' '}
                <span className="text-gradient-primary">вашей отрасли</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Каждая отрасль имеет свою специфику нормативного регулирования.
                Мы подберём оптимальный набор справочных систем ТехЭксперт
                под ваши задачи и обеспечим полный сервис внедрения.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container">
            <SolutionsGrid solutions={solutions} />
          </div>
        </section>

        <SectionDivider />

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />
    </>
  );
}
