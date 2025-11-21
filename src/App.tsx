import { useState } from 'react';
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

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setHasLoadingCompleted(true);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/90 via-purple-950/60 to-slate-900/90" />
      
      {/* Particles - always rendered, never unmounts */}
        <Particles
          className="absolute inset-0 pointer-events-none"  
          quantity={40}        
          ease={85}
          color="#1e293b"
          staticity={65}
          size={0.35}
          refresh={false}   
        />

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
          </>
        )}
      </div>
    </div>
  );
}

export default App;