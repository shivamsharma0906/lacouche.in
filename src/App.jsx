import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import QRCodeSection from './components/QRCodeSection';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen bg-background selection:bg-secondaryBg selection:text-primary">
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-primary via-accentPink to-primary origin-left z-[100] shadow-sm shadow-primary/30"
      />

      {/* Sticky Header Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Menu Section */}
        <Menu />

        {/* Highlight feature: QR Scanning Section */}
        <QRCodeSection />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Pinterest Gallery Section */}
        <Gallery />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
