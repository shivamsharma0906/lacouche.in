import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Globe, MessageSquare, MapPin } from 'lucide-react';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


export const Contact = () => {
  const contactDetails = [
    {
      label: "Phone / WhatsApp",
      value: "+91 98700 39186",
      icon: <Phone size={20} />,
      link: "tel:+919870039186",
      bgColor: "bg-primary/5 text-primary"
    },
    {
      label: "Instagram",
      value: "@lacouche.in",
      icon: <InstagramIcon size={20} />,
      link: "https://www.instagram.com/lacouche.in?igsh=aDh2N2MyaGI0ajg3",
      bgColor: "bg-accentPink/15 text-primary"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute -bottom-16 left-10 w-72 h-72 rounded-full bg-accentPink/10 blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Card wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="bg-white rounded-20 p-8 md:p-16 shadow-xl shadow-primary/5 border border-primary/5 text-center"
        >
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-chocolate tracking-tight mb-4">
            Let's Create Something Sweet Together
          </h2>
          <p className="text-textColor/75 text-sm md:text-base max-w-lg mx-auto mb-10 font-body">
            Have a custom cake inquiry or want to order chocolates for your loved ones? We would love to chat! Reach out via WhatsApp or visit our location.
          </p>

          {/* Quick info badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            {contactDetails.map((detail, idx) => (
              <a
                key={idx}
                href={detail.link}
                target={detail.label !== "Phone / WhatsApp" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 rounded-20 border border-primary/5 hover:border-primary/20 hover:bg-[#FFF8F7]/30 transition-all duration-300 group"
              >
                <div className={`p-3 rounded-full mb-3 ${detail.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                  {detail.icon}
                </div>
                <span className="text-[10px] text-chocolate/50 font-bold uppercase tracking-wider mb-1">
                  {detail.label}
                </span>
                <span className="text-sm font-semibold text-textColor group-hover:text-primary transition-colors">
                  {detail.value}
                </span>
              </a>
            ))}
          </div>

          {/* Premium Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919870039186?text=Hi%20La%20Couche!%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-8 py-3.5 rounded-20 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageSquare size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
