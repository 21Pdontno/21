import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { categories } from '../data';

export default function Navigation() {
  const [showCategories, setShowCategories] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const activeCategory = searchParams.get('category') || 'All';

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      setShowCategories(true);
    }
  };

  const handleCategoryClick = (cat: string) => {
    setSearchParams({ category: cat });
    setShowCategories(false);
  };

  // Close categories when route changes
  useEffect(() => {
    setShowCategories(false);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>
        {showCategories && location.pathname === '/' && (
          <>
            {/* Backdrop to detect clicking elsewhere */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 cursor-none"
              onClick={() => setShowCategories(false)}
            />
            
            {/* Light beige vertical bar */}
            <motion.div 
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="fixed left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-64 h-full bg-[#EAE8E3] z-50 flex flex-col items-center justify-center origin-center shadow-2xl"
            >
              <div className="flex flex-col items-center gap-8 text-black font-sans text-sm tracking-widest uppercase font-medium">
                <div className="text-black/40 mb-4 text-xs">Categories</div>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`transition-colors duration-300 ${
                      activeCategory === cat ? 'text-black font-bold' : 'text-black/50 hover:text-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
                <div className="w-8 h-[1px] bg-black/10 my-4"></div>
                <Link to="/about" className="hover:text-black/50 transition-colors duration-300">
                  About
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Original Collapsed Navigation */}
      <AnimatePresence>
        {(!showCategories || location.pathname !== '/') && (
          <motion.nav 
            className="fixed left-2 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-30 mix-blend-difference flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: showCategories ? 0 : 0.5 }}
          >
            <div className="flex flex-col items-center gap-8 text-white font-sans text-sm tracking-widest uppercase font-medium">
              <button onClick={handleWorkClick} className="hover:text-gray-300 transition-colors duration-300" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Work
              </button>
              <div className="w-[1px] h-12 bg-white/30"></div>
              <Link to="/about" className="hover:text-gray-300 transition-colors duration-300" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                About
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
