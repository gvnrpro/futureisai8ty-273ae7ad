
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from '@/components/3d/ParticleBackground';

interface HeroSectionProps {
  onCtaClick: (e: React.MouseEvent) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const headerY = useTransform(scrollY, [0, 500], [0, -150]);
  const headerSpring = useSpring(headerY, { damping: 15, stiffness: 100 });

  return (
    <section 
      ref={heroRef}
      className="cinematic-section relative min-h-screen bg-black overflow-hidden z-10"
    >
      {/* Logo in top-left corner */}
      <div className="fixed top-4 left-4 z-50 w-16 h-16 md:w-20 md:h-20">
        <img 
          src="/lovable-uploads/0babdf62-476a-4abe-ae58-912ad729fd2f.png" 
          alt="AI8TY Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Background with optimized particles */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground className="opacity-70" />
      </div>
      
      <div className="container z-20 relative mx-auto flex flex-col items-center justify-center text-center pt-24 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y: headerSpring }}
          className="z-20"
        >
          <h1 className="hero-headline">
            This isn't branding. This is what <span className="text-ai8ty-blue glow-text">brands wish they were</span>.
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="z-20"
        >
          <p className="hero-subheadline">
            You're not here to "look nice."<br />
            You're here to be impossible to ignore.<br />
            To burn into memory. To make people stop scrolling—and feel like they missed something important if they don't click.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-cta-container z-20"
        >
          <Button 
            className="bg-[#00B4F0] hover:bg-[#00B4F0]/80 text-white px-8 py-6 text-lg smooth-button-transition touch-ripple hover-scale-subtle"
            asChild
            onClick={onCtaClick}
          >
            <Link to="/contact">
              Show me the madness
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#00B4F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
