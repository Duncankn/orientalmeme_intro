import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { FortuneContainerIcon } from './icons/FortuneContainerIcon';
import { FortuneStickIcon } from './icons/FortuneStickIcon';
import { LoadingIcon } from './icons/LoadingIcon';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 mb-12">
      {children}
    </h2>
);

interface Fortune {
    luck: string;
    verse: string;
    interpretation: string;
}

const FortuneGame: React.FC = () => {
    const [gameState, setGameState] = useState<'idle' | 'shaking' | 'loading' | 'finished'>('idle');
    const [fortune, setFortune] = useState<Fortune | null>(null);
    const [error, setError] = useState<string | null>(null);

    const parseFortuneText = (text: string): Fortune | null => {
        const luckMatch = text.match(/【吉凶】(.*)/);
        const verseMatch = text.match(/【詩曰】\s*([\s\S]*?)\s*【解曰】/);
        const interpretationMatch = text.match(/【解曰】\s*([\s\S]*)/);

        if (luckMatch && verseMatch && interpretationMatch) {
            return {
                luck: luckMatch[1].trim(),
                verse: verseMatch[1].trim(),
                interpretation: interpretationMatch[1].trim(),
            };
        }
        return null;
    };


    const fetchFortune = async () => {
        setError(null);
        setFortune(null);
        setGameState('loading');
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `你是一位融合東方玄學與網路迷因的解簽大師。請用繁體中文，為我產生一則宇宙迷因簽。請嚴格按照以下格式回覆，不要有任何多餘的文字：
【吉凶】[大吉/中吉/小吉/中平/小凶]
【詩曰】
[四句七言絕句，內容關於數位世界、程式碼或未來科技]
【解曰】
[一段簡短的解釋，風格賽博龐克且帶有迷因感]`;

            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
            });
            const parsedFortune = parseFortuneText(response.text);
            if (parsedFortune) {
                setFortune(parsedFortune);
            } else {
                // Fallback if parsing fails
                setFortune({ luck: '天機', verse: '混沌之中，答案自現。', interpretation: response.text });
            }

        } catch (e) {
            console.error(e);
            setError('無法連接到玄學宇宙，請稍後再試。');
        } finally {
            setGameState('finished');
        }
    };

    const handleShake = () => {
        if (gameState !== 'idle') return;
        setGameState('shaking');
        setTimeout(() => {
            fetchFortune();
        }, 2460); // 3 shakes * 0.82s
    };

    const handleReset = () => {
        setGameState('idle');
        setFortune(null);
        setError(null);
    };

    return (
        <section id="fortune-game">
            <SectionTitle>求一支宇宙迷因簽</SectionTitle>
            <div className="relative w-full min-h-[400px] flex flex-col items-center justify-center p-4 bg-slate-900/50 rounded-2xl border border-slate-700 overflow-hidden">
                <p className="text-gray-400 mb-8 text-center">誠心點擊簽筒，求得你的數位天命。</p>
                <div className="relative">
                     <button
                        onClick={handleShake}
                        className={`cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none ${gameState === 'shaking' ? 'animate-shake' : ''}`}
                        aria-label="點擊求簽"
                        disabled={gameState !== 'idle'}
                     >
                        <FortuneContainerIcon />
                    </button>
                    {gameState === 'shaking' && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 animate-fall" style={{animationDelay: '1.5s'}}>
                            <FortuneStickIcon />
                        </div>
                    )}
                </div>

                { (gameState === 'loading' || gameState === 'finished') && (
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-20 animate-fadeIn">
                        {gameState === 'loading' && (
                            <div className="flex flex-col items-center text-white">
                                <LoadingIcon className="w-16 h-16 animate-spin"/>
                                <p className="mt-4 text-lg">正在連接宇宙意識...</p>
                            </div>
                        )}
                        {gameState === 'finished' && (fortune || error) && (
                            <div className="w-full max-w-md bg-slate-800 border border-purple-500/50 rounded-xl p-8 shadow-2xl shadow-purple-500/20 text-center">
                                {error ? (
                                    <p className="text-red-400">{error}</p>
                                ) : fortune ? (
                                    <>
                                        <div className="mb-4">
                                            <span className="text-sm uppercase text-purple-400">你的天命</span>
                                            <p className="text-5xl font-black text-yellow-300">{fortune.luck}</p>
                                        </div>
                                        <div className="my-6 border-y-2 border-slate-700 py-4">
                                            <p className="text-xl whitespace-pre-wrap font-serif tracking-widest leading-loose">{fortune.verse}</p>
                                        </div>
                                        <div>
                                             <span className="text-sm uppercase text-purple-400">解曰</span>
                                             <p className="mt-2 text-gray-300">{fortune.interpretation}</p>
                                        </div>
                                    </>
                                ) : null}
                                <button onClick={handleReset} className="mt-8 px-6 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-500 transition-colors">
                                    再求一簽
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default FortuneGame;