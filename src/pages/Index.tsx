import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import KineticText, { KineticLetters } from '@/components/KineticText';
import ParticleBackground from '@/components/3d/ParticleBackground';
import InfinityModel from '@/components/3d/InfinityModel';
import AnimatedServiceCard from '@/components/AnimatedServiceCard';
import AnimatedCaseStudyCard from '@/components/AnimatedCaseStudyCard';
import { useIsMobile } from '@/hooks/use-mobile';

const services = [
  {
    title: "Identity Design",
    description: "We create bold, memorable brand identities that communicate your unique promise.",
    outcome: "A brand identity that creates instant recognition and emotional connection.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ai8ty-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 001 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
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
];

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

const Index: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroHeight = useRef<number>(0);
  
  // Parallax and animation values
  const headerY = useTransform(scrollY, [0, 500], [0, -150]);
  const headerSpring = useSpring(headerY, { damping: 15, stiffness: 100 });
  
  const parallaxY1 = useTransform(scrollY, [0, 1000], [0, -300]);
  const parallaxY2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Animation properties
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMounted(true);
    
    if (heroRef.current) {
      heroHeight.current = heroRef.current.offsetHeight;
    }

    // Ensure the animation completes
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleCtaClick = (e: React.MouseEvent) => {
    // Add ripple effect to button
    const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    (e.currentTarget as HTMLElement).style.setProperty('--x', `${x}px`);
    (e.currentTarget as HTMLElement).style.setProperty('--y', `${y}px`);
    (e.currentTarget as HTMLElement).classList.add('touched');
    
    setTimeout(() => {
      (e.currentTarget as HTMLElement).classList.remove('touched');
    }, 1000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section with Improved 3D Background */}
      <section 
        ref={heroRef}
        className="cinematic-section relative min-h-screen bg-ai8ty-black overflow-hidden z-10"
      >
        {/* Persistent background with different z-index to ensure it stays behind content */}
        <div className="absolute inset-0 z-0">
          <ParticleBackground className="opacity-70" />
        </div>
        
        <div className="container z-20 relative mx-auto flex flex-col items-center justify-center text-center pt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ y: headerSpring }}
            className="z-20"
          >
            <KineticText 
              text="This isn't branding. This is what brands wish they were."
              className="mb-6"
              textClassName="text-ai8ty-white"
              highlight={["brands wish they were"]}
              highlightClassName="text-ai8ty-blue glow-text"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="z-20"
          >
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-ai8ty-white/80">
              You're not here to "look nice."<br />
              You're here to be impossible to ignore.<br />
              To burn into memory. To make people stop scrolling—and feel like they missed something important if they don't click.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 z-20"
          >
            <Button 
              className="bg-ai8ty-blue hover:bg-ai8ty-blue/80 text-white px-8 py-6 text-lg cinematic-button touch-ripple hover-scale-subtle"
              asChild
              onClick={handleCtaClick}
            >
              <Link to="/contact">
                Show me the madness
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#00B4F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>

      {/* Positioning Section with improved animation */}
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
                  highlightClassName="text-ai8ty-blue glow-text"
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
                  className="bg-ai8ty-blue hover:bg-ai8ty-blue/80 text-white px-6 py-5 text-lg cinematic-button touch-ripple hover-scale-subtle"
                  asChild
                  onClick={handleCtaClick}
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

      {/* Solution Section with improved animation */}
      <section className="cinematic-section bg-ai8ty-black">
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
              <AnimatedServiceCard 
                title="AI-enhanced Systems"
                description="We leverage cutting-edge AI to amplify your brand's reach and effectiveness."
                outcome="Systems that scale your impact while maintaining your unique voice."
                index={3}
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ai8ty-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              />
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
              onClick={handleCtaClick}
            >
              <Link to="/contact">
                Build the brand they'll wish was theirs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Process Section with improved animation */}
      <section className="cinematic-section bg-ai8ty-gray morph-bg">
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
            {[
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
            ].map((step, i) => (
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
              onClick={handleCtaClick}
            >
              <Link to="/contact">
                Let's disrupt something
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Social Proof Section with enhanced interaction */}
      <section className="cinematic-section bg-ai8ty-black gradient-shift">
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

      {/* Emotional Reframe Section with floating animation */}
      <section className="cinematic-section bg-ai8ty-blue">
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

      {/* Call to Action Section with terminal-style animation */}
      <section className="cinematic-section bg-ai8ty-black">
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
              onClick={handleCtaClick}
            >
              <Link to="/contact">
                Let's make something they can't copy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
