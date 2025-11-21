// components/TechStack.tsx
import { motion } from 'framer-motion';
import TechStackIcon from '@/assets/icons/TechStackIcon';
import type { TechStack as TechStackType } from '@/data/portfolioData';

interface TechStackProps {
  techStack: TechStackType[];
  isInView: boolean;
}

const TechStacks: React.FC<TechStackProps> = ({ techStack, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.id}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-400/50 transition-all group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
            whileHover={{ 
              y: -8,
              scale: 1.05,
              borderColor: 'rgba(168, 85, 247, 0.5)'
            }}
          >
            <div className="flex justify-center mb-4">
              <TechStackIcon tech={tech} />
            </div>
            <h3 className="text-center text-white font-semibold text-lg group-hover:text-purple-400 transition-colors">
              {tech.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStacks;
