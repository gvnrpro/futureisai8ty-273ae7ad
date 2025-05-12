
import { useState, useEffect } from 'react';

interface DeviceMotionState {
  hasPermission: boolean;
  tiltX: number;
  tiltY: number;
  rotation: number;
}

export const useDeviceMotion = () => {
  const [motion, setMotion] = useState<DeviceMotionState>({
    hasPermission: false,
    tiltX: 0,
    tiltY: 0,
    rotation: 0,
  });

  useEffect(() => {
    // Check if device orientation is supported
    const hasDeviceOrientation = 'DeviceOrientationEvent' in window;
    
    // Request permission for iOS 13+ devices
    const requestPermission = async () => {
      if (
        hasDeviceOrientation && 
        typeof (DeviceOrientationEvent as any).requestPermission === 'function'
      ) {
        try {
          const permissionState = await (DeviceOrientationEvent as any).requestPermission();
          if (permissionState === 'granted') {
            setMotion(prev => ({ ...prev, hasPermission: true }));
            window.addEventListener('deviceorientation', handleDeviceOrientation);
          }
        } catch (e) {
          console.error('Error requesting device orientation permission:', e);
        }
      } else if (hasDeviceOrientation) {
        // For non-iOS devices or older iOS versions
        setMotion(prev => ({ ...prev, hasPermission: true }));
        window.addEventListener('deviceorientation', handleDeviceOrientation);
      }
    };

    // Handle device orientation data
    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      // Beta is front-to-back tilt in degrees, where front is positive
      const tiltY = event.beta ? Math.min(Math.max(event.beta, -90), 90) / 90 : 0;
      
      // Gamma is left-to-right tilt in degrees, where right is positive
      const tiltX = event.gamma ? Math.min(Math.max(event.gamma, -90), 90) / 90 : 0;
      
      // Alpha is the compass direction the device is facing in degrees
      const rotation = event.alpha || 0;
      
      setMotion({
        hasPermission: true,
        tiltX,
        tiltY,
        rotation,
      });
    };
    
    // Request permission or add event listener if already granted
    requestPermission();
    
    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  return motion;
};

interface TouchPosition {
  x: number;
  y: number;
  active: boolean;
}

export const useTouch = () => {
  const [touchPosition, setTouchPosition] = useState<TouchPosition>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      setTouchPosition({
        x: touch.clientX / window.innerWidth,
        y: touch.clientY / window.innerHeight,
        active: true,
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      setTouchPosition({
        x: touch.clientX / window.innerWidth,
        y: touch.clientY / window.innerHeight,
        active: true,
      });
    };

    const handleTouchEnd = () => {
      setTouchPosition(prev => ({
        ...prev,
        active: false,
      }));
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return touchPosition;
};
