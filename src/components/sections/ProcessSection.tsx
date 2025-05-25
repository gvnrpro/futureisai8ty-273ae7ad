
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import KineticText from '@/components/KineticText';

interface ProcessSectionProps {
  onCtaClick: (e: React.MouseEvent) => void;
}

const processSteps = [
  {
    number: "01",
    title: "We Listen Like Analysts",
    desc: "We dissect the pain behind the problem.",
  },
  {
    number: "02",
    title: "We Think Like Architects",
    desc: "Every decision. Every pixel. Every word—deliberate.",
  },
  {
    number: "03",
    title: "We Execute Like Artists",
    desc: "The result? Something that doesn't just look different. It feels different.",
  }
];

const ProcessSection: React.FC<ProcessSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="process-section morph-bg">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <KineticText 
            text="No fluff. Just fire."
            className="text-center mb-16"
            highlight={["fire"]}
            highlightClassName="text-ai8ty-blue glow-text"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-ai8ty-black/50 p-8 rounded-lg border border-ai8ty-blue/30 hover:border-ai8ty-violet/50 transition-all duration-300 holographic hover-tilt"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2 * i }}
            >
              <div className="w-12 h-12 bg-ai8ty-blue/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-xl font-bold text-ai8ty-blue">{step.number}</span>
              </div>
              <h4 className="text-xl mb-4">{step.title}</h4>
              <p className="text-ai8ty-white/70">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button 
            className="bg-ai8ty-blue hover:bg-ai8ty-blue/80 text-white px-8 py-6 text-lg cinematic-button touch-ripple hover-scale-subtle"
            asChild
            onClick={onCtaClick}
          >
            <Link to="/contact">
              Let's disrupt something
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
