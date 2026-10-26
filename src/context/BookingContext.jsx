import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_BOOKINGS, PACKAGES, DESTINATIONS } from '../data/travelData';

const BookingContext = createContext();

const STORAGE_KEY_BOOKINGS = 'wanderluxe_bookings';
const STORAGE_KEY_FAVORITES = 'wanderluxe_favorites';

const CURRENCIES = {
  INR: { symbol: '₹', rate: 85, name: 'INR (₹)' },
  USD: { symbol: '$', rate: 1, name: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, name: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, name: 'GBP (£)' },
  AED: { symbol: 'AED ', rate: 3.67, name: 'AED' }
};

export function BookingProvider({ children }) {
  // Initialize bookings from localStorage or fallback
  const [bookings, setBookings] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_BOOKINGS);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Automatically migrate any legacy mock bookings to Indian names and contacts
        const migrated = parsed.map((b) => {
          if (b.customer?.fullName === 'Alexander Wright' || !b.customer?.fullName) {
            return {
              ...b,
              customer: {
                ...b.customer,
                fullName: 'Rohan Sharma',
                email: 'rohan.sharma@gmail.com',
                phone: '+91 98201 45892',
                country: 'India'
              },
              paymentMethod: 'UPI (rohan@okhdfcbank)'
            };
          }
          if (b.customer?.fullName === 'John Alexander Smith') {
            return {
              ...b,
              customer: {
                ...b.customer,
                fullName: 'Aarav Mehta',
                email: 'aarav.mehta@gmail.com',
                phone: '+91 98112 34567',
                country: 'India'
              },
              paymentMethod: 'NetBanking (HDFC Bank)'
            };
          }
          return b;
        });
        localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(migrated));
        return migrated;
      }
      localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(INITIAL_BOOKINGS));
      return INITIAL_BOOKINGS;
    } catch (err) {
      console.error('Failed to read bookings from localStorage:', err);
      return INITIAL_BOOKINGS;
    }
  });

  // Initialize favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_FAVORITES);
      if (stored) return JSON.parse(stored);
      return ['pkg-1', 'pkg-3']; // initial sample favorites
    } catch (err) {
      return ['pkg-1', 'pkg-3'];
    }
  });

  // Currency selection (Defaults to Indian Rupee INR)
  const [currency, setCurrency] = useState(() => {
    try {
      const saved = localStorage.getItem('wanderluxe_currency');
      return saved || 'INR';
    } catch (e) {
      return 'INR';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('wanderluxe_currency', currency);
    } catch (e) {
      console.error(e);
    }
  }, [currency]);

  // Search state
  const [globalSearch, setGlobalSearch] = useState({
    destination: '',
    category: 'all',
    maxPrice: 3500
  });

  // Toast notifications
  const [toast, setToast] = useState(null);

  // Interactive Modals
  const [isMatcherOpen, setIsMatcherOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Sync bookings
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(bookings));
    } catch (err) {
      console.error('Failed to save bookings:', err);
    }
  }, [bookings]);

  // Sync favorites
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_FAVORITES, JSON.stringify(favorites));
    } catch (err) {
      console.error('Failed to save favorites:', err);
    }
  }, [favorites]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const clearToast = () => {
    setToast(null);
  };

  const addBooking = (newBookingData) => {
    const bookingId = `BK-${Math.floor(10000 + Math.random() * 90000)}`;
    const fullBooking = {
      ...newBookingData,
      id: bookingId,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    setBookings((prev) => [fullBooking, ...prev]);
    showToast(`Booking ${bookingId} confirmed successfully! Have a great trip!`, 'success');
    return fullBooking;
  };

  const cancelBooking = (id) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: 'Cancelled' } : b))
    );
    showToast(`Booking ${id} has been cancelled.`, 'info');
  };

  const deleteBooking = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
    showToast(`Booking record ${id} removed.`, 'info');
  };

  // Toggle favorite / wishlist item
  const toggleFavorite = (id, title = 'Item') => {
    setFavorites((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast(`Removed "${title}" from your Saved Wishlist.`, 'info');
        return prev.filter((item) => item !== id);
      } else {
        showToast(`Saved "${title}" to your Wishlist!`, 'success');
        return [...prev, id];
      }
    });
  };

  const isFavorite = (id) => favorites.includes(id);

  // Price formatter with Indian numbering (en-IN) and currency conversion
  const formatPrice = (usdAmount) => {
    if (usdAmount === undefined || usdAmount === null) return '₹0';
    const curr = CURRENCIES[currency] || CURRENCIES.INR;
    const converted = Math.round(usdAmount * curr.rate);
    const locale = currency === 'INR' ? 'en-IN' : 'en-US';
    return `${curr.symbol}${converted.toLocaleString(locale)}`;
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        cancelBooking,
        deleteBooking,
        favorites,
        toggleFavorite,
        isFavorite,
        currency,
        setCurrency,
        formatPrice,
        currencies: CURRENCIES,
        toast,
        showToast,
        clearToast,
        globalSearch,
        setGlobalSearch,
        isMatcherOpen,
        setIsMatcherOpen,
        isWishlistOpen,
        setIsWishlistOpen
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
