'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Что-то пошло не так</h2>
        <p className="text-muted-foreground mb-8">
          Произошла ошибка при загрузке страницы. Попробуйте обновить или
          вернитесь на главную.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Попробовать снова
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg border border-primary/20 font-medium hover:bg-primary/10 transition-colors"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
