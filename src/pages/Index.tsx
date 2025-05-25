
import React, { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/sections/HeroSection';
import PositioningSection from '@/components/sections/PositioningSection';
import SolutionSection from '@/components/sections/SolutionSection';
import ProcessSection from '@/components/sections/ProcessSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import EmotionalReframeSection from '@/components/sections/EmotionalReframeSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { updateCanonicalUrl, generatePageMetadata, injectStructuredData } from '@/lib/enhanced-seo-utils';
import { shouldUseReducedAnimations } from '@/lib/performance-utils';

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();
  const reduceAnimations = shouldUseReducedAnimations();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMounted(true);
    
    // Enhanced SEO setup
    const metadata = generatePageMetadata('/');
    document.title = metadata.title;
    updateCanonicalUrl(metadata.canonical);
    injectStructuredData(metadata.structuredData);

    // Loading simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, reduceAnimations ? 1000 : 3000);

    return () => clearTimeout(timer);
  }, [reduceAnimations]);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    try {
      const button = e.currentTarget as HTMLElement;
      if (!button) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
      button.classList.add('touched');
      
      setTimeout(() => {
        button.classList.remove('touched');
      }, 1000);
    } catch (error) {
      console.error("Error in handleCtaClick:", error);
    }
  };

  if (!showContent) {
    return <LoadingScreen isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="flex flex-col">
      <HeroSection onCtaClick={handleCtaClick} />
      <PositioningSection onCtaClick={handleCtaClick} />
      <SolutionSection onCtaClick={handleCtaClick} />
      <ProcessSection onCtaClick={handleCtaClick} />
      <SocialProofSection />
      <EmotionalReframeSection />
      <CallToActionSection onCtaClick={handleCtaClick} />
    </div>
  );
};

export default Index;
