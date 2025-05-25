
import React from 'react';
import { motion } from 'framer-motion';
import KineticText from '@/components/KineticText';
import AnimatedCaseStudyCard from '@/components/AnimatedCaseStudyCard';

const caseStudies = [
  {
    title: "Future Fitness",
    image: "/placeholder.svg",
    stats: "+230%",
    description: "A fitness tech startup reimagined with a cinematic brand identity and interactive web presence.",
    tags: ["Brand", "Web", "Motion"],
  },
  {
    title: "Quantum Financial",
    image: "/placeholder.svg",
    stats: "+180%",
    description: "A challenger bank with a new emotionally-driven digital experience that builds instant trust.",
    tags: ["Web", "UX", "Strategy"],
  },
  {
    title: "Nebula Skincare",
    image: "/placeholder.svg",
    stats: "+340%",
    description: "A luxury skincare brand with an immersive product showcase that drives conversions.",
    tags: ["Identity", "Copy", "Web"],
  },
];

const SocialProofSection: React.FC = () => {
  return (
    <section className="case-studies-section">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <KineticText 
            text="We're not for everyone. Just the ones who win."
            className="text-center mb-16"
            highlight={["win"]}
            highlightClassName="text-ai8ty-blue glow-text"
          />
        </motion.div>
        
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl mb-6 text-ai8ty-white/80">
            We've rebranded legacy players.<br />
            Helped underdogs skip the line.<br />
            And created presence for names you now recognize.
          </p>
          
          <p className="text-xl mb-6 text-ai8ty-white/80">
            No fake countdowns. No fake "only 3 left."<br />
            Just actual work that has people saying:<br />
            "Who the f* made this?"
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <AnimatedCaseStudyCard 
              key={i} 
              caseStudy={study} 
              index={i} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
