import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home.js';
import About from '../pages/AboutUs.js';
import ExecutiveBoard from '../pages/ExecutiveBoard.js';
import Events from '../pages/Events.js';
import Blogs from '../pages/Blogs.js';
import Contact from '../pages/ContactUs.js';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/executive-board" element={<ExecutiveBoard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes; 