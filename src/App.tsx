import { Analytics } from "@vercel/analytics/next"
import { useState, useEffect } from 'react';
import { Particles } from '@/assets/ui/Particles';
import LoadingScreen from '@/assets/components/LoadingScreen';
import Navbar from '@/assets/components/Navbar';
import AboutPage from '@/assets/components/AboutPage';
import PortfolioShowcase from '@/assets/components/PortfolioShowcase';
import ContactSection from '@/assets/components/ContactSection';
import Footers from '@/assets/components/Footers';

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [hasLoadingCompleted, setHasLoadingCompleted] = useState(false);
  const [particleCount, setParticleCount] = useState(100);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect mobile and reduced motion preference
  useEffect(() => {
    const checkMobileAndMotion = () => {
      // Check if mobile
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Reduce particles significantly on mobile
      setParticleCount(mobile ? 20 : 100);
      
      // Check prefers-reduced-motion
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(motionQuery.matches);
      
      // Listen for reduced motion changes
      const handleMotionChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      motionQuery.addEventListener('change', handleMotionChange);
      
      return () => motionQuery.removeEventListener('change', handleMotionChange);
    };

    const cleanup = checkMobileAndMotion();
    window.addEventListener('resize', checkMobileAndMotion);
    
    return () => {
      window.removeEventListener('resize', checkMobileAndMotion);
      cleanup?.();
    };
  }, []);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setHasLoadingCompleted(true);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/90 via-purple-950/60 to-slate-900/90" />
      
      {/* Particles - reduced on mobile for performance */}
      {!prefersReducedMotion && (
        <Particles
          className="absolute inset-0 pointer-events-none"  
          quantity={particleCount}        
          ease={99}
          color="#fff"
          staticity={isMobile ? 50 : 15}
          size={isMobile ? 0.25 : 0.45}
          refresh={false}   
        />
      )}

      <div className="relative z-10">
        {/* Loading screen - conditionally rendered */}
        {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        
        {/* Content - rendered once, never unmounts */}
        {hasLoadingCompleted && (
          <>
            <Navbar />
            <AboutPage />
            <PortfolioShowcase />
            <ContactSection />
            <Footers />
            <Analytics />
          </>
        )}
      </div>
    </div>
  );
}

export default App;