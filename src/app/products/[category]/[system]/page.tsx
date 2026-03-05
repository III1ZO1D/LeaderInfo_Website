import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { ProductBreadcrumb } from '@/components/products/ProductBreadcrumb';
import { SystemHero } from '@/components/products/SystemHero';
import { ProductFeatures } from '@/components/products/ProductFeatures';
import { ProductUseCases } from '@/components/products/ProductUseCases';
import { SystemRelated } from '@/components/products/SystemRelated';
import { ProductCTA } from '@/components/products/ProductCTA';
import { StickyDemoCTA } from '@/components/products/StickyDemoCTA';
import { categories, getSystemBySlug, getAllSystems } from '@/data/categories';
import { generateBreadcrumbSchema } from '@/lib/seo';

interface SystemPageProps {
  params: { category: string; system: string };
}

export function generateStaticParams() {
  return getAllSystems().map(({ category, system }) => ({
    category: category.slug,
    system: system.slug,
  }));
}

export async function generateMetadata({ params }: SystemPageProps): Promise<Metadata> {
  const result = getSystemBySlug(params.category, params.system);
  if (!result) return { title: 'Система не найдена' };

  const { system } = result;
  return {
    title: system.metadata.title,
    description: system.metadata.description,
    keywords: system.metadata.keywords,
    openGraph: {
      title: system.metadata.title,
      description: system.metadata.description,
      type: 'website',
      url: `https://leaderinfo.ru/products/${params.category}/${params.system}`,
      locale: 'ru_RU',
    },
    alternates: {
      canonical: `https://leaderinfo.ru/products/${params.category}/${params.system}`,
    },
  };
}

export default function SystemPage({ params }: SystemPageProps) {
  const result = getSystemBySlug(params.category, params.system);
  if (!result) notFound();

  const { category, system } = result;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://leaderinfo.ru' },
    { name: 'Продукты', url: 'https://leaderinfo.ru/products' },
    { name: category.title, url: `https://leaderinfo.ru/products/${category.slug}` },
    { name: system.title },
  ]);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: system.title,
    description: system.shortDescription,
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      seller: {
        '@type': 'Organization',
        name: 'ЛидерИнфо',
      },
    },
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <ProductBreadcrumb
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Продукты', href: '/products' },
            { label: category.shortTitle, href: `/products/${category.slug}` },
            { label: system.title },
          ]}
        />

        <SystemHero system={system} categorySlug={category.slug} />

        <SectionDivider />

        <ProductFeatures features={system.features} />

        <SectionDivider />

        <ProductUseCases useCases={system.useCases} />

        <SectionDivider />

        <SystemRelated currentSystemSlug={system.slug} category={category} />

        <SectionDivider />

        <ProductCTA productTitle={system.title} />

        <StickyDemoCTA />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
