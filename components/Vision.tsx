
import React from 'react';
import { useI18n } from '../context/I18nContext';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 mb-12">
    {children}
  </h2>
);

const Vision: React.FC = () => {
  const { t } = useI18n();
  return (
    <section id="vision">
      <SectionTitle>{t('vision.title')}</SectionTitle>
      <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg md:text-xl leading-relaxed">
        <p>
          {t('vision.description')}
        </p>
      </div>
    </section>
  );
};

export default Vision;