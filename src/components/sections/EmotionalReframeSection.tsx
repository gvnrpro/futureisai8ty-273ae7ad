
import React from 'react';
import { motion } from 'framer-motion';

const EmotionalReframeSection: React.FC = () => {
  return (
    <section className="reframe-section">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-ai8ty-black mb-12">Most brands get seen.<br />Yours should be felt.</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-ai8ty-black/10 p-12 rounded-lg floating"
        >
          <p className="text-3xl md:text-4xl font-light italic mb-8 text-ai8ty-black">
            "The brands that thrive tomorrow won't just be seen—they'll be felt."
          </p>
          
          <div className="flex items-center justify-center">
            <motion.div 
              className="w-16 h-1 bg-ai8ty-black"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.8 }}
            ></motion.div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-xl mb-8 text-ai8ty-black">
            You're not here to fit in.<br />
            You're here to arrive. Loud, clear, and untouchable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalReframeSection;
