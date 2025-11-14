import React from 'react';
import { TechStack } from '../data/portfolioData';
import './TechStackIcon.css';

interface TechStackIconProps {
  tech: TechStack;
}

const TechStackIcon: React.FC<TechStackIconProps> = ({ tech }) => {
  const IconComponent = tech.iconComponent;
  return (
    <div className="tech-stack-icon">
      <IconComponent className="tech-icon" title={tech.name}/>
    </div>
  );
};

export default TechStackIcon;


