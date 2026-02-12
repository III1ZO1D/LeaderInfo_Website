export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Result[];
  testimonial?: string;
  thumbnail: string;
  metadata: {
    title: string;
    description: string;
    keywords?: string[];
  };
}

export interface Result {
  metric: string;
  value: string;
  description: string;
}
