
import React from 'react';
import { motion } from 'framer-motion';

const InfinityAnimation: React.FC = () => {
  return (
    <div className="infinity-container">
      <motion.div 
        className="infinity-path" 
        style={{ borderColor: '#00B4F0' }} // Ion Blue
        initial={{ rotate: 0, opacity: 0.5 }}
        animate={{ rotate: 360, opacity: 1 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 0 }}
      />
      <motion.div 
        className="infinity-path" 
        style={{ borderColor: '#00B4F0' }} // Ion Blue
        initial={{ rotate: 30, opacity: 0.5 }}
        animate={{ rotate: 390, opacity: 1 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 0.2 }}
      />
      <motion.div 
        className="infinity-path" 
        style={{ borderColor: '#9E00FF' }} // Infrared Violet
        initial={{ rotate: 60, opacity: 0.5 }}
        animate={{ rotate: 420, opacity: 1 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 0.4 }}
      />
      <motion.div 
        className="infinity-path" 
        style={{ borderColor: '#00B4F0' }} // Ion Blue
        initial={{ rotate: 90, opacity: 0.5 }}
        animate={{ rotate: 450, opacity: 1 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 0.6 }}
      />
      <motion.div 
        className="infinity-path" 
        style={{ borderColor: '#9E00FF' }} // Infrared Violet
        initial={{ rotate: 120, opacity: 0.5 }}
        animate={{ rotate: 480, opacity: 1 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 0.8 }}
      />
      <motion.div 
        className="infinity-path" 
        style={{ borderColor: '#00B4F0' }} // Ion Blue
        initial={{ rotate: 150, opacity: 0.5 }}
        animate={{ rotate: 510, opacity: 1 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }}
      />
    </div>
  );
};

export default InfinityAnimation;
