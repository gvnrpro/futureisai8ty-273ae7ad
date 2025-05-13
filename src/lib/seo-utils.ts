
/**
 * SEO Utilities for AI8TY website
 */

/**
 * Updates the page metadata for SEO
 * @param title Page title
 * @param description Meta description
 * @param keywords Meta keywords
 * @param image Open Graph image
 */
export const updatePageMeta = (
  title: string,
  description: string,
  keywords: string = "",
  image: string = "https://ai8ty.com/social-preview.png"
) => {
  // Update title
  document.title = `${title} | AI8TY`;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }
  
  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute("content", keywords);
  }
  
  // Update OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  
  if (ogTitle) ogTitle.setAttribute("content", `${title} | AI8TY`);
  if (ogDesc) ogDesc.setAttribute("content", description);
  if (ogImage) ogImage.setAttribute("content", image);
  
  // Update Twitter tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  
  if (twitterTitle) twitterTitle.setAttribute("content", `${title} | AI8TY`);
  if (twitterDesc) twitterDesc.setAttribute("content", description);
  if (twitterImage) twitterImage.setAttribute("content", image);
};
