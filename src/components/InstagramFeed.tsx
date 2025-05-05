
import React, { useState } from 'react';
import { Instagram, Video, Play } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

// Sample images for the Instagram feed
const instagramPosts = [
  { id: 1, imageUrl: '/lovable-uploads/6efca93c-e14d-4e0c-87db-afe276196b4c.png', caption: 'LED INSTALLATION I AUDI' },
  { id: 2, imageUrl: '/lovable-uploads/d960fb8a-1f59-48a1-b331-5d43dac97b64.png', caption: 'BMW INTERIOR BELYSNING' },
  { id: 3, imageUrl: '/lovable-uploads/c76781ab-e8a4-4dc0-b2f3-76f7431cec3c.png', caption: 'STEMNINGSBELYSNING I MERCEDES' },
  { id: 4, imageUrl: '/lovable-uploads/b048f43f-b014-454a-91e5-c98aa080ebe5.png', caption: 'SPECIALDESIGN TIL VOLKSWAGEN' },
  { id: 5, imageUrl: '/lovable-uploads/6efca93c-e14d-4e0c-87db-afe276196b4c.png', caption: 'OMFATTENDE BELYSNINGSPROJEKT' },
  { id: 6, imageUrl: '/lovable-uploads/c76781ab-e8a4-4dc0-b2f3-76f7431cec3c.png', caption: 'EKSTERIØR LED OPGRADERING' },
];

// Sample reels for the Instagram feed
const instagramReels = [
  { 
    id: 101, 
    thumbnailUrl: '/lovable-uploads/6efca93c-e14d-4e0c-87db-afe276196b4c.png', 
    caption: 'AUDI A6 STEMNINGSBELYSNING', 
    views: '3.2K',
    link: 'https://www.instagram.com/reel/C7S8iMmoo7v/'
  },
  { 
    id: 102, 
    thumbnailUrl: '/lovable-uploads/d960fb8a-1f59-48a1-b331-5d43dac97b64.png', 
    caption: 'BMW LED PROJEKT', 
    views: '1.8K',
    link: 'https://www.instagram.com/reel/C7QpgKSoh5s/'
  },
  { 
    id: 103, 
    thumbnailUrl: '/lovable-uploads/c76781ab-e8a4-4dc0-b2f3-76f7431cec3c.png', 
    caption: 'MERCEDES INTERIOR TRANSFORMATION', 
    views: '5.4K',
    link: 'https://www.instagram.com/reel/C7Nq8DSIU_L/'
  },
];

const InstagramFeed: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'posts' | 'reels'>('reels');
  const isMobile = useIsMobile();
  
  const handlePostClick = (id: number) => {
    setSelectedPost(id === selectedPost ? null : id);
  };
  
  return (
    <div className="w-full">
      <div className="flex items-center mb-6 md:mb-8">
        <div className="h-px flex-grow bg-white/20"></div>
        <a 
          href="https://instagram.com/ambitech_dk" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mx-2 md:mx-4 text-base md:text-lg font-odibee text-ambitech-accent hover:underline flex items-center gap-2"
        >
          <Instagram className="text-ambitech-accent" size={isMobile ? 20 : 24} />
          @AMBITECH_DK
        </a>
        <div className="h-px flex-grow bg-white/20"></div>
      </div>
      
      {/* Instagram tabs */}
      <div className="flex justify-center mb-6 md:mb-8">
        <div className="inline-flex rounded-md overflow-hidden border border-white/10">
          <button
            className={`px-4 md:px-6 py-2 font-odibee text-sm md:text-base transition-colors duration-200 flex items-center gap-2 ${
              activeTab === 'reels' 
                ? 'bg-gradient-to-r from-ambitech-purple to-ambitech-blue text-white' 
                : 'bg-black/40 text-white/70 hover:text-white'
            }`}
            onClick={() => setActiveTab('reels')}
          >
            <Video size={isMobile ? 14 : 16} />
            REELS
          </button>
          <button
            className={`px-4 md:px-6 py-2 font-odibee text-sm md:text-base transition-colors duration-200 flex items-center gap-2 ${
              activeTab === 'posts' 
                ? 'bg-gradient-to-r from-ambitech-purple to-ambitech-blue text-white' 
                : 'bg-black/40 text-white/70 hover:text-white'
            }`}
            onClick={() => setActiveTab('posts')}
          >
            <Instagram size={isMobile ? 14 : 16} />
            POSTS
          </button>
        </div>
      </div>
      
      {/* Instagram reels */}
      {activeTab === 'reels' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {instagramReels.map((reel) => (
            <a
              key={reel.id}
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-[9/16] rounded-lg overflow-hidden relative group cursor-pointer border border-white/10 hover:scale-105 transition-all duration-300"
            >
              <img 
                src={reel.thumbnailUrl} 
                alt={reel.caption} 
                className="w-full h-full object-cover"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-ambitech-blue/80 transition-colors duration-300">
                  <Play className="text-white" size={isMobile ? 20 : 24} fill="white" />
                </div>
              </div>
              
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-3 md:p-4">
                <div className="font-odibee text-base md:text-lg text-white">{reel.caption}</div>
                <div className="text-xs md:text-sm text-white/70 flex items-center gap-1 mt-1">
                  <Video size={isMobile ? 12 : 14} /> {reel.views} visninger
                </div>
              </div>
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-ambitech-blue/20 to-ambitech-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      )}
      
      {/* Instagram posts */}
      {activeTab === 'posts' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className={`aspect-square rounded-lg overflow-hidden relative group cursor-pointer border border-white/10
                ${selectedPost === post.id ? 'col-span-2 row-span-2 z-10' : 'hover:scale-105'} transition-all duration-300`}
              onClick={() => handlePostClick(post.id)}
            >
              <img 
                src={post.imageUrl} 
                alt={post.caption} 
                className="w-full h-full object-cover"
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 md:p-4 flex flex-col justify-end
                ${selectedPost === post.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}
              >
                <p className="font-odibee text-base md:text-lg text-white">{post.caption}</p>
                
                {selectedPost === post.id && (
                  <div className="mt-2 flex items-center space-x-3">
                    <button className="text-ambitech-accent hover:text-white text-xs md:text-sm transition-colors">
                      VIS PÅ INSTAGRAM
                    </button>
                  </div>
                )}
              </div>
              
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-ambitech-blue/20 to-ambitech-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      )}
      
      <div className="text-center mt-6 md:mt-8">
        <a
          href="https://instagram.com/ambitech_dk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-ambitech-purple to-ambitech-blue rounded-full font-odibee text-sm md:text-base hover:shadow-lg hover:shadow-ambitech-blue/30 transition-all duration-300"
        >
          FØLG OS PÅ INSTAGRAM
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
