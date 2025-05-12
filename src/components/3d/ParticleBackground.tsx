
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";
import { isWebGLSupported } from "@/lib/animation-utils";

// Generate random points for the particles
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
  const { points, colors } = React.useMemo(() => generatePoints(count), [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
      pointsRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
      
      // Add mouse movement influence
      if (mouse.current) {
        pointsRef.current.rotation.x += mouse.current.y * 0.01;
        pointsRef.current.rotation.y += mouse.current.x * 0.01;
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
        sizeAttenuation
        transparent
        depthWrite={false}
        vertexColors
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
  const mousePos = useRef({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(true); // Always visible by default

  useEffect(() => {
    setSupported(isWebGLSupported());
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to [-1, 1]
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta && e.gamma) {
        // Convert device orientation to mouse position
        mousePos.current = {
          x: (e.gamma / 45) * 0.5, // gamma ranges from -90 to 90
          y: (e.beta / 45) * 0.5,  // beta ranges from -180 to 180
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

  if (supported === false) {
    // Fallback to CSS animation if WebGL is not supported
    return (
      <div 
        className={`fixed inset-0 bg-ai8ty-black overflow-hidden -z-10 ${className}`}
        style={{ opacity: isVisible ? 0.85 : 0 }}
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
      className={`fixed inset-0 -z-10 ${className}`} 
      style={{ opacity: isVisible ? 0.85 : 0 }}
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }} 
        style={{ position: "fixed", inset: 0 }}
        dpr={[1, 1.5]} // Optimize performance
      >
        <ambientLight intensity={0.5} />
        <Particles count={isMobile ? 1000 : 2000} mouse={mousePos} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
