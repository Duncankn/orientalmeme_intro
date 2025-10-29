
import React from 'react';
import { useI18n } from '../context/I18nContext';

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

const ArtCard: React.FC<ArtCardProps> = ({ imageUrl, title, description }) => {
    const { t } = useI18n();
    return (
        <div className="group relative overflow-hidden rounded-xl border border-slate-800">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6">
                <span className="text-xs font-bold uppercase text-purple-400 bg-purple-900/50 px-2 py-1 rounded">{t('conceptArt.tag')}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
            </div>
        </div>
    );
}


const ConceptArt: React.FC = () => {
  const { t } = useI18n();
  const cards = t('conceptArt.cards');

  return (
    <section id="concept-art">
      <SectionTitle>{t('conceptArt.title')}</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <ArtCard 
            imageUrl="https://picsum.photos/seed/natalchart/800/600"
            title={cards[0].title}
            description={cards[0].description}
        />
        <ArtCard 
            imageUrl="https://picsum.photos/seed/artifactnft/800/600"
            title={cards[1].title}
            description={cards[1].description}
        />
      </div>
    </section>
  );
};

export default ConceptArt;