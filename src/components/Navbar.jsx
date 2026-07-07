import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll height to toggle sticky state background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menus', href: '#menus' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-primary/5 py-4' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <img 
              src={logoImg} 
              alt="La Couche Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-full border-2 border-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:rotate-6"
            />
            <span className="text-2xl md:text-3xl font-heading font-extrabold text-primary tracking-wide transition-transform duration-300 group-hover:scale-105">
              La Couche
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-textColor/80 font-medium hover:text-primary transition-colors relative group py-2 text-sm lg:text-base"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/95 text-white font-medium px-6 py-2.5 rounded-20 flex items-center gap-2 shadow-md hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              Order Now
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-chocolate hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-chocolate/10 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Drawer */}
            <motion.div
              className="absolute right-0 top-0 h-full w-[280px] bg-background p-8 flex flex-col justify-between shadow-2xl border-l border-primary/10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-16 flex flex-col gap-6">
                <div className="text-xs uppercase tracking-wider text-chocolate/50 font-bold border-b border-chocolate/5 pb-2">
                  Navigation
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-semibold text-textColor hover:text-primary transition-colors py-1 flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-primary hover:bg-primary/95 text-white text-center font-semibold py-3 rounded-20 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  Order Now
                  <ArrowRight size={18} />
                </a>
                <div className="text-center text-xs text-chocolate/60">
                  Handcrafted with ❤️ by La Couche
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
