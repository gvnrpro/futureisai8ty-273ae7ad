
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ParticleBackground from "@/components/3d/ParticleBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-ai8ty-black overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground className="opacity-70" />
      </div>
      
      <motion.div 
        className="relative z-10 text-center max-w-xl px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/0babdf62-476a-4abe-ae58-912ad729fd2f.png" 
            alt="AI8TY Logo" 
            className="w-24 h-24 mx-auto"
          />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-ai8ty-blue glow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          404
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-ai8ty-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          The dimension you're looking for doesn't exist.<br/>
          Let's get you back to reality.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            className="bg-ai8ty-blue hover:bg-ai8ty-blue/80 text-white px-6 py-5 text-lg cinematic-button touch-ripple hover-scale-subtle"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to AI8TY
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
