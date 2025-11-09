/**
 * StructuredData component
 * Provides JSON-LD structured data for better SEO
 * Includes Organization, WebSite, and BreadcrumbList schemas
 */

const siteDescription =
  'BehanceIQ™ - система генерації лідів для B2B агенцій. Отримайте +20 лідів на місяць з чеком від $7k. Доведена система, яка допомогла масштабувати агенції від $0 до $1M за 2 роки.';

export default function StructuredData({ type = 'WebSite', data }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://behanceiq.com';

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BehanceIQ™',
    alternateName: 'BehanceIQ',
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    description:
      'BehanceIQ™ - система генерації лідів для B2B агенцій. Отримайте +20 лідів на місяць з чеком від $7k.',
    founder: {
      '@type': 'Person',
      name: 'Bohdan Lyshchenko',
      jobTitle: 'CEO',
      worksFor: {
        '@type': 'Organization',
        name: 'ClipSwift',
      },
      sameAs: ['https://t.me/clip_swift'],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Ukrainian', 'English'],
      areaServed: 'Worldwide',
    },
    sameAs: [
      'https://t.me/clip_swift',
      // Add other social media profiles here
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'UA',
    },
  };

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BehanceIQ™',
    url: baseUrl,
    description: siteDescription,
    inLanguage: 'uk-UA',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Lead Generation System for B2B Agencies',
    name: 'BehanceIQ™ Framework',
    description:
      'Доведена система генерації лідів для B2B агенцій. Генеруйте +20 лідів на місяць з середнім чеком від $7k.',
    provider: {
      '@type': 'Organization',
      name: 'BehanceIQ™',
      url: baseUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: baseUrl,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '75',
      bestRating: '5',
      worstRating: '1',
    },
  };

  // SoftwareApplication Schema
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'BehanceIQ™ Framework',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '75',
    },
    description:
      'Система генерації лідів для B2B агенцій через Behance. Автоматизовані процеси, доведені методики, реальні результати.',
  };

  // Article Schema (for blog posts if needed)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'BehanceIQ™ - Система Генерації Лідів для B2B Агенцій',
    description: siteDescription,
    image: `${baseUrl}/agency.jpg`,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: 'Bohdan Lyshchenko',
      url: 'https://t.me/clip_swift',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BehanceIQ™',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.svg`,
      },
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
    ],
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Що таке BehanceIQ™?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BehanceIQ™ - це система генерації лідів для B2B агенцій, яка допомагає генерувати +20 лідів на місяць з середнім чеком від $7k через використання платформи Behance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Як працює BehanceIQ™?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BehanceIQ™ використовує доведені методики та автоматизовані процеси для генерації лідів через Behance. Система включає готові шаблони, стратегії та інструменти для масштабування.',
        },
      },
      {
        '@type': 'Question',
        name: 'Для кого підходить BehanceIQ™?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BehanceIQ™ підходить для B2B агенцій з ревеню від $30K на місяць, які хочуть масштабувати свій бізнес та отримувати стабільний потік лідів.',
        },
      },
    ],
  };

  // Select schema based on type
  let schema;
  switch (type) {
    case 'Organization':
      schema = organizationSchema;
      break;
    case 'Service':
      schema = serviceSchema;
      break;
    case 'SoftwareApplication':
      schema = softwareApplicationSchema;
      break;
    case 'Article':
      schema = articleSchema;
      break;
    default:
      schema = websiteSchema;
  }

  // Merge with custom data if provided
  const finalSchema = data ? { ...schema, ...data } : schema;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
