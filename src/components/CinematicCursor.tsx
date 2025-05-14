
import React, { useState, useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CinematicCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Use motion values for smooth cursor movement
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Add spring physics for smoother following effect
  const springConfig = { damping: 25, stiffness: 700 };
  const dotSpringX = useSpring(cursorX, springConfig);
  const dotSpringY = useSpring(cursorY, springConfig);
  
  // Cursor with slight delay for trailing effect
  const trailSpringX = useSpring(cursorX, { damping: 40, stiffness: 300 });
  const trailSpringY = useSpring(cursorY, { damping: 40, stiffness: 300 });
  
  useEffect(() => {
    // Don't do anything on mobile
    if (isMobile) return;
    
    // Handle cursor visibility initially
    setVisible(false);
    
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!visible) setVisible(true);
      
      // Check what element is being hovered with improved detection
      const target = e.target as HTMLElement;
      
      // Better detection for interactive elements
      const isLink = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer');
        
      const isText = 
        target.tagName.toLowerCase() === 'p' || 
        target.tagName.toLowerCase().match(/h[1-6]/) ||
        target.tagName.toLowerCase() === 'span' ||
        target.classList.contains('text');
        
      const isInput =
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.getAttribute('contenteditable') === 'true';
        
      if (isLink) {
        setHoveredElement('link');
      } else if (isText) {
        setHoveredElement('text');
      } else if (isInput) {
        setHoveredElement('input');
      } else {
        setHoveredElement(null);
      }
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);
    
    // Ensure cursor works even when scrolling
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile, visible, cursorX, cursorY]);
  
  // Return null if on mobile
  if (isMobile) return null;
  
  return (
    <>
      {/* Small dot that follows cursor precisely */}
      <motion.div 
        ref={dotRef}
        className="reactive-cursor-dot bg-ai8ty-blue fixed z-50 mix-blend-difference pointer-events-none"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          opacity: visible ? 1 : 0,
        }}
      />
      
      {/* Main cursor circle */}
      <motion.div
        className="reactive-cursor fixed z-50 mix-blend-difference pointer-events-none"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          opacity: visible ? 0.75 : 0,
        }}
        animate={{
          opacity: visible ? 0.75 : 0,
          scale: clicked ? 0.7 : hoveredElement === 'link' ? 1.5 : hoveredElement === 'text' ? 1.2 : hoveredElement === 'input' ? 0.5 : 1,
          borderRadius: '100%',
          borderWidth: hoveredElement === 'link' ? '2px' : '0px',
          backgroundColor: hoveredElement === 'link' ? 'rgba(0, 180, 240, 0.5)' : '#00B4F0',
        }}
        transition={{
          type: 'spring',
          mass: 0.6,
          damping: 20
        }}
      >
        {hoveredElement === 'link' && (
          <motion.span 
            className="text-xs font-light"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            View
          </motion.span>
        )}
      </motion.div>
    </>
  );
};

export default CinematicCursor;
