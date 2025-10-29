
import React from 'react';
import Header from './components/Header';
import Vision from './components/Vision';
import Features from './components/Features';
import Roadmap from './components/Roadmap';
import ConceptArt from './components/ConceptArt';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import FortuneGame from './components/FortuneGame';

const App: React.FC = () => {
  // Set a target date for the countdown, e.g., 90 days from now
  const countdownTargetDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

  return (
    <div className="bg-slate-900 text-gray-200 min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-0"></div>
      <main className="relative z-10 flex flex-col items-center">
        <Header />
        <div className="w-full px-4 md:px-8 max-w-5xl mx-auto space-y-24 md:space-y-32 my-24 md:my-32">
          <Vision />
          <Features />
          <Roadmap />
          <ConceptArt />
          <FortuneGame />
          <Countdown targetDate={countdownTargetDate} />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;