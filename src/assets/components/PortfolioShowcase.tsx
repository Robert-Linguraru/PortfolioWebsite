// components/PortfolioShowcase.tsx
import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaCode, FaCertificate, FaLaptopCode } from 'react-icons/fa';
import Projects from './Projects';
import Certificates from './Certificates';
import TechStacks from './TechStacks';
import { projects, certificates, techStack } from '@/data/portfolioData';

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const tabs = [
    { id: 'projects', label: 'Projects', icon: FaCode },
    { id: 'certificates', label: 'Certificates', icon: FaCertificate },
    { id: 'techstack', label: 'Tech Stack', icon: FaLaptopCode },
  ];

  return (
    <section ref={ref} id="portfolio" className="min-h-screen py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Portfolio Showcase
          </motion.h2>
          <motion.p
            className="text-slate-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore my journey through projects, certifications, and technical expertise. Each
            section represents a milestone in my continuous learning path.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all flex items-center gap-3 ${
                  activeTab === tab.id
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 border border-slate-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="text-xl" />
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content */}
        <div className="relative">
          {activeTab === 'projects' && (
            <Projects projects={projects} isInView={isInView} />
          )}
          
          {activeTab === 'certificates' && (
            <Certificates certificates={certificates} isInView={isInView} />
          )}
          
          {activeTab === 'techstack' && (
            <TechStacks techStack={techStack} isInView={isInView} />
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
