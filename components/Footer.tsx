
import React from 'react';
import { DiscordIcon } from './icons/DiscordIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { TelegramIcon } from './icons/TelegramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900/50 border-t border-slate-800 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">成為第一批見證者</h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-400">
          加入我們的社群，獲取最新動態、參與早期討論，並與我們共同塑造這個宇宙的未來。
        </p>
        <div className="mt-8 flex justify-center gap-6">
            <a href="#" aria-label="Discord" className="text-gray-400 hover:text-indigo-400 transition-colors"><DiscordIcon className="w-8 h-8"/></a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-sky-400 transition-colors"><TwitterIcon className="w-8 h-8"/></a>
            <a href="#" aria-label="Telegram" className="text-gray-400 hover:text-blue-400 transition-colors"><TelegramIcon className="w-8 h-8"/></a>
        </div>
        <div className="mt-10">
           <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold">
             閱讀完整白皮書 V1.1
           </a>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-8 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} 東方迷因玄學宇宙. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
