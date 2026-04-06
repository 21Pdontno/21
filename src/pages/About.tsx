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
        className="max-w-7xl mx-auto px-8 py-24 md:py-32 text-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Philosophy & Bio */}
          <div className="lg:col-span-7 space-y-16">
            <section>
              <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8">Biography</h3>
              <p className="font-serif text-2xl md:text-4xl leading-relaxed mb-8">
                I am a multidisciplinary designer and art director, focusing on the intersection of brand identity, digital experiences, and emerging technologies.
              </p>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/70 mb-8">
                With over a decade of experience in the creative industry, I've helped both startups and global enterprises articulate their vision through thoughtful, systematic design. My approach combines rigorous strategic thinking with meticulous craft, ensuring that every touchpoint not only looks beautiful but serves a clear purpose.
              </p>
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/70">
                I believe that great design is invisible. It's not about adding more elements, but about removing the unnecessary until only the essential remains. Whether I'm designing a complex digital product or a holistic brand identity, my goal is to create work that feels inevitable.
              </p>
            </section>

            <section>
              <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8">Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-serif text-xl md:text-2xl">
                <div>
                  <h4 className="text-white mb-4">Brand Strategy</h4>
                  <ul className="text-white/60 space-y-2 text-lg">
                    <li>Positioning & Messaging</li>
                    <li>Brand Architecture</li>
                    <li>Naming & Voice</li>
                    <li>Market Research</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-4">Visual Identity</h4>
                  <ul className="text-white/60 space-y-2 text-lg">
                    <li>Logo Design</li>
                    <li>Typography Systems</li>
                    <li>Color Palettes</li>
                    <li>Brand Guidelines</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-4">Digital Design</h4>
                  <ul className="text-white/60 space-y-2 text-lg">
                    <li>UI/UX Design</li>
                    <li>Web Experiences</li>
                    <li>Design Systems</li>
                    <li>Prototyping</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white mb-4">Content & AIGC</h4>
                  <ul className="text-white/60 space-y-2 text-lg">
                    <li>Art Direction</li>
                    <li>Generative AI Workflows</li>
                    <li>Motion Graphics</li>
                    <li>3D Visualization</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Experience & Awards */}
          <div className="lg:col-span-5 space-y-16">
            <section>
              <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8">Experience</h3>
              <ul className="space-y-8 font-serif text-xl md:text-2xl">
                <li className="border-b border-white/10 pb-8">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-white">Senior Art Director</span>
                    <span className="text-sm font-sans text-white/50">2023 - Present</span>
                  </div>
                  <div className="text-white/60 text-lg">Build in Amsterdam</div>
                </li>
                <li className="border-b border-white/10 pb-8">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-white">Digital Designer</span>
                    <span className="text-sm font-sans text-white/50">2020 - 2023</span>
                  </div>
                  <div className="text-white/60 text-lg">MediaMonks</div>
                </li>
                <li className="border-b border-white/10 pb-8">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-white">Interactive Designer</span>
                    <span className="text-sm font-sans text-white/50">2018 - 2020</span>
                  </div>
                  <div className="text-white/60 text-lg">AKQA</div>
                </li>
                <li className="border-b border-white/10 pb-8">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-white">Junior Designer</span>
                    <span className="text-sm font-sans text-white/50">2016 - 2018</span>
                  </div>
                  <div className="text-white/60 text-lg">Pentagram</div>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8">Selected Awards</h3>
              <ul className="space-y-6 font-serif text-lg md:text-xl text-white/80">
                <li className="flex justify-between items-center border-b border-white/10 pb-6">
                  <span>Awwwards Site of the Month</span>
                  <span className="font-sans text-sm text-white/50">2025</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-6">
                  <span>FWA of the Day (x3)</span>
                  <span className="font-sans text-sm text-white/50">2024</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-6">
                  <span>Webby Awards - Best UI</span>
                  <span className="font-sans text-sm text-white/50">2023</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-6">
                  <span>Red Dot Design Award</span>
                  <span className="font-sans text-sm text-white/50">2022</span>
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-8">Contact</h3>
              <div className="space-y-4 font-serif text-xl md:text-2xl">
                <a href="mailto:hello@example.com" className="block hover:text-white/50 transition-colors">hello@example.com</a>
                <a href="#" className="block hover:text-white/50 transition-colors">LinkedIn</a>
                <a href="#" className="block hover:text-white/50 transition-colors">Behance</a>
                <a href="#" className="block hover:text-white/50 transition-colors">Instagram</a>
              </div>
            </section>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}
