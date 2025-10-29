
export interface Fortune {
  tier: 'best' | 'good' | 'neutral' | 'bad';
  type: string;
  title: string;
  poem: string;
  explanation: string;
}

export const fortunes: Fortune[] = [
  {
    tier: 'best',
    type: '上上籤',
    title: '龍之力覺醒',
    poem: '潛龍騰淵，一飛沖天。\n迷因加持，萬事皆圓。',
    explanation: '恭喜！你已獲得宇宙的終極祝福。接下來的日子裡，你會像開了外掛一樣，無論是財富、事業還是人際關係都將達到頂峰。勇敢去追逐你的夢想吧！',
  },
  {
    tier: 'good',
    type: '大吉',
    title: 'Giga Chad 心態',
    poem: '身如磐石，意如堅鐵。\n市場波動，我自不屑。',
    explanation: '你目前的心態非常穩健，面對挑戰毫不畏懼。保持這份自信，許多懸而未決的問題都將迎刃而解。適合做出重要決策。',
  },
  {
    tier: 'neutral',
    type: '中吉',
    title: '保持觀察',
    poem: '霧裡看花，亦真亦幻。\n靜心等待，自有答案。',
    explanation: '眼前的情況有些不明朗，不必急於行動。花點時間收集資訊，保持耐心。機會將在你看清局勢後出現。',
  },
  {
    tier: 'bad',
    type: '凶',
    title: '水逆警告',
    poem: '溝通不暢，U盤沒存。\n諸事不順，建議躺平。',
    explanation: '最近的能量場有些混亂，容易發生小意外或誤會。重要的事情請再三確認，避免衝動行事。休息和放鬆是你現在最好的策略。',
  },
];