
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface CaseStudy {
  title: string;
  image: string;
  stats: string;
  description: string;
  tags: string[];
}

interface AnimatedCaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
  className?: string;
}

const AnimatedCaseStudyCard: React.FC<AnimatedCaseStudyCardProps> = ({
  caseStudy,
  index = 0,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    default: {
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.4 },
    },
  };

  const overlayVariants = {
    default: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const statsVariants = {
    default: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.3 },
    },
    hover: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, delay: 0.1 },
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
        "group relative flex h-full min-h-[300px] cursor-pointer flex-col overflow-hidden rounded-lg",
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
      {/* Image */}
      <motion.div
        className="relative h-0 w-full overflow-hidden pb-[56.25%]" // 16:9 aspect ratio
        variants={imageVariants}
        animate={isHovered ? "hover" : "default"}
      >
        <img
          src={caseStudy.image || "/placeholder.svg"}
          alt={caseStudy.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col bg-ai8ty-gray/80 p-6">
        <h3 className="mb-2 text-xl font-bold">{caseStudy.title}</h3>
        <div className="mt-auto flex flex-wrap gap-2">
          {caseStudy.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-ai8ty-gray px-3 py-1 text-xs text-ai8ty-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-ai8ty-black/80 p-6"
        variants={overlayVariants}
        initial="default"
        animate={isHovered ? "hover" : "default"}
      >
        <div className="flex h-full flex-col">
          <h3 className="mb-4 text-xl font-bold text-ai8ty-white">
            {caseStudy.title}
          </h3>
          <p className="mb-4 text-sm text-ai8ty-white/80">
            {caseStudy.description}
          </p>
          
          <motion.div 
            className="mt-auto"
            variants={statsVariants}
          >
            <div className="mb-2 h-0.5 w-16 bg-ai8ty-pink"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-ai8ty-pink">
                {caseStudy.stats}
              </span>
              <span className="text-sm text-ai8ty-white/80">improvement</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCaseStudyCard;
