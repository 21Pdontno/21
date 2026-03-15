/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Navigation from './components/Navigation';
import Cursor from './components/Cursor';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="relative w-full min-h-screen">
      <AnimatePresence>
        {/* @ts-expect-error React 19 key prop */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/case/:id" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Cursor />
      <Navigation />
      <AnimatedRoutes />
    </Router>
  );
}

