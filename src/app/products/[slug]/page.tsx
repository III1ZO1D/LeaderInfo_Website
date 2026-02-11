import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { ProductBreadcrumb } from '@/components/products/ProductBreadcrumb';
import { ProductHero } from '@/components/products/ProductHero';
import { ProductFeatures } from '@/components/products/ProductFeatures';
import { ProductUseCases } from '@/components/products/ProductUseCases';
import { ProductIndustries } from '@/components/products/ProductIndustries';
import { ProductRelated } from '@/components/products/ProductRelated';
import { ProductCTA } from '@/components/products/ProductCTA';
import { StickyDemoCTA } from '@/components/products/StickyDemoCTA';
import {
  generateProductSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo';
import { products } from '@/data/products';

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return { title: 'Продукт не найден' };
  }

  return {
    title: product.metadata.title,
    description: product.metadata.description,
    keywords: product.metadata.keywords,
    openGraph: {
      title: product.metadata.title,
      description: product.metadata.description,
      type: 'website',
      url: `https://leaderinfo.ru/products/${product.slug}`,
      locale: 'ru_RU',
    },
    alternates: {
      canonical: `https://leaderinfo.ru/products/${product.slug}`,
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://leaderinfo.ru' },
    { name: 'Продукты', url: 'https://leaderinfo.ru/products' },
    { name: product.title },
  ]);

  return (
    <>
      <Header />
      <main>
        <ProductBreadcrumb
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Продукты', href: '/products' },
            { label: product.title },
          ]}
        />

        <ProductHero product={product} />

        <SectionDivider />

        <ProductFeatures features={product.features} />

        <SectionDivider />

        <ProductUseCases useCases={product.useCases} />

        <SectionDivider />

        <ProductIndustries industries={product.industries} />

        <SectionDivider />

        <ProductRelated currentSlug={product.slug} />

        <SectionDivider />

        <ProductCTA productTitle={product.title} />

        <StickyDemoCTA />
      </main>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
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
