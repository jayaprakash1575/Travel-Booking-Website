import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useBooking } from '../../context/BookingContext';
import { 
  Menu, 
  X, 
  TicketCheck, 
  Globe2, 
  Search, 
  ArrowRight,
  PlaneTakeoff,
  Heart,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { 
    bookings, 
    currency, 
    setCurrency, 
    currencies, 
    favorites, 
    setIsMatcherOpen,
    setIsWishlistOpen 
  } = useBooking();
  const navigate = useNavigate();

  // Active bookings count
  const activeBookingsCount = bookings.filter(b => b.status === 'Confirmed').length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Travel Packages', path: '/destinations?tab=packages' },
    { 
      name: 'My Bookings', 
      path: '/my-bookings', 
      badge: activeBookingsCount > 0 ? activeBookingsCount : null 
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl border-b border-slate-800/90 py-3'
          : 'bg-gradient-to-b from-slate-950 via-slate-950/60 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none"
            id="brand-logo"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 via-teal-400 to-cyan-400 p-0.5 shadow-lg shadow-teal-500/25 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <PlaneTakeoff className="w-5 h-5 text-teal-400 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white font-display flex items-center gap-1">
                Wander<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">Luxe</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 block -mt-1 font-semibold">
                Curated Luxury Journeys
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 relative flex items-center gap-2 ${
                    isActive
                      ? 'text-teal-300 bg-teal-500/15 border border-teal-500/30 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.name}
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-extrabold bg-teal-400 text-slate-950 rounded-full shadow-sm">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Controls (Desktop 1024px+) */}
          <div className="hidden lg:flex items-center gap-2.5">
            
            {/* AI Trip Matcher Button */}
            <button
              onClick={() => setIsMatcherOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20 hover:from-teal-500/30 hover:to-cyan-500/30 border border-teal-500/40 text-teal-300 text-xs font-bold transition-all shadow-sm hover:scale-105"
              id="nav-ai-matcher-btn"
              title="Find your dream vacation with AI"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
              <span>AI Trip Matcher</span>
            </button>

            {/* Wishlist Heart Button */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
              aria-label="View Saved Wishlist"
              id="nav-wishlist-btn"
            >
              <Heart className={`w-4 h-4 ${favorites.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-md">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Currency Selector */}
            <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200">
              <Globe2 className="w-3.5 h-3.5 mr-1.5 text-teal-400" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent border-none text-xs text-white focus:outline-none cursor-pointer pr-1"
                aria-label="Select currency"
                id="currency-select"
              >
                {Object.keys(currencies).map((currKey) => (
                  <option key={currKey} value={currKey} className="bg-slate-950 text-white">
                    {currKey} ({currencies[currKey].symbol})
                  </option>
                ))}
              </select>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => navigate('/destinations')}
              className="bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 font-extrabold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-md shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200 flex items-center gap-1.5 group font-display"
              id="header-explore-btn"
            >
              <span>Explore Trips</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile & Tablet (<1024px) Menu & Wishlist Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative p-2 text-slate-200 hover:text-rose-400"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {favorites.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-[10px] font-bold text-white rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>

            <Link
              to="/my-bookings"
              className="relative p-2 text-slate-200 hover:text-teal-400"
              aria-label="My bookings"
            >
              <TicketCheck className="w-5 h-5" />
              {activeBookingsCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-teal-400 text-[10px] font-bold text-slate-950 rounded-full flex items-center justify-center">
                  {activeBookingsCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-2xl animate-fade-in">
          
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsMatcherOpen(true);
            }}
            className="w-full mb-3 py-2.5 px-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/40 text-teal-300 font-bold rounded-xl text-xs flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>AI Vacation Matcher Quiz</span>
          </button>

          <nav className="flex flex-col gap-1.5 mb-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-teal-500/15 text-teal-300 font-bold border-l-4 border-teal-400'
                      : 'text-slate-200 hover:bg-slate-900 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-teal-400 text-slate-950 rounded-full">
                    {link.badge} active
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-3 border-t border-slate-800">
            {/* Currency switcher for mobile */}
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-300 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-teal-400" /> Currency:
              </span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-xs text-white rounded-lg px-2 py-1 focus:outline-none"
              >
                {Object.keys(currencies).map((currKey) => (
                  <option key={currKey} value={currKey}>
                    {currKey} ({currencies[currKey].symbol})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/destinations');
              }}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 font-extrabold py-3 rounded-xl text-center shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 text-sm"
            >
              <Search className="w-4 h-4" />
              <span>Explore All Destinations</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
