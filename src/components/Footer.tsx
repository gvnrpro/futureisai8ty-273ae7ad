
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ai8ty-black border-t border-ai8ty-gray/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-3xl font-bold">
              <span className="text-ai8ty-pink">AI8</span>TY
            </Link>
            <p className="text-ai8ty-white/70 max-w-sm">
              Creating unforgettable, emotionally charged digital presence for ambitious brands and challenger companies.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2">Navigate</h3>
            <Link to="/" className="text-ai8ty-white/70 hover:text-ai8ty-pink transition-colors">Home</Link>
            <Link to="/arsenal" className="text-ai8ty-white/70 hover:text-ai8ty-pink transition-colors">The Arsenal</Link>
            <Link to="/case-studies" className="text-ai8ty-white/70 hover:text-ai8ty-pink transition-colors">Case Studies</Link>
            <Link to="/contact" className="text-ai8ty-white/70 hover:text-ai8ty-pink transition-colors">Contact</Link>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
            <a href="mailto:futureis@ai8ty.com" className="flex items-center space-x-2 text-ai8ty-white/70 hover:text-ai8ty-pink transition-colors">
              <Mail size={16} />
              <span>futureis@ai8ty.com</span>
            </a>
            <a href="tel:+123456789" className="flex items-center space-x-2 text-ai8ty-white/70 hover:text-ai8ty-pink transition-colors">
              <Phone size={16} />
              <span>+1 (234) 567-89</span>
            </a>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-ai8ty-white hover:text-ai8ty-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-ai8ty-white hover:text-ai8ty-pink transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-ai8ty-white hover:text-ai8ty-pink transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-ai8ty-gray/30 mt-8 pt-8 text-center text-ai8ty-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} AI8TY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
