
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import KineticText from '@/components/KineticText';
import InfinityModel from '@/components/3d/InfinityModel';

interface PositioningSectionProps {
  onCtaClick: (e: React.MouseEvent) => void;
}

const PositioningSection: React.FC<PositioningSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="cinematic-section bg-ai8ty-gray gradient-shift">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              <KineticText 
                text={'Most "agencies" are factories.'}
                className="mb-2"
                highlight={["factories"]}
                highlightClassName="text-ai8ty-blue"
              />
              <KineticText 
                text="Templates. Packages. Smile-and-send PDFs."
                className="mb-6"
                textClassName="text-lg md:text-xl"
                highlight={["Templates"]}
                highlightClassName="text-ai8ty-violet"
              />
            </motion.div>
            
            <motion.div
              className="text-xl mb-6 text-ai8ty-white/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-3">They tell you what's trending.</p>
              <p className="mb-3">We tell you what's next.</p>
              <p className="mb-3">AI8TY exists for the brand builder who doesn't just want results—</p>
              <p className="mb-3">They want revenge.</p>
              <p>On mediocrity. On obscurity. On being slept on.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                className="bg-ai8ty-blue hover:bg-ai8ty-blue/80 text-white px-6 py-5 text-lg smooth-button-transition touch-ripple hover-scale-subtle"
                asChild
                onClick={onCtaClick}
              >
                <Link to="/contact">
                  I want my power back
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <InfinityModel />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
