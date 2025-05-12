
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";
import { isWebGLSupported } from "@/lib/animation-utils";

interface InfinityPathProps {
  rotation?: number;
  delay?: number;
  color?: string;
}

const InfinityPath: React.FC<InfinityPathProps> = ({ 
  rotation = 0, 
  delay = 0,
  color = "#FF004F"
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() + delay;
      meshRef.current.rotation.z = rotation + time * 0.2;
    }
  });
  
  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.04, 16, 100]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.5} 
        transparent 
        opacity={0.8} 
      />
    </mesh>
  );
};

interface InfinityModelProps {
  className?: string;
  interactive?: boolean;
}

const InfinityModel: React.FC<InfinityModelProps> = ({ 
  className = "", 
  interactive = true 
}) => {
  const [supported, setSupported] = React.useState<boolean | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    setSupported(isWebGLSupported());
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mousePos.current = {
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: -((e.clientY - rect.top) / rect.height) * 2 + 1
        };
      }
    };

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta && e.gamma) {
        // Convert device orientation to rotation
        mousePos.current = {
          x: (e.gamma / 45) * 0.5,
          y: (e.beta / 45) * 0.5
        };
      }
    };

    if (interactive) {
      if (!isMobile) {
        window.addEventListener("mousemove", handleMouseMove);
      } else {
        window.addEventListener("deviceorientation", handleDeviceOrientation);
      }
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [interactive, isMobile]);

  const InfinityScene = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
      if (groupRef.current && interactive) {
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          mousePos.current.y * 0.5,
          0.05
        );
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          mousePos.current.x * 0.5,
          0.05
        );
      }
    });

    return (
      <group ref={groupRef}>
        <InfinityPath rotation={0} delay={0} />
        <InfinityPath rotation={Math.PI / 6} delay={0.2} />
        <InfinityPath rotation={Math.PI / 3} delay={0.4} />
        <InfinityPath rotation={Math.PI / 2} delay={0.6} />
        <InfinityPath rotation={2 * Math.PI / 3} delay={0.8} />
        <InfinityPath rotation={5 * Math.PI / 6} delay={1.0} />
      </group>
    );
  };

  if (supported === false) {
    // CSS fallback for non-WebGL browsers
    return (
      <div ref={containerRef} className={`infinity-container ${className}`}>
        <div className="infinity-path" style={{ transform: 'rotate(0deg)', animationDelay: '0s' }}></div>
        <div className="infinity-path" style={{ transform: 'rotate(30deg)', animationDelay: '0.2s' }}></div>
        <div className="infinity-path" style={{ transform: 'rotate(60deg)', animationDelay: '0.4s' }}></div>
        <div className="infinity-path" style={{ transform: 'rotate(90deg)', animationDelay: '0.6s' }}></div>
        <div className="infinity-path" style={{ transform: 'rotate(120deg)', animationDelay: '0.8s' }}></div>
        <div className="infinity-path" style={{ transform: 'rotate(150deg)', animationDelay: '1s' }}></div>
      </div>
    );
  }

  if (supported === null) return null; // Loading state

  return (
    <div ref={containerRef} className={`relative w-full h-full min-h-[300px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#FF004F" intensity={0.5} />
        <InfinityScene />
        {!interactive && <OrbitControls enableZoom={false} enablePan={false} />}
      </Canvas>
    </div>
  );
};

export default InfinityModel;
