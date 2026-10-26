import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  MapPin, 
  Users, 
  ArrowRight, 
  Check, 
  Sparkles,
  Heart,
  Flame,
  Plane,
  Building2,
  Camera,
  Coffee,
  Compass,
  Wine,
  Waves
} from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function PackageCard({ pkg, viewMode = 'grid' }) {
  const navigate = useNavigate();
  const { formatPrice, isFavorite, toggleFavorite } = useBooking();

  const isFav = isFavorite(pkg.id);
  const discountPercent = Math.round(
    ((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100
  );

  const isListView = viewMode === 'list';

  const handleHeartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(pkg.id, pkg.title);
  };

  // Specific overlaid icons per package
  const getPackageImageBadges = () => {
    if (pkg.id === 'pkg-1') {
      return [
        { icon: Waves, label: 'Catamaran Cruise' },
        { icon: Wine, label: 'Volcanic Wine' },
        { icon: Building2, label: 'Caldera Suite' }
      ];
    } else if (pkg.id === 'pkg-2') {
      return [
        { icon: Waves, label: 'Nusa Penida Boat' },
        { icon: Sparkles, label: 'Floating Breakfast' },
        { icon: Building2, label: 'Jungle Pool Villa' }
      ];
    } else if (pkg.id === 'pkg-3') {
      return [
        { icon: Compass, label: 'Glacier Express' },
        { icon: Sparkles, label: 'Jungfraujoch 3,454m' },
        { icon: Building2, label: 'Matterhorn Lodge' }
      ];
    } else if (pkg.id === 'pkg-4') {
      return [
        { icon: Compass, label: 'First Class Shinkansen' },
        { icon: Sparkles, label: 'Ryokan Onsen' },
        { icon: Coffee, label: 'Zen Tea Master' }
      ];
    } else if (pkg.id === 'pkg-5') {
      return [
        { icon: Waves, label: 'Private Capri Yacht' },
        { icon: Wine, label: 'Limoncello & Wine' },
        { icon: Building2, label: 'Cliffside Suite' }
      ];
    }
    return [
      { icon: Compass, label: 'Sunrise Balloon' },
      { icon: Sparkles, label: 'Big 5 Crater 4x4' },
      { icon: Building2, label: 'Luxury Tented Camp' }
    ];
  };

  const imageBadges = getPackageImageBadges();

  return (
    <div
      className={`group bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 hover:border-teal-400/50 shadow-xl hover:shadow-glow transition-all duration-500 flex backdrop-blur-md ${
        isListView ? 'flex-col md:flex-row' : 'flex-col'
      }`}
      id={`package-card-${pkg.id}`}
    >
      {/* Image Block with Overlaid Icons */}
      <div
        className={`relative overflow-hidden bg-slate-950 ${
          isListView ? 'md:w-80 lg:w-96 shrink-0 aspect-[4/3] md:aspect-auto' : 'aspect-[16/10] w-full'
        }`}
      >
        <img
          src={pkg.heroImage}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

        {/* Top Badges & Wishlist Heart */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 flex-wrap">
            {pkg.badge && (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal-400 text-slate-950 shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {pkg.badge}
              </span>
            )}
            {discountPercent > 0 && (
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-600 text-white shadow-sm">
                -{discountPercent}%
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-white flex items-center gap-1 border border-slate-800">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              {pkg.rating}
            </span>

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

        {/* Prominent Activity Badges Overlaid Directly IN THE IMAGE */}
        <div className="absolute top-12 left-3.5 flex flex-col gap-1.5 z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
          {imageBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700/60 shadow-sm"
              >
                <Icon className="w-3 h-3 text-teal-400 shrink-0" />
                <span>{badge.label}</span>
              </span>
            );
          })}
        </div>

        {/* Gallery Photos Counter on Image */}
        <div className="absolute top-12 right-3.5 z-10 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-slate-300 border border-slate-700 shadow-sm">
            <Camera className="w-3 h-3 text-teal-400" />
            <span>{pkg.gallery.length} Photos</span>
          </span>
        </div>

        {/* Bottom Floating Badges on Image */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-950/85 backdrop-blur-md text-teal-300 flex items-center gap-1.5 border border-teal-500/30">
            <Clock className="w-3.5 h-3.5" />
            {pkg.duration}
          </span>

          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-500/25 backdrop-blur-md text-amber-300 border border-amber-500/40 flex items-center gap-1 shadow-sm">
            <Flame className="w-3 h-3 text-amber-400" /> Only 3 Left
          </span>
        </div>
      </div>

      {/* Details Block */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Location & Group size */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1.5 text-teal-400 font-bold">
              <MapPin className="w-3.5 h-3.5" />
              {pkg.destinationName}, {pkg.country}
            </span>
            <span className="flex items-center gap-1 text-slate-400">
              <Users className="w-3.5 h-3.5" /> Max {pkg.maxGroupSize} guests
            </span>
          </div>

          {/* Title */}
          <Link
            to={`/packages/${pkg.id}`}
            className="text-base sm:text-lg font-bold text-white font-display hover:text-teal-300 transition-colors line-clamp-2 mb-3 leading-snug"
          >
            {pkg.title}
          </Link>

          {/* Highlights Preview with Checkmarks */}
          <ul className="space-y-1.5 mb-5 text-xs text-slate-300">
            {pkg.highlights.slice(0, 2).map((hl, idx) => (
              <li key={idx} className="flex items-start gap-2 line-clamp-1">
                <Check className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing and Action Buttons */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-extrabold text-teal-300 font-display">
                {formatPrice(pkg.price)}
              </span>
              {pkg.originalPrice && (
                <span className="text-xs text-slate-500 line-through">
                  {formatPrice(pkg.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-slate-400">per person • all taxes included</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Link
              to={`/packages/${pkg.id}`}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors text-center border border-slate-700"
            >
              Details
            </Link>
            <button
              onClick={() => navigate(`/book/${pkg.id}`)}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 shadow-md shadow-teal-500/20 hover:shadow-teal-500/30 transition-all text-center flex items-center justify-center gap-1.5 font-display"
            >
              <span>Book Trip</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
