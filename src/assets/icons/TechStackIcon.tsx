import React from 'react';
import type { TechStack } from '@/data/portfolioData';

interface TechStackIconProps {
  tech: TechStack;
}

const TechStackIcon: React.FC<TechStackIconProps> = ({ tech }) => {
  const IconComponent = tech.iconComponent;
  return (
    <div className="w-20 h-20 flex items-center justify-center transition-transform hover:scale-110">
      <IconComponent 
        className="w-full h-full block" 
        title={tech.name}
      />
    </div>
  );
};

export default TechStackIcon;
