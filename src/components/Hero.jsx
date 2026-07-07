import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
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
    }, 4500);
    return () => clearInterval(timer);
  }, []);

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
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentIdx}
                  src={heroImages[currentIdx]} 
                  alt="La Couche Handcrafted Cake" 
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  loading="eager"
                />
              </AnimatePresence>
            </div>
            
            {/* Mini Floating Badges */}
            <motion.div 
              className="absolute md:-top-4 md:-right-4 top-2 right-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl sm:rounded-2xl shadow-lg border border-primary/5 flex items-center gap-1.5 sm:gap-2 scale-90 sm:scale-100"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xl">🎂</span>
              <div className="text-left">
                <p className="text-[10px] text-chocolate/50 font-bold uppercase tracking-wider leading-none">100% Organic</p>
                <p className="text-xs font-bold text-chocolate leading-tight">Handmade</p>
              </div>
            </motion.div>

            <motion.div 
              className="absolute md:-bottom-4 md:-left-4 bottom-2 left-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl sm:rounded-2xl shadow-lg border border-primary/5 flex items-center gap-1.5 sm:gap-2 scale-90 sm:scale-100"
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
