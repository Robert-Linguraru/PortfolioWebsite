// components/Navbar.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('LoadingScreen');

  const navLinks = ['Home', 'About', 'Portfolio', 'Contact'];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <motion.div
          className="text-2xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Robert Claudiu
        </motion.div>

        {/* Navigation Links - Right Aligned */}
        <div className="flex gap-8 items-center">
          {navLinks.map((link, index) => (
            <motion.button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`text-lg font-medium transition-all ${
                activeLink === link
                  ? 'text-white border-b-2 border-purple-400'
                  : 'text-slate-400 hover:text-white'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {link}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
