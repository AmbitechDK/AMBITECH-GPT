import React from 'react';
const About: React.FC = () => {
  return <section id="about" className="pt-28">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-odibee mb-16 text-center">OM OS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg mb-6 leading-relaxed font-light md:text-base">
              AMBITECH BLEV ETABLERET I 2023 OG HAR SIDEN FORVANDLET OG OPLYST OVER 1500 BILER. 
              VI ER PASSIONEREDE OMKRING BILER OG BRUGER UDELUKKENDE DE BEDSTE PRODUKTER PÅ MARKEDET.
            </p>
            
            <p className="text-lg leading-relaxed font-light md:text-base">
              VORES TEAM AF SPECIALISTER ARBEJDER MED PRÆCISION OG OMHU FOR AT SIKRE, AT HVER ENESTE 
              INSTALLATION LEVER OP TIL VORES HØJE STANDARDER FOR KVALITET OG ÆSTETIK.
            </p>
            
            <div className="mt-10">
              <a href="#work" className="inline-block font-odibee text-xl border-b-2 border-ambitech-accent text-ambitech-accent hover:text-white transition-colors duration-300" onClick={e => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                SE VORES ARBEJDE →
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-video bg-gradient-to-br from-ambitech-blue/20 to-ambitech-purple/20 rounded-lg overflow-hidden relative">
              {/* Placeholder for image to be added manually later */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-odibee text-lg opacity-70">BILLEDE TILFØJES SENERE</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-ambitech-accent/50"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-ambitech-blue/50"></div>
            </div>
            
            {/* Animated glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-ambitech-blue/10 to-ambitech-purple/10 blur-2xl rounded-full animate-pulse-light"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;