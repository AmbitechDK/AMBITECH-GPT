
import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/ambitech_dk' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/AmbiTech' },
    { name: 'TikTok', icon: TikTokIcon, url: 'https://tiktok.com/@AmbiTech' }
  ];
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="relative py-12 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="font-odibee text-2xl text-ambitech-light hover:text-ambitech-accent transition-colors flex items-center"
            >
              <img 
                src="/lovable-uploads/b048f43f-b014-454a-91e5-c98aa080ebe5.png" 
                alt="AMBITECH LOGO" 
                className="h-8 w-auto mr-2"
              />
              AmbiTech
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="tel:+4526282827" className="flex items-center space-x-2 hover:text-ambitech-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>26 28 28 27</span>
            </a>
            
            <a href="mailto:info@ambitech.dk" className="flex items-center space-x-2 hover:text-ambitech-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>INFO@AMBITECH.DK</span>
            </a>
          </div>
          
          <div className="flex space-x-4 mb-8">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} AMBITECH. ALLE RETTIGHEDER FORBEHOLDES.</p>
            <address className="not-italic mt-1">
              UNDINEVEJ 3C, 3660 STENLØSE, DANMARK
            </address>
          </div>
        </div>
      </div>
      
      {/* Decorative star effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ambitech-accent/30 to-transparent"></div>
    </footer>
  );
};

export default Footer;
