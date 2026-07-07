import React from 'react';
import { motion } from 'framer-motion';

const CroissantSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15,50 C15,35 30,20 50,20 C70,20 85,35 85,50 C85,60 75,70 65,70 C55,70 50,60 50,50 C50,60 45,70 35,70 C25,70 15,60 15,50 Z" />
    <path d="M30,35 C35,42 42,42 45,35" />
    <path d="M55,35 C58,42 65,42 70,35" />
    <path d="M40,55 C42,62 48,62 50,55" />
  </svg>
);

const CupcakeSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Base cup */}
    <path d="M30,55 L35,80 C36,83 39,85 42,85 L58,85 C61,85 64,83 65,80 L70,55" />
    {/* Pleats */}
    <path d="M40,55 L42,85" />
    <path d="M50,55 L50,85" />
    <path d="M60,55 L58,85" />
    {/* Frosting */}
    <path d="M25,55 C20,55 20,48 25,45 C30,42 35,45 40,40 C45,35 55,35 60,40 C65,45 70,42 75,45 C80,48 80,55 75,55 Z" />
    {/* Frosting swirl */}
    <path d="M35,45 C45,35 55,35 65,45" />
    {/* Cherry */}
    <circle cx="50" cy="28" r="6" className="fill-current" />
    <path d="M52,22 C55,15 62,15 65,18" />
  </svg>
);

const DonutSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="50" r="35" />
    <circle cx="50" cy="50" r="12" />
    {/* Frosting drips */}
    <path d="M22,42 C25,40 28,45 32,45 C36,45 38,38 42,38 C46,38 48,44 52,44 C56,44 58,39 62,39 C66,39 68,43 72,43 C76,43 78,38 81,45" />
    {/* Sprinkles */}
    <line x1="32" y1="28" x2="36" y2="26" strokeWidth="3" />
    <line x1="62" y1="26" x2="66" y2="28" strokeWidth="3" />
    <line x1="25" y1="58" x2="28" y2="62" strokeWidth="3" />
    <line x1="72" y1="58" x2="75" y2="54" strokeWidth="3" />
    <line x1="48" y1="24" x2="52" y2="24" strokeWidth="3" />
  </svg>
);

const CoffeeBeanSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="50" cy="50" rx="22" ry="32" transform="rotate(30 50 50)" />
    {/* Curved center dividing line */}
    <path d="M40,24 C43,35 45,45 42,55 C39,65 47,72 58,74" />
  </svg>
);

const CakeSliceSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Cake slice triangle body */}
    <path d="M15,70 L80,70 L55,25 L15,70 Z" />
    {/* Side face/depth */}
    <path d="M80,70 L85,60 L60,15 L55,25" />
    <path d="M85,60 L60,15" />
    {/* Cream layer in between */}
    <path d="M15,70 L55,25" />
    <line x1="15" y1="58" x2="62" y2="40" />
    <line x1="15" y1="46" x2="58" y2="35" />
    {/* Cherry / Dollop on top */}
    <circle cx="58" cy="20" r="5" className="fill-current" />
    <path d="M58,15 C60,10 65,10 68,12" />
  </svg>
);

export const BakeryDoodles = () => {
  // Define positions and details for different floating icons
  const items = [
    { component: <CroissantSVG />, size: 90, top: "12%", left: "5%", delay: 0, duration: 15 },
    { component: <CupcakeSVG />, size: 80, top: "25%", right: "8%", delay: 2, duration: 18 },
    { component: <DonutSVG />, size: 85, top: "45%", left: "4%", delay: 1, duration: 20 },
    { component: <CoffeeBeanSVG />, size: 50, top: "18%", left: "42%", delay: 3, duration: 12 },
    { component: <CakeSliceSVG />, size: 95, top: "72%", right: "6%", delay: 0.5, duration: 22 },
    
    // Extra elements for background depth
    { component: <CoffeeBeanSVG />, size: 45, top: "60%", left: "15%", delay: 4, duration: 14 },
    { component: <CupcakeSVG />, size: 75, top: "82%", left: "45%", delay: 2.5, duration: 19 },
    { component: <CroissantSVG />, size: 85, top: "52%", right: "18%", delay: 1.5, duration: 17 },
    { component: <DonutSVG />, size: 80, top: "85%", left: "8%", delay: 3.5, duration: 21 },
    { component: <CakeSliceSVG />, size: 90, top: "35%", left: "28%", delay: 0.8, duration: 23 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="absolute text-primary opacity-[0.035] hover:opacity-[0.08] transition-opacity duration-300"
          style={{
            width: item.size,
            height: item.size,
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -18, 18, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.component}
        </motion.div>
      ))}
    </div>
  );
};

export default BakeryDoodles;
