
import React from 'react';

interface RoadmapItemProps {
  phase: string;
  title: string;
  description: string;
  status: 'done' | 'current' | 'future';
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 mb-16">
      {children}
    </h2>
);

const RoadmapItem: React.FC<RoadmapItemProps> = ({ phase, title, description, status }) => {
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

  return (
    <div className="relative pl-8 md:pl-10">
      <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full ${currentStatus.bg} ring-4 ${currentStatus.ring}`}></div>
      <div className="flex flex-col">
        <span className={`font-bold text-sm uppercase ${currentStatus.text}`}>{phase} {status === 'current' && ' (現在位置)'}</span>
        <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
  );
};

const Roadmap: React.FC = () => {
    const roadmapData: RoadmapItemProps[] = [
    {
      phase: '第 0 階段',
      title: '籌備與啟動期',
      description: '白皮書發布，創世登陸頁上線，核心社群建立。',
      status: 'current',
    },
    {
      phase: '第 1 階段',
      title: '創世紀',
      description: '本命星盤 SBT 鑄造開啟，法器 NFT 預售，IDO/私募輪。',
      status: 'future',
    },
    {
      phase: '第 2 階段',
      title: '生態啟動',
      description: '治理代幣 $LING 上線，質押與基礎治理功能開放。',
      status: 'future',
    },
    {
      phase: '第 3 階段',
      title: '應用落地',
      description: 'DApp V1 上線，「數字祈福」功能開啟，生態燃料 $CHEGONG 上線。',
      status: 'future',
    },
  ];

  return (
    <section id="roadmap">
      <SectionTitle>項目路線圖</SectionTitle>
      <div className="relative flex flex-col gap-12 border-l-2 border-slate-700 ml-2">
        {roadmapData.map((item) => (
          <RoadmapItem key={item.phase} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
