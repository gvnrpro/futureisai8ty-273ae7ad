
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CinematicReveal from '@/components/CinematicReveal';
import { ArrowRight } from 'lucide-react';

const Arsenal: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Brand Identity",
      description: "We craft distinct brand identities that stand out in crowded markets and resonate with your target audience.",
      outcomes: [
        "Memorable brand presence",
        "Increased brand recognition",
        "Consistent brand experience"
      ],
      icon: "⬢"
    },
    {
      id: 2,
      title: "Cinematic Web Design",
      description: "We create immersive, emotionally charged web experiences that captivate visitors and drive conversions.",
      outcomes: [
        "Increased user engagement",
        "Higher conversion rates",
        "Extended session duration"
      ],
      icon: "⬡"
    },
    {
      id: 3,
      title: "Strategic Copywriting",
      description: "We develop compelling narratives and messaging that connect with your audience on a deeper level.",
      outcomes: [
        "Clearer brand messaging",
        "Stronger emotional connections",
        "Improved call-to-action response"
      ],
      icon: "△"
    },
    {
      id: 4,
      title: "AI-Powered Systems",
      description: "We implement intelligent systems that personalize the user experience and optimize business operations.",
      outcomes: [
        "Enhanced user experience",
        "Operational efficiency",
        "Data-driven insights"
      ],
      icon: "◎"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto text-center">
          <CinematicReveal>
            <h1 className="glitch-effect mb-6">The <span className="text-ai8ty-pink">Arsenal</span></h1>
          </CinematicReveal>
          
          <CinematicReveal delay={300}>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-ai8ty-white/80">
              Our comprehensive suite of services designed to transform your digital presence
              and create unforgettable brand experiences.
            </p>
          </CinematicReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-ai8ty-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <CinematicReveal key={service.id} delay={index * 200}>
                <div className="bg-ai8ty-black p-10 rounded-lg border border-ai8ty-gray/30 h-full group hover:border-ai8ty-pink/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <span className="text-3xl text-ai8ty-pink">{service.icon}</span>
                  </div>
                  
                  <p className="text-ai8ty-white/70 mb-8">{service.description}</p>
                  
                  <div className="relative overflow-hidden">
                    <div className="transition-transform duration-500 group-hover:-translate-y-full">
                      <Button variant="outline" className="border-ai8ty-pink text-ai8ty-pink w-full">
                        Learn more
                      </Button>
                    </div>
                    
                    <div className="absolute top-0 left-0 w-full h-full transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                      <div className="bg-ai8ty-pink text-ai8ty-black p-4 rounded">
                        <h4 className="font-bold mb-2">Key Outcomes:</h4>
                        <ul className="space-y-1">
                          {service.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-center">
                              <span className="inline-block w-1 h-1 bg-ai8ty-black rounded-full mr-2"></span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CinematicReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto">
          <CinematicReveal>
            <h2 className="text-center mb-12">How We <span className="text-ai8ty-pink">Deliver</span></h2>
          </CinematicReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <CinematicReveal delay={200}>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-ai8ty-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-ai8ty-pink">01</span>
                </div>
                <h4 className="text-xl mb-4">Strategic Consultation</h4>
                <p className="text-ai8ty-white/70">
                  We begin by understanding your business goals, target audience, and current challenges.
                </p>
              </div>
            </CinematicReveal>
            
            <CinematicReveal delay={400}>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-ai8ty-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-ai8ty-pink">02</span>
                </div>
                <h4 className="text-xl mb-4">Creative Development</h4>
                <p className="text-ai8ty-white/70">
                  Our team crafts custom solutions tailored to your specific needs and aligned with your brand.
                </p>
              </div>
            </CinematicReveal>
            
            <CinematicReveal delay={600}>
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-ai8ty-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-ai8ty-pink">03</span>
                </div>
                <h4 className="text-xl mb-4">Continuous Optimization</h4>
                <p className="text-ai8ty-white/70">
                  We measure results and refine our approach to ensure maximum impact and ROI.
                </p>
              </div>
            </CinematicReveal>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="cinematic-section bg-ai8ty-gray">
        <div className="container mx-auto">
          <CinematicReveal>
            <h2 className="text-center mb-16">Client <span className="text-ai8ty-pink">Outcomes</span></h2>
          </CinematicReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <CinematicReveal delay={300}>
              <div className="bg-ai8ty-black p-10 rounded-lg border border-ai8ty-gray/30">
                <blockquote className="text-xl mb-8 text-ai8ty-white/80">
                  "AI8TY transformed our digital presence completely. We saw a 280% increase in engagement and a 75% boost in conversion rates within three months of launch."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-ai8ty-pink/20 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-ai8ty-white/60">CEO, Innovate Solutions</p>
                  </div>
                </div>
              </div>
            </CinematicReveal>
            
            <CinematicReveal delay={500}>
              <div className="bg-ai8ty-black p-10 rounded-lg border border-ai8ty-gray/30">
                <blockquote className="text-xl mb-8 text-ai8ty-white/80">
                  "The emotional resonance of our new brand identity helped us secure three major clients who specifically mentioned our website as the reason they reached out."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-ai8ty-pink/20 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Mark Williams</h4>
                    <p className="text-ai8ty-white/60">CMO, Nexus Technologies</p>
                  </div>
                </div>
              </div>
            </CinematicReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto text-center">
          <CinematicReveal>
            <h2 className="mb-6">Ready to <span className="text-ai8ty-pink">Elevate</span> Your Brand?</h2>
          </CinematicReveal>
          
          <CinematicReveal delay={300}>
            <p className="text-xl max-w-2xl mx-auto mb-12 text-ai8ty-white/80">
              Let's discuss how our arsenal of services can help you create an unforgettable digital presence.
            </p>
          </CinematicReveal>
          
          <CinematicReveal delay={500}>
            <Button 
              className="bg-ai8ty-pink hover:bg-ai8ty-pink/80 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link to="/contact">
                Talk strategy 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CinematicReveal>
        </div>
      </section>
    </div>
  );
};

export default Arsenal;
