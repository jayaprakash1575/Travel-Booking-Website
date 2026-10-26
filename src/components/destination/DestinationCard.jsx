import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  ArrowRight, 
  Compass, 
  Sparkles, 
  Heart,
  Camera,
  Eye,
  Waves,
  Palmtree,
  Mountain,
  Sun,
  Wine,
  Flame,
  Check
} from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function DestinationCard({ destination }) {
  const navigate = useNavigate();
  const { formatPrice, isFavorite, toggleFavorite } = useBooking();

  const isFav = isFavorite(destination.id);

  const handleExplore = () => {
    navigate(`/destinations?search=${encodeURIComponent(destination.name)}`);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    toggleFavorite(destination.id, destination.name);
  };

  // Determine dynamic overlaid icons based on category
  const getOverlaidIcons = () => {
    const cat = destination.category.toLowerCase();
    if (cat.includes('beach') || cat.includes('island') || cat.includes('coastal')) {
      return [
        { icon: Waves, label: 'Catamaran & Sea' },
        { icon: Wine, label: 'Sunset Tasting' },
        { icon: Camera, label: 'Photo Spot' }
      ];
    } else if (cat.includes('mountain') || cat.includes('alpine')) {
      return [
        { icon: Mountain, label: 'Glacier Train' },
        { icon: Sparkles, label: 'Top of Europe' },
        { icon: Camera, label: 'Peak Views' }
      ];
    } else if (cat.includes('safari') || cat.includes('wildlife')) {
      return [
        { icon: Compass, label: 'Big 5 Safari' },
        { icon: Sun, label: 'Sunrise Balloon' },
        { icon: Camera, label: 'Wildlife Tour' }
      ];
    } else if (cat.includes('culture') || cat.includes('temple')) {
      return [
        { icon: Compass, label: 'Ancient Shrines' },
        { icon: Sparkles, label: 'Tea Ceremony' },
        { icon: Camera, label: 'Heritage Walk' }
      ];
    }
    return [
      { icon: Palmtree, label: 'Luxury Stays' },
      { icon: Sparkles, label: 'VIP Concierge' },
      { icon: Camera, label: 'Scenic Gems' }
    ];
  };

  const overlayIcons = getOverlaidIcons();

  return (
    <div
      onClick={handleExplore}
      className="group relative bg-slate-900/90 rounded-3xl overflow-hidden shadow-xl hover:shadow-glow border border-slate-800/90 hover:border-teal-400/50 transition-all duration-500 flex flex-col cursor-pointer transform hover:-translate-y-2 backdrop-blur-md"
      id={`destination-card-${destination.id}`}
    >
      {/* Image Container with Zoom & Overlaid Icons */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Top Badges & Wishlist Heart */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/85 backdrop-blur-md text-teal-300 border border-teal-500/30 flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            {destination.tag}
          </span>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-white flex items-center gap-1 border border-slate-800">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {destination.rating}
            </span>

            {/* Favorite Heart Button */}
            <button
              onClick={handleHeartClick}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                isFav
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-110'
                  : 'bg-slate-950/70 text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
              title={isFav ? 'Remove from wishlist' : 'Save to wishlist'}
            >
              <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Overlaid Feature Icons Strip Directly ON THE IMAGE */}
        <div className="absolute top-12 left-3.5 flex flex-col gap-1.5 z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
          {overlayIcons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700/60 shadow-sm"
              >
                <Icon className="w-3 h-3 text-teal-400 shrink-0" />
                <span>{item.label}</span>
              </span>
            );
          })}
        </div>

        {/* 360° VR Badge on Image */}
        <div className="absolute top-12 right-3.5 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/25 backdrop-blur-md text-teal-300 border border-teal-500/40 shadow-sm">
            <Eye className="w-3 h-3 text-teal-400" />
            <span>360° VR</span>
          </span>
        </div>

        {/* Bottom Destination Title on Image */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10">
          <div className="flex items-center gap-1.5 text-xs text-teal-300 font-bold mb-0.5 drop-shadow">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>{destination.country} • {destination.continent}</span>
          </div>
          <h3 className="text-xl font-extrabold font-display tracking-tight leading-snug drop-shadow-md text-white group-hover:text-teal-300 transition-colors">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
            {destination.description}
          </p>

          {/* Highlights tags with icon ticks */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {destination.highlights.slice(0, 3).map((hl, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[11px] font-semibold bg-slate-800/80 text-slate-200 px-2.5 py-1 rounded-lg border border-slate-700/60"
              >
                <Check className="w-3 h-3 text-teal-400 shrink-0" />
                <span>{hl}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer with Starting Price and Action */}
        <div className="pt-3.5 border-t border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
              Starting from
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-teal-400 font-display">
                {formatPrice(destination.startingPrice)}
              </span>
              <span className="text-xs text-slate-400 font-normal">/ person</span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleExplore();
            }}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-teal-500/20 group-hover:scale-105"
            aria-label={`Explore packages for ${destination.name}`}
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
