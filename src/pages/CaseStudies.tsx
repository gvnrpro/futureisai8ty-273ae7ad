
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CinematicReveal from '@/components/CinematicReveal';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  result: string;
  tags: string[];
}

const CaseStudies: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: "Cinematic Brand Evolution",
      client: "NexGen Robotics",
      category: "Brand Identity",
      image: "bg-gradient-to-br from-ai8ty-pink/30 to-ai8ty-gray/50",
      result: "+140% engagement",
      tags: ["identity", "web"]
    },
    {
      id: 2,
      title: "Emotional Digital Platform",
      client: "Sentinel Finance",
      category: "Cinematic Web Design",
      image: "bg-gradient-to-br from-ai8ty-gray/50 to-ai8ty-pink/30",
      result: "+85% conversion rate",
      tags: ["web", "ai"]
    },
    {
      id: 3,
      title: "Brand Voice Realignment",
      client: "Ethereal Cosmetics",
      category: "Strategic Copywriting",
      image: "bg-gradient-to-bl from-ai8ty-pink/30 to-ai8ty-gray/50",
      result: "+120% brand recall",
      tags: ["copy", "identity"]
    },
    {
      id: 4,
      title: "Conversational AI Experience",
      client: "Helix Health",
      category: "AI-Powered Systems",
      image: "bg-gradient-to-tr from-ai8ty-gray/50 to-ai8ty-pink/30",
      result: "+260% user satisfaction",
      tags: ["ai", "web"]
    }
  ];

  const filteredCaseStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.tags.includes(filter));

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto text-center">
          <CinematicReveal>
            <h1 className="glitch-effect mb-6">Case <span className="text-ai8ty-pink">Studies</span></h1>
          </CinematicReveal>
          
          <CinematicReveal delay={300}>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-12 text-ai8ty-white/80">
              Explore our portfolio of transformative digital experiences that have driven
              measurable results for ambitious brands.
            </p>
          </CinematicReveal>
          
          <CinematicReveal delay={500}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'}
                className={filter === 'all' ? 'bg-ai8ty-pink hover:bg-ai8ty-pink/80' : 'border-ai8ty-white/30 hover:bg-ai8ty-white/10'}
                onClick={() => setFilter('all')}
              >
                All Work
              </Button>
              <Button 
                variant={filter === 'identity' ? 'default' : 'outline'}
                className={filter === 'identity' ? 'bg-ai8ty-pink hover:bg-ai8ty-pink/80' : 'border-ai8ty-white/30 hover:bg-ai8ty-white/10'}
                onClick={() => setFilter('identity')}
              >
                Brand Identity
              </Button>
              <Button 
                variant={filter === 'web' ? 'default' : 'outline'}
                className={filter === 'web' ? 'bg-ai8ty-pink hover:bg-ai8ty-pink/80' : 'border-ai8ty-white/30 hover:bg-ai8ty-white/10'}
                onClick={() => setFilter('web')}
              >
                Cinematic Web
              </Button>
              <Button 
                variant={filter === 'copy' ? 'default' : 'outline'}
                className={filter === 'copy' ? 'bg-ai8ty-pink hover:bg-ai8ty-pink/80' : 'border-ai8ty-white/30 hover:bg-ai8ty-white/10'}
                onClick={() => setFilter('copy')}
              >
                Copywriting
              </Button>
              <Button 
                variant={filter === 'ai' ? 'default' : 'outline'}
                className={filter === 'ai' ? 'bg-ai8ty-pink hover:bg-ai8ty-pink/80' : 'border-ai8ty-white/30 hover:bg-ai8ty-white/10'}
                onClick={() => setFilter('ai')}
              >
                AI Systems
              </Button>
            </div>
          </CinematicReveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-ai8ty-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <CinematicReveal key={study.id} delay={index * 200}>
                <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                  <div className={`aspect-[4/3] ${study.image} relative`}>
                    <div className="absolute inset-0 bg-ai8ty-black/40 group-hover:bg-ai8ty-black/20 transition-all duration-300"></div>
                    
                    <div className="absolute top-6 left-6">
                      <span className="text-sm px-3 py-1 bg-ai8ty-white/10 backdrop-blur-sm rounded-full text-ai8ty-white">
                        {study.category}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <p className="text-ai8ty-white/80 mb-4">Client: {study.client}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-ai8ty-pink font-bold">{study.result}</span>
                        <span className="opacity-0 group-hover:opacity-100 transform translate-x-5 group-hover:translate-x-0 transition-all duration-300">
                          <ArrowRight className="h-5 w-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Link to={`/case-studies/${study.id}`} className="absolute inset-0">
                    <span className="sr-only">View {study.title} case study</span>
                  </Link>
                </div>
              </CinematicReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto">
          <CinematicReveal>
            <h2 className="text-center mb-16">Measurable <span className="text-ai8ty-pink">Results</span></h2>
          </CinematicReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <CinematicReveal delay={200}>
              <div className="text-center">
                <div className="text-5xl font-bold text-ai8ty-pink mb-2">+180%</div>
                <p className="text-ai8ty-white/70">Average Increase<br />in Engagement</p>
              </div>
            </CinematicReveal>
            
            <CinematicReveal delay={400}>
              <div className="text-center">
                <div className="text-5xl font-bold text-ai8ty-pink mb-2">+75%</div>
                <p className="text-ai8ty-white/70">Average Boost<br />in Conversion</p>
              </div>
            </CinematicReveal>
            
            <CinematicReveal delay={600}>
              <div className="text-center">
                <div className="text-5xl font-bold text-ai8ty-pink mb-2">92%</div>
                <p className="text-ai8ty-white/70">Client Satisfaction<br />Rating</p>
              </div>
            </CinematicReveal>
            
            <CinematicReveal delay={800}>
              <div className="text-center">
                <div className="text-5xl font-bold text-ai8ty-pink mb-2">15+</div>
                <p className="text-ai8ty-white/70">Industry Awards<br />& Recognition</p>
              </div>
            </CinematicReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cinematic-section bg-ai8ty-gray">
        <div className="container mx-auto text-center">
          <CinematicReveal>
            <h2 className="mb-6">Ready to Create Your <span className="text-ai8ty-pink">Success Story?</span></h2>
          </CinematicReveal>
          
          <CinematicReveal delay={300}>
            <p className="text-xl max-w-2xl mx-auto mb-12 text-ai8ty-white/80">
              Let's discuss how we can help you achieve similar results with a cinematic digital experience tailored to your brand.
            </p>
          </CinematicReveal>
          
          <CinematicReveal delay={500}>
            <Button 
              className="bg-ai8ty-pink hover:bg-ai8ty-pink/80 text-white px-8 py-6 text-lg"
              asChild
            >
              <Link to="/contact">
                Start your transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CinematicReveal>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
