// components/Navbar.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string, linkName: string) => {
    setActiveLink(linkName);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-black/20 backdrop-blur-md border-b border-slate-800/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <motion.button
          onClick={() => scrollToSection('home', 'Home')}
          className="text-2xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          your_name
        </motion.button>

        {/* Navigation Links - Right Aligned */}
        <div className="flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.id, link.name)}
              className={`text-lg font-medium transition-all ${
                activeLink === link.name
                  ? 'text-white border-b-2 border-purple-400'
                  : 'text-slate-400 hover:text-white'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
