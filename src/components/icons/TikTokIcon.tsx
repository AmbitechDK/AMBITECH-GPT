
import React from 'react';

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className || "w-5 h-5"}
    >
      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path d="M15 2v12a4 4 0 0 1-4 4" />
      <path d="M9 16v-6" />
    </svg>
  );
};

export default TikTokIcon;
