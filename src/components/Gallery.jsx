import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { X, MessageSquare, Heart, Sparkles } from 'lucide-react';

// User Custom Cakes & Products
import heroCake from '../assets/cake_petals_sparkle.png';
import cakeDaisyDream from '../assets/cake_daisy_dream.jpg';
import cakeSweetBloom from '../assets/cake_sweet_bloom.png';
import browniesFathersDay from '../assets/brownies_fathers_day.png';
import weekendOfferDesserts from '../assets/weekend_offer_desserts.png';
import preorderFlyer from '../assets/preorder_flyer.png';
import mothersDayHamper from '../assets/mothers_day_hamper.jpg';

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedItems, setLikedItems] = useState({});

  const categories = ['All', 'Cakes', 'Brownies & Treats', 'Flyers & Offers'];

  const images = [
    { 
      id: 1,
      src: heroCake, 
      alt: "Petals & Sparkle Tiered Cake", 
      category: "Cakes",
      badge: "🎂 Celebration Cake",
      description: "Luxurious double-tier cake with hand-textured buttercream art, silver leaf details, and a warm glow fairy-light glass tier in between.",
      aspect: "aspect-[3/4]" 
    },
    { 
      id: 2,
      src: cakeSweetBloom, 
      alt: "Sweet Bloom Royal Cake", 
      category: "Cakes",
      badge: "👑 Royal Crown Cake",
      description: "Breathtaking celebration cake decorated with intricate pink buttercream piping swirls, edible pearls, and a signature gold crown topper.",
      aspect: "aspect-[3/4]" 
    },
    { 
      id: 3,
      src: cakeDaisyDream, 
      alt: "Daisy Dream Birthday Cake", 
      category: "Cakes",
      badge: "☀️ Custom Kids Cake",
      description: "Vibrant yellow birthday cake adorned with daisy flowers, red hearts, a pastel rainbow, and custom name plaques for Advika & Mihika.",
      aspect: "aspect-[3/4]" 
    },
    { 
      id: 4,
      src: browniesFathersDay, 
      alt: "Father's Day Leaf Brownies", 
      category: "Brownies & Treats",
      badge: "🍫 Diabetic Friendly",
      description: "Super fudgy, low-glycemic chocolate brownies finished with beautiful leaf-piped frosting, crafted specifically for sugar-conscious celebrations.",
      aspect: "aspect-[3/4]" 
    },
    { 
      id: 5,
      src: weekendOfferDesserts, 
      alt: "Weekend Offer Dot Cupcakes", 
      category: "Brownies & Treats",
      badge: "✨ Viral Weekend Special",
      description: "A perfect sweet duo: rainbow-sprinkled dot cupcakes paired with our signature chocolate slice cake complete with a gold wax seal.",
      aspect: "aspect-[3/4]" 
    },
    { 
      id: 6,
      src: mothersDayHamper, 
      alt: "Mother's Day Pastry Hamper", 
      category: "Brownies & Treats",
      badge: "🌸 Mother's Day Hamper",
      description: "Curated dessert platter containing fresh mango cakes, classic muffins, a box of chocolate truffles, and a sampler of sugar-free cheesecakes.",
      aspect: "aspect-[3/4]" 
    },
    { 
      id: 7,
      src: preorderFlyer, 
      alt: "Weekend Pre-order Details", 
      category: "Flyers & Offers",
      badge: "📅 Special Menu Preorders",
      description: "View dates and details for pre-ordering guilt-free jowar walnut brownies and flourless almond flour treats baked fresh for the weekend.",
      aspect: "aspect-[3/4]" 
    }
  ];

  const filteredImages = activeFilter === 'All' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-secondaryBg/20 to-background relative overflow-hidden">
      {/* Decorative SVG Blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-accentPink/10 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-secondaryBg/40 blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10 inline-flex items-center gap-1.5">
              <Sparkles size={14} />
              <span>Chef's Masterpieces</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-chocolate mt-4 mb-4">
              Our Sweet Gallery
            </h2>
            <p className="text-textColor/75 text-base sm:text-lg max-w-xl mx-auto font-body">
              Click on any creation to view close-ups, description, and request custom baking details.
            </p>
          </motion.div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'text-white'
                  : 'text-chocolate bg-white hover:bg-secondaryBg/40 border border-primary/10'
              }`}
            >
              {activeFilter === cat && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest Staggered Columns Layout with Layout Animations */}
        <LayoutGroup>
          <motion.div 
            layout 
            className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`relative break-inside-avoid w-full ${img.aspect} rounded-20 overflow-hidden shadow-md hover:shadow-xl border border-primary/5 group cursor-pointer bg-white`}
                  onClick={() => setSelectedImage(img)}
                >
                  {/* Image */}
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top-Left Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm py-1 px-3.5 rounded-full text-[10px] font-bold text-chocolate shadow-sm border border-primary/5 pointer-events-none">
                    {img.badge}
                  </div>

                  {/* Heart / Like Micro-interaction */}
                  <button
                    onClick={(e) => toggleLike(e, img.id)}
                    className="absolute top-3.5 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-chocolate shadow-sm border border-primary/5 hover:scale-110 transition-transform duration-200"
                    aria-label="Like creation"
                  >
                    <Heart 
                      size={14} 
                      className={`transition-colors duration-300 ${
                        likedItems[img.id] ? 'fill-primary text-primary' : 'text-textColor/70'
                      }`} 
                    />
                  </button>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/85 via-chocolate/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-left w-full flex justify-between items-end">
                      <div>
                        <span className="text-[10px] text-accentPink font-bold uppercase tracking-wider">{img.category}</span>
                        <p className="text-white font-semibold text-base mt-0.5">{img.alt}</p>
                      </div>
                      <span className="text-[10px] font-bold text-white bg-primary py-1 px-3.5 rounded-full uppercase tracking-wider scale-95 group-hover:scale-100 transition-transform">
                        Explore
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Empty state if filter doesn't have items */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16 text-chocolate/55 italic">
            No creations found in this category. We are adding more sweet updates soon!
          </div>
        )}
      </div>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-chocolate/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl border border-primary/5 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
            >
              {/* Modal Left / Image */}
              <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-auto max-h-[40vh] md:max-h-none relative overflow-hidden bg-[#FFF8F7]">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="w-full h-full object-contain md:object-cover"
                />
                
                {/* Close Button on Mobile over Image */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 md:hidden bg-white/80 p-2 rounded-full text-chocolate border border-primary/5"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Right / Details */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  {/* Header Row */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
                      {selectedImage.badge}
                    </span>
                    {/* Close Button on Desktop */}
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="hidden md:flex p-1.5 text-chocolate/50 hover:text-primary rounded-full hover:bg-secondaryBg/40 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-chocolate tracking-tight mb-4">
                    {selectedImage.alt}
                  </h3>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-accentPink mb-6 rounded-full" />

                  {/* Description */}
                  <p className="text-textColor/85 text-sm md:text-base leading-relaxed mb-8 font-body font-light">
                    {selectedImage.description}
                  </p>
                </div>

                {/* Direct Action WhatsApp CTA */}
                <a
                  href={`https://wa.me/919870039186?text=Hi%20La%20Couche!%20I%20saw%20your%20beautiful%20"${encodeURIComponent(selectedImage.alt)}"%20in%20the%20gallery%20and%20wanted%20to%20inquire%20about%20ordering%20it.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3 px-6 rounded-20 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <MessageSquare size={18} />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
