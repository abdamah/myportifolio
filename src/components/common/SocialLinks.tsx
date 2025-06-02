
import React from 'react';
import { Github, Linkedin, Facebook } from 'lucide-react';

interface SocialLinksProps {
  variant?: 'default' | 'large' | 'footer';
  className?: string;
}

const SocialLinks = ({ variant = 'default', className = "" }: SocialLinksProps) => {
  const socialData = [
    { icon: Github, href: "https://github.com/abdamah" },
    { icon: Linkedin, href: "#" },
    { icon: Facebook, href: "https://www.facebook.com/abdallahriig" }
  ];

  const getVariantClasses = () => {
    switch (variant) {
      case 'large':
        return "w-12 h-12 bg-gray-100 hover:bg-primary text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110";
      case 'footer':
        return "w-10 h-10 bg-white/10 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110";
      default:
        return "w-12 h-12 bg-white/10 hover:bg-primary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110";
    }
  };

  const iconSize = variant === 'large' ? "w-5 h-5" : variant === 'footer' ? "w-5 h-5" : "w-6 h-6";

  return (
    <div className={`flex space-x-6 ${className}`}>
      {socialData.map((social, index) => (
        <a 
          key={index}
          href={social.href} 
          className={getVariantClasses()}
        >
          <social.icon className={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
