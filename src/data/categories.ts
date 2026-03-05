import type { Category, System, SystemRef } from '@/types/category';
import { bezopasnost } from './categories/bezopasnost';
import { stroitelyu } from './categories/stroitelyu';
import { promyshlennost } from './categories/promyshlennost';
import { mashinostroenie } from './categories/mashinostroenie';
import { laboratoriya } from './categories/laboratoriya';
import { pishchevayaKhimFarm } from './categories/pishchevaya-khim-farm';
import { medicina } from './categories/medicina';
import { yuristuBuhgalteru } from './categories/yuristu-buhgalteru';

export const categories: Category[] = [
  bezopasnost,
  stroitelyu,
  promyshlennost,
  mashinostroenie,
  laboratoriya,
  pishchevayaKhimFarm,
  medicina,
  yuristuBuhgalteru,
];

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getSystemBySlug(
  categorySlug: string,
  systemSlug: string,
): { category: Category; system: System } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const system = category.systems.find((s) => s.slug === systemSlug);
  if (!system) return undefined;
  return { category, system };
}

/**
 * Resolves a SystemRef to the actual System and its primary Category.
 * Returns undefined if the ref points to a non-existent system.
 */
export function resolveSystemRef(
  ref: SystemRef,
): { category: Category; system: System } | undefined {
  return getSystemBySlug(ref.categorySlug, ref.slug);
}

/**
 * Returns all (category, system) pairs for static path generation.
 * Excludes systems with an externalUrl (they have no internal page).
 */
export function getAllSystems(): Array<{ category: Category; system: System }> {
  return categories.flatMap((category) =>
    category.systems
      .filter((system) => !system.externalUrl)
      .map((system) => ({ category, system })),
  );
}
