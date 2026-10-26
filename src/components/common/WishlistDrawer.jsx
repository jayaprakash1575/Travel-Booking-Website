import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { PACKAGES, DESTINATIONS } from '../../data/travelData';
import { 
  Heart, 
  X, 
  Trash2, 
  ArrowRight, 
  Star, 
  Clock, 
  MapPin, 
  ShoppingBag,
  Sparkles
} from 'lucide-react';

export default function WishlistDrawer() {
  const { isWishlistOpen, setIsWishlistOpen, favorites, toggleFavorite, formatPrice } = useBooking();
  const navigate = useNavigate();

  if (!isWishlistOpen) return null;

  // Resolve favorite items from PACKAGES and DESTINATIONS
  const savedPackages = PACKAGES.filter((p) => favorites.includes(p.id));
  const savedDestinations = DESTINATIONS.filter((d) => favorites.includes(d.id));
  const totalSaved = savedPackages.length + savedDestinations.length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex justify-end animate-fade-in">
      
      {/* Backdrop click close */}
      <div 
        className="flex-1 cursor-pointer" 
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer Container */}
      <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 text-white h-full flex flex-col shadow-2xl relative">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            </div>
            <div>
              <h3 className="text-base font-bold font-display text-white">Saved Wishlist</h3>
              <span className="text-[11px] text-slate-400">{totalSaved} experiences saved</span>
            </div>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {totalSaved === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 text-slate-500 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white font-display">Your Wishlist is Empty</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Explore destinations and click the heart icon on any package to save them for later!
              </p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  navigate('/destinations');
                }}
                className="mt-6 px-6 py-2.5 bg-teal-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-teal-400 transition-colors"
              >
                Browse Experiences
              </button>
            </div>
          ) : (
            <>
              {savedPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/80 hover:border-teal-500/40 transition-colors flex gap-3.5 relative group"
                >
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-20 h-20 object-cover rounded-xl shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1 text-[11px] text-teal-400 font-semibold mb-0.5">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate">{pkg.destinationName}</span>
                    </div>
                    <h5 className="text-xs font-bold text-white truncate">{pkg.title}</h5>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1">
                      <span className="flex items-center gap-0.5 text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400" /> {pkg.rating}
                      </span>
                      <span>•</span>
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-extrabold text-teal-300 font-display">
                        {formatPrice(pkg.price)}
                      </span>
                      <button
                        onClick={() => {
                          setIsWishlistOpen(false);
                          navigate(`/packages/${pkg.id}`);
                        }}
                        className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleFavorite(pkg.id, pkg.title)}
                    className="absolute top-2 right-2 p-1.5 rounded-lg text-slate-500 hover:text-rose-400 transition-colors opacity-80 group-hover:opacity-100"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Drawer Footer CTA */}
        {totalSaved > 0 && (
          <div className="p-5 border-t border-slate-800 bg-slate-950/80">
            <button
              onClick={() => {
                setIsWishlistOpen(false);
                navigate('/destinations');
              }}
              className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 font-extrabold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20"
            >
              <span>Explore More Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
