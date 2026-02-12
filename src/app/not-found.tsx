import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-[60vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.02] bg-grid-pattern bg-grid-60" />

        <div className="container relative z-10 text-center py-20">
          <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Страница не найдена
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Возможно, страница была перемещена или удалена.
            Попробуйте начать с главной страницы.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              На главную
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg border-2 border-primary/20 font-semibold hover:bg-primary/10 transition-colors"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
