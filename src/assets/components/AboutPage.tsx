// components/AboutHero.tsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const AboutHero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-8 pt-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xl">👋</span>
              Hello!
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Software
              </motion.h1>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Developer
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-slate-400 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Software engineer architecting scalable web apps, with AI side projects
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {['React', 'JS+Typescript', 'SQL', 'C# & .Net', 'Git'].map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-300 text-sm hover:border-purple-400/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
                <motion.a
                  href="/CV Robert 2026.pdf"
                  download="RobertClaudiu_CV.pdf"
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Curriculum Vitae
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />                </svg>
                </motion.a>

              <button className="px-6 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                Contact
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://github.com/Robert-Linguraru"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 hover:bg-purple-500/20 border border-slate-700 hover:border-purple-400/50 rounded-lg transition-all"
              >
                <FaGithub className="text-slate-400 hover:text-purple-400 text-xl" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/robert-linguraru-0331752b9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 hover:bg-purple-500/20 border border-slate-700 hover:border-purple-400/50 rounded-lg transition-all"
              >
                <FaLinkedin className="text-slate-400 hover:text-purple-400 text-xl" />
              </a>
              
              <a
                href="https://www.instagram.com/robertclaud_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-slate-800/50 hover:bg-purple-500/20 border border-slate-700 hover:border-purple-400/50 rounded-lg transition-all"
              >
                <FaInstagram className="text-slate-400 hover:text-purple-400 text-xl" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            
            {/* Main Image Container */}
            <div className="relative bg-slate-800/10 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 overflow-hidden h-[450px] lg:h-[550px] flex items-center justify-center">
                    <motion.svg
                      viewBox="0 0 400 400"
                      className="w-full h-full"
                      initial={{ scale: 0.9, rotate: -5 }}
                      animate={{ 
                        scale: [0.95, 1.05, 0.95],
                        rotate: [ -2, 2, -2 ]
                      }}
                      transition={{ 
                        duration: 8, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <defs>
                        <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.4" />
                          <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#1E293B" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      {/* Main flowing wave/blob */}
                      <path 
                        d="M50 200 Q100 100 200 150 Q300 200 350 250 Q300 300 200 250 Q100 200 50 200 Z" 
                        fill="url(#grad1)" 
                        stroke="#6366F1" 
                        strokeWidth="2" 
                        opacity="0.8"
                      />
                      {/* Floating circle accents - FIXED */}
                      <circle cx="280" cy="180" r="40" fill="#3B82F6" opacity="0.3" />
                      <ellipse cx="120" cy="280" rx="60" ry="30" fill="#A78BFA" opacity="0.4" />
                      <circle cx="320" cy="100" r="25" fill="#60A5FA" opacity="0.5" />
                    </motion.svg>

              
              {/* Optional: Decorative corner elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-purple-400/50 rounded-tr-3xl" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-blue-400/50 rounded-bl-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
