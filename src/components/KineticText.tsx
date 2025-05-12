
import React from "react";
import { motion } from "framer-motion";
import { textReveal, letterReveal } from "@/lib/animation-utils";

interface KineticTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  delay?: number;
  highlight?: string[];
  highlightClassName?: string;
}

const KineticText: React.FC<KineticTextProps> = ({
  text,
  className = "",
  textClassName = "",
  delay = 0,
  highlight = [],
  highlightClassName = "text-ai8ty-pink",
}) => {
  // Split text into words for animation
  const words = text.split(" ");

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => {
        // Check if this word should be highlighted
        const isHighlighted = highlight.includes(word);
        
        return (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em] mb-[0.25em]"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
            }}
          >
            <span 
              className={`inline-block ${textClassName} ${isHighlighted ? highlightClassName : ""}`}
            >
              {word}
            </span>
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export const KineticLetters: React.FC<KineticTextProps> = ({
  text,
  className = "",
  textClassName = "",
  delay = 0,
  highlight = [],
  highlightClassName = "text-ai8ty-pink",
}) => {
  // Split text into characters for animation
  const characters = text.split("");

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      custom={delay}
      variants={textReveal}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          className={`inline-block ${textClassName}`}
          variants={letterReveal}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default KineticText;
