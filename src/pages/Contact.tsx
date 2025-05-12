
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import CinematicReveal from '@/components/CinematicReveal';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    project: 'default'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        project: 'default'
      });
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto text-center">
          <CinematicReveal>
            <h1 className="glitch-effect mb-6">Make Me <span className="text-ai8ty-pink">Unforgettable</span></h1>
          </CinematicReveal>
          
          <CinematicReveal delay={300}>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-ai8ty-white/80">
              Ready to stand out in a sea of sameness? Let's discuss how we can create
              an emotionally charged digital experience for your brand.
            </p>
          </CinematicReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-ai8ty-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <CinematicReveal>
              <div>
                <h2 className="text-4xl font-bold mb-6">Get in <span className="text-ai8ty-pink">Touch</span></h2>
                
                <p className="text-xl text-ai8ty-white/80 mb-12">
                  Whether you're ready to start a project or just want to explore possibilities,
                  we're here to help you create a digital presence that resonates.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-ai8ty-pink/20 rounded-full">
                      <Mail className="h-6 w-6 text-ai8ty-pink" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Email</h3>
                      <p className="text-ai8ty-white/80">
                        <a href="mailto:futureis@ai8ty.com" className="hover:text-ai8ty-pink transition-colors">
                          futureis@ai8ty.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-ai8ty-pink/20 rounded-full">
                      <Phone className="h-6 w-6 text-ai8ty-pink" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Phone</h3>
                      <p className="text-ai8ty-white/80">
                        <a href="tel:+123456789" className="hover:text-ai8ty-pink transition-colors">
                          +1 (234) 567-89
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16 p-8 bg-ai8ty-black rounded-lg border border-ai8ty-gray/30">
                  <h3 className="text-2xl font-bold mb-4">Let's Schedule a Call</h3>
                  <p className="text-ai8ty-white/80 mb-6">
                    Prefer to talk directly? Schedule a 30-minute strategic consultation with our team.
                  </p>
                  <Button className="bg-ai8ty-pink hover:bg-ai8ty-pink/80 text-white w-full">
                    Book a consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CinematicReveal>
            
            {/* Contact Form */}
            <CinematicReveal delay={300}>
              <div className="bg-ai8ty-black p-8 rounded-lg border border-ai8ty-gray/30">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-ai8ty-white/80">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-ai8ty-gray/20 border-ai8ty-gray/30 focus:border-ai8ty-pink focus:ring-ai8ty-pink/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-ai8ty-white/80">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-ai8ty-gray/20 border-ai8ty-gray/30 focus:border-ai8ty-pink focus:ring-ai8ty-pink/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-ai8ty-white/80">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="bg-ai8ty-gray/20 border-ai8ty-gray/30 focus:border-ai8ty-pink focus:ring-ai8ty-pink/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="project" className="block text-ai8ty-white/80">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full rounded-md bg-ai8ty-gray/20 border-ai8ty-gray/30 focus:border-ai8ty-pink focus:ring-ai8ty-pink/20 px-4 py-2"
                    >
                      <option value="default" disabled>Select project type</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="cinematic-web">Cinematic Web Design</option>
                      <option value="copywriting">Strategic Copywriting</option>
                      <option value="ai-systems">AI-Powered Systems</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-ai8ty-white/80">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project and goals..."
                      rows={5}
                      className="bg-ai8ty-gray/20 border-ai8ty-gray/30 focus:border-ai8ty-pink focus:ring-ai8ty-pink/20"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-ai8ty-pink hover:bg-ai8ty-pink/80 text-white w-full py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              </div>
            </CinematicReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cinematic-section bg-ai8ty-black">
        <div className="container mx-auto">
          <CinematicReveal>
            <h2 className="text-center mb-16">Frequently Asked <span className="text-ai8ty-pink">Questions</span></h2>
          </CinematicReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CinematicReveal delay={200}>
              <div className="p-6 bg-ai8ty-gray/10 border border-ai8ty-gray/20 rounded-lg">
                <h3 className="text-xl font-bold mb-2">What makes AI8TY different from other agencies?</h3>
                <p className="text-ai8ty-white/70">
                  We focus on creating emotionally charged digital experiences that drive measurable results,
                  combining strategic thinking with cinematic design and cutting-edge technology.
                </p>
              </div>
            </CinematicReveal>
            
            <CinematicReveal delay={300}>
              <div className="p-6 bg-ai8ty-gray/10 border border-ai8ty-gray/20 rounded-lg">
                <h3 className="text-xl font-bold mb-2">What industries do you work with?</h3>
                <p className="text-ai8ty-white/70">
                  We work with ambitious brands across industries, from tech startups to established
                  corporations, as long as they're committed to standing out from the competition.
                </p>
              </div>
            </CinematicReveal>
            
            <CinematicReveal delay={400}>
              <div className="p-6 bg-ai8ty-gray/10 border border-ai8ty-gray/20 rounded-lg">
                <h3 className="text-xl font-bold mb-2">How long does a typical project take?</h3>
                <p className="text-ai8ty-white/70">
                  Project timelines vary based on scope and complexity. A comprehensive
                  digital transformation typically takes 8-12 weeks, while smaller projects
                  can be completed in 4-6 weeks.
                </p>
              </div>
            </CinematicReveal>
            
            <CinematicReveal delay={500}>
              <div className="p-6 bg-ai8ty-gray/10 border border-ai8ty-gray/20 rounded-lg">
                <h3 className="text-xl font-bold mb-2">What is your pricing structure?</h3>
                <p className="text-ai8ty-white/70">
                  We offer custom pricing based on project scope, complexity, and timeline.
                  Contact us to discuss your project needs and we'll provide a detailed quote.
                </p>
              </div>
            </CinematicReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
