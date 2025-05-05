
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Guarantees from '../components/Guarantees';
import Contact from '../components/Contact';
import Location from '../components/Location';
import Footer from '../components/Footer';
import StarryBackground from '../components/StarryBackground';

const Index: React.FC = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'AmbiTech – Light it up!';
    
    // Add favicon dynamically
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/lovable-uploads/b048f43f-b014-454a-91e5-c98aa080ebe5.png';
    document.head.appendChild(link);

    // Add viewport meta tag for mobile optimization
    const viewport = document.querySelector("meta[name='viewport']");
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1';
      document.head.appendChild(meta);
    }
  }, []);
  
  return (
    <div className="min-h-screen w-full bg-ambitech-dark text-ambitech-light relative overflow-x-hidden">
      {/* Animated starry background */}
      <StarryBackground />
      
      {/* Navigation */}
      <Navbar />
      
      <main className="w-full">
        {/* Hero section */}
        <Hero />
        
        {/* About section */}
        <About />
        
        {/* Work section */}
        <Work />
        
        {/* Guarantees section */}
        <Guarantees />
        
        {/* Contact section */}
        <Contact />
        
        {/* Location section */}
        <Location />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
