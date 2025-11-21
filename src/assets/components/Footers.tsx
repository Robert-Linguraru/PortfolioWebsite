// components/Footer.tsx
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import DevJoke from '@/assets/components/DevJoke';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for navbar height
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { label: 'About', id: 'about' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative border-t border-slate-800">
      {/* Background linear overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          
            <DevJoke />

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-purple-400 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm flex items-center gap-2">
            © {currentYear} Robert Claudiu. Made with React / TS / Tailwind / Framer Motion 
          </p>
          
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors text-sm group"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="group-hover:translate-y-0.5 transition-transform">
              Back to Top
            </span>
            <FaArrowUp className="text-xs" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
