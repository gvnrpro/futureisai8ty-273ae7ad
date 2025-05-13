
import React, { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";
import { isWebGLSupported } from "@/lib/animation-utils";

// Generate random points for the particles - moved outside component for stability
const generatePoints = (count: number) => {
  const points = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    points[i3] = (Math.random() - 0.5) * 20;
    points[i3 + 1] = (Math.random() - 0.5) * 20;
    points[i3 + 2] = (Math.random() - 0.5) * 20;
    
    // Set colors using the new color scheme
    if (Math.random() > 0.98) {
      // Ion Blue accents
      colors[i3] = 0; // R
      colors[i3 + 1] = 0.7; // G
      colors[i3 + 2] = 0.94; // B
    } else if (Math.random() > 0.95) {
      // Infrared Violet highlights
      colors[i3] = 0.62; // R
      colors[i3 + 1] = 0; // G
      colors[i3 + 2] = 1; // B
    } else {
      // White/blue base
      colors[i3] = 0.7 + Math.random() * 0.3; // R
      colors[i3 + 1] = 0.7 + Math.random() * 0.3; // G
      colors[i3 + 2] = 0.8 + Math.random() * 0.2; // B
    }
  }
  
  return { points, colors };
};

interface ParticleProps {
  count?: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

const Particles: React.FC<ParticleProps> = ({ count = 2000, mouse }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Use useMemo to prevent regenerating points on every render
  const { points, colors } = useMemo(() => generatePoints(count), [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      // Use slower, more stable rotation
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.1;
      pointsRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
      
      // Add subtle mouse movement influence
      if (mouse.current) {
        pointsRef.current.rotation.x += mouse.current.y * 0.005;
        pointsRef.current.rotation.y += mouse.current.x * 0.005;
      }
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={points}
          count={points.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation={true}
        transparent={true}
        depthWrite={false}
        vertexColors={true}
        opacity={0.7}
      />
    </points>
  );
};

interface ParticleBackgroundProps {
  className?: string;
  intensity?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
  className = "", 
  intensity = 1 
}) => {
  const [supported, setSupported] = useState<boolean | null>(null);
  const [fallbackVisible, setFallbackVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check for WebGL support
    const webGLSupported = isWebGLSupported();
    setSupported(webGLSupported);
    
    // If WebGL is not supported, show fallback after a delay
    if (!webGLSupported) {
      const timer = setTimeout(() => {
        setFallbackVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to [-1, 1] but with reduced sensitivity
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta && e.gamma) {
        // Convert device orientation to mouse position with reduced sensitivity
        mousePos.current = {
          x: (e.gamma / 90) * 0.3, // reduced from 0.5
          y: (e.beta / 90) * 0.3,  // reduced from 0.5
        };
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.addEventListener("deviceorientation", handleDeviceOrientation);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [isMobile]);

  // CSS Fallback for non-WebGL browsers or when WebGL fails
  if (supported === false) {
    return (
      <div 
        className={`fixed inset-0 bg-ai8ty-black overflow-hidden z-0 ${className}`}
        style={{ opacity: fallbackVisible ? 0.85 : 0 }}
      >
        <div className="stars-container">
          {[...Array(100)].map((_, i) => (
            <div 
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (supported === null) return null; // Loading state

  return (
    <div 
      className={`fixed inset-0 z-0 ${className}`} 
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }} // Reduced FOV for better performance
        style={{ position: "fixed", inset: 0 }}
        dpr={[0.8, 1.5]} // Lower DPR for better performance
      >
        <ambientLight intensity={0.3} /> {/* Reduced light intensity */}
        <Particles 
          count={isMobile ? 800 : 1500} // Reduced particle count
          mouse={mousePos} 
        />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
