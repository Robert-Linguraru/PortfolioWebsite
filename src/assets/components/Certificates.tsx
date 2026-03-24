import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaStar, FaTrophy, FaGem } from 'react-icons/fa';
import type { Certificate } from '@/data/portfolioData';
import type { IconType } from 'react-icons/lib';

interface CertificatesProps {
  certificates: Certificate[];
  isInView: boolean;
}

const Certificates: React.FC<CertificatesProps> = ({ certificates, isInView }) => {
  const iconMap: Record<string, IconType> = {
    web: FaAward,
    react: FaStar,
    csharp: FaTrophy, 
    dotnet: FaCertificate,
    aws: FaGem,
    default: FaCertificate,
  };

  const gradientMap: Record<string, string> = {
    web: 'from-orange-400 via-red-400 to-pink-500',
    react: 'from-blue-400 via-purple-400 to-pink-400',
    csharp: 'from-green-400 via-blue-400 to-purple-400',
    dotnet: 'from-blue-500 via-cyan-400 to-teal-400',
    aws: 'from-yellow-400 via-orange-400 to-red-400',
    default: 'from-slate-700 via-slate-600 to-slate-500',
  };


  
  const getIcon = (type: string) => {
    const key = type.toLowerCase();  
    return iconMap[key] || iconMap.default;
  };

  const getGradient = (type: string) => {
    const key = type.toLowerCase();  
    return gradientMap[key] || gradientMap.default;
  };
return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {certificates.map((cert, index) => {
        // ✅ Pass cert.type instead of cert.name or cert.issuedBy
        const IconComponent = getIcon(cert.type);
        const gradient = getGradient(cert.type);

        return (
          <motion.div
            key={cert.name}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ 
              duration: 0.4,
              delay: 0.6 + index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            style={{ willChange: 'transform' }}
          >
            {/* Rest of your component... */}
            <div className="relative h-48 bg-slate-900/50 overflow-hidden flex items-center justify-center">
              <motion.div
                className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-20`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className={`absolute w-32 h-32 rounded-full bg-linear-to-br ${gradient} opacity-10 blur-2xl`}
                animate={{ 
                  scale: [1, 1.3, 1],
                  x: [-20, 20, -20],
                  y: [-10, 10, -10]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                className={`absolute w-24 h-24 rounded-full bg-linear-to-br ${gradient} opacity-10 blur-xl`}
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  x: [20, -20, 20],
                  y: [10, -10, 10]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              
              <motion.div
                className="relative z-10"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
              >
                <IconComponent 
                  className={`text-7xl bg-linear-to-br ${gradient} bg-clip-text text-transparent drop-shadow-lg`}
                />
              </motion.div>

              <div className="absolute top-4 right-4">
                <div className={`w-10 h-10 rounded-full bg-linear-to-br ${gradient} opacity-80 flex items-center justify-center`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 h-24 bg-linear-to-t from-slate-900 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {cert.name}
              </h3>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <span className={`inline-block w-2 h-2 rounded-full bg-linear-to-r ${gradient}`} />
                {cert.issuedBy}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Certificates;