import React from 'react';
import { motion } from 'framer-motion';
import { Scan, QrCode, ExternalLink } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

export const QRCodeSection = () => {
  const qrCodes = [
    {
      title: "Chocolate Menu QR",
      url: "https://drive.google.com/file/d/1y0yGlVGYGBuAWgTWGT6aCGF--1pbUp2n/view?usp=sharing",
      description: "Scan or tap to explore our artisanal truffles, Florentines, and signature chocolate collections.",
      badgeColor: "bg-chocolate/10 text-chocolate",
      accentColor: "#6F4434"
    },
    {
      title: "Dessert Menu QR",
      url: "https://drive.google.com/file/d/132u48pR6-OjJWEu4Asudg9H0qJp2KM3-/view",
      description: "Scan or tap to explore our handcrafted celebration cakes, cheesecakes, croissants, and waffles.",
      badgeColor: "bg-primary/10 text-primary",
      accentColor: "#A61E2D"
    },
    {
      title: "Sugar-Free Menu QR",
      url: "https://drive.google.com/file/d/1sxnkmbt2JbAds4UcVhCrCKVfWCHXt-Pr/view",
      description: "Scan or tap to explore our healthy, guilt-free brownies, cheesecakes, and celebration cakes.",
      badgeColor: "bg-green-600/10 text-green-700",
      accentColor: "#059669"
    }
  ];

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const qrCardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="qr-section" className="py-24 bg-gradient-to-b from-secondaryBg/30 via-background to-secondaryBg/40 relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-10 left-10 w-48 h-48 rounded-full bg-accentPink/20 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
              <Scan size={14} className="animate-pulse" />
              <span>Direct Scanner</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-chocolate tracking-tight mb-4">
              Scan & Explore
            </h2>
            <p className="text-textColor/75 text-base sm:text-lg max-w-xl mx-auto">
              Choose your favourite menu by scanning the QR code, or click the cards below to view them directly.
            </p>
          </motion.div>
        </div>

        {/* QR Code Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {qrCodes.map((qr, idx) => (
            <motion.div
              key={idx}
              variants={qrCardVariants}
              onClick={() => window.open(qr.url, '_blank')}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 350, damping: 15 } 
              }}
              className="bg-white rounded-20 p-8 shadow-xl shadow-chocolate/5 hover:shadow-2xl border border-primary/5 transition-all duration-300 flex flex-col items-center text-center relative cursor-pointer group"
            >
              {/* Scan Guide Frame */}
              <div className="relative w-44 h-44 p-4 mb-6 rounded-2xl bg-[#FFF8F7] flex items-center justify-center overflow-hidden border-2 border-dashed border-primary/25">
                {/* Dotted border corners */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />
                
                {/* Dynamic SVG QR Code */}
                <div className="bg-white p-3 rounded-xl shadow-inner relative z-10 transform transition-transform duration-500 group-hover:scale-105">
                  <QRCodeSVG 
                    value={qr.url} 
                    size={120}
                    fgColor={qr.accentColor}
                    bgColor="#FFFFFF"
                    level="Q"
                    includeMargin={false}
                  />
                </div>

                {/* Laser scan line simulation */}
                <motion.div 
                  className="absolute left-0 right-0 h-[2px] bg-primary/70 z-10"
                  animate={{ 
                    top: ["8%", "92%", "8%"] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-chocolate mb-2 flex items-center gap-2">
                <QrCode size={18} className="text-primary" />
                {qr.title}
              </h3>

              {/* Description */}
              <p className="text-textColor/75 text-xs sm:text-sm font-body leading-relaxed mb-6">
                {qr.description}
              </p>

              {/* Tap to open prompt on hover */}
              <div className="text-primary font-semibold text-xs mb-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Menu Directly</span>
                <ExternalLink size={12} />
              </div>

              {/* Scan Tooltip Instructions */}
              <div className={`mt-auto text-[11px] font-semibold py-1.5 px-4 rounded-full ${qr.badgeColor} uppercase tracking-wider flex items-center gap-1.5`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                <span>Scan or Click to open</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Friendly Mobile tip */}
        <motion.div 
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xs sm:text-sm text-chocolate/60 italic font-body">
            💡 Tap on any of the cards above to open the menu instantly in a new window!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default QRCodeSection;
