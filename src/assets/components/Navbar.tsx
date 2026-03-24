// components/Navbar.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string, linkName: string) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
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
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6 bg-black/20 backdrop-blur-md border-b border-slate-800/50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <motion.button
          onClick={() => scrollToSection('home', 'Home')}
          className="text-lg sm:text-2xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
        >
          Robert Claudiu
        </motion.button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.id, link.name)}
              className={`text-sm lg:text-lg font-medium transition-all whitespace-nowrap ${
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

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-6 h-0.5 bg-white"
            animate={isMobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white"
            animate={isMobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden mt-4 pt-4 border-t border-slate-800/50 space-y-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.id, link.name)}
              className={`block w-full text-left px-4 py-2 rounded-lg text-base font-medium transition-all ${
                activeLink === link.name
                  ? 'text-white bg-purple-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {link.name}
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
