import React from 'react';

export const FortuneContainerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="150" height="200" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
                <stop offset="100%" stopColor="#f472b6" stopOpacity="1" />
            </linearGradient>
            <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        <path d="M20 200 L5 50 Q10 10, 75 10 T145 50 L130 200 Z" fill="#1e293b" stroke="url(#grad1)" strokeWidth="2" filter="url(#glow)" />
        <path d="M20 55 L130 55" stroke="#475569" strokeWidth="3" />
        <text x="75" y="140" fontFamily="'Noto Sans TC', sans-serif" fontSize="48" fontWeight="bold" fill="#f472b6" textAnchor="middle" filter="url(#glow)">簽</text>
    </svg>
);