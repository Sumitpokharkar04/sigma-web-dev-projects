//use hooks

import { useState, useCallback, useEffect } from 'react';

export const useZoom = () => {
  const [isZooming, setIsZooming] = useState(false);
  const [zoomComplete, setZoomComplete] = useState(false);
  
  const initiateZoom = useCallback(() => {
    setIsZooming(true);
    
    // Set a timeout for when zoom completes (should match the animation duration)
    const timer = setTimeout(() => {
      setZoomComplete(true);
    }, 1500); // 1.5s to match the zoom-in animation
    
    return () => clearTimeout(timer);
  }, []);
  
  const resetZoom = useCallback(() => {
    setIsZooming(false);
    setZoomComplete(false);
  }, []);
  
  // Listen for escape key to reset zoom
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (isZooming || zoomComplete)) {
        resetZoom();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZooming, zoomComplete, resetZoom]);
  
  return {
    isZooming,
    zoomComplete,
    initiateZoom,
    resetZoom
  };
};
