
// Enhanced SEO utilities with structured data and meta optimization

interface StructuredDataConfig {
  type: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'WebPage';
  data: Record<string, any>;
}

export const generateStructuredData = (config: StructuredDataConfig): string => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": config.type
  };

  const schemas = {
    Organization: {
      ...baseData,
      name: "AI8TY",
      url: "https://ai8ty.com",
      logo: "https://ai8ty.com/lovable-uploads/0babdf62-476a-4abe-ae58-912ad729fd2f.png",
      description: "Cinematic Creative-Tech Agency creating unforgettable digital experiences for ambitious brands.",
      foundingDate: "2024",
      industry: "Creative Technology",
      serviceArea: "Global",
      email: "futureis@ai8ty.com",
      sameAs: [
        "https://twitter.com/ai8ty",
        "https://instagram.com/ai8ty",
        "https://linkedin.com/company/ai8ty"
      ],
      ...config.data
    },
    WebSite: {
      ...baseData,
      name: "AI8TY - Cinematic Creative-Tech Agency",
      url: "https://ai8ty.com",
      description: "Creating unforgettable, emotionally charged digital experiences for ambitious brands.",
      publisher: {
        "@type": "Organization",
        name: "AI8TY"
      },
      ...config.data
    },
    WebPage: {
      ...baseData,
      name: config.data.name || "AI8TY",
      description: config.data.description || "Cinematic Creative-Tech Agency",
      url: config.data.url || "https://ai8ty.com",
      isPartOf: {
        "@type": "WebSite",
        name: "AI8TY",
        url: "https://ai8ty.com"
      },
      ...config.data
    },
    BreadcrumbList: {
      ...baseData,
      itemListElement: config.data.items || []
    }
  };

  return JSON.stringify(schemas[config.type]);
};

export const injectStructuredData = (structuredData: string): void => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = structuredData;
  document.head.appendChild(script);
};

export const updateCanonicalUrl = (url: string): void => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  
  canonical.href = url;
};

export const generatePageMetadata = (page: string) => {
  const baseUrl = 'https://ai8ty.com';
  const metadata = {
    '/': {
      title: 'AI8TY | Cinematic Creative-Tech Agency',
      description: 'Creating unforgettable, emotionally charged digital experiences for ambitious brands. We make brands that people feel in their chest.',
      keywords: 'creative agency, tech agency, digital experiences, brand design, web design, cinematic, emotional branding',
      canonical: baseUrl,
      structuredData: generateStructuredData({
        type: 'Organization',
        data: {}
      })
    },
    '/arsenal': {
      title: 'The Arsenal | AI8TY Creative-Tech Services',
      description: 'Discover our suite of creative tools and technologies that make brands unforgettable. Identity design, strategic copy, and cinematic digital presence.',
      keywords: 'creative services, brand identity, web design, strategic copy, digital presence',
      canonical: `${baseUrl}/arsenal`,
      structuredData: generateStructuredData({
        type: 'WebPage',
        data: {
          name: 'The Arsenal - Creative Services',
          description: 'Our suite of creative tools and technologies',
          url: `${baseUrl}/arsenal`
        }
      })
    },
    '/case-studies': {
      title: 'Our Work | AI8TY Case Studies & Portfolio',
      description: 'See how we have transformed ambitious brands through cinematic digital experiences. Real results, real impact.',
      keywords: 'case studies, portfolio, brand transformation, digital experiences, results',
      canonical: `${baseUrl}/case-studies`,
      structuredData: generateStructuredData({
        type: 'WebPage',
        data: {
          name: 'Case Studies & Portfolio',
          description: 'Brand transformation case studies',
          url: `${baseUrl}/case-studies`
        }
      })
    },
    '/contact': {
      title: 'Contact AI8TY | Start Your Brand Transformation',
      description: 'Ready to be unforgettable? Get in touch with our creative team and start your brand transformation journey.',
      keywords: 'contact, brand transformation, creative consultation, get started',
      canonical: `${baseUrl}/contact`,
      structuredData: generateStructuredData({
        type: 'WebPage',
        data: {
          name: 'Contact Us',
          description: 'Start your brand transformation',
          url: `${baseUrl}/contact`
        }
      })
    }
  };

  return metadata[page] || metadata['/'];
};
