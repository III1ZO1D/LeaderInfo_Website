import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { CTASection } from '@/components/sections/CTASection';
import { ProductBreadcrumb } from '@/components/products/ProductBreadcrumb';
import { SystemCard } from '@/components/products/SystemCard';
import { categories, getCategoryBySlug, resolveSystemRef } from '@/data/categories';
import { generateBreadcrumbSchema } from '@/lib/seo';

interface CategoryPageProps {
  params: { category: string };
}

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.category);
  if (!category) return { title: 'Категория не найдена' };

  return {
    title: category.metadata.title,
    description: category.metadata.description,
    keywords: category.metadata.keywords,
    openGraph: {
      title: category.metadata.title,
      description: category.metadata.description,
      type: 'website',
      url: `https://leaderinfo.ru/products/${category.slug}`,
      locale: 'ru_RU',
    },
    alternates: {
      canonical: `https://leaderinfo.ru/products/${category.slug}`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const primaryCount = category.primaryCount ?? category.systems.length;
  const primarySystems = category.systems.slice(0, primaryCount);
  const additionalOwn = category.systems.slice(primaryCount);

  // Resolve cross-category refs
  const crossCategorySystems = (category.additionalSystemRefs ?? [])
    .map((ref) => {
      const resolved = resolveSystemRef(ref);
      return resolved ? { ...resolved, ref } : null;
    })
    .filter(Boolean) as Array<{ category: { slug: string }; system: import('@/types/category').System; ref: { slug: string; categorySlug: string } }>;

  const hasAdditional = additionalOwn.length > 0 || crossCategorySystems.length > 0;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: 'https://leaderinfo.ru' },
    { name: 'Продукты', url: 'https://leaderinfo.ru/products' },
    { name: category.title },
  ]);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: category.title,
    itemListElement: primarySystems
      .filter((s) => !s.externalUrl)
      .map((system, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: system.title,
        url: `https://leaderinfo.ru/products/${category.slug}/${system.slug}`,
      })),
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <ProductBreadcrumb
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Продукты', href: '/products' },
            { label: category.title },
          ]}
        />

        {/* Hero */}
        <section className="pt-16 pb-20 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/[0.04] blur-[100px] pointer-events-none" />

          <div className="container relative z-10">
            <div className="max-w-3xl">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 group"
              >
                <ArrowRight className="h-3.5 w-3.5 rotate-180 group-hover:-translate-x-1 transition-transform duration-150" />
                Все продукты
              </Link>

              <span className="label-mono text-primary">Продукты ТехЭксперт</span>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {category.title}
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {category.description}
              </p>

              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{primarySystems.length} основных систем</span>
                </div>
                {crossCategorySystems.length > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span>{crossCategorySystems.length + additionalOwn.length} дополнительных</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Primary Systems Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {primarySystems.map((system) => (
                <SystemCard
                  key={system.slug}
                  system={system}
                  categorySlug={category.slug}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Systems Section */}
        {hasAdditional && (
          <>
            <SectionDivider />
            <section className="py-16 relative overflow-hidden">
              <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-secondary/[0.04] blur-[100px] pointer-events-none" />
              <div className="container relative z-10">
                <div className="mb-10">
                  <span className="label-mono text-secondary">Дополнительные системы</span>
                  <h2 className="mt-3 text-2xl md:text-3xl font-bold">
                    Также полезно специалисту
                  </h2>
                  <p className="mt-3 text-muted-foreground max-w-2xl">
                    Смежные системы, которые часто используются специалистами данного профиля
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {/* Own additional systems (e.g. secondary lane in yuristu-buhgalteru) */}
                  {additionalOwn.map((system) => (
                    <SystemCard
                      key={system.slug}
                      system={system}
                      categorySlug={category.slug}
                    />
                  ))}

                  {/* Cross-category refs — link to primary category page */}
                  {crossCategorySystems.map(({ category: primaryCat, system }) => (
                    <SystemCard
                      key={`${primaryCat.slug}-${system.slug}`}
                      system={system}
                      categorySlug={primaryCat.slug}
                      isCrossCategory
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <SectionDivider />

        {/* Other categories */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-violet/[0.03] rounded-full blur-[120px] pointer-events-none" />

          <div className="container relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="label-mono text-secondary">Другие категории</span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold">
                Посмотрите{' '}
                <span className="text-gradient-primary">другие продукты</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories
                .filter((c) => c.slug !== category.slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card hover:bg-white/[0.04] transition-colors text-sm font-medium group"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                    {cat.shortTitle}
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:translate-x-0.5 transition-transform duration-150" />
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        <CTASection />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
