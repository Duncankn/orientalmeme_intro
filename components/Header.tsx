
import React from 'react';
import { DiscordIcon } from './icons/DiscordIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { TelegramIcon } from './icons/TelegramIcon';

const Header: React.FC = () => {
  return (
    <header className="w-full text-center py-20 md:py-32 px-4 flex flex-col items-center justify-center min-h-screen">
       <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
       </div>

      <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 tracking-wider">
        東方迷因玄學宇宙
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-gray-300 font-semibold">
        融合迷因之力，喚醒玄學之魂
      </p>
      <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-400">
        項目啟動中 (Phase 0)。閱讀白皮書 V1.1，加入我們的早期社群。
      </p>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <a
          href="#"
          className="flex items-center justify-center gap-3 px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-500 transition-transform transform hover:scale-105"
        >
          <DiscordIcon className="w-6 h-6" />
          <span>加入官方 Discord</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-700 text-white font-bold rounded-lg shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-105"
        >
          <TwitterIcon className="w-6 h-6" />
          <span>關注 Twitter/X</span>
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-3 px-6 py-3 bg-sky-500 text-white font-bold rounded-lg shadow-lg hover:bg-sky-400 transition-transform transform hover:scale-105"
        >
          <TelegramIcon className="w-6 h-6" />
          <span>加入 Telegram</span>
        </a>
      </div>
       <div className="mt-12">
           <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold text-lg">
             閱讀完整白皮書 V1.1 &rarr;
           </a>
       </div>
    </header>
  );
};

export default Header;
