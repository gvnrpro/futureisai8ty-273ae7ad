
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import KineticText from '@/components/KineticText';

interface CallToActionSectionProps {
  onCtaClick: (e: React.MouseEvent) => void;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="cta-section">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <KineticText 
            text="Most brands get seen. Yours should be felt."
            className="mb-6"
            highlight={["felt"]}
            highlightClassName="text-ai8ty-violet glow-text"
          />
        </motion.div>
        
        <motion.p 
          className="text-xl max-w-2xl mx-auto mb-8 text-ai8ty-white/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          You're not here to fit in.<br />
          You're here to arrive. Loud, clear, and untouchable.
        </motion.p>
        
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <span className="text-ai8ty-blue text-lg">futureis@ai8ty.com</span>
            <span className="terminal-cursor"></span>
          </div>
          <p className="text-sm text-ai8ty-white/60 mt-2">You know what to do.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            className="bg-ai8ty-blue hover:bg-ai8ty-blue/80 text-white px-8 py-6 text-lg cinematic-button touch-ripple glow-box hover-scale-subtle"
            asChild
            onClick={onCtaClick}
          >
            <Link to="/contact">
              Let's make something they can't copy
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
