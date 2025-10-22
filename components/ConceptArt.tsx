
import React from 'react';

interface ArtCardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 mb-12">
      {children}
    </h2>
);

const ArtCard: React.FC<ArtCardProps> = ({ imageUrl, title, description }) => (
    <div className="group relative overflow-hidden rounded-xl border border-slate-800">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 p-6">
            <span className="text-xs font-bold uppercase text-purple-400 bg-purple-900/50 px-2 py-1 rounded">概念預覽 (Concept Art)</span>
            <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
            <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        </div>
    </div>
);


const ConceptArt: React.FC = () => {
  return (
    <section id="concept-art">
      <SectionTitle>神秘預覽</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <ArtCard 
            imageUrl="https://picsum.photos/seed/natalchart/800/600"
            title="本命星盤"
            description="你的靈魂在數字世界的獨特映射。"
        />
        <ArtCard 
            imageUrl="https://picsum.photos/seed/artifactnft/800/600"
            title="法器 NFT"
            description="蘊含玄學力量的稀有數字藏品。"
        />
      </div>
    </section>
  );
};

export default ConceptArt;
