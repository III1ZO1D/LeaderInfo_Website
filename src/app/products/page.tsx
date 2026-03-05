import type { Metadata } from 'next';
import { RefreshCw, Search, WifiOff, Download } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { CTASection } from '@/components/sections/CTASection';
import { ProductBreadcrumb } from '@/components/products/ProductBreadcrumb';
import { CategoriesGrid } from './CategoriesGrid';
import { categories } from '@/data/categories';

export const metadata: Metadata = {
  title: 'Продукты - Цифровые справочные системы ТехЭксперт',
  description:
    'Справочные системы ТехЭксперт для специалистов: безопасность, строительство, промышленность, машиностроение, медицина, лаборатории, юристы и бухгалтеры. Подберём оптимальное решение.',
  keywords: [
    'техэксперт продукты',
    'справочные системы',
    'охрана труда',
    'строительные нормы',
    'промышленная безопасность',
    'нормативная документация',
  ],
  alternates: {
    canonical: 'https://leaderinfo.ru/products',
  },
};

const commonFeatures = [
  {
    icon: RefreshCw,
    title: 'Ежедневная актуализация',
    description: 'Документы обновляются каждый день в соответствии с изменениями законодательства',
  },
  {
    icon: Search,
    title: 'Умный поиск',
    description: 'Поиск по контексту, ключевым словам и перекрёстным ссылкам между документами',
  },
  {
    icon: WifiOff,
    title: 'Работа офлайн',
    description: 'Полный доступ к документам без подключения к интернету',
  },
  {
    icon: Download,
    title: 'Экспорт документов',
    description: 'Выгрузка нужных документов в PDF и Word для работы вне системы',
  },
];

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: categories.map((category, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: category.title,
    url: `https://leaderinfo.ru/products/${category.slug}`,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ProductBreadcrumb
          items={[
            { label: 'Главная', href: '/' },
            { label: 'Продукты' },
          ]}
        />

        {/* Hero */}
        <section className="pt-16 pb-20 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/[0.04] blur-[100px] pointer-events-none" />

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="label-mono text-primary">Наши продукты</span>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Цифровой помощник{' '}
                <span className="text-gradient-primary">для каждой профессии</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Выберите категорию, соответствующую вашей профессии. В каждой —
                специализированные справочные системы с полной нормативной базой
                и ежедневным обновлением.
              </p>

              <div className="mt-4 text-sm text-muted-foreground">
                {categories.length} категорий · {categories.reduce((acc, c) => acc + c.systems.length, 0)} специализированных систем
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Categories Grid */}
        <CategoriesGrid />

        <SectionDivider />

        {/* Common Features */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-violet/[0.03] rounded-full blur-[120px] pointer-events-none" />

          <div className="container relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="label-mono text-secondary">Все системы включают</span>
              <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">
                Единые стандарты{' '}
                <span className="text-gradient-primary">качества</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {commonFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl glass-card p-6 text-center"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
