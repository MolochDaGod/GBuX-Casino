'use client';

import React from 'react';

interface GrudgeLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const GrudgeLogo: React.FC<GrudgeLogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl',
    xl: 'text-7xl',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${sizeClasses[size]} font-bold bg-gradient-to-r from-grudge-primary to-grudge-secondary bg-clip-text text-transparent`}>
        GRUDGE
      </div>
      <div className={`${sizeClasses[size]} font-light text-grudge-text`}>
        STUDIO
      </div>
    </div>
  );
};

export default GrudgeLogo;
