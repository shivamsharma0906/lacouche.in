import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import BakeryDoodles from './BakeryDoodles';

import cakeSweetBloom from '../assets/cake_sweet_bloom.png';
import cakePetalsSparkle from '../assets/cake_petals_sparkle.png';
import cakeDaisyDream from '../assets/cake_daisy_dream.jpg';
import mothersDayHamper from '../assets/mothers_day_hamper.jpg';

const heroImages = [cakeSweetBloom, cakePetalsSparkle, cakeDaisyDream, mothersDayHamper];

export const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIdx]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondaryBg/40 via-background to-background">
      {/* Semi-transparent Background Floating Doodles */}
      <BakeryDoodles />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtle Mini Brand Tag */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <span>✨</span> Premium Home Bakery
          </motion.div>

          {/* Large Title/Logo Display */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-chocolate tracking-tight leading-none mb-2"
          >
            La Couche
          </motion.h1>

          {/* Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-6"
          >
            Freshly Crafted Happiness
          </motion.h2>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-textColor/80 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-10"
          >
            Handcrafted Cakes, Chocolates & Sugar-Free Delights made with love.
          </motion.p>

          {/* Call To Actions */}
          <motion.div 
            variants={itemVariants}
            className="hidden lg:flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#menus"
              className="bg-primary hover:bg-primary/95 text-white font-semibold text-center px-8 py-3.5 rounded-20 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Explore Menu
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact"
              className="bg-white hover:bg-[#FFF8F7] text-chocolate font-semibold text-center px-8 py-3.5 rounded-20 flex items-center justify-center gap-2 border-2 border-[#F9E4E5] hover:border-primary/20 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
              <MessageCircle size={18} className="text-primary" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Cake Image Column */}
        <motion.div 
          className="lg:col-span-5 flex flex-col justify-center items-center"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
        >
          <div className="relative w-full max-w-[380px] aspect-[3/4]">
            {/* Elegant Background Pastel Pink Decorative Ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accentPink/30 to-secondaryBg/60 blur-xl opacity-80 animate-pulse duration-[6000ms]" />
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary/20 rotate-12 pointer-events-none" />
            
            {/* Main Rounded Image Container */}
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500 group/image">
              {heroImages.map((src, idx) => (
                <motion.img
                  key={idx}
                  src={src}
                  alt="La Couche Handcrafted Cake"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ 
                    opacity: idx === currentIdx ? 1 : 0,
                    scale: idx === currentIdx ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ 
                    zIndex: idx === currentIdx ? 10 : 0,
                    pointerEvents: idx === currentIdx ? "auto" : "none"
                  }}
                />
              ))}

              {/* Navigation Arrows */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white text-chocolate border border-primary/10 shadow-md flex items-center justify-center md:opacity-0 md:group-hover/image:opacity-100 opacity-80 focus:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-pointer"
                aria-label="Previous cake"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white text-chocolate border border-primary/10 shadow-md flex items-center justify-center md:opacity-0 md:group-hover/image:opacity-100 opacity-80 focus:opacity-100 transition-opacity duration-300 pointer-events-auto cursor-pointer"
                aria-label="Next cake"
              >
                <ChevronRight size={16} />
              </button>

              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 pointer-events-auto">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIdx ? 'w-5 bg-primary' : 'w-1.5 bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Mini Floating Badges */}
            <motion.div 
              className="absolute md:-top-4 md:-right-4 top-2 right-2 bg-white px-3 py-2 rounded-xl sm:rounded-2xl shadow-lg border border-primary/10 flex items-center gap-1.5 sm:gap-2 scale-90 sm:scale-100 will-change-transform z-20"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xl">🎂</span>
              <div className="text-left">
                <p className="text-[10px] text-chocolate/50 font-bold uppercase tracking-wider leading-none">Baked Daily</p>
                <p className="text-xs font-bold text-chocolate leading-tight">Handmade</p>
              </div>
            </motion.div>

            <motion.div 
              className="absolute md:-bottom-4 md:-left-4 bottom-2 left-2 bg-white px-3 py-2 rounded-xl sm:rounded-2xl shadow-lg border border-primary/10 flex items-center gap-1.5 sm:gap-2 scale-90 sm:scale-100 will-change-transform z-20"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <span className="text-xl">🌿</span>
              <div className="text-left">
                <p className="text-[10px] text-chocolate/50 font-bold uppercase tracking-wider leading-none">Sugar-Free</p>
                <p className="text-xs font-bold text-chocolate leading-tight">Available</p>
              </div>
            </motion.div>
          </div>

          {/* Call To Actions (Mobile view) */}
          <div className="flex lg:hidden flex-col sm:flex-row gap-4 w-full mt-10 max-w-[380px]">
            <a 
              href="#menus"
              className="bg-primary hover:bg-primary/95 text-white font-semibold text-center px-8 py-3.5 rounded-20 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Explore Menu
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact"
              className="bg-white hover:bg-[#FFF8F7] text-chocolate font-semibold text-center px-8 py-3.5 rounded-20 flex items-center justify-center gap-2 border-2 border-[#F9E4E5] hover:border-primary/20 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Us
              <MessageCircle size={18} className="text-primary" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
