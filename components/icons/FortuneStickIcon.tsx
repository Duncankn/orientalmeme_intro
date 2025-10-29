
import React from 'react';

export const FortuneStickIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Sticks */}
    <rect x="48" y="10" width="4" height="40" rx="2" fill="#D2B48C"/>
    <rect x="42" y="12" width="4" height="40" rx="2" fill="#D2B48C" transform="rotate(-10 42 12)"/>
    <rect x="54" y="12" width="4" height="40" rx="2" fill="#D2B48C" transform="rotate(10 54 12)"/>
    <rect x="36" y="15" width="4" height="40" rx="2" fill="#D2B48C" transform="rotate(-20 36 15)"/>
    <rect x="60" y="15" width="4" height="40" rx="2" fill="#D2B48C" transform="rotate(20 60 15)"/>

    {/* Container */}
    <path 
      d="M25 95 L30 45 L70 45 L75 95 Z" 
      stroke="#94A3B8" 
      strokeWidth="3" 
      fill="url(#containerGrad)"
    />
    <path 
      d="M30 45 L70 45"
      stroke="#94A3B8"
      strokeWidth="2"
    />
    <path
      d="M23 96 L77 96"
      stroke="#94A3B8"
      strokeWidth="4"
      strokeLinecap="round"
    />
    
    <defs>
      <linearGradient id="containerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#475569" />
        <stop offset="100%" stopColor="#1E293B" />
      </linearGradient>
    </defs>
  </svg>
);