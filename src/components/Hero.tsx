import React, { useEffect, useRef } from 'react';
const Hero: React.FC = () => {
  const sloganRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sloganRef.current) {
      setTimeout(() => {
        if (sloganRef.current) {
          sloganRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 500);
    }
  }, []);
  return <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen pt-24">
      <div ref={sloganRef} className="opacity-0 translate-y-10 transition-all duration-1000 delay-300 mt-12">
        <div className="max-w-xl mx-auto">
          <img src="/lovable-uploads/6efca93c-e14d-4e0c-87db-afe276196b4c.png" alt="AMBITECH - LIGHT IT UP!" className="w-full h-auto" />
        </div>
      </div>
      
      <div className="max-w-lg mx-auto text-sm md:text-base text-white/80 mt-10 space-y-3">
        <p className="uppercase whitespace-nowrap text-lg font-normal">
          VELKOMMEN TIL AMBITECH – HVOR LYS MØDER PASSION
        </p>
        <p className="uppercase text-xs md:text-sm text-white/70 font-normal">
          VI SPECIALISERER OS I AT FORVANDLE DIN BIL MED STJERNEHIMMEL OG AMBIENT LIGHTING, SÅ DU SKILLER DIG UD – DAG OG NAT.
        </p>
      </div>
      
      {/* Scroll down indicator */}
      <div className="mt-16 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm text-white/70 mb-2">SCROLL NED</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>;
};
export default Hero;