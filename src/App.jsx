import React from 'react';
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
  return (
    <div className="relative min-h-screen bg-background selection:bg-secondaryBg selection:text-primary">
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
