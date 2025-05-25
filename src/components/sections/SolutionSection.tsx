
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import KineticText from '@/components/KineticText';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';

interface SolutionSectionProps {
  onCtaClick: (e: React.MouseEvent) => void;
}

const services = [
  {
    title: "Identity Design",
    description: "We create bold, memorable brand identities that communicate your unique promise.",
    outcome: "A brand identity that creates instant recognition and emotional connection.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ai8ty-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 001 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 00-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
  },
  {
    title: "Strategic Copy",
    description: "We develop emotionally resonant messaging that speaks directly to your audience's desires.",
    outcome: "Copy that converts visitors into believers and drives meaningful action.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ai8ty-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
  },
  {
    title: "Cinematic Digital Presence",
    description: "We craft immersive digital experiences that tell your brand story through motion and interaction.",
    outcome: "A website that elevates your credibility and drives 2-3x more qualified leads.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ai8ty-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  {
    title: "AI-enhanced Systems",
    description: "We leverage cutting-edge AI to amplify your brand's reach and effectiveness.",
    outcome: "Systems that scale your impact while maintaining your unique voice.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ai8ty-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
];

const SolutionSection: React.FC<SolutionSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="services-section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <KineticText 
            text="We make brands that people feel in their chest."
            className="text-center mb-16"
            highlight={["feel in their chest"]}
            highlightClassName="text-ai8ty-blue glow-text"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-6 text-ai8ty-white/80"
          >
            <ul className="space-y-4">
              <li>• We don't do "pretty."</li>
              <li>• We do unforgettable.</li>
              <li>• We don't do "functional."</li>
              <li>• We do revenue, gravity, heat.</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl mb-6 text-ai8ty-white/80"
          >
            <p className="mb-4">You'll walk away with:</p>
            <ul className="space-y-4">
              <li>• A brand that hits like a mood.</li>
              <li>• A site that makes people assume you're funded.</li>
              <li>• Messaging that stalks their mind for days.</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h4 className="text-center text-2xl mb-8">Our work lives at the crossroads of:</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedServiceCard 
                key={i}
                title={service.title}
                description={service.description}
                outcome={service.outcome}
                index={i}
                icon={service.icon}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <Button 
            className="bg-ai8ty-blue hover:bg-ai8ty-blue/80 text-white px-8 py-6 text-lg cinematic-button touch-ripple hover-scale-subtle"
            asChild
            onClick={onCtaClick}
          >
            <Link to="/contact">
              Build the brand they'll wish was theirs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
