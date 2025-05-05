import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';
import ContactForm from './ContactForm';
const Contact: React.FC = () => {
  const socialLinks = [{
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com/ambitech_dk'
  }, {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com/AmbiTech'
  }, {
    name: 'TikTok',
    icon: TikTokIcon,
    url: 'https://tiktok.com/@AmbiTech'
  }];
  return <section id="contact" className="pt-28">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-odibee mb-16 text-center">KONTAKT OS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-odibee text-2xl mb-6">SEND OS EN BESKED</h3>
            <ContactForm />
          </div>
          
          <div>
            <h3 className="font-odibee text-2xl mb-6">KONTAKTOPLYSNINGER</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-ambitech-blue/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-ambitech-accent" />
                </div>
                <div>
                  <p className="font-odibee text-xl">TELEFON</p>
                  <a href="tel:+4526282827" className="text-lg hover:text-ambitech-accent transition-colors">
                    26 28 28 27
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-ambitech-blue/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-ambitech-accent" />
                </div>
                <div>
                  <p className="font-odibee text-xl">EMAIL</p>
                  <a href="mailto:info@ambitech.dk" className="text-lg hover:text-ambitech-accent transition-colors">
                    INFO@AMBITECH.DK
                  </a>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <p className="font-odibee text-xl mb-4">FØLG OS</p>
                <div className="flex space-x-4">
                  {socialLinks.map(social => <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-ambitech-blue/20 to-ambitech-purple/20 flex items-center justify-center hover:shadow-lg hover:shadow-ambitech-blue/30 transition-all duration-300" aria-label={social.name}>
                      <social.icon className="w-5 h-5" />
                    </a>)}
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <p className="text-base text-center">VI ELSKER AT HØRE FRA VORES KUNDER OG ER ALTID KLAR TIL AT SVARE PÅ SPØRGSMÅL ELLER GIVE RÅD OM BILBELYSNING. 


KONTAKT OS I DAG FOR EN UFORPLIGTENDE SNAK.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;