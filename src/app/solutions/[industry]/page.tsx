import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { ProductBreadcrumb } from '@/components/products/ProductBreadcrumb';
import { SolutionHero } from '@/components/solutions/SolutionHero';
import { SolutionPainPoints } from '@/components/solutions/SolutionPainPoints';
import { SolutionProducts } from '@/components/solutions/SolutionProducts';
import { SolutionBenefits } from '@/components/solutions/SolutionBenefits';
import { SolutionCasePreview } from '@/components/solutions/SolutionCasePreview';
import { StickyDemoCTA } from '@/components/products/StickyDemoCTA';
import { CTASection } from '@/components/sections/CTASection';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { solutions } from '@/data/solutions';

interface SolutionPageProps {
  params: { industry: string };
}

export function generateStaticParams() {
  return solutions.map((s) => ({
    industry: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const solution = solutions.find((s) => s.slug === params.industry);

  if (!solution) {
    return { title: 'Решение не найдено' };
  }

  return {
    title: solution.metadata.title,
    description: solution.metadata.description,
    keywords: solution.metadata.keywords,
    openGraph: {
      title: solution.metadata.title,
      description: solution.metadata.description,
      type: 'website',
      url: `https://leaderinfo.ru/solutions/${solution.slug}`,
      locale: 'ru_RU',
    },
    alternates: {
      canonical: `https://leaderinfo.ru/solutions/${solution.slug}`,
    },
  };
}

export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = solutions.find((s) => s.slug === params.industry);

  if (!solution) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://leaderinfo.ru' },
    { name: 'Решения', url: 'https://leaderinfo.ru/solutions' },
    { name: solution.title },
  ]);

  return (
    <>
      <Header />
      <main id="main-content">
        <ProductBreadcrumb
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Решения', href: '/solutions' },
            { label: solution.title },
          ]}
        />

        <SolutionHero solution={solution} />

        <SectionDivider />

        <SolutionPainPoints painPoints={solution.painPoints} />

        <SectionDivider />

        <SolutionProducts industrySlug={solution.slug} />

        <SectionDivider />

        <SolutionCasePreview industrySlug={solution.slug} />

        <SectionDivider />

        <SolutionBenefits benefits={solution.benefits} />

        <SectionDivider />

        <CTASection />

        <StickyDemoCTA />
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
