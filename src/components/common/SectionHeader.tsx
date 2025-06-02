
import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

const SectionHeader = ({ eyebrow, title, description, className = "" }: SectionHeaderProps) => {
  const isWhiteTheme = className.includes('text-white');
  
  return (
    <div className={`text-center mb-16 ${className}`}>
      <p className="text-primary font-semibold text-lg tracking-wide mb-4">
        {eyebrow}
      </p>
      <h2 className={`text-4xl lg:text-5xl font-bold font-display mb-6 ${isWhiteTheme ? 'text-white' : 'text-secondary'}`}>
        {title}
      </h2>
      <p className={`text-xl max-w-3xl mx-auto ${isWhiteTheme ? 'text-white' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
