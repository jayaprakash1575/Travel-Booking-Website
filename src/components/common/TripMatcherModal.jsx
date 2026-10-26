import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { PACKAGES } from '../../data/travelData';
import { 
  Sparkles, 
  X, 
  ArrowRight, 
  Check, 
  Compass, 
  Heart, 
  Palmtree, 
  Mountain, 
  Landmark, 
  Sun,
  Snowflake,
  Star,
  Clock,
  RotateCcw
} from 'lucide-react';

export default function TripMatcherModal() {
  const { isMatcherOpen, setIsMatcherOpen, formatPrice } = useBooking();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [selectedVibe, setSelectedVibe] = useState('romance');
  const [selectedSetting, setSelectedSetting] = useState('beach');
  const [selectedGroup, setSelectedGroup] = useState('couple');
  const [isMatching, setIsMatching] = useState(false);
  const [matchedPackage, setMatchedPackage] = useState(null);

  if (!isMatcherOpen) return null;

  const vibes = [
    { id: 'romance', label: 'Romantic & Sunset Bliss', desc: 'Private caldera plunge pools, cliffside dining, wine tastings', icon: Heart },
    { id: 'alpine', label: 'Alpine & Thrill Adventure', desc: 'Glacier trains, snow-capped peaks, alpine fondue', icon: Mountain },
    { id: 'tropical', label: 'Tropical Rainforest & Zen', desc: 'Jungle villas, holy water temples, floating breakfast', icon: Palmtree },
    { id: 'heritage', label: 'Ancient Heritage & Culture', desc: 'Zen bamboo shrines, tea ceremonies, bullet trains', icon: Landmark },
    { id: 'safari', label: 'Wilderness & Big Five Safari', desc: 'Savanna sunrise balloons, tented bush camps, crater drives', icon: Compass }
  ];

  const settings = [
    { id: 'beach', label: 'Azure Seas & Coastal Cliffs', icon: Sun },
    { id: 'mountain', label: 'Crisp Glaciers & Snow Ridges', icon: Snowflake },
    { id: 'temple', label: 'Tranquil Bamboo & Historic Shrines', icon: Landmark },
    { id: 'savanna', label: 'Endless Golden Bush & Wildlife', icon: Compass }
  ];

  const groups = [
    { id: 'couple', label: 'Romantic Couple / Honeymoon', guests: 2 },
    { id: 'solo', label: 'Solo Discovery Traveler', guests: 1 },
    { id: 'family', label: 'Family Adventure', guests: 4 },
    { id: 'group', label: 'VIP Friends Getaway', guests: 6 }
  ];

  const handleRunMatch = () => {
    setIsMatching(true);

    setTimeout(() => {
      setIsMatching(false);
      let match = PACKAGES[0]; // default Santorini
      if (selectedVibe === 'alpine' || selectedSetting === 'mountain') {
        match = PACKAGES.find(p => p.id === 'pkg-3') || PACKAGES[2]; // Swiss Alps
      } else if (selectedVibe === 'tropical') {
        match = PACKAGES.find(p => p.id === 'pkg-2') || PACKAGES[1]; // Bali
      } else if (selectedVibe === 'heritage') {
        match = PACKAGES.find(p => p.id === 'pkg-4') || PACKAGES[3]; // Kyoto
      } else if (selectedVibe === 'safari' || selectedSetting === 'savanna') {
        match = PACKAGES.find(p => p.id === 'pkg-6') || PACKAGES[5]; // Serengeti
      } else if (selectedSetting === 'beach') {
        match = PACKAGES.find(p => p.id === 'pkg-1') || PACKAGES[0]; // Santorini
      }
      setMatchedPackage(match);
      setStep(4);
    }, 1200);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedVibe('romance');
    setSelectedSetting('beach');
    setSelectedGroup('couple');
    setMatchedPackage(null);
  };

  const handleBookMatch = () => {
    if (matchedPackage) {
      setIsMatcherOpen(false);
      navigate(`/packages/${matchedPackage.id}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 flex items-center justify-center animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-teal-500/30 text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 overflow-hidden">
        
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Close */}
        <button
          onClick={() => setIsMatcherOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close matcher"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
            <span className="flex items-center gap-1.5 text-teal-400">
              <Sparkles className="w-3.5 h-3.5" /> AI Vacation Matcher
            </span>
            <span>Step {step} of 3</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Vibe */}
        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              What kind of experience do you crave most?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Select the mood for your upcoming journey:
            </p>

            <div className="space-y-2.5 pt-2">
              {vibes.map((vibe) => {
                const Icon = vibe.icon;
                const isSelected = selectedVibe === vibe.id;
                return (
                  <div
                    key={vibe.id}
                    onClick={() => setSelectedVibe(vibe.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-teal-400 bg-teal-500/20 shadow-md shadow-teal-500/10'
                        : 'border-slate-800 bg-slate-800/50 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-slate-800 text-teal-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{vibe.label}</h4>
                        <p className="text-xs text-slate-400">{vibe.desc}</p>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-teal-400 shrink-0 ml-2" />}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-teal-500/20"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Preferred Climate */}
        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              What type of landscapes inspire you?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Choose your ideal geography and climate:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {settings.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedSetting === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedSetting(item.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'border-teal-400 bg-teal-500/20 shadow-md shadow-teal-500/10'
                        : 'border-slate-800 bg-slate-800/50 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-teal-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-white">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-slate-400 hover:text-white"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center gap-1.5 shadow-lg shadow-teal-500/20"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Traveling Party */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Who is joining you on this journey?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              We personalize villa suites and guides based on your traveling group:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {groups.map((grp) => {
                const isSelected = selectedGroup === grp.id;
                return (
                  <div
                    key={grp.id}
                    onClick={() => setSelectedGroup(grp.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-teal-400 bg-teal-500/20 shadow-md shadow-teal-500/10'
                        : 'border-slate-800 bg-slate-800/50 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <h4 className="text-xs sm:text-sm font-bold text-white">{grp.label}</h4>
                    <span className="text-[11px] text-slate-400 block mt-0.5">Approx. {grp.guests} Guests</span>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 flex items-center justify-between">
              <button
                onClick={() => setStep(2)}
                className="text-xs font-semibold text-slate-400 hover:text-white"
              >
                Back
              </button>
              <button
                onClick={handleRunMatch}
                disabled={isMatching}
                className="px-8 py-3 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-400 text-slate-950 font-extrabold rounded-xl text-sm flex items-center gap-2 shadow-xl shadow-teal-500/30 hover:scale-105 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isMatching ? 'Matching Packages...' : 'Find My Dream Trip'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result Match */}
        {step === 4 && matchedPackage && (
          <div className="space-y-6 animate-fade-in text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-teal-500/20 border border-teal-500/40 text-teal-300 rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" /> 98.4% Dream Match Found
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              We Found Your Ideal Luxury Escape!
            </h3>

            {/* Matched Card */}
            <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 flex flex-col sm:flex-row items-center gap-5 text-left">
              <img
                src={matchedPackage.heroImage}
                alt={matchedPackage.title}
                className="w-full sm:w-44 h-32 object-cover rounded-xl shrink-0"
              />
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{matchedPackage.rating} ({matchedPackage.reviewCount} reviews)</span>
                  <span>•</span>
                  <span>{matchedPackage.duration}</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white line-clamp-1">
                  {matchedPackage.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {matchedPackage.overview}
                </p>
                <div className="text-base font-extrabold text-teal-300 font-display pt-1">
                  {formatPrice(matchedPackage.price)} <span className="text-xs font-normal text-slate-400">/ person</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleBookMatch}
                className="w-full sm:flex-1 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 font-extrabold rounded-xl text-sm shadow-xl shadow-teal-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <span>View Full Itinerary &amp; Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-4 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Take Quiz Again</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
