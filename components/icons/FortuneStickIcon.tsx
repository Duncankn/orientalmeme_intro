import React from 'react';

export const FortuneStickIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="12" height="180" viewBox="0 0 12 180" fill="none" xmlns="http://www.w.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="stickGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#f9a8d4" />
            </linearGradient>
        </defs>
        <rect width="12" height="180" rx="6" fill="#4a3a2a"/>
        <rect x="1" y="1" width="10" height="178" rx="5" fill="#eab308"/>
        <rect x="2" y="10" width="8" height="40" rx="4" fill="url(#stickGrad)" />
    </svg>
);