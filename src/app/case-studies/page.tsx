import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { CTASection } from '@/components/sections/CTASection';
import { CaseStudiesGrid } from './CaseStudiesGrid';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { caseStudies } from '@/data/case-studies';

export const metadata: Metadata = {
  title: 'Кейсы клиентов - ЛидерИнфо',
  description:
    'Реальные истории успеха наших клиентов. Как компании решают задачи с помощью справочных систем ТехЭксперт и Кодекс.',
  keywords: [
    'кейсы',
    'истории успеха',
    'справочные системы',
    'результаты внедрения',
    'ТехЭксперт',
  ],
  openGraph: {
    title: 'Кейсы клиентов - ЛидерИнфо',
    description:
      'Реальные истории успеха наших клиентов. Как компании решают задачи с помощью справочных систем.',
    type: 'website',
    url: 'https://leaderinfo.ru/case-studies',
    locale: 'ru_RU',
  },
  alternates: {
    canonical: 'https://leaderinfo.ru/case-studies',
  },
};

export default function CaseStudiesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://leaderinfo.ru' },
    { name: 'Кейсы' },
  ]);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Кейсы клиентов ЛидерИнфо',
    numberOfItems: caseStudies.length,
    itemListElement: caseStudies.map((cs, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: cs.title,
      url: `https://leaderinfo.ru/case-studies/${cs.slug}`,
    })),
  };

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/[0.04] blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid-60" />

          <div className="container relative z-10">
            <div className="max-w-2xl">
              <span className="label-mono text-primary">CASE STUDIES</span>
              <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Реальные{' '}
                <span className="text-gradient-primary">
                  истории успеха
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Как наши клиенты решают отраслевые задачи и экономят
                миллионы рублей с помощью справочных систем ТехЭксперт
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Case studies grid */}
        <section className="py-24">
          <div className="container">
            <CaseStudiesGrid caseStudies={caseStudies} />
          </div>
        </section>

        <SectionDivider />

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
