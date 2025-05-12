
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-ai8ty-black/90 backdrop-blur-md py-3' : 'py-6'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-ai8ty-white">
          <span className="text-ai8ty-pink">AI8</span>TY
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-ai8ty-white hover:text-ai8ty-pink transition-colors">
            Home
          </Link>
          <Link to="/arsenal" className="text-ai8ty-white hover:text-ai8ty-pink transition-colors">
            The Arsenal
          </Link>
          <Link to="/case-studies" className="text-ai8ty-white hover:text-ai8ty-pink transition-colors">
            Case Studies
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-ai8ty-pink text-ai8ty-pink hover:bg-ai8ty-pink hover:text-ai8ty-white transition-colors">
              Make me unforgettable
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-ai8ty-black transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto flex flex-col space-y-4 px-4">
          <Link to="/" className="text-ai8ty-white hover:text-ai8ty-pink py-2 transition-colors" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/arsenal" className="text-ai8ty-white hover:text-ai8ty-pink py-2 transition-colors" onClick={toggleMenu}>
            The Arsenal
          </Link>
          <Link to="/case-studies" className="text-ai8ty-white hover:text-ai8ty-pink py-2 transition-colors" onClick={toggleMenu}>
            Case Studies
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <Button variant="outline" className="w-full border-ai8ty-pink text-ai8ty-pink hover:bg-ai8ty-pink hover:text-ai8ty-white transition-colors">
              Make me unforgettable
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
