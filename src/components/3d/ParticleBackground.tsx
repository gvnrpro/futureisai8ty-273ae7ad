
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial } from "@react-three/drei";
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
    
    colors[i3] = Math.random();
    colors[i3 + 1] = Math.random();
    colors[i3 + 2] = Math.random();
  }
  
  return { points, colors };
};

const Particles = ({ count = 2000, mouse }) => {
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
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
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
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className }) => {
  const [supported, setSupported] = useState<boolean | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isMobile = useIsMobile();

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
        className={`fixed inset-0 bg-ai8ty-black overflow-hidden ${className}`}
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
    <div className={`fixed inset-0 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Particles count={isMobile ? 1000 : 2000} mouse={mousePos} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
