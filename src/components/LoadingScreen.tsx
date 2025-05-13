
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
      className="fixed inset-0 flex flex-col items-center justify-center bg-ai8ty-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => !isLoading && onLoadingComplete()}
    >
      <div className="relative w-40 h-40 mb-8">
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
        className="h-2 bg-ai8ty-blue/30 rounded-full overflow-hidden w-48 mt-4"
      >
        <motion.div
          className="h-full bg-ai8ty-blue"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
      
      <motion.p 
        className="mt-4 text-ai8ty-white/70 text-sm"
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
