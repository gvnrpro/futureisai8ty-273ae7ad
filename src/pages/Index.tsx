
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
    title: "Cinematic Web Design",
    description: "We craft immersive digital experiences that tell your brand story through motion and interaction.",
    outcome: "A website that elevates your credibility and drives 2-3x more qualified leads.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ai8ty-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  {
    title: "Copywriting",
    description: "We develop emotionally resonant messaging that speaks directly to your audience's desires.",
    outcome: "Copy that converts visitors into believers and drives meaningful action.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ai8ty-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
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
        className="cinematic-section relative min-h-screen bg-ai8ty-black overflow-visible z-10"
      >
        {/* Persistent background with different z-index to ensure it stays behind content */}
        <ParticleBackground className="opacity-70" />
        
        <div className="container mx-auto flex flex-col items-center justify-center text-center z-10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ y: headerSpring }}
          >
            <KineticText 
              text="Create the Unforgettable"
              className="mb-6"
              textClassName="text-ai8ty-white"
              highlight={["Unforgettable"]}
              highlightClassName="text-ai8ty-blue glow-text"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-ai8ty-white/80">
              We help ambitious brands, startups, and challenger companies experience
              an emotionally charged digital presence.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-6"
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
            <Button 
              variant="outline" 
              className="border-ai8ty-white/30 text-ai8ty-white hover:bg-ai8ty-white/10 px-8 py-6 text-lg touch-ripple hover-scale-subtle"
              asChild
              onClick={handleCtaClick}
            >
              <Link to="/case-studies">
                <Eye className="mr-2 h-5 w-5" />
                View our work
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
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
                  text="We position brands at the forefront"
                  className="mb-6"
                  highlight={["forefront"]}
                  highlightClassName="text-ai8ty-blue glow-text"
                />
              </motion.div>
              
              <motion.p
                className="text-xl mb-6 text-ai8ty-white/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                In a digital landscape crowded with noise, your brand deserves to be unmistakable.
                We don't just build websites—we craft emotional digital journeys that capture attention
                and convert visitors into believers.
              </motion.p>
              
              <motion.ul
                className="space-y-3 text-ai8ty-white/80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.4, staggerChildren: 0.1 }}
              >
                {["Strategic brand positioning", "Cinematic web experiences", "Emotion-driven conversions"].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                  >
                    <span className="inline-block w-2 h-2 bg-ai8ty-blue rounded-full mr-3"></span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
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

      {/* Problem Section with animation */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <KineticText 
              text="The Problem"
              className="text-center mb-16"
              highlight={["Problem"]}
              highlightClassName="text-ai8ty-violet glow-text"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Generic Digital Presence",
                desc: "Most businesses blend into the digital noise with cookie-cutter websites that fail to create emotional connections."
              },
              {
                num: "02",
                title: "Low Conversion Rates",
                desc: "Beautiful designs aren't enough when they fail to convert visitors into customers or drive meaningful action."
              },
              {
                num: "03",
                title: "Tech Without Strategy",
                desc: "Flashy technology without strategic direction leads to impressive yet ineffective digital experiences."
              }
            ].map((problem, i) => (
              <motion.div
                key={i}
                className="bg-ai8ty-gray/20 p-8 rounded-lg border border-ai8ty-gray/30 hover:border-ai8ty-blue/50 transition-all duration-300 holographic hover-tilt"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="w-12 h-12 bg-ai8ty-blue/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-ai8ty-blue">{problem.num}</span>
                </div>
                <h4 className="text-xl mb-4 flicker-text">{problem.title}</h4>
                <p className="text-ai8ty-white/70">{problem.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section with improved animation */}
      <section className="cinematic-section bg-ai8ty-gray morph-bg">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <KineticText 
              text="The Solution"
              className="text-center mb-6"
              highlight={["Solution"]}
              highlightClassName="text-ai8ty-blue glow-text"
            />
          </motion.div>
          
          <motion.p 
            className="text-center text-xl max-w-3xl mx-auto mb-16 text-ai8ty-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We combine strategic thinking with cinematic design to create digital experiences
            that don't just look amazing—they perform.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="perspective"
              initial={{ opacity: 0, rotateY: -10 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="aspect-video bg-ai8ty-black/50 overflow-hidden rounded-lg border border-ai8ty-blue/30 relative group preserve-3d hover-scale-subtle">
                <div className="absolute inset-0 flex items-center justify-center backface-hidden transform transition-transform duration-500 ease-out">
                  <span className="text-4xl text-ai8ty-blue opacity-30 group-hover:opacity-60 transition-opacity duration-300 glow-text">CINEMATIC PREVIEW</span>
                </div>
              </div>
            </motion.div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="draw-line"
              >
                <h3 className="mb-6">Cinematic Web Experiences</h3>
              </motion.div>
              
              <motion.p 
                className="text-xl mb-8 text-ai8ty-white/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                We craft websites that tell your brand story through motion, interaction,
                and emotional design. Every pixel serves a purpose—to create unforgettable
                impressions that convert.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Button 
                  className="bg-ai8ty-blue hover:bg-ai8ty-blue/80 text-white px-6 py-5 text-lg cinematic-button touch-ripple hover-scale-subtle"
                  asChild
                  onClick={handleCtaClick}
                >
                  <Link to="/arsenal">
                    Explore our arsenal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with enhanced animation */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <KineticText 
              text="The Arsenal"
              className="text-center mb-16"
              highlight={["Arsenal"]}
              highlightClassName="text-ai8ty-blue glow-text"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>
      
      {/* Case Studies Preview with enhanced interaction */}
      <section className="cinematic-section bg-ai8ty-gray gradient-shift">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between mb-16"
          >
            <KineticText 
              text="Featured Work"
              highlight={["Featured"]}
              highlightClassName="text-ai8ty-cyan glow-text"
            />
            
            <Button 
              variant="outline" 
              className="border-ai8ty-white/30 mt-4 md:mt-0 text-ai8ty-white hover:bg-ai8ty-white/10 touch-ripple hover-scale-subtle"
              asChild
              onClick={handleCtaClick}
            >
              <Link to="/case-studies">
                View all case studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
            <h2 className="text-ai8ty-black mb-12">Change Your Perspective</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto bg-ai8ty-black/10 p-12 rounded-lg floating"
          >
            <KineticLetters
              text={"\"The brands that thrive tomorrow won't just be seen—they'll be felt.\""}
              className="text-3xl md:text-4xl font-light italic mb-8 text-ai8ty-black"
              textClassName="text-ai8ty-black"
              delay={0.5}
            />
            
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
              text="Ready to be Unforgettable?"
              className="mb-6"
              highlight={["Unforgettable?"]}
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
            Let's create a digital experience that captivates your audience and drives your business forward.
          </motion.p>
          
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-ai8ty-blue text-lg">futureis@ai8ty.com</span>
            <span className="terminal-cursor"></span>
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
                Make me unforgettable
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
