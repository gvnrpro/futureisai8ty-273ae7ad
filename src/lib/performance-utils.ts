
// Performance optimization utilities

export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') return { isLowEnd: false, isMobile: false };
  
  const isMobile = window.innerWidth < 768;
  const isLowEnd = navigator.hardwareConcurrency <= 4 || 
                   (navigator as any).deviceMemory <= 4 ||
                   navigator.userAgent.includes('Android') && isMobile;
  
  return { isLowEnd, isMobile };
};

export const getOptimalParticleCount = () => {
  const { isLowEnd, isMobile } = getDeviceCapabilities();
  
  if (isLowEnd) return 300;
  if (isMobile) return 600;
  return 1200;
};

export const shouldUseReducedAnimations = () => {
  if (typeof window === 'undefined') return true;
  
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const { isLowEnd } = getDeviceCapabilities();
  
  return prefersReducedMotion || isLowEnd;
};

export const preloadCriticalAssets = (assets: string[]) => {
  assets.forEach(asset => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = asset;
    
    if (asset.match(/\.(woff2?|ttf|otf)$/)) {
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
    } else if (asset.match(/\.(jpe?g|png|webp|avif)$/)) {
      link.as = 'image';
    }
    
    document.head.appendChild(link);
  });
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  }) as T;
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T => {
  let inThrottle: boolean;
  return ((...args: any[]) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
};
