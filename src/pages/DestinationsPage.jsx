import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DESTINATIONS, PACKAGES, CATEGORIES } from '../data/travelData';
import DestinationCard from '../components/destination/DestinationCard';
import PackageCard from '../components/package/PackageCard';
import { useBooking } from '../context/BookingContext';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  X, 
  Grid3X3, 
  List, 
  Sparkles, 
  RotateCcw,
  MapPin,
  ChevronDown,
  Heart
} from 'lucide-react';

export default function DestinationsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { formatPrice, currency, favorites } = useBooking();

  // Read initial query params
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'all';
  const initialTab = searchParams.get('tab') || 'destinations';

  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [maxPrice, setMaxPrice] = useState(3500);
  const [minRating, setMinRating] = useState(0);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get('search')) {
      setSearchTerm(searchParams.get('search'));
    }
    if (searchParams.get('category')) {
      setSelectedCategory(searchParams.get('category'));
    }
    if (searchParams.get('tab')) {
      setActiveTab(searchParams.get('tab'));
    }
  }, [searchParams]);

  const continents = ['all', 'Europe', 'Asia', 'Americas', 'Africa', 'Oceania'];

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedContinent('all');
    setSelectedCategory('all');
    setMaxPrice(3500);
    setMinRating(0);
    setOnlyFavorites(false);
    setSortBy('popular');
    setSearchParams({});
  };

  // Filtered Destinations
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      const matchesSearch =
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesContinent =
        selectedContinent === 'all' || d.continent.toLowerCase() === selectedContinent.toLowerCase();

      const matchesCategory =
        selectedCategory === 'all' ||
        d.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesPrice = d.startingPrice <= maxPrice;
      const matchesRating = d.rating >= minRating;
      const matchesFavorites = !onlyFavorites || favorites.includes(d.id);

      return matchesSearch && matchesContinent && matchesCategory && matchesPrice && matchesRating && matchesFavorites;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.startingPrice - b.startingPrice;
      if (sortBy === 'price-high') return b.startingPrice - a.startingPrice;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });
  }, [searchTerm, selectedContinent, selectedCategory, maxPrice, minRating, onlyFavorites, sortBy, favorites]);

  // Filtered Packages
  const filteredPackages = useMemo(() => {
    return PACKAGES.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.destinationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesContinent =
        selectedContinent === 'all' || p.continent.toLowerCase() === selectedContinent.toLowerCase();

      const matchesCategory =
        selectedCategory === 'all' ||
        p.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesPrice = p.price <= maxPrice;
      const matchesRating = p.rating >= minRating;
      const matchesFavorites = !onlyFavorites || favorites.includes(p.id);

      return matchesSearch && matchesContinent && matchesCategory && matchesPrice && matchesRating && matchesFavorites;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.reviewCount - a.reviewCount;
    });
  }, [searchTerm, selectedContinent, selectedCategory, maxPrice, minRating, onlyFavorites, sortBy, favorites]);

  const activeFiltersCount = [
    searchTerm ? 1 : 0,
    selectedContinent !== 'all' ? 1 : 0,
    selectedCategory !== 'all' ? 1 : 0,
    maxPrice < 3500 ? 1 : 0,
    minRating > 0 ? 1 : 0,
    onlyFavorites ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20">
      
      {/* Page Header Banner */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" /> Curated Global Experiences
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display">
            Explore Destinations &amp; Packages
          </h1>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Filter by continent, travel style, budget, guest rating, and saved wishlist items to discover your dream vacation.
          </p>

          {/* Search Bar inside header */}
          <div className="mt-6 max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by destination name, country, or attraction (e.g. Greece, Safari, Alps)..."
              className="w-full bg-slate-950/90 border border-slate-700 text-white rounded-2xl pl-12 pr-12 py-3.5 text-xs sm:text-sm focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 placeholder:text-slate-500 shadow-inner"
              id="destinations-search-input"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Trending Suggestions */}
          <div className="mt-4 flex items-center gap-2 flex-wrap text-xs text-slate-400">
            <span className="font-semibold text-slate-500">Popular Searches:</span>
            {['Santorini', 'Swiss Alps', 'Bali', 'Kyoto', 'Serengeti', 'Amalfi Coast'].map((dest) => (
              <button
                key={dest}
                onClick={() => setSearchTerm(dest)}
                className="px-3 py-1 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-teal-400 text-slate-300 hover:text-teal-300 transition-colors"
              >
                {dest}
              </button>
            ))}
          </div>

        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mt-8">
        
        {/* Top Controls: Tabs + View Switch + Sort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          
          {/* Tabs: Destinations vs Packages */}
          <div className="flex items-center bg-slate-900 p-1 rounded-2xl border border-slate-800 shadow-sm">
            <button
              onClick={() => setActiveTab('destinations')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'destinations'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 shadow-md shadow-teal-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
              id="tab-destinations-btn"
            >
              Destinations ({filteredDestinations.length})
            </button>
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'packages'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 shadow-md shadow-teal-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
              id="tab-packages-btn"
            >
              Travel Packages ({filteredPackages.length})
            </button>
          </div>

          {/* Right Actions: Mobile Filter Toggle + Sorting + View Switch */}
          <div className="flex items-center justify-between sm:justify-end gap-3">
            
            {/* Wishlist only toggle */}
            <button
              onClick={() => setOnlyFavorites(!onlyFavorites)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                onlyFavorites
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
              title="Show only wishlist items"
            >
              <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span className="hidden sm:inline">Wishlist ({favorites.length})</span>
            </button>

            {/* Mobile Filter Trigger Button */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 shadow-sm"
            >
              <Filter className="w-4 h-4 text-teal-400" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-teal-400 text-slate-950 text-[10px] font-bold flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800 text-xs font-medium text-slate-300 shadow-sm">
              <span className="text-slate-500 hidden sm:inline">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none text-xs font-semibold text-white focus:outline-none cursor-pointer"
                id="destinations-sort-select"
              >
                <option value="popular" className="bg-slate-950">Most Popular</option>
                <option value="rating" className="bg-slate-950">Top Rated</option>
                <option value="price-low" className="bg-slate-950">Price: Low to High</option>
                <option value="price-high" className="bg-slate-950">Price: High to Low</option>
              </select>
            </div>

            {/* View Mode Toggle (Grid vs List) */}
            <div className="hidden sm:flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 shadow-sm">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          
          {/* Sidebar Filters Desktop (and Mobile drawer) */}
          <aside
            className={`lg:col-span-1 lg:block ${
              mobileFilterOpen
                ? 'fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 flex items-center justify-center'
                : 'hidden'
            }`}
          >
            <div className={`bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-xl space-y-6 ${
              mobileFilterOpen ? 'w-full max-w-md max-h-[90vh] overflow-y-auto' : ''
            }`}>
              
              {/* Filter Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-white font-bold font-display text-base">
                  <SlidersHorizontal className="w-4 h-4 text-teal-400" />
                  <span>Filter Options</span>
                </div>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={handleResetFilters}
                    className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </button>
                )}
                {mobileFilterOpen && (
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-white lg:hidden"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Continent Filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Continent
                </label>
                <div className="space-y-1.5">
                  {continents.map((continent) => (
                    <button
                      key={continent}
                      onClick={() => setSelectedContinent(continent)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                        selectedContinent === continent
                          ? 'bg-teal-500/20 text-teal-300 font-bold border border-teal-500/40'
                          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span>{continent === 'all' ? 'All Continents' : continent}</span>
                      {selectedContinent === continent && (
                        <span className="w-2 h-2 rounded-full bg-teal-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Travel Category */}
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Travel Style
                </label>
                <div className="space-y-1.5">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? 'bg-teal-500/20 text-teal-300 font-bold border border-teal-500/40'
                          : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <span>{cat.name}</span>
                      {selectedCategory === cat.id && (
                        <span className="w-2 h-2 rounded-full bg-teal-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Max Budget Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Max Price
                  </label>
                  <span className="text-sm font-extrabold text-teal-400 font-display">
                    {formatPrice(maxPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="3500"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-teal-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  id="filter-price-slider"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>{formatPrice(800)}</span>
                  <span>{formatPrice(3500)}+</span>
                </div>
              </div>

              {/* Minimum Rating */}
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Minimum Guest Rating
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[0, 4.8, 4.9].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className={`py-2 rounded-xl font-bold transition-all border ${
                        minRating === rating
                          ? 'bg-teal-500 text-slate-950 font-extrabold border-teal-400 shadow-sm'
                          : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {rating === 0 ? 'All' : `${rating} ★`}
                    </button>
                  ))}
                </div>
              </div>

              {mobileFilterOpen && (
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 font-bold py-3 rounded-xl text-xs shadow-md mt-4"
                >
                  Show Results
                </button>
              )}

            </div>
          </aside>

          {/* Results Area */}
          <main className="lg:col-span-3">
            
            {/* Active Filters Bar */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs text-slate-500 font-medium">Active Filters:</span>
                {searchTerm && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 border border-slate-700 text-xs font-medium text-slate-300 rounded-full shadow-sm">
                    Search: "{searchTerm}"
                    <button onClick={() => setSearchTerm('')}><X className="w-3 h-3 text-slate-400 hover:text-white" /></button>
                  </span>
                )}
                {selectedContinent !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 border border-slate-700 text-xs font-medium text-slate-300 rounded-full shadow-sm">
                    Continent: {selectedContinent}
                    <button onClick={() => setSelectedContinent('all')}><X className="w-3 h-3 text-slate-400 hover:text-white" /></button>
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 border border-slate-700 text-xs font-medium text-slate-300 rounded-full shadow-sm">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory('all')}><X className="w-3 h-3 text-slate-400 hover:text-white" /></button>
                  </span>
                )}
                {onlyFavorites && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-rose-500/20 border border-rose-500 text-xs font-bold text-rose-300 rounded-full shadow-sm">
                    Wishlist Only
                    <button onClick={() => setOnlyFavorites(false)}><X className="w-3 h-3 text-rose-300 hover:text-white" /></button>
                  </span>
                )}
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-teal-400 font-bold hover:underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Tab 1: Destinations */}
            {activeTab === 'destinations' && (
              <>
                {filteredDestinations.length === 0 ? (
                  <div className="bg-slate-900/80 rounded-3xl p-12 text-center border border-slate-800 shadow-xl">
                    <div className="w-16 h-16 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-display">No Destinations Found</h3>
                    <p className="text-slate-400 text-xs mt-1 max-w-sm mx-auto">
                      We couldn’t find any destinations matching your current search criteria.
                    </p>
                    <button
                      onClick={handleResetFilters}
                      className="mt-6 px-6 py-2.5 bg-teal-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-teal-400 transition-colors shadow-sm"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredDestinations.map((dest) => (
                      <DestinationCard key={dest.id} destination={dest} />
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Tab 2: Packages */}
            {activeTab === 'packages' && (
              <>
                {filteredPackages.length === 0 ? (
                  <div className="bg-slate-900/80 rounded-3xl p-12 text-center border border-slate-800 shadow-xl">
                    <div className="w-16 h-16 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-display">No Travel Packages Found</h3>
                    <p className="text-slate-400 text-xs mt-1 max-w-sm mx-auto">
                      Try adjusting your budget slider or clearing your travel category filter.
                    </p>
                    <button
                      onClick={handleResetFilters}
                      className="mt-6 px-6 py-2.5 bg-teal-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-teal-400 transition-colors shadow-sm"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  <div
                    className={
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                        : 'flex flex-col gap-6'
                    }
                  >
                    {filteredPackages.map((pkg) => (
                      <PackageCard key={pkg.id} pkg={pkg} viewMode={viewMode} />
                    ))}
                  </div>
                )}
              </>
            )}

          </main>

        </div>

      </div>

    </div>
  );
}
