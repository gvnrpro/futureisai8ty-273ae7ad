
import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onLoadingComplete }) => {
  React.useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => !isLoading && onLoadingComplete()}
    >
      <div className="loading-logo">
        <img 
          src="/lovable-uploads/0babdf62-476a-4abe-ae58-912ad729fd2f.png" 
          alt="AI8TY Logo" 
          className="w-full h-full object-contain"
        />
        <motion.div 
          className="absolute inset-0 bg-ai8ty-blue/20"
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{ 
            borderRadius: "50%",
            filter: "blur(20px)",
          }}
        />
      </div>
      
      <motion.div 
        className="loading-bar"
      >
        <motion.div
          className="loading-bar-progress"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
      
      <motion.p 
        className="loading-text"
        animate={{ 
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        Loading experience
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
