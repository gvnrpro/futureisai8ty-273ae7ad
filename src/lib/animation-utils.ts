
// Animation utility functions and constants
import { Variants } from "framer-motion";

// Valid easing functions (fixed cubic-bezier values)
export const EASING = {
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  easeIn: [0.42, 0, 1, 1] as [number, number, number, number],
  easeOut: [0, 0, 0.58, 1] as [number, number, number, number],
  easeInOut: [0.42, 0, 0.58, 1] as [number, number, number, number],
  smooth: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number], // Fixed invalid value
} as const;

// Performance-aware animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: EASING.smooth,
    },
  }),
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: EASING.smooth,
    },
  }),
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: EASING.smooth,
    },
  }),
};

// Reduced motion variants for accessibility
export const createReducedMotionVariants = (baseVariants: Variants): Variants => {
  const shouldReduceMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3 } }
    };
  }

  return baseVariants;
};

// Performance-aware animation helper
export const getOptimizedTransition = (duration: number = 0.6) => {
  const { isLowEnd } = getDeviceCapabilities();
  
  return {
    duration: isLowEnd ? duration * 0.5 : duration,
    ease: EASING.smooth,
  };
};

// Device capability detection for performance optimization
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') return { isLowEnd: false, isMobile: false };
  
  const isMobile = window.innerWidth < 768;
  const isLowEnd = navigator.hardwareConcurrency <= 4 || 
                   (navigator as any).deviceMemory <= 4 ||
                   (navigator.userAgent.includes('Android') && isMobile);
  
  return { isLowEnd, isMobile };
};

// Helper for checking WebGL support with error handling
export const isWebGLSupported = (): boolean => {
  if (typeof window === "undefined") return false;
  
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return !!gl;
  } catch (e) {
    console.warn("WebGL not supported:", e);
    return false;
  }
};

// Animation frame utilities for smooth performance
export const requestIdleCallback = (callback: () => void) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return window.requestIdleCallback(callback);
  }
  return setTimeout(callback, 16); // Fallback to setTimeout
};
