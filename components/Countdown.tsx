
import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import { useI18n } from '../context/I18nContext';

interface CountdownProps {
  targetDate: Date;
}

const DateTimeDisplay: React.FC<{ value: number; type: string }> = ({ value, type }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-800/50 border border-slate-700 rounded-lg w-24 h-24 md:w-32 md:h-32">
      <span className="text-4xl md:text-6xl font-bold text-purple-400">{value.toString().padStart(2, '0')}</span>
      <span className="text-sm uppercase text-gray-400">{type}</span>
    </div>
  );
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const { t } = useI18n();

  return (
    <section id="countdown">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-500 mb-4">
        {t('countdown.title')}
      </h2>
      <p className="text-center text-gray-400 mb-12">{t('countdown.subtitle')}</p>
      <div className="flex justify-center items-center gap-3 md:gap-6">
        <DateTimeDisplay value={days} type={t('countdown.days')} />
        <DateTimeDisplay value={hours} type={t('countdown.hours')} />
        <DateTimeDisplay value={minutes} type={t('countdown.minutes')} />
        <DateTimeDisplay value={seconds} type={t('countdown.seconds')} />
      </div>
    </section>
  );
};

export default Countdown;