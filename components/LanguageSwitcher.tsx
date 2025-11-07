
import React from 'react';
import { useI18n } from '../context/I18nContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useI18n();

  const handleToggle = () => {
    const newLang = language === 'zh-CN' ? 'zh-TW' : 'zh-CN';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={handleToggle}
      className="text-gray-400 hover:text-white transition-colors font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-gray-400"
      aria-label="切换语言 / 切換語言"
    >
      {language === 'zh-CN' ? '繁體中文' : '简体中文'}
    </button>
  );
};
