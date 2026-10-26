import React, { useState, useEffect } from 'react';
import { Sun, CloudRain, Snowflake, Wind, Clock, Compass, Sparkles } from 'lucide-react';

const DESTINATION_WEATHERS = [
  { city: 'Santorini, GR', temp: '25°C / 77°F', cond: 'Sunset Golden Hour', icon: Sun, vibe: 'Sunset in 1h 15m' },
  { city: 'Zermatt, CH', temp: '-2°C / 28°F', cond: 'Fresh Alpine Powder', icon: Snowflake, vibe: 'Matterhorn Clear' },
  { city: 'Bali, ID', temp: '29°C / 84°F', cond: 'Tropical Ocean Breeze', icon: Wind, vibe: 'Perfect Surf' },
  { city: 'Kyoto, JP', temp: '20°C / 68°F', cond: 'Crisp Temple Mist', icon: Sun, vibe: 'Cherry Blossom Bloom' },
  { city: 'Amalfi Coast, IT', temp: '23°C / 73°F', cond: 'Mediterranean Sun', icon: Sun, vibe: 'Yacht Cruising' },
  { city: 'Serengeti, TZ', temp: '28°C / 82°F', cond: 'Golden Savanna', icon: Compass, vibe: 'Migration Active' }
];

export default function LiveWeatherTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DESTINATION_WEATHERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = DESTINATION_WEATHERS[currentIndex];
  const Icon = current.icon;

  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/30 text-white backdrop-blur-md shadow-lg shadow-teal-500/10 text-xs transition-all duration-300">
      <div className="flex items-center gap-1.5 text-teal-400 font-bold">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
        <span className="uppercase tracking-wider text-[10px]">Live Global Feed:</span>
      </div>

      <div className="flex items-center gap-2 font-medium">
        <span className="font-bold text-slate-100">{current.city}</span>
        <span className="text-teal-300 font-mono font-bold">{current.temp}</span>
        <span className="hidden sm:inline text-slate-400">• {current.vibe}</span>
      </div>
    </div>
  );
}
