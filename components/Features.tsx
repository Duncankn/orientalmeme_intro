
import React from 'react';
import { NatalChartIcon } from './icons/NatalChartIcon';
import { TokenIcon } from './icons/TokenIcon';
import { GameplayIcon } from './icons/GameplayIcon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
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
  const featuresData: FeatureCardProps[] = [
    {
      icon: <NatalChartIcon className="w-10 h-10" />,
      title: '本命星盤 (SBT)',
      description: '基於東方命理學，生成獨一無二、不可轉讓的靈魂綁定數字身份 (SBT)。',
    },
    {
      icon: <TokenIcon className="w-10 h-10" />,
      title: '雙代幣模型',
      description: '治理代幣 $LING 與生態燃料 $CHEGONG 並行，構建穩定且可持續的經濟系統。',
    },
    {
      icon: <GameplayIcon className="w-10 h-10" />,
      title: '核心玩法',
      description: '沉浸式的「數字祈福」與「風水洞府」體驗，將傳統文化與區塊鏈技術深度結合。',
    },
  ];

  return (
    <section id="features">
      <SectionTitle>核心特色</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {featuresData.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
