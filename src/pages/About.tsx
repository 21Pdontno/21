import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function About() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => {
      document.body.style.overflow = 'auto';
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial={{ backgroundColor: 'transparent' }}
      animate={{ backgroundColor: '#1A1A1A' }}
      exit={{ backgroundColor: 'transparent', transition: { duration: 0.8 } }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="fixed inset-0 w-full h-full overflow-y-auto z-50"
    >
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={() => navigate('/')}
        className="fixed top-8 left-8 z-50 text-white font-sans text-sm tracking-widest uppercase hover:opacity-50 transition-opacity"
      >
        Close
      </motion.button>

      <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <motion.div
          layoutId="about-image-container"
          className="absolute inset-0 w-full h-full"
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2000&auto=format&fit=crop"
            alt="Designer Profile"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-24 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          <motion.h1
            layoutId="about-title"
            className="text-5xl md:text-8xl font-serif text-white mb-4"
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-white/80 font-sans text-lg md:text-2xl max-w-2xl"
          >
            I am a digital designer and art director based in Amsterdam, specializing in immersive web experiences.
          </motion.p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="max-w-4xl mx-auto px-8 py-24 md:py-32 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-6">Experience</h3>
            <ul className="space-y-6 font-serif text-xl md:text-2xl">
              <li className="border-b border-white/10 pb-6">
                <span className="block text-sm font-sans text-white/50 mb-2">2023 - Present</span>
                Senior Art Director @ Build in Amsterdam
              </li>
              <li className="border-b border-white/10 pb-6">
                <span className="block text-sm font-sans text-white/50 mb-2">2020 - 2023</span>
                Digital Designer @ MediaMonks
              </li>
              <li className="border-b border-white/10 pb-6">
                <span className="block text-sm font-sans text-white/50 mb-2">2018 - 2020</span>
                Interactive Designer @ AKQA
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-6">Philosophy</h3>
            <p className="font-serif text-xl md:text-2xl leading-relaxed mb-8">
              I believe that great design is invisible. It's not about adding more elements, but about removing the unnecessary until only the essential remains.
            </p>
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/70">
              My approach combines modular grid systems with fluid animations to create digital spaces that feel both structured and alive. Every interaction should feel intentional and rewarding.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
