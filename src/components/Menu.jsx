import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import chocolateMenuImg from '../assets/mothers_day_hamper.jpg';
import dessertMenuImg from '../assets/weekend_offer_desserts.png';
import sugarFreeMenuImg from '../assets/brownies_fathers_day.png';

export const Menu = () => {
  const menus = [
    {
      title: "Chocolate Menu",
      image: chocolateMenuImg,
      description: "Handcrafted chocolates, Florentines, Chocolate Bars and Signature Collections.",
      buttonText: "View Chocolate Menu",
      link: "#qr-section",
      badge: "Signature"
    },
    {
      title: "Dessert Menu",
      image: dessertMenuImg,
      description: "Cakes, Cheesecakes, Brownies, Cupcakes, Croissants, Waffles and more.",
      buttonText: "View Dessert Menu",
      link: "#qr-section",
      badge: "Freshly Baked"
    },
    {
      title: "Sugar-Free Menu",
      image: sugarFreeMenuImg,
      description: "Healthy desserts, Brownies, Cookies, Cheesecakes and Celebration Cakes.",
      buttonText: "View Sugar-Free Menu",
      link: "#qr-section",
      badge: "Guilt-Free"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="menus" className="py-24 bg-gradient-to-b from-background to-secondaryBg/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
              Our Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-chocolate mt-4 mb-4">
              Explore Our Menus
            </h2>
            <p className="text-textColor/75 text-base sm:text-lg max-w-xl mx-auto">
              Select a category to view our handcrafted treats, prepared with the finest ingredients.
            </p>
          </motion.div>
        </div>

        {/* Menu Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {menus.map((menu, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
              className="bg-white rounded-20 overflow-hidden shadow-md hover:shadow-2xl border border-primary/5 transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img 
                    src={menu.image} 
                    alt={menu.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Pastel Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-white/95 text-chocolate font-semibold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
                    {menu.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-chocolate mb-3">
                    {menu.title}
                  </h3>
                  <p className="text-textColor/80 text-sm leading-relaxed mb-6 font-body">
                    {menu.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-8 pb-8">
                <a
                  href={menu.link}
                  className="w-full bg-secondaryBg hover:bg-primary text-chocolate hover:text-white font-semibold py-3 px-6 rounded-20 flex items-center justify-center gap-2 border border-primary/10 hover:border-transparent transition-all duration-300 shadow-sm"
                >
                  <span>{menu.buttonText}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
