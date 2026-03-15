import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { projects, Project } from '../data';

export default function Home() {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';
  
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const navigate = useNavigate();

  // Auto-scroll logic
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleUserInteraction = () => {
      setIsAutoScrolling(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsAutoScrolling(true), 1500);
    };

    window.addEventListener('wheel', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);
    window.addEventListener('touchmove', handleUserInteraction);

    return () => {
      window.removeEventListener('wheel', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('touchmove', handleUserInteraction);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!isAutoScrolling) return;
    
    let animationFrameId: number;
    let accumulatedScroll = 0;
    
    const scrollStep = () => {
      accumulatedScroll += 0.25;
      if (accumulatedScroll >= 1) {
        window.scrollBy(0, Math.floor(accumulatedScroll));
        accumulatedScroll -= Math.floor(accumulatedScroll);
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };
    
    animationFrameId = requestAnimationFrame(scrollStep);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoScrolling]);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === activeCategory));
    }
    setPage(1); // Reset page on category change
  }, [activeCategory]);

  const loadMore = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);
    
    // Simulate network request
    setTimeout(() => {
      const newProjects = projects.map(p => ({
        ...p,
        id: `${p.id}-${page}`,
        title: `${p.title} ${page + 1}`
      }));
      
      setFilteredProjects(prev => {
        if (activeCategory === 'All') {
          return [...prev, ...newProjects];
        } else {
          return [...prev, ...newProjects.filter((p) => p.category === activeCategory)];
        }
      });
      setPage(p => p + 1);
      setIsLoading(false);
    }, 1000);
  }, [page, isLoading, activeCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);

  return (
    <motion.div 
      className="relative w-full min-h-screen bg-[#F8F8F8] pt-32 pb-48 px-8 md:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1, transition: { duration: 0.8 } }}
    >
      {/* Header / Filter */}
      <header className="fixed top-0 left-0 w-full z-40 px-8 md:px-16 py-8 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
        <h1 
          className="text-2xl font-sans font-bold tracking-tighter pointer-events-auto cursor-pointer w-32"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BIA.
        </h1>
      </header>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-[1800px] mx-auto relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={() => navigate(`/case/${project.id}`)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="w-full flex justify-center mt-24">
          <div className="w-8 h-8 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
        </div>
      )}
    </motion.div>
  );
}

function ProjectCard({ project, index, onClick }: { key?: string | number; project: Project; index: number; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the image inside the card
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Staggered layout: columns 2 and 4 are pushed down
  const isStaggered = index % 4 === 1 || index % 4 === 3;
  const marginTop = isStaggered ? 'mt-0 lg:mt-16' : 'mt-0';

  return (
    <motion.div
      layout
      ref={cardRef}
      className={`relative flex flex-col group cursor-none ${marginTop}`}
      data-cursor="view-case"
      onClick={onClick}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1], // ease-out-cubic
        delay: (index % 4) * 0.1 + Math.floor(index / 4) * 0.2 
      }}
      whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
    >
      <motion.div 
        layoutId={`image-container-${project.id}`}
        className="relative w-full aspect-[9/16] overflow-hidden bg-gray-200 rounded-sm transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
      >
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>
      <div className="mt-6 flex justify-between items-baseline">
        <motion.h2 
          layoutId={`title-${project.id}`}
          className="text-xl font-sans font-medium tracking-tight group-hover:tracking-normal group-hover:text-black/70 transition-all duration-500"
        >
          {project.title}
        </motion.h2>
        <span className="text-xs font-sans text-gray-500 uppercase tracking-widest px-3 py-1.5 rounded-full transition-colors duration-300 group-hover:bg-black group-hover:text-white">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
}
