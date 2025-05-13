
import React, { Suspense, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Arsenal from "./pages/Arsenal";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CinematicCursor from "./components/CinematicCursor";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import { updateMetaTags } from "./lib/seo-utils";

const queryClient = new QueryClient();

// Loading spinner component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-ai8ty-black z-50">
    <motion.div
      className="w-16 h-16 border-4 border-ai8ty-blue/30 border-t-ai8ty-blue rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

// SEO Manager
const SEOManager = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Update meta tags based on current route
    switch(location.pathname) {
      case '/':
        updateMetaTags({
          title: 'AI8TY | Cinematic Creative-Tech Agency',
          description: 'Creating unforgettable, emotionally charged digital experiences for ambitious brands.'
        });
        break;
      case '/arsenal':
        updateMetaTags({
          title: 'The Arsenal | AI8TY Creative-Tech Agency',
          description: 'Discover our suite of creative tools and technologies that make brands unforgettable.'
        });
        break;
      case '/case-studies':
        updateMetaTags({
          title: 'Our Work | AI8TY Creative-Tech Agency',
          description: 'See how we've transformed ambitious brands through cinematic digital experiences.'
        });
        break;
      case '/contact':
        updateMetaTags({
          title: 'Contact | AI8TY Creative-Tech Agency',
          description: 'Ready to be unforgettable? Get in touch with our creative team.'
        });
        break;
      default:
        updateMetaTags(); // Reset to defaults for 404 or unknown routes
    }
  }, [location]);
  
  return null;
};

// Page transition wrapper
const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  if (!showContent) {
    return <LoadingScreen isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEOManager />
          <CinematicCursor />
          <Navbar />
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatePresence mode="wait">
              <main>
                <Routes>
                  <Route path="/" element={<PageTransition><Index /></PageTransition>} />
                  <Route path="/arsenal" element={<PageTransition><Arsenal /></PageTransition>} />
                  <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
                  <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                  <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
                </Routes>
              </main>
            </AnimatePresence>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
