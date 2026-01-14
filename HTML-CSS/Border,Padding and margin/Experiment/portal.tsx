import { useState, useRef, useEffect } from 'react';
import { useZoom } from '@/hooks/useZoom';

interface PortalProps {
  onZoomComplete: () => void;
}

const Portal = ({ onZoomComplete }: PortalProps) => {
  const portalRef = useRef<HTMLDivElement>(null);
  const { isZooming, initiateZoom } = useZoom();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle portal interaction
  const handlePortalClick = () => {
    if (portalRef.current && !isZooming) {
      initiateZoom();
      
      // Call onZoomComplete after animation completes
      setTimeout(() => {
        onZoomComplete();
      }, 1500); // This timing should match the animation duration
    }
  };

  return (
    <div className={`portal-container flex items-center justify-center min-h-screen ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      <div className="relative w-full max-w-4xl px-6 flex items-center justify-center">
        <div
          ref={portalRef}
          className={`portal relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden ${isZooming ? 'animate-zoom-in' : 'animate-scale-in'}`}
          onClick={handlePortalClick}
        >
          <img
            src="/lovable-uploads/c6bf3814-91f5-4652-8fe0-eaa2d15c5226.png"
            alt="Portal to the mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border-8 border-amber-700/70 rounded-full pointer-events-none"></div>
        </div>
        
        <div className="absolute left-0 md:left-6 top-1/2 transform -translate-y-1/2 md:-translate-x-8 lg:-translate-x-16">
          <h2 className="text-4xl md:text-7xl font-serif font-bold leading-tight text-white">
            We <br />
            Create
          </h2>
        </div>
        
        <div className="absolute right-0 md:right-6 top-1/2 transform -translate-y-1/2 md:translate-x-8 lg:translate-x-16">
          <h2 className="text-4xl md:text-7xl font-serif font-bold leading-tight text-white text-right">
            The <br />
            Future
          </h2>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
          Click the portal to enter
        </div>
      </div>
    </div>
  );
};

export default Portal;
