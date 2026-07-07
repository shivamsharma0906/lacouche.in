import React from 'react';
import { Heart } from 'lucide-react';
import logoImg from '../assets/logo.png';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menus', href: '#menus' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-12 relative overflow-hidden">
      {/* Premium SVG Top Wave Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[20px] fill-background">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V30.27C1124.4,26.2,1053,48,985.66,92.83Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Brand Display */}
        <div className="flex items-center gap-3 mb-4 group cursor-pointer">
          <img 
            src={logoImg} 
            alt="La Couche Logo" 
            className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-full border-2 border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:rotate-6"
          />
          <span className="text-3xl md:text-4xl font-heading font-extrabold tracking-wider text-secondaryBg transition-transform duration-300 group-hover:scale-105">
            La Couche
          </span>
        </div>

        {/* Catchphrase / Subtitle */}
        <p className="text-white/80 text-sm max-w-sm text-center mb-8 font-body font-light italic">
          "Baking sweet stories and crafting delicious memories every single day."
        </p>

        {/* Quick Menu Links in Footer */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white font-medium text-sm transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accentPink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Highlighted Social Icon (Instagram Only) */}
        <div className="mb-10">
          <a
            href="https://www.instagram.com/lacouche.in?igsh=aDh2N2MyaGI0ajg3"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 hover:bg-white text-white hover:text-primary rounded-full transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg border border-white/20 hover:border-transparent hover:-translate-y-1"
            aria-label="Instagram"
          >
            <InstagramIcon size={22} />
          </a>
        </div>

        {/* Custom Divider */}
        <div className="w-full max-w-lg h-[1px] bg-white/15 mb-6" />

        {/* Bottom Details (Copyright & Sign-off) */}
        <div className="text-center text-xs text-white/70 space-y-2 font-body font-light">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-accentPink fill-accentPink animate-pulse" /> by La Couche
          </p>
          <p>
            &copy; {currentYear} La Couche. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
