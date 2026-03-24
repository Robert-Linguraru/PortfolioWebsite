// components/icons/IconDotNet.tsx
import React from "react";

const IconDotNet: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
    {/* Purple background circle */}
    <circle cx="50" cy="50" r="45" fill="#512BD4"/>
    
    {/* .NET text */}
    <path 
      fill="#FFFFFF" 
      d="M18 35h4.5l8.5 18.5L39.5 35H44v30h-4V44l-7.5 16h-3L22 44v21h-4V35z"
    />
    
    {/* Dot */}
    <circle cx="50" cy="64" r="3.5" fill="#FFFFFF"/>
    
    {/* N */}
    <path 
      fill="#FFFFFF" 
      d="M56 35h4.2l10.8 20V35H75v30h-4.2L60 45v20h-4V35z"
    />
    
    {/* E */}
    <path 
      fill="#FFFFFF" 
      d="M80 35h12v4h-8v9h7v4h-7v9h8v4H80V35z"
    />
    
    {/* T */}
    <path 
      fill="#FFFFFF" 
      d="M28 39v-4h16v4h-6v26h-4V39h-6z"
    />
  </svg>
);

export default IconDotNet;
