import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isLoading) {
      // Create smoother progress animation
      timer = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + Math.random() * 3;
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 50);
    } else {
      setProgress(100);
    }
    
    if (progress >= 100) {
      // Delay transition slightly to ensure animations complete
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isLoading, progress, onLoadingComplete]);
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-ai8ty-black flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading || progress < 100 ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      onAnimationComplete={() => {
        if (!isLoading && progress >= 100) {
          setTimeout(onLoadingComplete, 200);
        }
      }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-40 h-40 mb-8"
      >
        <img 
          src="/lovable-uploads/0babdf62-476a-4abe-ae58-912ad729fd2f.png" 
          alt="AI8TY Logo" 
          className="w-full h-full object-contain"
        />
      </motion.div>
      
      <div className="w-64 h-2 bg-ai8ty-black/30 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-ai8ty-blue"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>
      
      <motion.p 
        className="text-ai8ty-white/70 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {isLoading ? "Loading experience..." : "Ready"}
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
