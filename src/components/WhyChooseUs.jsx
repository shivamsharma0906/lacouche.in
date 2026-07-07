import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Gift, Heart } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      title: "Premium Ingredients",
      icon: <Sparkles size={28} />,
      description: "We use only the finest Belgian chocolates, organic flours, and fresh dairy to bake our masterpieces.",
      bgColor: "bg-primary/5 text-primary",
    },
    {
      title: "Freshly Baked",
      icon: <Flame size={28} />,
      description: "Baked daily in micro-batches to guarantee every bite is warm, fresh, and bursting with flavour.",
      bgColor: "bg-chocolate/5 text-chocolate",
    },
    {
      title: "Custom Orders",
      icon: <Gift size={28} />,
      description: "From dream celebration cakes to tailored dessert tables, we design treats specifically for your special moments.",
      bgColor: "bg-accentPink/15 text-primary",
    },
    {
      title: "Made With Love",
      icon: <Heart size={28} />,
      description: "Every recipe is refined with absolute care and passion, ensuring a heartwarming experience.",
      bgColor: "bg-[#F9E4E5] text-primary",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold tracking-wider text-chocolate/60 uppercase bg-chocolate/5 px-4 py-1.5 rounded-full">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-chocolate mt-4 mb-4">
              Why Choose Us
            </h2>
            <div className="w-12 h-0.5 bg-accentPink mx-auto" />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
              className="bg-white rounded-20 p-8 shadow-md hover:shadow-xl border border-primary/5 transition-shadow duration-300 flex flex-col items-start"
            >
              {/* Icon Container */}
              <div className={`p-4 rounded-full mb-6 flex items-center justify-center ${feature.bgColor} transition-transform duration-300 hover:rotate-6`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-chocolate mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-textColor/75 text-sm leading-relaxed font-body">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
