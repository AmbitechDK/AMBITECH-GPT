import React from 'react';
import { MapPin } from 'lucide-react';
const Location: React.FC = () => {
  return <section id="location" className="pt-28">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-odibee mb-16 text-center">FIND OS</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start mb-8">
            <div className="flex items-center mb-4 md:mb-0 mr-6">
              <MapPin className="w-6 h-6 text-ambitech-accent mr-2" />
              <address className="not-italic text-lg">
                UNDINEVEJ 3C, 3660 STENLØSE, DANMARK
              </address>
            </div>
            
            <a href="https://maps.google.com/?q=Undinevej+3C,+3660+Stenløse,+Danmark" target="_blank" rel="noopener noreferrer" className="text-ambitech-accent hover:underline">
              FÅ RUTEVEJLEDNING
            </a>
          </div>
          
          <div className="aspect-video relative rounded-lg overflow-hidden border border-white/20">
            {/* Google Maps iframe */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2157.2063064455564!2d12.159722815914012!3d55.76731998055648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524a53a4afa98d%3A0x6a7aa6591b5f9ce!2sUndinevej%203C%2C%203660%20Stenl%C3%B8se%2C%20Denmark!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="AmbiTech Location" className="absolute inset-0"></iframe>
            
            {/* Overlay with gradient for better text readability */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Store hours */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  
                  
                </div>
                <div>
                  
                  
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="max-w-2xl mx-auto text-base">BESØG VORES VÆRKSTED I STENLØSE, HVOR VI KAN VISE DIG EKSEMPLER PÅ VORES ARBEJDE OG DISKUTERE DINE ØNSKER TIL BILBELYSNING.  


RING GERNE PÅ FORHÅND FOR AT AFTALE TID.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Location;