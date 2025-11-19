import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Particles } from '@/assets/ui/Particles';
import LoadingScreen from '@/assets/components/LoadingScreen';
import Navbar from '@/assets/components/Navbar';
import AboutPage from '@/assets/components/AboutPage';

function App() {
  const [showLoading, setShowLoading] = useState(true);

return (
    <div className="relative min-h-screen bg-black">
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/30 via-purple-950/30 to-slate-900/30" />
      
      {/* Subtle particles */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={85}
        color="#ffffff"
        staticity={65}
        size={0.35}
      />

      {/* Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {showLoading ? (
            <LoadingScreen 
              key="loading"
              onLoadingComplete={() => setShowLoading(false)} 
            />
          ) : (
            <>
              <Navbar />
              <AboutPage />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;