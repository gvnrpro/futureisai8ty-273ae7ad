
// Animation utility functions and constants
import { Variants } from "framer-motion";

// Fade in animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  }),
};

// Scale animation variants
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  }),
};

// Slide up animation variants
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  }),
};

// Text reveal animation variants (letter by letter)
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.03,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] },
  },
};

// Animation for parallax scrolling
export const useParallax = (speed: number) => {
  return {
    y: typeof window !== "undefined" ? window.scrollY * speed : 0,
  };
};

// Helper for checking WebGL support
export const isWebGLSupported = (): boolean => {
  if (typeof window === "undefined") return false;
  
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};
