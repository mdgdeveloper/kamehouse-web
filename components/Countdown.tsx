'use client';

import { useEffect, useState, useMemo } from 'react';
import { Orbitron } from 'next/font/google';

type CountdownProps = {
  endDate: string | Date;
  eventText: string;
};

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['500', '700'], // you can adjust weights
});

export default function Countdown({ endDate, eventText }: CountdownProps) {
  const targetDate = useMemo(() => new Date(endDate), [endDate]);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.total <= 0) {
    return (
      <div className="text-center p-6">
        <h2 className="text-3xl font-bold text-red-500">{eventText} has started!</h2>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center text-white  w-full mx-auto `}>
      <h2 className="text-lg md:text-xl text-center mb-2">{eventText}</h2>
      <div className={`flex justify-center space-x-4 text-center text-lg md:text-lg ${orbitron.className}`}>
        <TimeBox label="Dias" value={timeLeft.days} />
        <TimeBox label="Horas" value={timeLeft.hours} />
        <TimeBox label="Minutos" value={timeLeft.minutes} />
        <TimeBox label="Segundos" value={timeLeft.seconds} />
      </div>
    </div>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl md:text-5xl font-semibold">{String(value).padStart(2, '0')}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}

function getTimeLeft(end: Date) {
  const total = end.getTime() - new Date().getTime();

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}
