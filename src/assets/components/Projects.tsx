// components/Projects.tsx
import { motion } from 'framer-motion';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '@/data/portfolioData';

interface ProjectsProps {
  projects: Project[];
  isInView: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ projects, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all group"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          {/* Project Image */}
          <div className="relative h-48 bg-slate-900/50 overflow-hidden">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-blue-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaCode className="text-6xl text-slate-700" />
                </div>
              </>
            )}
          </div>

          {/* Project Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-slate-400 text-sm mb-4">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags?.map((tags) => (
                <span
                  key={tags}
                  className="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-lg text-xs text-slate-300"
                >
                  {tags}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold"
              >
                <FaExternalLinkAlt className="text-xs" />
                View Project
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-300 text-sm font-semibold"
                >
                  <FaGithub />
                  Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
