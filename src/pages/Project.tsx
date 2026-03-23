import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => {
      document.body.style.overflow = 'auto';
      clearTimeout(timer);
    };
  }, [id]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ backgroundColor: 'transparent' }}
      animate={{ backgroundColor: '#F5F5F5' }}
      exit={{ backgroundColor: 'transparent', transition: { duration: 0.8 } }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="fixed inset-0 w-full h-full overflow-y-auto z-50"
    >
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={() => navigate('/')}
        className="fixed top-8 left-8 z-50 text-black font-sans text-sm tracking-widest uppercase hover:opacity-50 transition-opacity"
      >
        Close
      </motion.button>

      {/* Hero Section */}
      <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
        <motion.div
          layoutId={`image-container-${project.id}`}
          className="absolute inset-0 w-full h-full"
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Title Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-24 bg-gradient-to-t from-black/60 to-transparent">
          <motion.h1
            layoutId={`title-${project.id}`}
            className="text-5xl md:text-8xl font-serif text-white mb-4"
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-white/80 font-sans text-lg md:text-2xl max-w-2xl"
          >
            {project.description}
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-12 gap-16"
      >
        <div className="md:col-span-4 font-sans text-sm uppercase tracking-widest space-y-8">
          <div>
            <h3 className="text-black/50 mb-2">Client</h3>
            <p className="font-medium">{project.title}</p>
          </div>
          <div>
            <h3 className="text-black/50 mb-2">Category</h3>
            <p className="font-medium">{project.category}</p>
          </div>
          <div>
            <h3 className="text-black/50 mb-2">Year</h3>
            <p className="font-medium">2026</p>
          </div>
        </div>
        
        <div className="md:col-span-8 font-serif text-2xl md:text-4xl leading-relaxed text-black/90">
          <p>
            We approached this project with a minimalist avant-garde philosophy, aiming to create a high-end commercial feel combined with an immersive digital experience. The ordered grid minimalism serves as the underlying logic for the entire visual system.
          </p>
          <br />
          <p>
            By utilizing neutral color containers, we ensured that the brand's core visual identity remained the focal point, avoiding any conflict with superfluous color decorations. The typography relies on a clean sans-serif base, elevated by serif accents in the editorial sections.
          </p>
        </div>
      </motion.div>

      {/* Additional Images (Scroll triggered) */}
      <div className="max-w-4xl mx-auto px-8 pb-32 space-y-24">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full aspect-[9/21] md:aspect-[1/2] bg-gray-200 overflow-hidden shadow-sm"
          >
            <img 
              src={`https://picsum.photos/seed/${project.id}-${i}/800/1600`} 
              alt="Project detail" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
