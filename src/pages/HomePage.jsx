import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  DESTINATIONS, 
  PACKAGES, 
  CATEGORIES, 
  TESTIMONIALS,
  COMMUNITY_STORIES,
  TRAVEL_VIBES,
  FEATURED_HOTELS,
  TRAVEL_GUIDES
} from '../data/travelData';
import DestinationCard from '../components/destination/DestinationCard';
import PackageCard from '../components/package/PackageCard';
import LiveWeatherTicker from '../components/home/LiveWeatherTicker';
import { useBooking } from '../context/BookingContext';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Headphones, 
  Award, 
  ArrowRight, 
  Star,
  Quote,
  ChevronRight,
  PlaneTakeoff,
  Clock,
  Compass,
  Heart,
  Plane,
  Flame,
  CheckCircle2,
  SlidersHorizontal,
  ChevronLeft,
  Camera,
  Sailboat,
  Wine,
  Snowflake,
  Mountain,
  Palmtree,
  Sun,
  Waves,
  Landmark,
  Utensils,
  Eye,
  Check,
  Building2,
  BookOpen
} from 'lucide-react';

const HERO_SLIDES = [
  {
    title: 'Santorini Caldera & Sunset Bliss',
    location: 'Santorini, Greece',
    tag: 'Aegean Luxury',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2400&q=90',
    weather: '26°C • Golden Hour'
  },
  {
    title: 'Majestic Swiss Alps & Glacier Rails',
    location: 'Zermatt, Switzerland',
    tag: 'Alpine Grandeur',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2400&q=90',
    weather: '-2°C • Powder Snow'
  },
  {
    title: 'Ubud Jungle Sanctuary & Nusa Penida',
    location: 'Bali, Indonesia',
    tag: 'Tropical Zen',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2400&q=90',
    weather: '29°C • Warm Breeze'
  },
  {
    title: 'Serengeti Migration & Balloon Safari',
    location: 'Serengeti, Tanzania',
    tag: 'Wilderness Icon',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=90',
    weather: '28°C • Savanna Mist'
  }
];

export default function HomePage() {
  const navigate = useNavigate();
  const { formatPrice, setGlobalSearch, setIsMatcherOpen } = useBooking();

  // Hero carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Search Bar State
  const [searchWhere, setSearchWhere] = useState('');
  const [searchCategory, setSearchCategory] = useState('all');
  const [searchTravelers, setSearchTravelers] = useState('2');

  // Selected Category filter for Popular Destinations
  const [activeCategory, setActiveCategory] = useState('all');

  // Auto advance hero slideshow every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleHeroSearch = (e) => {
    e.preventDefault();
    setGlobalSearch({
      destination: searchWhere,
      category: searchCategory,
      maxPrice: 3500
    });
    navigate(`/destinations?search=${encodeURIComponent(searchWhere)}&category=${encodeURIComponent(searchCategory)}`);
  };

  const filteredDestinations = activeCategory === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // Icon mapping helper for community stories
  const renderIconByName = (name) => {
    switch (name) {
      case 'Sailboat': return <Sailboat className="w-3 h-3 text-teal-400" />;
      case 'Wine': return <Wine className="w-3 h-3 text-teal-400" />;
      case 'Camera': return <Camera className="w-3 h-3 text-teal-400" />;
      case 'Mountain': return <Mountain className="w-3 h-3 text-teal-400" />;
      case 'Snowflake': return <Snowflake className="w-3 h-3 text-teal-400" />;
      case 'Utensils': return <Utensils className="w-3 h-3 text-teal-400" />;
      case 'Palmtree': return <Palmtree className="w-3 h-3 text-teal-400" />;
      case 'Sparkles': return <Sparkles className="w-3 h-3 text-teal-400" />;
      case 'Heart': return <Heart className="w-3 h-3 text-rose-400" />;
      case 'Landmark': return <Landmark className="w-3 h-3 text-teal-400" />;
      case 'Compass': return <Compass className="w-3 h-3 text-teal-400" />;
      case 'Sun': return <Sun className="w-3 h-3 text-amber-400" />;
      case 'Waves': return <Waves className="w-3 h-3 text-teal-400" />;
      case 'Flame': return <Flame className="w-3 h-3 text-amber-400" />;
      case 'Building2': return <Building2 className="w-3 h-3 text-teal-400" />;
      case 'BookOpen': return <BookOpen className="w-3 h-3 text-teal-400" />;
      case 'Star': return <Star className="w-3 h-3 fill-amber-400 text-amber-400" />;
      default: return <Sparkles className="w-3 h-3 text-teal-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col overflow-x-hidden w-full">

      {/* Cinematic Edge-to-Edge Hero Section */}
      <section className="relative min-h-[96vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-24 pb-20 w-full">
        
        {/* Background Slides with Crossfade */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>
        ))}

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Content Container - Broad Viewport */}
        <div className="relative z-10 max-w-[1920px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center flex flex-col items-center">
          
          {/* Left Floating Live Escape Card with Overlaid Icons (Visible on Wide Monitors to eliminate blank space) */}
          <div className="hidden xl:flex absolute left-6 2xl:left-12 top-1/2 -translate-y-1/2 flex-col gap-3 w-64 text-left pointer-events-auto z-20">
            <div 
              onClick={() => navigate('/destinations?search=Santorini')} 
              className="group bg-slate-900/85 backdrop-blur-xl p-3 rounded-3xl border border-teal-500/30 hover:border-teal-400 shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer shadow-glow"
            >
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-2.5 bg-slate-950">
                <img 
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80" 
                  alt="Santorini" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                {/* Overlaid Badges on Image */}
                <div className="absolute top-2 left-2 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-teal-300 border border-teal-500/40">
                  <Waves className="w-3 h-3 text-teal-400" />
                  <span>Aegean Bliss</span>
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-white border border-slate-700">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>4.98</span>
                </div>
                <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-teal-300 border border-teal-500/30">
                  <Wine className="w-3 h-3 text-teal-400" />
                  <span>Sunset Tasting</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs px-1">
                <span className="font-bold text-white group-hover:text-teal-300 transition-colors">Santorini Caldera</span>
                <span className="text-teal-400 font-extrabold">{formatPrice(1299)}</span>
              </div>
              <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-1 px-1">
                <Sun className="w-3 h-3 text-amber-400" /> 26°C • Cliff Plunge Pool
              </span>
            </div>
          </div>

          {/* Right Floating Live Escape Card with Overlaid Icons (Visible on Wide Monitors to eliminate blank space) */}
          <div className="hidden xl:flex absolute right-6 2xl:right-12 top-1/2 -translate-y-1/2 flex-col gap-3 w-64 text-left pointer-events-auto z-20">
            <div 
              onClick={() => navigate('/packages/pkg-3')} 
              className="group bg-slate-900/85 backdrop-blur-xl p-3 rounded-3xl border border-teal-500/30 hover:border-teal-400 shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer shadow-glow"
            >
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-2.5 bg-slate-950">
                <img 
                  src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80" 
                  alt="Swiss Alps" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                
                {/* Overlaid Badges on Image */}
                <div className="absolute top-2 left-2 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-teal-300 border border-teal-500/40">
                  <Mountain className="w-3 h-3 text-teal-400" />
                  <span>Glacier Rail</span>
                </div>
                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-600/90 backdrop-blur-md text-[10px] font-bold text-white">
                  <Flame className="w-3 h-3 text-amber-300" />
                  <span>2 Left</span>
                </div>
                <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-cyan-300 border border-cyan-500/30">
                  <Snowflake className="w-3 h-3 text-cyan-400" />
                  <span>Top of Europe</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs px-1">
                <span className="font-bold text-white group-hover:text-teal-300 transition-colors">Swiss Matterhorn</span>
                <span className="text-teal-400 font-extrabold">{formatPrice(2150)}</span>
              </div>
              <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-1 px-1">
                <Snowflake className="w-3 h-3 text-cyan-400" /> -2°C • 1st Class Dome Car
              </span>
            </div>
          </div>

          {/* Live Atmospheric Ticker & AI Matcher Callout */}
          <div className="mb-6 flex flex-col sm:flex-row items-center gap-3">
            <LiveWeatherTicker />
            <button
              onClick={() => setIsMatcherOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal-500/20 hover:bg-teal-500/30 border border-teal-500/40 text-teal-300 text-xs font-bold backdrop-blur-md transition-all shadow-md hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Take AI Travel Matcher Quiz</span>
            </button>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight font-display text-white max-w-5xl leading-[1.05] mb-6 drop-shadow-2xl">
            Extraordinary Escapes. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400">
              Unrivaled Luxury.
            </span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10 font-normal drop-shadow">
            Handcrafted luxury itineraries, private caldera cliff villas, first-class alpine trains, and bucket-list savanna safari expeditions.
          </p>

          {/* Luxury Search Engine Widget with Floating Glow */}
          <div className="w-full max-w-5xl bg-slate-900/90 backdrop-blur-2xl p-4 sm:p-5 rounded-3xl shadow-2xl border border-teal-500/40 text-white shadow-glow">
            <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              
              {/* Destination Input */}
              <div className="p-3.5 bg-slate-800/90 hover:bg-slate-800 rounded-2xl border border-slate-700/80 transition-colors">
                <label className="text-[10px] font-extrabold text-teal-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Destination
                </label>
                <input
                  type="text"
                  value={searchWhere}
                  onChange={(e) => setSearchWhere(e.target.value)}
                  placeholder="Where to? (e.g. Bali, Swiss...)"
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-white placeholder:text-slate-400 focus:outline-none"
                  id="hero-search-destination"
                />
              </div>

              {/* Travel Style */}
              <div className="p-3.5 bg-slate-800/90 hover:bg-slate-800 rounded-2xl border border-slate-700/80 transition-colors">
                <label className="text-[10px] font-extrabold text-teal-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5" /> Travel Style
                </label>
                <select
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-white focus:outline-none cursor-pointer"
                  id="hero-search-category"
                >
                  <option value="all" className="bg-slate-950 text-white">All Experiences</option>
                  <option value="Beach & Island" className="bg-slate-950 text-white">Beach &amp; Island</option>
                  <option value="Mountain Adventure" className="bg-slate-950 text-white">Alpine &amp; Mountain</option>
                  <option value="Cultural Heritage" className="bg-slate-950 text-white">Cultural &amp; Heritage</option>
                  <option value="Wildlife Safari" className="bg-slate-950 text-white">Wildlife Safari</option>
                </select>
              </div>

              {/* Guests */}
              <div className="p-3.5 bg-slate-800/90 hover:bg-slate-800 rounded-2xl border border-slate-700/80 transition-colors">
                <label className="text-[10px] font-extrabold text-teal-400 uppercase tracking-wider block mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> Guests
                </label>
                <select
                  value={searchTravelers}
                  onChange={(e) => setSearchTravelers(e.target.value)}
                  className="w-full bg-transparent text-xs sm:text-sm font-semibold text-white focus:outline-none cursor-pointer"
                  id="hero-search-guests"
                >
                  <option value="1" className="bg-slate-950 text-white">1 Solo Explorer</option>
                  <option value="2" className="bg-slate-950 text-white">2 Guests (Couple)</option>
                  <option value="3" className="bg-slate-950 text-white">3 - 4 Guests (Family)</option>
                  <option value="5" className="bg-slate-950 text-white">5+ VIP Group</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex items-center">
                <button
                  type="submit"
                  className="w-full h-full min-h-[54px] bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 font-extrabold rounded-2xl text-xs sm:text-sm shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all flex items-center justify-center gap-2 font-display cursor-pointer"
                  id="hero-submit-search"
                >
                  <Search className="w-4 h-4 stroke-[2.5]" />
                  <span>Discover Journeys</span>
                </button>
              </div>

            </form>
          </div>

          {/* Slide Indicator Switcher Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all ${
                  currentSlide === index
                    ? 'bg-teal-400 text-slate-950 font-extrabold shadow-lg shadow-teal-500/40 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                <span>{slide.tag}</span>
              </button>
            ))}
          </div>

        </div>

      </section>

      {/* Trust Stats Bar - Expansive */}
      <section className="bg-slate-900/90 text-white border-y border-slate-800 py-8 relative w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-3 border-r border-slate-800 last:border-none">
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 font-display">
                15,000+
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Discerning Happy Travelers</div>
            </div>
            <div className="p-3 border-r border-slate-800 last:border-none">
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 font-display">
                99.4%
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">5-Star Verified Guest Rating</div>
            </div>
            <div className="p-3 border-r border-slate-800 last:border-none">
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 font-display">
                100%
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Verified 5-Star Partner Stays</div>
            </div>
            <div className="p-3">
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 font-display">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Personal VIP Concierge Desk</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Curated Travel Vibes - Visual Cards with Overlaid Icons */}
      <section className="py-20 max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Curated Travel Vibes
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
              Choose Your Signature Escape
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
              Immerse yourself in handpicked luxury styles with private villas, yachts, and helicopter tours.
            </p>
          </div>

          <button
            onClick={() => setIsMatcherOpen(true)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-400 hover:text-teal-300 hover:underline"
          >
            <span>Match Your Vibe with AI</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5-Column Grid on Wide Screens to fill all blank space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TRAVEL_VIBES.map((vibe) => (
            <div
              key={vibe.id}
              onClick={() => navigate('/destinations')}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer border border-slate-800 hover:border-teal-400/60 shadow-xl hover:shadow-glow transition-all duration-500 flex flex-col justify-between p-6 bg-slate-900"
            >
              {/* Background Photo with Dark Gradient */}
              <img
                src={vibe.image}
                alt={vibe.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />

              {/* Top Overlaid Icon Pills */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-teal-300 border border-teal-500/30">
                  {vibe.tag}
                </span>

                <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-slate-950/70 backdrop-blur-md">
                  {vibe.overlayIcons.map((icName, idx) => (
                    <span key={idx} className="p-1 rounded-full bg-slate-900/80">
                      {renderIconByName(icName)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 space-y-2">
                <span className="text-[11px] font-bold text-teal-300 block uppercase tracking-wider">
                  {vibe.destination}
                </span>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors leading-snug">
                  {vibe.title}
                </h3>

                {/* Highlights with Checkmarks */}
                <ul className="space-y-1 pt-1 text-[11px] text-slate-300">
                  {vibe.activityHighlights.map((act, i) => (
                    <li key={i} className="flex items-center gap-1.5 line-clamp-1">
                      <Check className="w-3 h-3 text-teal-400 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex items-center text-xs font-bold text-teal-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Vibe</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Global Destinations Section - 4 Columns on Wide Screens */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" /> Handpicked Global Wonders
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
                Iconic Worldwide Destinations
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
                Explore handpicked boutique cave suites, mountain chalets, and private islands with overlaid activity previews.
              </p>
            </div>

            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-400 hover:text-teal-300 hover:underline"
            >
              <span>View All 10 Destinations</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 shadow-md shadow-teal-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Destinations Grid: 4 columns on large screens to fill all blank space */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>

        </div>
      </section>

      {/* Featured Travel Packages Section with Overlaid Image Badges */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/80 relative w-full">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold mb-2">
                <Award className="w-3.5 h-3.5" /> Curated All-Inclusive Itineraries
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
                Top Rated Travel Packages
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
                All-inclusive itineraries featuring 5-star partner accommodations, private yacht charters, first-class trains, and personal guides.
              </p>
            </div>

            <Link
              to="/destinations?tab=packages"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-400 hover:text-teal-300"
            >
              <span>Explore All {PACKAGES.length} Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Signature 5-Star Luxury Partner Villas & Suites with Overlaid Icons */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/80 w-full relative">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold mb-2">
                <Building2 className="w-3.5 h-3.5" /> Handpicked 5-Star Partner Stays
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
                Iconic Villas &amp; Mountain Sanctuaries
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
                Every stay verified for private infinity plunge pools, dedicated butler service, and Michelin-starred dining.
              </p>
            </div>

            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-400 hover:text-teal-300"
            >
              <span>Explore All Verified Stays</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {FEATURED_HOTELS.map((hotel) => (
              <div
                key={hotel.id}
                onClick={() => navigate('/destinations')}
                className="group relative bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 hover:border-teal-400/50 shadow-xl hover:shadow-glow transition-all duration-500 flex flex-col cursor-pointer backdrop-blur-md"
              >
                {/* Photo with Overlaid Icons */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/85 backdrop-blur-md text-teal-300 border border-teal-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-teal-400" />
                      {hotel.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-950/85 backdrop-blur-md text-white flex items-center gap-1 border border-slate-800">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      {hotel.rating}
                    </span>
                  </div>

                  {/* Overlaid Feature Icons Strip Directly ON THE IMAGE */}
                  <div className="absolute top-12 left-3.5 flex flex-col gap-1.5 z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
                    {hotel.overlayIcons.map((ic, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700/60 shadow-sm"
                      >
                        {renderIconByName(ic.name)}
                        <span>{ic.label}</span>
                      </span>
                    ))}
                  </div>

                  {/* Overlay Badge Pill */}
                  <div className="absolute bottom-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-xl text-xs font-bold bg-slate-950/90 backdrop-blur-md text-teal-300 border border-teal-500/40">
                      {hotel.overlayBadge}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-teal-400 font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" /> {hotel.destination}
                    </div>
                    <h3 className="text-xl font-bold text-white font-display group-hover:text-teal-300 transition-colors">
                      {hotel.name}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mt-3">
                      {hotel.highlights.map((h, i) => (
                        <span key={i} className="text-[11px] bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded-lg border border-slate-700/60 flex items-center gap-1">
                          <Check className="w-3 h-3 text-teal-400" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">From</span>
                      <span className="text-lg font-black text-white font-display">{formatPrice(hotel.pricePerNight)}</span>
                      <span className="text-[11px] text-slate-400 font-normal"> / night</span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-400 group-hover:translate-x-1 transition-transform">
                      <span>View Villa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Traveler Community Photo Wall ("Live From WanderLuxe Journeys") */}
      <section className="py-20 bg-slate-900/50 border-t border-slate-800/80 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold mb-2">
                <Camera className="w-3.5 h-3.5" /> Real Moments From The Field
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
                Live From WanderLuxe Journeys
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
                Unfiltered captures and traveler moments from our private caldera suites, Swiss glacier peaks, and savanna bush flights.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <span>Updated Hourly by Global Travelers</span>
            </div>
          </div>

          {/* 6-Card Photo Masonry Grid with OVERLAID ICONS ON IMAGES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMUNITY_STORIES.map((story) => (
              <div
                key={story.id}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800 shadow-xl hover:border-teal-400/50 transition-all duration-500 cursor-pointer"
              >
                {/* Photo */}
                <img
                  src={story.image}
                  alt={story.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/10" />

                {/* Overlaid Badges Directly on Image */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700">
                    <img
                      src={story.avatar}
                      alt={story.traveler}
                      className="w-6 h-6 rounded-full object-cover ring-1 ring-teal-400"
                    />
                    <div>
                      <span className="text-xs font-bold text-white block leading-tight">{story.traveler}</span>
                      <span className="text-[10px] text-teal-300 font-mono block leading-none">{story.handle}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-950/80 backdrop-blur-md text-rose-400 border border-slate-700">
                    <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                    <span>{story.likes}</span>
                  </span>
                </div>

                {/* Overlaid Activity Icons on Image */}
                <div className="absolute top-14 left-3.5 flex flex-wrap gap-1.5 z-10">
                  {story.overlayIcons.map((ic, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-950/85 backdrop-blur-md text-slate-200 border border-slate-700/60 shadow-sm"
                    >
                      {renderIconByName(ic.name)}
                      <span>{ic.label}</span>
                    </span>
                  ))}
                </div>

                {/* Bottom Caption & Location on Image */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                  <div className="flex items-center gap-1 text-[11px] text-teal-400 font-bold mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{story.location}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-200 line-clamp-2 leading-relaxed">
                    "{story.caption}"
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Curated Editorial Guides & Bucket List Insights with Overlaid Icons */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" /> WanderLuxe Field Guides
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
                Curated Travel Guides &amp; Secrets
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
                Deep-dive itineraries written by our on-the-ground regional directors, sommeliers, and safari naturalists.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Updated for 2026 Expeditions</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRAVEL_GUIDES.map((guide) => (
              <div
                key={guide.id}
                onClick={() => navigate('/destinations')}
                className="group relative bg-slate-900/90 rounded-3xl overflow-hidden border border-slate-800 hover:border-teal-400/50 shadow-xl hover:shadow-glow transition-all duration-500 flex flex-col cursor-pointer backdrop-blur-md"
              >
                {/* Photo with Overlaid Icons */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/85 backdrop-blur-md text-teal-300 border border-teal-500/30">
                      {guide.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/85 backdrop-blur-md text-slate-200 border border-slate-700 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-teal-400" />
                      {guide.readTime}
                    </span>
                  </div>

                  {/* Overlaid Activity Icons Directly ON THE IMAGE */}
                  <div className="absolute top-11 left-3.5 flex flex-wrap gap-1.5 z-10 pointer-events-none">
                    {guide.overlayIcons.map((ic, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700/60"
                      >
                        {renderIconByName(ic.name)}
                        <span>{ic.label}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-white font-display group-hover:text-teal-300 transition-colors line-clamp-2 leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {guide.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
                    <img
                      src={guide.authorAvatar}
                      alt={guide.author}
                      className="w-8 h-8 rounded-full object-cover ring-1 ring-teal-400"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-bold text-white truncate block">{guide.author}</span>
                      <span className="text-[10px] text-teal-400 truncate block">{guide.authorRole}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose WanderLuxe with Photographic Backdrops */}
      <section className="py-20 bg-slate-950 max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-teal-400 block mb-2">
            The WanderLuxe Difference
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
            Why Discerning Travelers Choose Us
          </h2>
          <p className="mt-4 text-slate-400 text-xs sm:text-sm leading-relaxed">
            We replace standard travel booking stress with curated luxury villas, transparent pricing, and unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: '100% Inspected Stays',
              desc: 'Every cave suite, ryokan, and safari lodge is physically verified by our travel directors.',
              image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80',
              icon: Building2,
              badge: '5-Star Verified'
            },
            {
              title: 'Private Chauffeur & Rail',
              desc: 'First-Class Swiss Glacier Express dome cars and Mercedes airport transfers included in every booking.',
              image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80',
              icon: PlaneTakeoff,
              badge: 'VIP Transit'
            },
            {
              title: 'Transparent Pricing',
              desc: 'Zero hidden resort fees or surprise charges. Live currency conversion and itemized breakdowns.',
              image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80',
              icon: Award,
              badge: 'Best Price Promise'
            },
            {
              title: '24/7 Dedicated Concierge',
              desc: 'Direct line to our luxury desk for last-minute Michelin tables, yacht charters, and date changes.',
              image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80',
              icon: Headphones,
              badge: 'Personal Desk'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] border border-slate-800 shadow-xl flex flex-col justify-between p-6 bg-slate-900"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />

                {/* Overlaid Badges */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-slate-950/80 backdrop-blur-md text-teal-400 border border-teal-500/40 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-teal-300 border border-slate-700">
                    {item.badge}
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-display text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Verified Traveler Testimonials */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-widest text-teal-400 block mb-2">
              Verified Traveler Testimonials
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display">
              Loved by Discerning Explorers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-slate-900/85 rounded-3xl p-7 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-teal-400/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-teal-500/40"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-[11px] text-slate-400">{t.role}</p>
                    <span className="text-[11px] font-semibold text-teal-400 block mt-0.5">
                      {t.trip}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Callout Banner with Glowing Gradient */}
      <section className="mb-20 max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full mt-10">
        <div className="relative overflow-hidden bg-gradient-to-r from-teal-900/90 via-slate-900 to-cyan-950/90 border border-teal-500/30 rounded-3xl p-8 sm:p-14 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="px-3.5 py-1 bg-teal-500/20 text-teal-300 border border-teal-500/40 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
              Limited Promotional Offer
            </span>
            <h3 className="text-3xl sm:text-5xl font-black font-display">
              Ready to Escape the Ordinary?
            </h3>
            <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
              Use VIP code <span className="font-mono font-bold bg-teal-950 px-2.5 py-1 rounded text-teal-300 border border-teal-500/40 text-sm">WANDER20</span> at checkout to unlock 20% off all packages this season.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 relative z-10 shrink-0">
            <button
              onClick={() => setIsMatcherOpen(true)}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-4 rounded-2xl text-xs sm:text-sm border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>AI Trip Matcher</span>
            </button>
            <button
              onClick={() => navigate('/destinations')}
              className="bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 font-extrabold px-8 py-4 rounded-2xl text-xs sm:text-sm shadow-xl shadow-teal-500/30 transition-transform hover:scale-105"
            >
              Explore Destinations
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
