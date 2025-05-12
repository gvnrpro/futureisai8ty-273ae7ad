
import React, { useState, useEffect } from 'react';

const CinematicCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnterLink = () => setLinkHovered(true);
    const handleMouseLeaveLink = () => setLinkHovered(false);
    
    const handleMouseLeave = () => setHidden(true);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);
  
  useEffect(() => {
    const handleLinkChanges = () => {
      const links = document.querySelectorAll('a, button, [role="button"]');
      
      const handleMouseEnterLink = () => setLinkHovered(true);
      const handleMouseLeaveLink = () => setLinkHovered(false);
      
      links.forEach(link => {
        link.addEventListener('mouseenter', handleMouseEnterLink);
        link.addEventListener('mouseleave', handleMouseLeaveLink);
      });
      
      return () => {
        links.forEach(link => {
          link.removeEventListener('mouseenter', handleMouseEnterLink);
          link.removeEventListener('mouseleave', handleMouseLeaveLink);
        });
      };
    };
    
    // Initial setup
    const cleanup = handleLinkChanges();
    
    // Setup MutationObserver to watch for new links
    const observer = new MutationObserver(handleLinkChanges);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      cleanup();
      observer.disconnect();
    };
  }, []);
  
  return (
    <>
      <div 
        className={`reactive-cursor-dot bg-ai8ty-pink ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`
        }}
      />
      <div 
        className={`reactive-cursor bg-ai8ty-pink ${hidden ? 'opacity-0' : 'opacity-75'} ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CinematicCursor;
