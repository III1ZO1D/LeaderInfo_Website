import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { ProductBreadcrumb } from '@/components/products/ProductBreadcrumb';
import { CaseStudyHero } from '@/components/case-studies/CaseStudyHero';
import { CaseStudyResults } from '@/components/case-studies/CaseStudyResults';
import { CaseStudyCTA } from '@/components/case-studies/CaseStudyCTA';
import { StickyDemoCTA } from '@/components/products/StickyDemoCTA';
import {
  generateCaseStudySchema,
  generateBreadcrumbSchema,
} from '@/lib/seo';
import { caseStudies } from '@/data/case-studies';

interface CaseStudyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    return { title: 'Кейс не найден' };
  }

  return {
    title: caseStudy.metadata.title,
    description: caseStudy.metadata.description,
    keywords: caseStudy.metadata.keywords,
    openGraph: {
      title: caseStudy.metadata.title,
      description: caseStudy.metadata.description,
      type: 'article',
      url: `https://leaderinfo.ru/case-studies/${caseStudy.slug}`,
      locale: 'ru_RU',
    },
    alternates: {
      canonical: `https://leaderinfo.ru/case-studies/${caseStudy.slug}`,
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  const caseStudySchema = generateCaseStudySchema(caseStudy);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://leaderinfo.ru' },
    { name: 'Кейсы', url: 'https://leaderinfo.ru/case-studies' },
    { name: caseStudy.client },
  ]);

  return (
    <>
      <Header />
      <main id="main-content">
        <ProductBreadcrumb
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Кейсы', href: '/case-studies' },
            { label: caseStudy.client },
          ]}
        />

        <CaseStudyHero caseStudy={caseStudy} />

        <SectionDivider />

        <CaseStudyResults
          results={caseStudy.results}
          solution={caseStudy.solution}
          testimonial={caseStudy.testimonial}
        />

        <SectionDivider />

        <CaseStudyCTA />

        <StickyDemoCTA />
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
