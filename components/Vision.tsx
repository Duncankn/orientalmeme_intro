
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 mb-12">
    {children}
  </h2>
);

const Vision: React.FC = () => {
  return (
    <section id="vision">
      <SectionTitle>我們的願景</SectionTitle>
      <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg md:text-xl leading-relaxed">
        <p>
          我們是迷因與玄學的融合體，一個旨在超越傳統 Meme 幣的數字文化實驗。
          我們的使命是構建一個充滿東方神秘色彩的去中心化宇宙，讓每個參與者都能在這裡找到獨特的數字身份歸屬感。
        </p>
      </div>
    </section>
  );
};

export default Vision;
