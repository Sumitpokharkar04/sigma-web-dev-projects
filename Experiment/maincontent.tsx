src/components/MainContent.tsx

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const MainContent = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate content loading with a slight delay for the animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isLoaded) return null;
  
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-serif font-semibold tracking-wider">PORTAL</div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'work', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeSection === item 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <Button variant="ghost" className="text-sm uppercase tracking-wider">
            Enter
          </Button>
        </nav>
      </header>
      
      {/* Hero section */}
      <section className="min-h-screen pt-24 flex flex-col justify-center px-6 md:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="opacity-0 animate-reveal-content reveal-delay-1">
            <div className="inline-block rounded-full px-3 py-1 text-xs uppercase tracking-wider border border-white/20 mb-6">
              Welcome to our world
            </div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-reveal-content reveal-delay-2">
            We Create <br/>
            The Future
          </h1>
          
          <p className="max-w-xl text-lg text-gray-300 mb-10 opacity-0 animate-reveal-content reveal-delay-3">
            Discover a world where innovation meets design, where imagination becomes reality. We are a team of creators, designers, and visionaries dedicated to crafting the extraordinary.
          </p>
          
          <div className="opacity-0 animate-reveal-content reveal-delay-4">
            <Button className="rounded-full px-8 py-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20">
              Explore Our Work
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured projects */}
      <section className="min-h-screen px-6 md:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="group rounded-lg overflow-hidden relative h-[400px] cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10"></div>
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-60 z-10"
                ></div>
                <img 
                  src={`https://picsum.photos/800/1000?random=${item}`}
                  alt="Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="font-serif text-xl font-semibold mb-2">Project {item}</h3>
                  <p className="text-sm text-gray-300">Design • Development • 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="glass py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:mb-0">
            <h2 className="font-serif text-xl font-semibold mb-4">PORTAL</h2>
            <p className="max-w-xs text-sm text-gray-400">
              A gateway to innovation, creativity, and the future of design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-sm font-medium mb-4 uppercase">Navigation</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Work', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4 uppercase">Social</h3>
              <ul className="space-y-2">
                {['Twitter', 'Instagram', 'Dribbble', 'LinkedIn'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-4 uppercase">Legal</h3>
              <ul className="space-y-2">
                {['Privacy', 'Terms', 'Cookies'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-white/10 text-center md:text-left">
          <p className="text-xs text-gray-500">
            © 2023 Portal. All rights reserved.
          </p>
        </div>
      </footer>
      
      {/* Back to portal button */}
      <button 
        onClick={() => window.location.reload()}
        className="fixed bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all duration-300 z-50"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default MainContent;
