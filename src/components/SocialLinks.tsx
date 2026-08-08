import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const iconClass = "w-5 h-5 text-gray-800 hover:text-black transition-colors duration-300 cursor-pointer";
  
  return (
    <div className="flex gap-6 items-center">
      <a href="https://github.com/ShreyashSrivastavaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className={iconClass} strokeWidth={1.5} /></a>
      <a href="https://www.linkedin.com/in/shreyashsrivastavaa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className={iconClass} strokeWidth={1.5} /></a>
      <a href="https://www.ihatelovepdf.com/" target="_blank" rel="noopener noreferrer" aria-label="IHateLovePDF"><Globe className={iconClass} strokeWidth={1.5} /></a>
      <a href="mailto:shreyashsr2004@gmail.com" aria-label="Email"><Mail className={iconClass} strokeWidth={1.5} /></a>
    </div>
  );
};
