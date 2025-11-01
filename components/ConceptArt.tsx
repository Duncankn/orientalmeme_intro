import React from 'react';
import { useI18n } from '../context/I18nContext';

interface ArtCardProps {
    imageUrl: string;
    title: string;
    description: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 mb-12">
      {children}
    </h2>
);

const ArtCard: React.FC<ArtCardProps> = ({ imageUrl, title, description }) => {
    const { t } = useI18n();
    return (
        <div className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <img src={imageUrl} alt={title} className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 p-6">
                <span className="text-xs font-bold uppercase text-purple-400 bg-purple-900/50 px-2 py-1 rounded">{t('conceptArt.tag')}</span>
                <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
            </div>
        </div>
    );
}

// SBT "Natal Chart" Image - Base64 encoded SVG
const sbtImageUrl = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkMSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIiBmeD0iNTAlIiBmeT0iNTAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSJyZ2IoMTkyLCAxMzIsIDI1MikiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9InJnYig1OSwgMTMwLCAyNDYpIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9InJnYigyNTAsIDIwNCwgMjEpIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSJyZ2IoMjQ0LCAxMTQsIDE4MikiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0idXJsKCNncmFkMSkiIG9wYWNpdHk9IjAuMyIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iOTAiIHN0cm9rZT0idXJsKCNncmFkMikiIHN0cm9rZS13aWR0aD0iMiIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjUpIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMzAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjgpIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMTAwIiB5MT0iMTAiIHgyPSIxMDAiIHkyPSIxOTAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMTAiIHkxPSIxMDAiIHgyPSIxOTAiIHkyPSIxMDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjMpIiBzdHJva2Utd2lkdGg9IjEiLz48bGluZSB4MT0iMzciIHkxPSIzNyIgeDI9IjE2MyIgeTI9IjE2MyIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMykiIHN0cm9rZS13aWR0aD0iMSIvPjxsaW5lIHgxPSIzNyIgeTE9IjE2MyIgeDI9IjE2MyIgeTI9IjM3IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iOTUiIHk9IjI1IiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIj7imqA8L3RleHQ+PHRleHQgeD0iMTcwIiB5PSIxMDUiIGZvbnQtZmFtaWx5PSJzZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiPuKarzwvdGV4dD48dGV4dCB4PSI5NSIgeT0iMTg1IiBmb250LWZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIj7imrE8L3RleHQ+PHRleHQgeD0iMjAiIHk9IjEwNSIgZm9udC1ZhbWlseT0ic2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIj7imrQ8L3RleHQ+PC9zdmc+`;

// NFT "Magic Weapon" Image - Base64 encoded SVG
const nftImageUrl = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0iZ3JhZDMiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSIgZng9IjUwJSIgZnk9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDM0LCAyMTEsIDIzOCk7c3RvcC1vcGFjaXR5OjEiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoNTksIDEzMCwgMjQ2KTtzdG9wLW9wYWNpdHk6MCIgLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZDQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOnJnYigyMzYsIDcyLCAxNTMpOyBzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6cmdiKDEzOSwgOTIsIDI0Nik7IHN0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ1cmwoI2dyYWQzKSIgb3BhY2l0eT0iMC4zIi8+PHBhdGggZD0iTTEyIDJMMy45MzM5MSA5Ljc1TDUuMzQ4MTIgMTEuMjVMMy45MzM5MSAxMi43NUw1LjM0ODExIDE0LjI1TDEyIDguNUwxOC42NTIgMTQuMjVMMjAuMDY2MSAxMi43NUwxOC42NTIgMTEuMjVMMjAuMDY2MSA5Ljc1TDEyIDJaIE02IDEzTDEyIDE5TDE4IDEzVjIwQzE4IDIxLjEwNDYgMTcuMTA0NiAyMiAxNiAyMkg4QzYuODk1NDMgMjIgNiAyMS4xMDQ2IDYgMjBWMTNaIiBmaWxsPSJ1cmwoI2dyYWQ0KSIgLz48L3N2Zz4=`;


const ConceptArt: React.FC = () => {
  const { t } = useI18n();
  const cards = t('conceptArt.cards');

  return (
    <section id="concept-art">
      <SectionTitle>{t('conceptArt.title')}</SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        <ArtCard 
            imageUrl={sbtImageUrl}
            title={cards[0].title}
            description={cards[0].description}
        />
        <ArtCard 
            imageUrl={nftImageUrl}
            title={cards[1].title}
            description={cards[1].description}
        />
      </div>
    </section>
  );
};

export default ConceptArt;