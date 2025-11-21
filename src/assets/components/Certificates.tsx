import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

export interface Certificate {
  name: string;
  image: string;
  issuedBy: string;
}

interface CertificatesProps {
  certificates: Certificate[];
  isInView: boolean;
}

const Certificates: React.FC<CertificatesProps> = ({ certificates, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {certificates.map((cert, index) => (
        <motion.div
          key={cert.name}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all group"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          {/* Certificate Image */}
          <div className="relative h-48 bg-slate-900/50 overflow-hidden">
            <img 
              src={cert.image} 
              alt={cert.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent" />
            
            {/* Certificate Icon Badge */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-purple-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <FaCertificate className="text-white text-xl" />
            </div>
          </div>

          {/* Certificate Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {cert.name}
            </h3>
            <p className="text-slate-400 text-sm flex items-center gap-2">
              <span className="text-purple-400">●</span>
              {cert.issuedBy}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Certificates;
