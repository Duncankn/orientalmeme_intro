
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations as zhCN } from '../locales/zh-CN';
import { translations as zhTW } from '../locales/zh-TW';

type Translations = typeof zhCN;

interface I18nContextType {
  language: 'zh-CN' | 'zh-TW';
  setLanguage: (lang: 'zh-CN' | 'zh-TW') => void;
  t: (key: string) => any;
}

const translationData: { [key: string]: Translations } = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const resolvePath = (path: string, obj: any) => {
  return path.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, obj);
};

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'zh-CN' | 'zh-TW'>('zh-CN');

  const t = (key: string): any => {
    const translation = resolvePath(key, translationData[language]);
    // Fallback to default language if key not found in current language
    if (!translation) {
        const fallbackTranslation = resolvePath(key, translationData['zh-CN']);
        return fallbackTranslation || key;
    }
    return translation;
  };

  const value = { language, setLanguage, t };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};