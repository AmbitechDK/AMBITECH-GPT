
import React from 'react';
import InstagramFeed from './InstagramFeed';
import { useIsMobile } from '../hooks/use-mobile';

const Work: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="work" className="pt-24 md:pt-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-odibee mb-8 md:mb-16 text-center">VORES ARBEJDE</h2>
        
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
            UDFORSK VORES SENESTE PROJEKTER OG TRANSFORMATIONER. SE VORES NYESTE REELS OG POSTS
            FRA INSTAGRAM FOR INSPIRATION.
          </p>
          
          <InstagramFeed />
        </div>
      </div>
    </section>
  );
};

export default Work;
