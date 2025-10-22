
import React from 'react';

export const NatalChartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="12" y1="2" x2="12" y2="5"></line>
    <line x1="12" y1="19" x2="12" y2="22"></line>
    <line x1="2" y1="12" x2="5" y2="12"></line>
    <line x1="19" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="4.93" x2="7.05" y2="7.05"></line>
    <line x1="16.95" y1="16.95" x2="19.07" y2="19.07"></line>
    <line x1="4.93" y1="19.07" x2="7.05" y2="16.95"></line>
    <line x1="16.95" y1="7.05" x2="19.07" y2="4.93"></line>
  </svg>
);
