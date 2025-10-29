
import React from 'react';
import { useI18n } from '../context/I18nContext';
import { NatalChartIcon } from './icons/NatalChartIcon';
import { TokenIcon } from './icons/TokenIcon';
import { GameplayIcon } from './icons/GameplayIcon';

interface FeatureCardData {
  title: string;
  description: string;
}

interface FeatureCardProps extends FeatureCardData {
  icon: React.ReactNode;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 mb-12">
      {children}
    </h2>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300">
    <div className="mb-4 text-purple-400">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const { t } = useI18n();
  const featuresData: FeatureCardData[] = t('features.cards');
  
  const icons = [
    <NatalChartIcon className="w-10 h-10" />,
    <TokenIcon className="w-10 h-10" />,
    <GameplayIcon className="w-10 h-10" />,
  ];

  return (
    <section id="features">
      <SectionTitle>{t('features.title')}</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={feature.title} {...feature} icon={icons[index]} />
        ))}
      </div>
    </section>
  );
};

export default Features;