//src/pages/Index.tsx
import { useState } from 'react';
import Portal from '@/components/Portal';
import MainContent from '@/components/MainContent';

const Index = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  
  const handleZoomComplete = () => {
    setShowMainContent(true);
  };
  
  return (
    <div className="bg-black min-h-screen">
      {!showMainContent && (
        <Portal onZoomComplete={handleZoomComplete} />
      )}
      
      {showMainContent && (
        <MainContent />
      )}
    </div>
  );
};

export default Index;
