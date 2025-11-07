
import React from 'react';
import { useI18n } from '../context/I18nContext';

interface RoadmapItemData {
  phase: string;
  title: string;
  description: string;
}

interface RoadmapItemProps extends RoadmapItemData {
  status: 'done' | 'current' | 'future';
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 mb-16">
      {children}
    </h2>
);

const RoadmapItem: React.FC<RoadmapItemProps> = ({ phase, title, description, status }) => {
  const { t } = useI18n();
  const statusStyles = {
    done: {
      ring: 'ring-green-500',
      bg: 'bg-green-500',
      text: 'text-green-400',
    },
    current: {
      ring: 'ring-purple-500 animate-pulse',
      bg: 'bg-purple-500',
      text: 'text-purple-400',
    },
    future: {
      ring: 'ring-slate-600',
      bg: 'bg-slate-600',
      text: 'text-slate-400',
    },
  };

  const currentStatus = statusStyles[status];
  const statusText = t(`roadmap.status.${status}`);

  return (
    <div className="relative pl-8 md:pl-10">
      <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${currentStatus.bg} ring-4 ${currentStatus.ring}`} aria-hidden="true"></div>
      <div className="flex flex-col">
        <p className={`font-bold text-sm uppercase ${currentStatus.text}`}>
          <span className="sr-only">{statusText}: </span>
          {phase} {status === 'current' && ` ${t('roadmap.currentLocation')}`}
        </p>
        <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

const Roadmap: React.FC = () => {
    const { t } = useI18n();
    const roadmapItems: RoadmapItemData[] = t('roadmap.items');

    const roadmapData: RoadmapItemProps[] = [
    {
      ...roadmapItems[0],
      status: 'current',
    },
    {
      ...roadmapItems[1],
      status: 'future',
    },
    {
      ...roadmapItems[2],
      status: 'future',
    },
    {
      ...roadmapItems[3],
      status: 'future',
    },
  ];

  return (
    <section id="roadmap">
      <SectionTitle>{t('roadmap.title')}</SectionTitle>
      <div className="relative flex flex-col gap-12 border-l-2 border-slate-700 ml-2">
        {roadmapData.map((item) => (
          <RoadmapItem key={item.phase} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Roadmap;