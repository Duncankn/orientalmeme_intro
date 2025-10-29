
import React from 'react';
import { useI18n } from '../context/I18nContext';
import { DiscordIcon } from './icons/DiscordIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import { TelegramIcon } from './icons/TelegramIcon';
import { LanguageSwitcher } from './LanguageSwitcher';

const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="w-full bg-slate-900/50 border-t border-slate-800 py-12 mt-24">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">{t('footer.title')}</h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-400">
          {t('footer.description')}
        </p>
        <div className="mt-8 flex justify-center gap-6">
            <a href="#" aria-label="Discord" className="text-gray-400 hover:text-indigo-400 transition-colors"><DiscordIcon className="w-8 h-8"/></a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-sky-400 transition-colors"><TwitterIcon className="w-8 h-8"/></a>
            <a href="#" aria-label="Telegram" className="text-gray-400 hover:text-blue-400 transition-colors"><TelegramIcon className="w-8 h-8"/></a>
        </div>
        <div className="mt-10">
           <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold">
             {t('footer.whitepaperLink')}
           </a>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-8 text-sm text-gray-500">
            <div className="mb-4">
              <LanguageSwitcher />
            </div>
            <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;