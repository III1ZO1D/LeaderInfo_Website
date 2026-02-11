export interface Product {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  useCases: UseCase[];
  industries: string[];
  thumbnail: string;
  gallery: string[];
  highlights?: string[];
  documentCount?: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface UseCase {
  title: string;
  description: string;
  icon?: string;
}
