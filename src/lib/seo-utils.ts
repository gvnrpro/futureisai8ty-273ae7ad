
// SEO Utilities for AI8TY
interface MetaTagProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
}

export const DEFAULT_META = {
  title: 'AI8TY | Cinematic Creative-Tech Agency',
  description: 'Creating unforgettable, emotionally charged digital experiences for ambitious brands and challenger companies.',
  keywords: 'creative agency, brand identity, digital experiences, web design, cinematic branding, AI8TY, strategic copy',
  ogImage: 'https://ai8ty.com/social-preview.png',
  ogUrl: 'https://ai8ty.com',
  ogType: 'website' as const,
  twitterCard: 'summary_large_image' as const
};

export const updateMetaTags = (props: MetaTagProps = {}): void => {
  const meta = { ...DEFAULT_META, ...props };
  
  // Update title
  document.title = meta.title || DEFAULT_META.title;
  
  // Update meta tags
  const metaTags = {
    'description': meta.description,
    'keywords': meta.keywords,
    'og:title': meta.title,
    'og:description': meta.description,
    'og:type': meta.ogType,
    'og:url': meta.ogUrl,
    'og:image': meta.ogImage,
    'twitter:card': meta.twitterCard,
    'twitter:title': meta.title,
    'twitter:description': meta.description,
    'twitter:image': meta.ogImage
  };
  
  // Update or create meta tags
  Object.entries(metaTags).forEach(([name, content]) => {
    if (!content) return;
    
    // Check if it's an Open Graph or Twitter tag
    const isOg = name.startsWith('og:');
    const isTwitter = name.startsWith('twitter:');
    
    // Get existing tag or create new one
    let metaTag: HTMLMetaElement | null;
    
    if (isOg || isTwitter) {
      metaTag = document.querySelector(`meta[property="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', name);
        document.head.appendChild(metaTag);
      }
    } else {
      metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
    }
    
    // Set content
    metaTag.setAttribute('content', content);
  });
};
