import React from 'react';
const Guarantees: React.FC = () => {
  return <section id="guarantees" className="pt-28">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-odibee mb-16 text-center">GARANTIER</h2>
        
        <div className="max-w-3xl mx-auto text-center p-6 md:p-10 relative">
          {/* Decorative background elements - made smaller */}
          <div className="absolute inset-0 bg-gradient-to-br from-ambitech-blue/10 to-ambitech-purple/10 rounded-2xl"></div>
          <div className="absolute inset-0 border border-white/10 rounded-2xl"></div>
          
          <div className="relative z-10">
            {/* Circle has been removed */}
            
            <h3 className="text-3xl md:text-4xl font-odibee mb-6">VI STÅR 100% INDE FOR VORES ARBEJDE</h3>
            
            <p className="mb-8 leading-relaxed text-base">
              HOS AMBITECH FÅR DU ÅRS GARANTI OG REKLAMATIONSRET – BÅDE PÅ SELVE ARBEJDET OG PÅ DE ANVENDTE PRODUKTER.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-black/30 border border-white/10 hover:border-ambitech-accent/50 transition-all duration-300 rounded-md">
                <h4 className="font-odibee mb-3 text-xl">KVALITETSPRODUKTER</h4>
                <p className="text-xs">VI BRUGER KUN DE BEDSTE PRODUKTER PÅ MARKEDET, DER ER TESTET OG GODKENDT.</p>
              </div>
              
              <div className="p-6 bg-black/30 rounded-lg border border-white/10 hover:border-ambitech-accent/50 transition-all duration-300">
                <h4 className="font-odibee mb-3 text-xl">PRO INSTALLATION</h4>
                <p className="text-xs">HVER INSTALLATION UDFØRES AF ERFARNE TEKNIKERE MED ØJE FOR DETALJEN.</p>
              </div>
              
              <div className="p-6 bg-black/30 rounded-lg border border-white/10 hover:border-ambitech-accent/50 transition-all duration-300">
                <h4 className="font-odibee mb-3 text-lg">SUPPORT EFTER KØB</h4>
                <p className="text-xs">VI ER HER FOR AT HJÆLPE, HVIS DU SKULLE OPLEVE PROBLEMER EFTER INSTALLATIONEN.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Guarantees;