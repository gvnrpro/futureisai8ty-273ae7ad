
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  outcome: string;
  index?: number;
  icon?: React.ReactNode;
  className?: string;
}

const AnimatedServiceCard: React.FC<AnimatedServiceCardProps> = ({
  title,
  description,
  outcome,
  index = 0,
  icon,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    default: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const outcomeVariants = {
    default: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleInteraction = (hovered: boolean) => {
    if (!isMobile) {
      setIsHovered(hovered);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsHovered(!isHovered);
    }
  };

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg border border-ai8ty-gray/30 bg-ai8ty-gray/20 p-8 transition-all",
        className
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={cardVariants}
      whileHover="hover"
      onHoverStart={() => handleInteraction(true)}
      onHoverEnd={() => handleInteraction(false)}
      onClick={handleClick}
    >
      <div className="relative z-10 h-full">
        <motion.div
          variants={contentVariants}
          initial="default"
          animate={isHovered ? "hover" : "default"}
          className="flex flex-col space-y-4"
        >
          {icon && (
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ai8ty-pink/20">
              {icon}
            </div>
          )}
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-ai8ty-white/70">{description}</p>
        </motion.div>

        <motion.div
          variants={outcomeVariants}
          initial="default"
          animate={isHovered ? "hover" : "default"}
          className="absolute inset-0 flex flex-col items-center justify-center bg-ai8ty-black bg-opacity-90 p-6 text-center"
        >
          <div className="mb-4 inline-block rounded-full bg-ai8ty-pink/20 p-3">
            <svg
              className="h-8 w-8 text-ai8ty-pink"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h4 className="mb-2 text-xl font-bold text-ai8ty-pink">Outcome</h4>
          <p className="text-ai8ty-white">{outcome}</p>
        </motion.div>
      </div>

      {/* Background glow effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-transparent via-ai8ty-pink/5 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </motion.div>
  );
};

export default AnimatedServiceCard;
