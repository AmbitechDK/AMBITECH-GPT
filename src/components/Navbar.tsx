
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'HJEM' },
  { id: 'about', label: 'OM OS' },
  { id: 'work', label: 'VORES ARBEJDE' },
  { id: 'guarantees', label: 'GARANTIER' },
  { id: 'contact', label: 'KONTAKT OS' },
  { id: 'location', label: 'FIND OS' }
];

const Navbar: React.FC = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // close mobile menu
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navItems.map(item => item.id);
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between w-full">
          <a 
            href="#home" 
            className={`text-xl md:text-2xl font-odibee transition-all duration-500 ${scrolled ? 'opacity-100 text-ambitech-light' : 'opacity-0'}`}
          >
            AMBITECH
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-odibee text-lg transition-all hover:text-ambitech-accent ${activeSection === item.id ? 'text-ambitech-accent text-glow' : 'text-ambitech-light'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-black/95 absolute w-full transition-all duration-300 ${isOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-odibee text-lg py-2 transition-all hover:text-ambitech-accent ${activeSection === item.id ? 'text-ambitech-accent' : 'text-ambitech-light'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
