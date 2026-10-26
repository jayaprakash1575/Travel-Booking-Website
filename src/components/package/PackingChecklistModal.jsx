import React, { useState } from 'react';
import { Briefcase, Check, X, Sparkles, CheckCircle2 } from 'lucide-react';

const PACKING_PRESETS = {
  default: [
    'Valid Passport & Travel Visa Documents',
    'Universal Travel Adapter & Charging Cables',
    'Breathable Linen Attire & Resort Casuals',
    'Comfortable Walking Shoes for City Excursions',
    'Reef-safe Sunscreen (SPF 50) & Sunglasses',
    'Mini First-Aid Kit & Personal Medications',
    'Compact Noise-Cancelling Headphones',
    'Waterproof Pouch for Smartphones & Cards'
  ],
  alpine: [
    'Thermal Base Layers (Merino Wool)',
    'Waterproof & Windproof Outer Shell Jacket',
    'Sturdy Ankle-Support Hiking Boots',
    'Polarized Category 3/4 Alpine Sunglasses',
    'Insulated Touchscreen Gloves & Beanie',
    'Refillable Insulated Thermos Flask',
    'Lip Balm with SPF & High-Altitude Moisturizer',
    'Daypack with Built-in Rain Cover'
  ],
  tropical: [
    'Lightweight Quick-Dry Swimwear & Rashguards',
    'Wide-Brim Sun Hat & UV Blocking Shades',
    'Reef-Safe Biodegradable Sunscreen & Aloe Gel',
    'Eco-Friendly Mosquito & Insect Repellent',
    'Temple Sarong & Modest Cotton Cover-ups',
    'Waterproof Dry-Bag (10L-20L for Island Boats)',
    'Underwater Action Camera or Waterproof Case',
    'Electrolyte Hydration Tablets for Humid Climates'
  ],
  safari: [
    'Neutral Earth-Tone Safari Attire (Khaki, Olive, Beige)',
    'High-Powered Compact Binoculars (8x42 or 10x42)',
    'Telephoto Camera Lens for Wildlife Photography',
    'Sturdy Bush Walking Shoes or Safari Boots',
    'Wide-Brim Safari Hat with Chin Strap',
    'Insect Repellent (DEET) & Malaria Prophylaxis',
    'Warm Fleece Jacket for Early Morning Open Game Drives',
    'Dust-Proof Scarf (Bandana) for Dry Savanna Trails'
  ]
};

export default function PackingChecklistModal({ isOpen, onClose, destinationName, category }) {
  if (!isOpen) return null;

  let presetKey = 'default';
  const catLower = (category || '').toLowerCase();
  const destLower = (destinationName || '').toLowerCase();

  if (catLower.includes('mountain') || destLower.includes('swiss') || destLower.includes('alps') || destLower.includes('iceland')) {
    presetKey = 'alpine';
  } else if (catLower.includes('safari') || destLower.includes('serengeti') || destLower.includes('tanzania')) {
    presetKey = 'safari';
  } else if (catLower.includes('beach') || catLower.includes('tropical') || destLower.includes('bali') || destLower.includes('santorini')) {
    presetKey = 'tropical';
  }

  const items = PACKING_PRESETS[presetKey] || PACKING_PRESETS.default;
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (idx) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm p-4 flex items-center justify-center animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-teal-500/30 text-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative my-8">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white">
                Bespoke Packing Assistant
              </h3>
              <p className="text-xs text-slate-400">
                Tailored for {destinationName} ({presetKey.toUpperCase()} climate)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="my-5 p-3.5 bg-slate-800/60 rounded-2xl border border-slate-700/60">
          <div className="flex justify-between text-xs font-semibold mb-1.5">
            <span className="text-slate-300">Luggage Readiness</span>
            <span className="text-teal-400">{completedCount} of {items.length} Packed ({progressPercent}%)</span>
          </div>
          <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-teal-500 to-cyan-400 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Packing items */}
        <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1">
          {items.map((item, idx) => {
            const isChecked = !!checkedItems[idx];
            return (
              <label
                key={idx}
                onClick={() => toggleItem(idx)}
                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                  isChecked
                    ? 'border-teal-500/50 bg-teal-500/10 text-teal-200'
                    : 'border-slate-800 bg-slate-800/40 hover:bg-slate-800/80 text-slate-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                    isChecked ? 'border-teal-500 bg-teal-500 text-slate-950 font-bold' : 'border-slate-600'
                  }`}
                >
                  {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className={`text-xs font-medium leading-relaxed ${isChecked ? 'line-through opacity-75' : ''}`}>
                  {item}
                </span>
              </label>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            WanderLuxe Concierge Checklist
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
          >
            Done Packing
          </button>
        </div>

      </div>
    </div>
  );
}
