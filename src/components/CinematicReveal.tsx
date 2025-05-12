
import React, { useEffect, useRef } from 'react';

interface CinematicRevealProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
}

const CinematicReveal: React.FC<CinematicRevealProps> = ({ 
  children, 
  delay = 0,
  threshold = 0.2,
  className = ""
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('revealed');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);
  
  return (
    <div ref={elementRef} className={`cinematic-reveal ${className}`}>
      {children}
    </div>
  );
};

export default CinematicReveal;
