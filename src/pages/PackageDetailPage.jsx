import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PACKAGES } from '../data/travelData';
import { useBooking } from '../context/BookingContext';
import PackingChecklistModal from '../components/package/PackingChecklistModal';
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  Calendar, 
  ShieldCheck, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Share2, 
  Heart,
  Plane,
  Plus,
  Minus,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Flame,
  Maximize2,
  Eye,
  Compass,
  Waves,
  Wine,
  Mountain,
  Snowflake,
  Camera,
  Palmtree,
  Sun,
  Utensils
} from 'lucide-react';

export default function PackageDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { formatPrice, showToast, isFavorite, toggleFavorite } = useBooking();

  // Find package or fallback
  const pkg = PACKAGES.find((p) => p.id === id) || PACKAGES[0];
  const isFav = isFavorite(pkg.id);

  // Overlaid badges for images
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
        { icon: Utensils, label: 'Kaiseki Banquet' }
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

  const renderHotelIconByName = (name) => {
    switch (name) {
      case 'Waves': return <Waves className="w-3 h-3 text-teal-400" />;
      case 'Wine': return <Wine className="w-3 h-3 text-teal-400" />;
      case 'Mountain': return <Mountain className="w-3 h-3 text-teal-400" />;
      case 'Snowflake': return <Snowflake className="w-3 h-3 text-teal-400" />;
      case 'Palmtree': return <Palmtree className="w-3 h-3 text-teal-400" />;
      case 'Sun': return <Sun className="w-3 h-3 text-amber-400" />;
      case 'Compass': return <Compass className="w-3 h-3 text-teal-400" />;
      case 'Utensils': return <Utensils className="w-3 h-3 text-teal-400" />;
      case 'Camera': return <Camera className="w-3 h-3 text-teal-400" />;
      case 'Flame': return <Flame className="w-3 h-3 text-amber-400" />;
      case 'Eye': return <Eye className="w-3 h-3 text-teal-400" />;
      default: return <Sparkles className="w-3 h-3 text-teal-400" />;
    }
  };

  // Active gallery image & Lightbox
  const [activeImage, setActiveImage] = useState(pkg.heroImage);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [packingModalOpen, setPackingModalOpen] = useState(false);
  const [virtual360Open, setVirtual360Open] = useState(false);

  const [activeTab, setActiveTab] = useState('overview');
  const [expandedDays, setExpandedDays] = useState({ 1: true });

  // Sticky Booking Calculator State
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [departureDate, setDepartureDate] = useState('2026-11-20');
  const [roomTier, setRoomTier] = useState('standard');
  const [selectedAddOns, setSelectedAddOns] = useState({
    vipTransfer: false,
    insurance: true,
    privateTour: false
  });

  const toggleDay = (dayNum) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayNum]: !prev[dayNum]
    }));
  };

  const expandAllDays = () => {
    const all = {};
    pkg.itinerary.forEach((item) => {
      all[item.day] = true;
    });
    setExpandedDays(all);
  };

  // Add-on options
  const addOnPrices = {
    vipTransfer: { label: 'Private VIP Chauffeur Airport Transfer', price: 85 },
    insurance: { label: 'Comprehensive Worldwide Travel Protection', price: 120 },
    privateTour: { label: 'Private Sommelier & Sunset Yacht Cruise Upgrade', price: 190 }
  };

  const roomUpgradePrices = {
    standard: 0,
    deluxe: 300,
    luxuryVilla: 650
  };

  // Live Price Calculation
  const baseAdultsTotal = pkg.price * adults;
  const baseChildrenTotal = Math.round(pkg.price * 0.7) * children;
  const roomUpgradeCost = roomUpgradePrices[roomTier] || 0;
  
  let addOnsTotal = 0;
  if (selectedAddOns.vipTransfer) addOnsTotal += addOnPrices.vipTransfer.price;
  if (selectedAddOns.insurance) addOnsTotal += addOnPrices.insurance.price;
  if (selectedAddOns.privateTour) addOnsTotal += addOnPrices.privateTour.price;

  const subtotal = baseAdultsTotal + baseChildrenTotal + roomUpgradeCost + addOnsTotal;
  const estimatedTaxes = Math.round(subtotal * 0.08);
  const grandTotal = subtotal + estimatedTaxes;

  const handleProceedToBook = () => {
    navigate(`/book/${pkg.id}?adults=${adults}&children=${children}&date=${departureDate}&tier=${roomTier}`);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Package link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20">
      
      {/* Breadcrumb Navigation */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-3">
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link to="/destinations" className="hover:text-teal-400">Destinations</Link>
          <span>/</span>
          <span className="text-white font-bold truncate max-w-xs">{pkg.destinationName}</span>
        </nav>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mt-2">
        
        {/* Scarcity / High Demand Floating Alert */}
        <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>High Demand: 14 travelers viewing this package right now • Only 2 villa suites left for November</span>
        </div>

        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                {pkg.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> {pkg.badge || 'VIP Luxury Choice'}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
              {pkg.title}
            </h1>

            <div className="flex items-center gap-4 mt-3 flex-wrap text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1 text-teal-400 font-semibold">
                <MapPin className="w-4 h-4" /> {pkg.destinationName}, {pkg.country}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-bold text-white">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {pkg.rating} <span className="text-slate-400 font-normal">({pkg.reviewCount} verified guest reviews)</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Clock className="w-4 h-4 text-teal-400" /> {pkg.duration}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {/* Wishlist Heart */}
            <button
              onClick={() => toggleFavorite(pkg.id, pkg.title)}
              className={`p-2.5 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-bold ${
                isFav
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span className="hidden sm:inline">{isFav ? 'Saved' : 'Wishlist'}</span>
            </button>

            {/* Packing Guide Assistant Trigger */}
            <button
              onClick={() => setPackingModalOpen(true)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-teal-400 hover:border-teal-500/40 transition-colors shadow-sm flex items-center gap-1.5 text-xs font-semibold"
            >
              <Briefcase className="w-4 h-4 text-teal-400" />
              <span className="hidden sm:inline">Packing Guide</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-teal-400 transition-colors shadow-sm flex items-center gap-1.5 text-xs font-semibold"
              title="Share package"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Photo Gallery Grid with Click-to-Expand & Overlaid Icons in Images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          
          {/* Main Hero Photo */}
          <div 
            onClick={() => setLightboxOpen(true)}
            className="lg:col-span-2 aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-slate-950 relative group cursor-pointer border border-slate-800 hover:border-teal-400/50 transition-colors"
          >
            <img
              src={activeImage}
              alt={pkg.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

            {/* Overlaid Badges Directly on Main Image - Top Left */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-teal-300 border border-teal-500/40 flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>{pkg.badge || 'VIP Luxury Choice'}</span>
              </span>

              {/* Overlaid Activity Badges with Icons */}
              <div className="flex flex-col gap-1.5">
                {imageBadges.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-bold bg-slate-950/85 backdrop-blur-md text-white border border-slate-700/80 shadow-md w-fit"
                    >
                      <Icon className="w-3.5 h-3.5 text-teal-400" />
                      <span>{b.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Top Right Badges */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/25 backdrop-blur-md text-teal-300 border border-teal-500/40 flex items-center gap-1.5 shadow-md">
                <Eye className="w-3.5 h-3.5 text-teal-400" />
                <span>360° Virtual Tour</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-white border border-slate-700 flex items-center gap-1 shadow-md">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{pkg.rating}</span>
              </span>
            </div>

            {/* Bottom Left & Right Badges */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-teal-300 text-xs font-semibold border border-teal-500/30 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Verified 5-Star Partner Accommodation</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 border border-slate-700">
                <Maximize2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Fullscreen Gallery</span>
              </span>
            </div>
          </div>

          {/* Thumbnails list with Overlaid Photo Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            {pkg.gallery.map((imgUrl, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImage(imgUrl)}
                className={`relative rounded-2xl overflow-hidden aspect-[16/9] cursor-pointer border-2 transition-all ${
                  activeImage === imgUrl ? 'border-teal-400 scale-[1.02] shadow-glow' : 'border-slate-800 opacity-75 hover:opacity-100'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlaid Photo Counter Badge directly on image */}
                <div className="absolute bottom-2 right-2 pointer-events-none">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950/85 backdrop-blur-md text-slate-200 border border-slate-700 flex items-center gap-1">
                    <Camera className="w-3 h-3 text-teal-400" />
                    <span>Photo {idx + 1}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Key Quick Facts Bar */}
        <div className="bg-slate-900/90 rounded-3xl p-5 border border-slate-800 shadow-xl grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-extrabold uppercase block">Duration</span>
              <span className="text-xs sm:text-sm font-bold text-white">{pkg.duration}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-extrabold uppercase block">Group Size</span>
              <span className="text-xs sm:text-sm font-bold text-white">Max {pkg.maxGroupSize} Guests</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-extrabold uppercase block">Best Season</span>
              <span className="text-xs sm:text-sm font-bold text-white">{pkg.bestSeason}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-extrabold uppercase block">Activity Level</span>
              <span className="text-xs sm:text-sm font-bold text-white">{pkg.physicalLevel}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Content: Tabs & Sticky Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Tabbed Content (2 cols) */}
          <div className="lg:col-span-2">
            
            {/* Tab Buttons */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-8 overflow-x-auto scrollbar-none">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'itinerary', label: 'Day-by-Day Itinerary' },
                { id: 'included', label: 'What’s Included' },
                { id: 'hotels', label: 'Hotels & Stays' },
                { id: 'reviews', label: `Reviews (${pkg.reviews.length})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 shadow-md shadow-teal-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                  }`}
                  id={`tab-${tab.id}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="text-xl font-bold text-white font-display mb-3">
                    About this Luxury Experience
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {pkg.overview}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-display mb-4">
                    Signature Trip Highlights
                  </h3>
                  <div className="space-y-3">
                    {pkg.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                        <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-200 font-medium leading-normal">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Packing Banner CTA */}
                <div className="p-6 rounded-3xl bg-slate-900/90 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Need a packing checklist for {pkg.destinationName}?</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Check recommended essentials based on the local climate and activities.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setPackingModalOpen(true)}
                    className="px-5 py-2.5 bg-teal-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-teal-400 transition-colors whitespace-nowrap shrink-0"
                  >
                    Open Packing Guide
                  </button>
                </div>
              </div>
            )}

            {/* Tab 2: Day-by-Day Itinerary */}
            {activeTab === 'itinerary' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between pb-2">
                  <h3 className="text-xl font-bold text-white font-display">
                    Full Trip Schedule ({pkg.itinerary.length} Days)
                  </h3>
                  <button
                    onClick={expandAllDays}
                    className="text-xs font-bold text-teal-400 hover:underline"
                  >
                    Expand All Days
                  </button>
                </div>

                <div className="space-y-4">
                  {pkg.itinerary.map((day) => {
                    const isOpen = expandedDays[day.day];
                    return (
                      <div
                        key={day.day}
                        className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden shadow-sm transition-all"
                      >
                        <button
                          onClick={() => toggleDay(day.day)}
                          className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-800/60 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-xl bg-teal-500 text-slate-950 text-xs font-black flex items-center justify-center shrink-0">
                              D{day.day}
                            </span>
                            <span className="text-sm sm:text-base font-bold text-white">
                              Day {day.day}: {day.title}
                            </span>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-2 border-t border-slate-800 text-xs sm:text-sm text-slate-300 space-y-3 bg-slate-950/40">
                            <div>
                              <strong className="text-teal-300 block mb-0.5">Morning:</strong>
                              <p className="leading-relaxed text-slate-400">{day.morning}</p>
                            </div>
                            <div>
                              <strong className="text-teal-300 block mb-0.5">Afternoon:</strong>
                              <p className="leading-relaxed text-slate-400">{day.afternoon}</p>
                            </div>
                            <div>
                              <strong className="text-teal-300 block mb-0.5">Evening:</strong>
                              <p className="leading-relaxed text-slate-400">{day.evening}</p>
                            </div>

                            <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                              <span className="text-teal-400">Accommodations: {day.stay}</span>
                              <span className="bg-slate-800 px-2.5 py-1 rounded-md text-slate-300 border border-slate-700">
                                {day.meals}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab 3: What's Included & Excluded */}
            {activeTab === 'included' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                
                {/* Included */}
                <div className="bg-slate-900/80 rounded-3xl p-6 border border-teal-500/30 shadow-sm">
                  <h4 className="text-base font-bold text-teal-300 font-display flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-teal-400" /> What's Included
                  </h4>
                  <ul className="space-y-3">
                    {pkg.included.map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div className="bg-slate-900/80 rounded-3xl p-6 border border-slate-800 shadow-sm">
                  <h4 className="text-base font-bold text-slate-400 font-display flex items-center gap-2 mb-4">
                    <AlertCircle className="w-5 h-5 text-slate-500" /> Excluded Items
                  </h4>
                  <ul className="space-y-3">
                    {pkg.excluded.map((exc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            )}

            {/* Tab 4: Hotels & Stays with Overlaid Icons in Images */}
            {activeTab === 'hotels' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white font-display">
                    Handpicked Luxury Partner Stays
                  </h3>
                  <span className="text-xs text-teal-400 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> 100% Physically Inspected
                  </span>
                </div>

                {pkg.hotels.map((hotel, idx) => (
                  <div key={idx} className="bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 shadow-xl flex flex-col md:flex-row backdrop-blur-md">
                    {/* Hotel Photo with Overlaid Badges & Icons */}
                    <div className="md:w-80 lg:w-96 shrink-0 relative aspect-[16/11] md:aspect-auto bg-slate-950 overflow-hidden">
                      <img
                        src={hotel.image || pkg.heroImage}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-950/85 backdrop-blur-md text-teal-300 border border-teal-500/40">
                          {hotel.overlayBadge || '5-Star VIP Partner'}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-white flex items-center gap-1 border border-slate-800">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{hotel.stars}.0</span>
                        </span>
                      </div>

                      {/* Overlaid Activity Icons on Hotel Photo */}
                      {hotel.overlayIcons && (
                        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-10">
                          {hotel.overlayIcons.map((ic, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-950/85 backdrop-blur-md text-slate-200 border border-slate-700/60"
                            >
                              {renderHotelIconByName(ic.icon)}
                              <span>{ic.label}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Hotel Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <div className="flex items-center gap-1 text-amber-400 mb-1">
                              {[...Array(hotel.stars)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400" />
                              ))}
                              <span className="text-xs text-slate-400 ml-1 font-semibold">{hotel.stars}-Star Luxury Resort</span>
                            </div>
                            <h4 className="text-xl font-bold text-white font-display">{hotel.name}</h4>
                            <span className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                              <MapPin className="w-3.5 h-3.5 text-teal-400" /> {hotel.location}
                            </span>
                          </div>
                          <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 shrink-0">
                            VIP Included
                          </span>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-800">
                          <span className="text-xs font-bold text-teal-400 uppercase tracking-wider block mb-1">
                            Included Suite Tier
                          </span>
                          <p className="text-sm font-semibold text-slate-200 mb-3">{hotel.roomType}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {hotel.amenities.map((am, i) => (
                              <span key={i} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-lg border border-slate-700/80 flex items-center gap-1.5">
                                <Check className="w-3 h-3 text-teal-400" />
                                <span>{am}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                        <span>Complimentary Wi-Fi &amp; Breakfast included</span>
                        <span className="text-teal-400 font-bold">Guaranteed Room Upgrade Available</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 5: Traveler Reviews */}
            {activeTab === 'reviews' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-center sm:text-left">
                    <div className="text-4xl font-extrabold text-white font-display flex items-center justify-center sm:justify-start gap-2">
                      <span>{pkg.rating}</span>
                      <div className="flex text-amber-400">
                        <Star className="w-6 h-6 fill-amber-400" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Based on {pkg.reviewCount} verified guest reviews</p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-300 w-full sm:w-auto">
                    <div>Cleanliness: <strong className="text-teal-400">4.9/5</strong></div>
                    <div>Location: <strong className="text-teal-400">5.0/5</strong></div>
                    <div>Concierge &amp; Guide: <strong className="text-teal-400">4.9/5</strong></div>
                    <div>Value for Money: <strong className="text-teal-400">4.8/5</strong></div>
                  </div>
                </div>

                <div className="space-y-4">
                  {pkg.reviews.map((rev) => (
                    <div key={rev.id} className="bg-slate-900/80 rounded-2xl p-6 border border-slate-800 shadow-sm">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={rev.avatar}
                            alt={rev.author}
                            className="w-10 h-10 rounded-full object-cover ring-2 ring-teal-500/30"
                          />
                          <div>
                            <h5 className="text-sm font-bold text-white">{rev.author}</h5>
                            <span className="text-[11px] text-slate-400">{rev.date}</span>
                          </div>
                        </div>
                        <div className="flex text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                      <h6 className="text-sm font-bold text-teal-300 mb-1">{rev.title}</h6>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{rev.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Live Price Calculator Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-2xl space-y-6 backdrop-blur-xl">
              
              {/* Price header */}
              <div className="flex items-baseline justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Starting from</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold text-teal-300 font-display">
                      {formatPrice(pkg.price)}
                    </span>
                    <span className="text-xs text-slate-400">/ person</span>
                  </div>
                </div>
                {pkg.originalPrice && (
                  <span className="text-xs text-rose-400 font-bold bg-rose-500/10 px-2.5 py-1 rounded-full border border-rose-500/20">
                    Save {formatPrice(pkg.originalPrice - pkg.price)}
                  </span>
                )}
              </div>

              {/* Trip Date Picker */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-teal-400" /> Departure Date
                </label>
                <input
                  type="date"
                  value={departureDate}
                  min="2026-11-01"
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-teal-500"
                  id="calc-departure-date"
                />
              </div>

              {/* Guests Count (Adults & Children) */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Guests &amp; Travelers
                </label>
                
                {/* Adults */}
                <div className="flex items-center justify-between p-3 bg-slate-800/80 rounded-2xl border border-slate-700/80">
                  <div>
                    <span className="text-xs font-bold text-white block">Adults (12+)</span>
                    <span className="text-[11px] text-teal-400">{formatPrice(pkg.price)} / guest</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 hover:bg-slate-800 disabled:opacity-40"
                      disabled={adults <= 1}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-white">{adults}</span>
                    <button
                      onClick={() => setAdults(Math.min(pkg.maxGroupSize, adults + 1))}
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 hover:bg-slate-800"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between p-3 bg-slate-800/80 rounded-2xl border border-slate-700/80">
                  <div>
                    <span className="text-xs font-bold text-white block">Children (2-11)</span>
                    <span className="text-[11px] text-teal-400 font-medium">30% discount</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 hover:bg-slate-800 disabled:opacity-40"
                      disabled={children <= 0}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-white">{children}</span>
                    <button
                      onClick={() => setChildren(Math.min(6, children + 1))}
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-200 hover:bg-slate-800"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Room Tier Upgrade */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Room Tier Upgrade
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'standard', name: 'Standard Suite', extra: 0 },
                    { id: 'deluxe', name: 'Deluxe Sea View (+ $300)', extra: 300 },
                    { id: 'luxuryVilla', name: 'Penthouse Villa (+ $650)', extra: 650 },
                  ].map((tier) => (
                    <label
                      key={tier.id}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer transition-colors ${
                        roomTier === tier.id
                          ? 'border-teal-400 bg-teal-500/20 text-white font-bold'
                          : 'border-slate-800 hover:bg-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="roomTier"
                          checked={roomTier === tier.id}
                          onChange={() => setRoomTier(tier.id)}
                          className="accent-teal-500"
                        />
                        <span>{tier.name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Optional Add-Ons */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Optional Add-Ons
                </label>
                <div className="space-y-2 text-xs">
                  {Object.keys(addOnPrices).map((key) => (
                    <label
                      key={key}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-800 hover:bg-slate-800 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedAddOns[key]}
                        onChange={(e) =>
                          setSelectedAddOns((prev) => ({
                            ...prev,
                            [key]: e.target.checked
                          }))
                        }
                        className="accent-teal-500 mt-0.5 rounded"
                      />
                      <div className="flex-1">
                        <span className="text-slate-300 font-medium block">{addOnPrices[key].label}</span>
                        <span className="text-[11px] text-teal-400 font-bold">+{formatPrice(addOnPrices[key].price)}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Live Price Breakdown */}
              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Base Fare ({adults} adult{adults > 1 ? 's' : ''})</span>
                  <span className="font-semibold text-white">{formatPrice(baseAdultsTotal)}</span>
                </div>
                {children > 0 && (
                  <div className="flex justify-between">
                    <span>Children ({children})</span>
                    <span className="font-semibold text-white">{formatPrice(baseChildrenTotal)}</span>
                  </div>
                )}
                {roomUpgradeCost > 0 && (
                  <div className="flex justify-between">
                    <span>Room Upgrade</span>
                    <span className="font-semibold text-white">+{formatPrice(roomUpgradeCost)}</span>
                  </div>
                )}
                {addOnsTotal > 0 && (
                  <div className="flex justify-between">
                    <span>Selected Add-ons</span>
                    <span className="font-semibold text-white">+{formatPrice(addOnsTotal)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Taxes &amp; Tourism Fees (8%)</span>
                  <span className="font-semibold text-white">+{formatPrice(estimatedTaxes)}</span>
                </div>

                <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline text-sm">
                  <span className="font-extrabold text-white">Total Calculated:</span>
                  <span className="text-2xl font-extrabold text-teal-300 font-display">
                    {formatPrice(grandTotal)}
                  </span>
                </div>
              </div>

              {/* Proceed to Booking CTA */}
              <button
                onClick={handleProceedToBook}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 font-extrabold py-3.5 rounded-2xl shadow-xl shadow-teal-500/25 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                id="package-proceed-booking-btn"
              >
                <span>Proceed to Book Trip</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>Instant Confirmation &amp; 14-Day Free Cancellation</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Photo Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl p-4 flex flex-col items-center justify-center animate-fade-in">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 p-3 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeImage}
            alt="Fullscreen view"
            className="max-w-4xl max-h-[80vh] object-contain rounded-2xl shadow-2xl"
          />
          <div className="mt-4 flex gap-2">
            {pkg.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumb ${i}`}
                onClick={() => setActiveImage(img)}
                className={`w-16 h-12 object-cover rounded-lg cursor-pointer border-2 ${
                  activeImage === img ? 'border-teal-400' : 'border-transparent opacity-60'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Packing Checklist Modal */}
      <PackingChecklistModal
        isOpen={packingModalOpen}
        onClose={() => setPackingModalOpen(false)}
        destinationName={pkg.destinationName}
        category={pkg.category}
      />

    </div>
  );
}
