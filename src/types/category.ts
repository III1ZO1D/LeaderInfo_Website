export interface UseCase {
  title: string;
  description: string;
  icon?: string;
}

export interface System {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  useCases: UseCase[];
  highlights: string[];
  thumbnail: string;
  /** External URL — if set, the system card links out instead of to an internal page */
  externalUrl?: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface SystemRef {
  /** Slug of the system as defined in its primary category */
  slug: string;
  /** Slug of the category where this system is primarily defined */
  categorySlug: string;
}

export interface Category {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  /** All systems that belong to this category and have their own pages here */
  systems: System[];
  /**
   * Number of systems[] to show as primary cards (shown first, prominently).
   * The remaining systems[] items are shown in a secondary "also available" lane.
   * Defaults to systems.length (all primary) if not set.
   */
  primaryCount?: number;
  /**
   * References to systems defined in other (primary) categories that are
   * also relevant for specialists in this category. Shown in a secondary section.
   */
  additionalSystemRefs?: SystemRef[];
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}
