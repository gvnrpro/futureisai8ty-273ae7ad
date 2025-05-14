
// SEO Utility functions for managing meta tags

interface MetaTags {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  author?: string;
  ogType?: string;
}

const DEFAULT_TAGS: MetaTags = {
  title: 'AI8TY | Cinematic Creative-Tech Agency',
  description: 'Creating unforgettable, emotionally charged digital experiences for ambitious brands.',
  image: '/social-preview.png',
  url: 'https://ai8ty.com',
  keywords: 'creative agency, tech agency, digital experiences, brand design, web design, AI, cinematic',
  author: 'AI8TY Creative',
  ogType: 'website'
};

export function updateMetaTags(tags: Partial<MetaTags> = {}): void {
  const finalTags = { ...DEFAULT_TAGS, ...tags };
  
  // Update title
  document.title = finalTags.title || DEFAULT_TAGS.title;
  
  // Get or create meta tags
  updateOrCreateMetaTag('description', finalTags.description);
  updateOrCreateMetaTag('keywords', finalTags.keywords);
  updateOrCreateMetaTag('author', finalTags.author);
  
  // Open Graph tags
  updateOrCreateMetaTag('og:title', finalTags.title);
  updateOrCreateMetaTag('og:description', finalTags.description);
  updateOrCreateMetaTag('og:image', finalTags.image);
  updateOrCreateMetaTag('og:url', finalTags.url);
  updateOrCreateMetaTag('og:type', finalTags.ogType);
  
  // Twitter Card tags
  updateOrCreateMetaTag('twitter:card', 'summary_large_image');
  updateOrCreateMetaTag('twitter:title', finalTags.title);
  updateOrCreateMetaTag('twitter:description', finalTags.description);
  updateOrCreateMetaTag('twitter:image', finalTags.image);
}

function updateOrCreateMetaTag(name: string, content?: string): void {
  if (!content) return;
  
  // Try both name and property attributes as they're used differently
  let meta = document.querySelector(`meta[name="${name}"]`) || 
             document.querySelector(`meta[property="${name}"]`);
             
  if (!meta) {
    meta = document.createElement('meta');
    // Use appropriate attribute based on tag type
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
}

export function setupStructuredData(): void {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI8TY",
    "url": "https://ai8ty.com",
    "logo": "https://ai8ty.com/lovable-uploads/0babdf62-476a-4abe-ae58-912ad729fd2f.png",
    "description": "Cinematic Creative-Tech Agency creating unforgettable digital experiences.",
    "sameAs": [
      "https://twitter.com/ai8ty",
      "https://instagram.com/ai8ty",
      "https://linkedin.com/company/ai8ty"
    ]
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
}
