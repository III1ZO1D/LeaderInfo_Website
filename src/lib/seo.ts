export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ЛидерИнфо',
    url: 'https://leaderinfo.ru',
    logo: 'https://leaderinfo.ru/images/logo.png',
    description:
      'Официальный дистрибьютор справочных систем ТехЭксперт и Кодекс',
    foundingDate: '2000',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'Russian',
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateProductSchema(product: {
  title: string;
  slug: string;
  fullDescription: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.fullDescription,
    brand: {
      '@type': 'Brand',
      name: 'ТехЭксперт',
    },
    category: 'Справочная система',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'RUB',
      url: `https://leaderinfo.ru/products/${product.slug}`,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function generateCaseStudySchema(caseStudy: {
  title: string;
  slug: string;
  client: string;
  challenge: string;
  solution: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    author: {
      '@type': 'Organization',
      name: 'ЛидерИнфо',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ЛидерИнфо',
      url: 'https://leaderinfo.ru',
    },
    description: caseStudy.challenge,
    url: `https://leaderinfo.ru/case-studies/${caseStudy.slug}`,
  };
}
