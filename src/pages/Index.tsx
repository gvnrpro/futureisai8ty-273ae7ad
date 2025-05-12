
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CinematicReveal from '@/components/CinematicReveal';
import InfinityAnimation from '@/components/InfinityAnimation';
import { ArrowRight, Eye } from 'lucide-react';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="cinematic-section relative h-screen bg-ai8ty-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-5"></div>
        
        <div className="container mx-auto flex flex-col items-center justify-center text-center z-10">
          <CinematicReveal delay={300}>
            <h1 className="glitch-effect text-ai8ty-white leading-tight mb-6">
              Create the <span className="text-ai8ty-pink">Unforgettable</span>
            </h1>
          </CinematicReveal>
          
          <CinematicReveal delay={600}>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-ai8ty-white/80">
              We help ambitious brands, startups, and challenger companies experience
              an emotionally charged digital presence.
            </p>
          </CinematicReveal>
          
          <CinematicReveal delay={900}>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button 
                className="bg-ai8ty-pink hover:bg-ai8ty-pink/80 text-white px-8 py-6 text-lg"
                asChild
              >
                <Link to="/contact">
                  Show me the madness
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-ai8ty-white/30 text-ai8ty-white hover:bg-ai8ty-white/10 px-8 py-6 text-lg"
                asChild
              >
                <Link to="/case-studies">
                  <Eye className="mr-2 h-5 w-5" />
                  View our work
                </Link>
              </Button>
            </div>
          </CinematicReveal>
        </div>
        
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="cinematic-section bg-ai8ty-gray">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <CinematicReveal>
                <h2 className="mb-6">We position brands at the <span className="text-ai8ty-pink">forefront</span></h2>
              </CinematicReveal>
              
              <CinematicReveal delay={200}>
                <p className="text-xl mb-6 text-ai8ty-white/80">
                  In a digital landscape crowded with noise, your brand deserves to be unmistakable.
                  We don't just build websites—we craft emotional digital journeys that capture attention
                  and convert visitors into believers.
                </p>
              </CinematicReveal>
              
              <CinematicReveal delay={400}>
                <ul className="space-y-3 text-ai8ty-white/80">
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-ai8ty-pink rounded-full mr-3"></span>
                    Strategic brand positioning
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-ai8ty-pink rounded-full mr-3"></span>
                    Cinematic web experiences
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-ai8ty-pink rounded-full mr-3"></span>
                    Emotion-driven conversions
                  </li>
                </ul>
              </CinematicReveal>
            </div>
            
            <div className="relative">
              <CinematicReveal delay={300}>
                <InfinityAnimation />
              </CinematicReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto">
          <CinematicReveal>
            <h2 className="text-center mb-16">The <span className="text-ai8ty-pink">Problem</span></h2>
          </CinematicReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CinematicReveal delay={200}>
              <div className="bg-ai8ty-gray/20 p-8 rounded-lg border border-ai8ty-gray/30 hover:border-ai8ty-pink/50 transition-all duration-300">
                <div className="w-12 h-12 bg-ai8ty-pink/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-ai8ty-pink">01</span>
                </div>
                <h4 className="text-xl mb-4">Generic Digital Presence</h4>
                <p className="text-ai8ty-white/70">
                  Most businesses blend into the digital noise with cookie-cutter websites that fail to create emotional connections.
                </p>
              </div>
            </CinematicReveal>
            
            <CinematicReveal delay={400}>
              <div className="bg-ai8ty-gray/20 p-8 rounded-lg border border-ai8ty-gray/30 hover:border-ai8ty-pink/50 transition-all duration-300">
                <div className="w-12 h-12 bg-ai8ty-pink/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-ai8ty-pink">02</span>
                </div>
                <h4 className="text-xl mb-4">Low Conversion Rates</h4>
                <p className="text-ai8ty-white/70">
                  Beautiful designs aren't enough when they fail to convert visitors into customers or drive meaningful action.
                </p>
              </div>
            </CinematicReveal>
            
            <CinematicReveal delay={600}>
              <div className="bg-ai8ty-gray/20 p-8 rounded-lg border border-ai8ty-gray/30 hover:border-ai8ty-pink/50 transition-all duration-300">
                <div className="w-12 h-12 bg-ai8ty-pink/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-ai8ty-pink">03</span>
                </div>
                <h4 className="text-xl mb-4">Tech Without Strategy</h4>
                <p className="text-ai8ty-white/70">
                  Flashy technology without strategic direction leads to impressive yet ineffective digital experiences.
                </p>
              </div>
            </CinematicReveal>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="cinematic-section bg-ai8ty-gray">
        <div className="container mx-auto">
          <CinematicReveal>
            <h2 className="text-center mb-6">The <span className="text-ai8ty-pink">Solution</span></h2>
          </CinematicReveal>
          
          <CinematicReveal delay={200}>
            <p className="text-center text-xl max-w-3xl mx-auto mb-16 text-ai8ty-white/80">
              We combine strategic thinking with cinematic design to create digital experiences
              that don't just look amazing—they perform.
            </p>
          </CinematicReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <CinematicReveal delay={400}>
              <div className="aspect-video bg-ai8ty-black/50 overflow-hidden rounded-lg border border-ai8ty-pink/30 relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl text-ai8ty-pink opacity-30 group-hover:opacity-60 transition-opacity duration-300">CINEMATIC PREVIEW</span>
                </div>
              </div>
            </CinematicReveal>
            
            <div>
              <CinematicReveal delay={500}>
                <h3 className="mb-6">Cinematic Web Experiences</h3>
              </CinematicReveal>
              
              <CinematicReveal delay={600}>
                <p className="text-xl mb-8 text-ai8ty-white/80">
                  We craft websites that tell your brand story through motion, interaction,
                  and emotional design. Every pixel serves a purpose—to create unforgettable
                  impressions that convert.
                </p>
              </CinematicReveal>
              
              <CinematicReveal delay={700}>
                <Button 
                  className="bg-ai8ty-pink hover:bg-ai8ty-pink/80 text-white px-6 py-5 text-lg"
                  asChild
                >
                  <Link to="/arsenal">
                    Explore our arsenal
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CinematicReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto">
          <CinematicReveal>
            <h2 className="text-center mb-6">Our <span className="text-ai8ty-pink">Process</span></h2>
          </CinematicReveal>
          
          <CinematicReveal delay={200}>
            <p className="text-center text-xl max-w-3xl mx-auto mb-16 text-ai8ty-white/80">
              We follow a strategic, results-driven approach to create digital experiences
              that captivate audiences and drive business growth.
            </p>
          </CinematicReveal>
          
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-[50%] w-px bg-ai8ty-pink/30"></div>
            
            <div className="space-y-24">
              <CinematicReveal delay={300}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-8 items-center">
                  <div className="text-right md:pr-8">
                    <h4 className="text-2xl mb-3">Discovery</h4>
                    <p className="text-ai8ty-white/70">
                      We dive deep into your brand's identity, goals, and audience to understand what makes you unique.
                    </p>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-ai8ty-pink flex items-center justify-center">
                      <span className="font-bold">01</span>
                    </div>
                  </div>
                  
                  <div className="md:pl-8">
                    <div className="aspect-square max-w-[200px] bg-ai8ty-gray/20 rounded-lg"></div>
                  </div>
                </div>
              </CinematicReveal>
              
              <CinematicReveal delay={400}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-8 items-center">
                  <div className="order-2 md:order-1 md:pr-8">
                    <div className="aspect-square max-w-[200px] bg-ai8ty-gray/20 rounded-lg ml-auto"></div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center order-2">
                    <div className="w-12 h-12 rounded-full bg-ai8ty-pink flex items-center justify-center">
                      <span className="font-bold">02</span>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 md:pl-8">
                    <h4 className="text-2xl mb-3">Strategy</h4>
                    <p className="text-ai8ty-white/70">
                      We develop a comprehensive plan that aligns your digital presence with your business objectives.
                    </p>
                  </div>
                </div>
              </CinematicReveal>
              
              <CinematicReveal delay={500}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-8 items-center">
                  <div className="text-right md:pr-8">
                    <h4 className="text-2xl mb-3">Creation</h4>
                    <p className="text-ai8ty-white/70">
                      Our team brings the strategy to life through cinematic design, cutting-edge technology, and immersive experiences.
                    </p>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-ai8ty-pink flex items-center justify-center">
                      <span className="font-bold">03</span>
                    </div>
                  </div>
                  
                  <div className="md:pl-8">
                    <div className="aspect-square max-w-[200px] bg-ai8ty-gray/20 rounded-lg"></div>
                  </div>
                </div>
              </CinematicReveal>
              
              <CinematicReveal delay={600}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-8 items-center">
                  <div className="order-2 md:order-1 md:pr-8">
                    <div className="aspect-square max-w-[200px] bg-ai8ty-gray/20 rounded-lg ml-auto"></div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center order-2">
                    <div className="w-12 h-12 rounded-full bg-ai8ty-pink flex items-center justify-center">
                      <span className="font-bold">04</span>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 md:pl-8">
                    <h4 className="text-2xl mb-3">Launch & Optimize</h4>
                    <p className="text-ai8ty-white/70">
                      We deploy your digital experience and continuously refine it based on performance data and user feedback.
                    </p>
                  </div>
                </div>
              </CinematicReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Reframe Section */}
      <section className="cinematic-section bg-ai8ty-pink">
        <div className="container mx-auto text-center">
          <CinematicReveal>
            <h2 className="text-ai8ty-black mb-12">Change Your Perspective</h2>
          </CinematicReveal>
          
          <CinematicReveal delay={300}>
            <div className="max-w-4xl mx-auto bg-ai8ty-black/10 p-12 rounded-lg">
              <blockquote className="text-3xl md:text-4xl font-light italic mb-8 text-ai8ty-black">
                "The brands that thrive tomorrow won't just be seen—they'll be felt."
              </blockquote>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-1 bg-ai8ty-black"></div>
              </div>
            </div>
          </CinematicReveal>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto text-center">
          <CinematicReveal>
            <h2 className="mb-6">Ready to be <span className="text-ai8ty-pink">Unforgettable?</span></h2>
          </CinematicReveal>
          
          <CinematicReveal delay={200}>
            <p className="text-xl max-w-2xl mx-auto mb-12 text-ai8ty-white/80">
              Let's create a digital experience that captivates your audience and drives your business forward.
            </p>
          </CinematicReveal>
          
          <CinematicReveal delay={400}>
            <Button 
              className="bg-ai8ty-pink hover:bg-ai8ty-pink/80 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link to="/contact">
                Make me unforgettable
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CinematicReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
