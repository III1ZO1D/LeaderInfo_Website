import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ProductBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function ProductBreadcrumb({ items }: ProductBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="container pt-6 pb-2">
      <ol className="flex items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/40" />
              )}
              {isLast ? (
                <span className="font-medium text-foreground/80 truncate max-w-[200px]">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || '/'}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
