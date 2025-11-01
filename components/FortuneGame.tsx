
import React, { useState } from 'react';
import { useI18n } from '../context/I18nContext';
import { FortuneStickIcon } from './icons/FortuneStickIcon';

// Define the type for a single fortune
export interface Fortune {
  tier: 'best' | 'good' | 'neutral' | 'bad';
  type: string;
  title: string;
  poem: string;
  explanation?: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 mb-12">
      {children}
    </h2>
);

const FortuneGame: React.FC = () => {
  const { t } = useI18n();
  const [isShaking, setIsShaking] = useState(false);
  const [result, setResult] = useState<Fortune | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleShake = () => {
    if (isShaking) return;
    
    const fortunes: Fortune[] = t('fortunes');
    setShowResult(false);
    setIsShaking(true);
    setResult(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      setResult(fortunes[randomIndex]);
      setIsShaking(false);
      setTimeout(() => setShowResult(true), 100);
    }, 2500);
  };

  const tierColors = {
    best: 'border-yellow-400/80 bg-yellow-900/20',
    good: 'border-green-400/80 bg-green-900/20',
    neutral: 'border-sky-400/80 bg-sky-900/20',
    bad: 'border-red-400/80 bg-red-900/20',
  };

  const tierTextColors = {
    best: 'text-yellow-300',
    good: 'text-green-300',
    neutral: 'text-sky-300',
    bad: 'text-red-300',
  };


  return (
    <section id="fortune-game">
      <SectionTitle>{t('fortuneGame.title')}</SectionTitle>
      <div className="flex flex-col items-center gap-8">
        <div className={`transition-transform duration-300 ${isShaking ? 'animate-shake' : ''}`}>
          <FortuneStickIcon className="w-40 h-40" />
        </div>
        <button
          onClick={handleShake}
          disabled={isShaking}
          className="px-8 py-4 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all transform hover:scale-105"
        >
          {isShaking ? t('fortuneGame.buttonShaking') : t('fortuneGame.button')}
        </button>

        {showResult && result && (
            <div className={`w-full max-w-md p-6 rounded-xl border backdrop-blur-sm mt-8 transition-all duration-500 transform ${showResult ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} ${tierColors[result.tier]}`}>
                <div className="text-center">
                    <span className={`font-bold text-2xl ${tierTextColors[result.tier]}`}>{result.type} - {result.title}</span>
                    <p className="text-gray-300 text-lg mt-4 whitespace-pre-wrap font-semibold">{result.poem}</p>
                    {result.explanation && (
                      <>
                        <div className="border-t border-slate-700 my-4"></div>
                        <h4 className="font-bold text-purple-300">{t('fortuneGame.explanationTitle')}</h4>
                        <p className="text-gray-400 mt-2 whitespace-pre-wrap">{result.explanation}</p>
                      </>
                    )}
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default FortuneGame;
