import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { FaLightbulb, FaSync } from 'react-icons/fa';

const JOKES = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem. 💡",
  "Why did the developer go broke? Because he used up all his cache. 💸",
  "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?' 🍺",
  "Programming is 10% writing code and 90% figuring out why it doesn't work. 🤔",
  "There are 10 types of people: those who understand binary and those who don't. 1️⃣0️⃣",
  "Code never lies, comments sometimes do. 📝",
  "It works on my machine. 🤷‍♂️ - Every Developer",
  "I would love to change the world, but they won't give me the source code. 🌍",
  "Programming: When 'it works' becomes 'but why?'. 🤯",
];

const DevJoke = () => {
  const [joke, setJoke] = useState(() => {
    const randomIndex = Math.floor(Math.random() * JOKES.length);
    return JOKES[randomIndex];
  });
  const [isLoading, setIsLoading] = useState(false);
  

  const getRandomJoke = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * JOKES.length);
      setJoke(JOKES[randomIndex]);
      setIsLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    // Auto-refresh every 15 seconds
    const interval = setInterval(() => {
      getRandomJoke();
    }, 15000);
    
    return () => clearInterval(interval);
  }, [getRandomJoke]);

  return (
    <motion.div
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <FaLightbulb className="text-yellow-400 text-sm" />
          <h4 className="text-white font-semibold text-sm">Dev Wisdom</h4>
        </div>
        <motion.button
          onClick={getRandomJoke}
          className="text-slate-400 hover:text-purple-400 transition-colors"
          whileHover={{ rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaSync className="text-xs" />
        </motion.button>
      </div>

      <motion.p
        key={joke}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-slate-300 text-xs leading-relaxed mb-3 min-h-10"
      >
        {isLoading ? (
          <span className="text-slate-500 italic">Loading wisdom...</span>
        ) : (
          joke
        )}
      </motion.p>

      <div className="flex items-center gap-2">
        <div className="flex-1 h-0.5 bg-slate-700/50 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-purple-400 to-blue-400"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
          />
        </div>
        <span className="text-slate-500 text-[10px]">Next in 15s</span>
      </div>
    </motion.div>
  );
};

export default DevJoke;

