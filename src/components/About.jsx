import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      {/* Decorative Pastel Background Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full bg-accentPink/10 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-secondaryBg/40 blur-3xl opacity-80 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
          className="bg-white rounded-20 p-8 md:p-16 shadow-xl shadow-primary/5 border border-primary/5 text-center relative"
        >
          {/* Cute Accent Icon Decor */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondaryBg text-primary w-12 h-12 rounded-full flex items-center justify-center shadow-md border-2 border-white">
            <span className="text-xl">👩‍🍳</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-chocolate tracking-tight mb-6">
            Welcome to La Couche
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accentPink mx-auto mb-8 rounded-full" />

          <p className="text-textColor/90 text-base md:text-lg leading-relaxed font-body max-w-2xl mx-auto">
            Every dessert at La Couche is handcrafted using premium ingredients, creative flavours and lots of love. From celebration cakes to handcrafted chocolates and healthy sugar-free treats, every creation is designed to make your moments sweeter.
          </p>
          
          {/* Subtle signature/bottom note */}
          <div className="mt-8 font-heading text-xl text-primary font-bold tracking-wide italic">
            ~ Handcrafted with Love
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
