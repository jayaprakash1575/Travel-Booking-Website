# WanderLuxe - Complete Source Code Repository

> **Project Name**: WanderLuxe (Luxury Travel & Adventure Booking Platform)  
> **Framework**: React 18 (Vite) + Tailwind CSS + Lucide React + React Router DOM v6  
> **Currency & Locale**: INR (`₹`), Indian number formatting (`en-IN`), UPI & NetBanking checkout  
> **Generated Date**: 2026-10-26T12:45:07.962Z  
> **Total Files Compiled**: 26 files  

---

## 📋 Table of Contents

### 1. Project Overview & Quick Start
- [Project Architecture](#-project-architecture)
- [Directory Structure](#-directory-structure)
- [How to Run the Application](#-how-to-run-the-application)

### 2. Source Code Files

#### Configuration & Dependencies
- [package.json](#package-json) — *Project dependencies, scripts, and build configurations.*
- [vite.config.js](#vite-config-js) — *Vite build tool and React plugin configuration.*
- [tailwind.config.js](#tailwind-config-js) — *Tailwind CSS design tokens, custom colors, animations, and typography.*
- [postcss.config.js](#postcss-config-js) — *PostCSS configuration for Tailwind and Autoprefixer.*
- [index.html](#index-html) — *HTML entry point with Google Fonts (Outfit & Plus Jakarta Sans) and metadata.*

#### Documentation
- [README.md](#readme-md) — *Project documentation and overview.*

#### Core Application Structure
- [src/main.jsx](#src-main-jsx) — *React 18 entry point with BrowserRouter mount.*
- [src/App.jsx](#src-app-jsx) — *Main application router, global layout, toasts, wishlist drawer, and AI matcher modal.*

#### Styling & Design System
- [src/index.css](#src-index-css) — *Global CSS styles, Tailwind directives, custom scrollbars, and keyframe animations.*
- [src/App.css](#src-app-css) — *Additional component styles and utilities.*

#### State Management & Storage
- [src/context/BookingContext.jsx](#src-context-bookingcontext-jsx) — *Central React Context for bookings, localStorage persistence, currency exchange (INR default), wishlist, and toast notifications.*

#### Mock Datasets
- [src/data/travelData.js](#src-data-traveldata-js) — *Comprehensive mock data: destinations, curated travel packages, reviews, hotels, guides, and vibes.*

#### Common Components & Navigation
- [src/components/common/Navbar.jsx](#src-components-common-navbar-jsx) — *Responsive navbar with mobile/tab drawer, AI Matcher trigger, wishlist counter, active bookings badge, and currency selector.*
- [src/components/common/Footer.jsx](#src-components-common-footer-jsx) — *Luxury footer with trust badges, Indian contact numbers (+91), Mumbai/Bengaluru hubs, newsletter, and links.*
- [src/components/common/Toast.jsx](#src-components-common-toast-jsx) — *Floating notification toast for booking actions, wishlist updates, and alerts.*
- [src/components/common/WishlistDrawer.jsx](#src-components-common-wishlistdrawer-jsx) — *Slide-out drawer displaying favorited destinations and packages with quick book links.*
- [src/components/common/TripMatcherModal.jsx](#src-components-common-tripmatchermodal-jsx) — *Interactive 3-question AI travel quiz that recommends tailor-made packages.*

#### Feature Components
- [src/components/home/LiveWeatherTicker.jsx](#src-components-home-liveweatherticker-jsx) — *Live atmospheric weather ticker displaying real-time weather at luxury destinations.*
- [src/components/destination/DestinationCard.jsx](#src-components-destination-destinationcard-jsx) — *Card component for destinations with overlaid icons, wishlist button, and rating badges.*
- [src/components/package/PackageCard.jsx](#src-components-package-packagecard-jsx) — *Package card with photo gallery, itinerary preview, inclusions, price, and booking CTA.*
- [src/components/package/PackingChecklistModal.jsx](#src-components-package-packingchecklistmodal-jsx) — *Interactive packing checklist modal with weather-specific recommendations and checklist items.*

#### Application Pages
- [src/pages/HomePage.jsx](#src-pages-homepage-jsx) — *Homepage with cinematic hero carousel, search widget, trust stats, curated travel vibes, popular destinations, and community stories.*
- [src/pages/DestinationsPage.jsx](#src-pages-destinationspage-jsx) — *Destinations and packages catalog with multi-facet filters (continent, style, price range, rating), tabs, and sorting.*
- [src/pages/PackageDetailPage.jsx](#src-pages-packagedetailpage-jsx) — *Comprehensive package detail page with photo gallery, day-by-day itinerary, hotel stays, inclusions, reviews, and sticky price calculator.*
- [src/pages/BookingPage.jsx](#src-pages-bookingpage-jsx) — *Reservation and checkout page with validation, traveler form, room tiers, add-ons, promo codes, and Indian payment options (UPI, QR, RuPay, NetBanking).*
- [src/pages/MyBookingsPage.jsx](#src-pages-mybookingspage-jsx) — *My Bookings page synced with localStorage, status filtering, booking cancellation, and printable digital boarding passes.*

---

## 🏗️ Project Architecture

WanderLuxe is built as a Single Page Application (SPA) utilizing:
- **React 18 & Vite**: Lightning-fast HMR and modular bundling.
- **React Context API (`BookingContext.jsx`)**: Global state management syncing bookings, wishlist, currency conversion, and search queries with `localStorage`.
- **Tailwind CSS**: Custom dark luxury design system with glassmorphism, glowing borders, vibrant teal/cyan gradients, and responsive breakpoints.
- **Lucide React**: Vector iconography overlaid on hero images and action buttons.
- **Local Indian Localization**: Default Indian Rupee (`₹`), Indian passenger profiles, WhatsApp/Toll-Free support, and UPI/QR checkout.

---

## 📁 Directory Structure

```text
Travel Booking Website using React JS/
├── index.html                     # HTML5 entry with Outfit & Plus Jakarta Sans Google fonts
├── package.json                   # Project scripts and dependencies
├── vite.config.js                 # Vite bundler config with @vitejs/plugin-react
├── tailwind.config.js             # Tailwind design tokens, animations, and colors
├── postcss.config.js              # PostCSS plugins
├── src/
│   ├── main.jsx                   # React root render
│   ├── App.jsx                    # Route switch & persistent overlay modals
│   ├── index.css                  # Tailwind directives and custom animation classes
│   ├── App.css                    # Component utilities
│   ├── context/
│   │   └── BookingContext.jsx     # Global state (Bookings, Wishlist, Currency, Toast)
│   ├── data/
│   │   └── travelData.js          # Mock database (Destinations, Packages, Reviews, Vibes)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx         # Header & mobile/tablet responsive drawer
│   │   │   ├── Footer.jsx         # Footer with India hubs and contact
│   │   │   ├── Toast.jsx          # Notification alert banner
│   │   │   ├── WishlistDrawer.jsx # Slide-out saved destinations panel
│   │   │   └── TripMatcherModal.jsx # Interactive 3-step AI vacation quiz
│   │   ├── destination/
│   │   │   └── DestinationCard.jsx# Interactive destination card with badges
│   │   ├── home/
│   │   │   └── LiveWeatherTicker.jsx # Live weather feed ticker
│   │   └── package/
│   │       ├── PackageCard.jsx    # Package card with inclusions & pricing
│   │       └── PackingChecklistModal.jsx # Dynamic packing checklist
│   └── pages/
│       ├── HomePage.jsx           # Hero, search bar, vibes, stats & testimonials
│       ├── DestinationsPage.jsx   # Search & filter engine with tabs & sliders
│       ├── PackageDetailPage.jsx  # Gallery, day-by-day itinerary & sticky calculator
│       ├── BookingPage.jsx        # Multi-step checkout with UPI & netbanking
│       └── MyBookingsPage.jsx     # Bookings dashboard with printable boarding passes
└── COMPLETE_SOURCE_CODE.md        # Consolidated full source code documentation
```

---

## 🚀 How to Run the Application

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Open browser at:
# http://localhost:5173/

# 4. Build for production
npm run build
```

---

# 📄 Complete Source Code Files


<a id="package-json"></a>
## File: `package.json`

**Category**: Configuration & Dependencies  
**Description**: Project dependencies, scripts, and build configurations.  
**Lines**: 1 | **Size**: 0.66 KB  

```json
{
  "name": "travel-booking-website-using-react-js",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "canvas-confetti": "^1.9.4",
    "lucide-react": "^1.61.0",
    "react": "^19.3.1",
    "react-dom": "^19.3.1",
    "react-router-dom": "^7.18.4"
  },
  "devDependencies": {
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "@vitejs/plugin-react": "^6.1.2",
    "autoprefixer": "^10.6.1",
    "oxlint": "^1.88.0",
    "postcss": "^8.5.31",
    "tailwindcss": "^3.4.17",
    "vite": "^8.3.4"
  }
}
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="vite-config-js"></a>
## File: `vite.config.js`

**Category**: Configuration & Dependencies  
**Description**: Vite build tool and React plugin configuration.  
**Lines**: 1 | **Size**: 0.16 KB  

```javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="tailwind-config-js"></a>
## File: `tailwind.config.js`

**Category**: Configuration & Dependencies  
**Description**: Tailwind CSS design tokens, custom colors, animations, and typography.  
**Lines**: 1 | **Size**: 2.29 KB  

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        gold: {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        },
        navy: {
          800: '#0f172a',
          900: '#0b1120',
          950: '#060911',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glass-hover': '0 20px 50px 0 rgba(13, 148, 136, 0.22)',
        'glow': '0 0 35px -5px rgba(20, 184, 166, 0.5)',
        'glow-gold': '0 0 30px -5px rgba(234, 179, 8, 0.45)',
        'glow-rose': '0 0 30px -5px rgba(244, 63, 94, 0.45)',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      }
    },
  },
  plugins: [],
}
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="postcss-config-js"></a>
## File: `postcss.config.js`

**Category**: Configuration & Dependencies  
**Description**: PostCSS configuration for Tailwind and Autoprefixer.  
**Lines**: 1 | **Size**: 0.08 KB  

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="index-html"></a>
## File: `index.html`

**Category**: Configuration & Dependencies  
**Description**: HTML entry point with Google Fonts (Outfit & Plus Jakarta Sans) and metadata.  
**Lines**: 1 | **Size**: 1.14 KB  

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✈️</text></svg>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WanderLuxe - Premium Travel &amp; Adventure Booking</title>
    <meta name="description" content="Discover handpicked world destinations, curated luxury travel packages, and seamless booking with WanderLuxe.">
    <!-- Google Fonts: Plus Jakarta Sans & Outfit -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet">
  </head>
  <body class="bg-slate-50 text-slate-800 antialiased font-sans selection:bg-teal-500 selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="readme-md"></a>
## File: `README.md`

**Category**: Documentation  
**Description**: Project documentation and overview.  
**Lines**: 1 | **Size**: 0.99 KB  

```markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-main-jsx"></a>
## File: `src/main.jsx`

**Category**: Core Application Structure  
**Description**: React 18 entry point with BrowserRouter mount.  
**Lines**: 1 | **Size**: 0.22 KB  

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-app-jsx"></a>
## File: `src/App.jsx`

**Category**: Core Application Structure  
**Description**: Main application router, global layout, toasts, wishlist drawer, and AI matcher modal.  
**Lines**: 1 | **Size**: 2.01 KB  

```jsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Toast from './components/common/Toast';
import TripMatcherModal from './components/common/TripMatcherModal';
import WishlistDrawer from './components/common/WishlistDrawer';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import PackageDetailPage from './pages/PackageDetailPage';
import BookingPage from './pages/BookingPage';
import MyBookingsPage from './pages/MyBookingsPage';
import './App.css';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
          <Navbar />
          <Toast />
          <TripMatcherModal />
          <WishlistDrawer />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/packages" element={<DestinationsPage />} />
              <Route path="/packages/:id" element={<PackageDetailPage />} />
              <Route path="/book/:id" element={<BookingPage />} />
              <Route path="/book" element={<BookingPage />} />
              <Route path="/my-bookings" element={<MyBookingsPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </BookingProvider>
  );
}
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-index-css"></a>
## File: `src/index.css`

**Category**: Styling & Design System  
**Description**: Global CSS styles, Tailwind directives, custom scrollbars, and keyframe animations.  
**Lines**: 1 | **Size**: 1.97 KB  

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-slate-950 text-slate-100 antialiased font-sans selection:bg-teal-500 selection:text-white min-h-screen overflow-x-hidden;
  }
}

@layer utilities {
  .text-shadow {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }
  .text-shadow-lg {
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  }
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400;
  }
  .text-gradient-gold {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400;
  }
  .glass {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .glass-card {
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  .glass-card-hover {
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .glass-card-hover:hover {
    background: rgba(15, 23, 42, 0.9);
    border-color: rgba(20, 184, 166, 0.4);
    box-shadow: 0 20px 45px -10px rgba(13, 148, 136, 0.25);
    transform: translateY(-4px);
  }
  .bg-radial-mesh {
    background-image: 
      radial-gradient(at 0% 0%, rgba(20, 184, 166, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(56, 189, 248, 0.12) 0px, transparent 50%),
      radial-gradient(at 50% 50%, rgba(99, 102, 241, 0.08) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(245, 158, 11, 0.08) 0px, transparent 50%);
  }
}

/* Custom luxury scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #0b1120;
}
::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 9999px;
  border: 2px solid #0b1120;
}
::-webkit-scrollbar-thumb:hover {
  background: #0d9488;
}
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-app-css"></a>
## File: `src/App.css`

**Category**: Styling & Design System  
**Description**: Additional component styles and utilities.  
**Lines**: 1 | **Size**: 0.39 KB  

```css
/* Custom animations and base overrides */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.05); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-glow {
  animation: pulseGlow 3s ease-in-out infinite;
}
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-context-bookingcontext-jsx"></a>
## File: `src/context/BookingContext.jsx`

**Category**: State Management & Storage  
**Description**: Central React Context for bookings, localStorage persistence, currency exchange (INR default), wishlist, and toast notifications.  
**Lines**: 1 | **Size**: 6.41 KB  

```jsx
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
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-data-traveldata-js"></a>
## File: `src/data/travelData.js`

**Category**: Mock Datasets  
**Description**: Comprehensive mock data: destinations, curated travel packages, reviews, hotels, guides, and vibes.  
**Lines**: 1 | **Size**: 67.42 KB  

```javascript
// Mock Data for WanderLuxe Travel Booking Application

export const DESTINATIONS = [
  {
    id: 'dest-1',
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    category: 'Beach & Island',
    tag: 'Romantic Getaway',
    rating: 4.9,
    reviewCount: 342,
    startingPrice: 1299,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    description: 'Iconic whitewashed cliffside villages, azure dome churches, and breathtaking Aegean Sea sunsets.',
    highlights: ['Oia Sunset Cruise', 'Caldera Wine Tasting', 'Red Beach Exploration', 'Traditional Greek Taverns'],
    climate: 'Sunny Mediterranean (24°C - 30°C)',
    bestSeason: 'May - October',
  },
  {
    id: 'dest-2',
    name: 'Bali & Nusa Islands',
    country: 'Indonesia',
    continent: 'Asia',
    category: 'Tropical Paradise',
    tag: 'Trending Now',
    rating: 4.85,
    reviewCount: 428,
    startingPrice: 899,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    description: 'Lush emerald rice terraces, spiritual ancient temples, sacred monkey forests, and tranquil surf beaches.',
    highlights: ['Ubud Jungle Swings', 'Uluwatu Sunset Temple', 'Nusa Penida Kelingking Beach', 'Balinese Spa Rituals'],
    climate: 'Tropical Warm (27°C - 31°C)',
    bestSeason: 'April - October',
  },
  {
    id: 'dest-3',
    name: 'Swiss Alps (Zermatt & Interlaken)',
    country: 'Switzerland',
    continent: 'Europe',
    category: 'Mountain Adventure',
    tag: 'Top Rated',
    rating: 4.95,
    reviewCount: 512,
    startingPrice: 1850,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    description: 'Majestic snow-capped peaks, alpine cogwheel trains, glacier lagoons, and charming wooden chalets.',
    highlights: ['Matterhorn Viewpoint', 'Jungfraujoch Top of Europe', 'Lake Brienz Cruise', 'Swiss Chocolate & Fondue Tour'],
    climate: 'Alpine Crisp (12°C - 22°C)',
    bestSeason: 'Year Round',
  },
  {
    id: 'dest-4',
    name: 'Kyoto & Tokyo Blossom',
    country: 'Japan',
    continent: 'Asia',
    category: 'Cultural Heritage',
    tag: 'Cultural Wonder',
    rating: 4.92,
    reviewCount: 389,
    startingPrice: 1650,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    description: 'Ancient Shinto shrines, serene Zen bamboo groves, traditional tea ceremonies, and neon metropolis wonder.',
    highlights: ['Fushimi Inari 10,000 Torii Gates', 'Arashiyama Bamboo Forest', 'Gion Geisha District', 'Tokyo Skytree & Shibuya'],
    climate: 'Temperate (15°C - 24°C)',
    bestSeason: 'March - May & Sept - Nov',
  },
  {
    id: 'dest-5',
    name: 'Amalfi Coast & Positano',
    country: 'Italy',
    continent: 'Europe',
    category: 'Luxury Coastal',
    tag: 'Celebrity Choice',
    rating: 4.88,
    reviewCount: 295,
    startingPrice: 1750,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    description: 'Dramatic pastel cliffside towns hanging over cobalt waters, scented lemon groves, and vintage yachts.',
    highlights: ['Capri Island Speedboat Tour', 'Positano Cliffside Dining', 'Ravello Villa Rufolo Gardens', 'Limoncello Workshop'],
    climate: 'Mediterranean Sun (22°C - 29°C)',
    bestSeason: 'May - September',
  },
  {
    id: 'dest-6',
    name: 'Serengeti Safari & Ngorongoro',
    country: 'Tanzania',
    continent: 'Africa',
    category: 'Wildlife Safari',
    tag: 'Ultimate Safari',
    rating: 4.98,
    reviewCount: 215,
    startingPrice: 2450,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    description: 'The great wildlife migration, majestic Big Five game drives, luxury tented bush camps, and Maasai culture.',
    highlights: ['Serengeti Sunrise Hot Air Balloon', 'Ngorongoro Crater Game Drive', 'Big 5 Tracking', 'Maasai Boma Cultural Visit'],
    climate: 'Warm Savanna (18°C - 28°C)',
    bestSeason: 'June - October & Jan - Feb',
  },
  {
    id: 'dest-7',
    name: 'Machu Picchu & Sacred Valley',
    country: 'Peru',
    continent: 'Americas',
    category: 'Historical Adventure',
    tag: 'World Wonder',
    rating: 4.91,
    reviewCount: 310,
    startingPrice: 1390,
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80',
    description: 'Mystical 15th-century Inca citadel perched high in the Andean cloud forest with ancient stone terraces.',
    highlights: ['Vistadome Scenic Train to Aguas Calientes', 'Guided Citadel Sunrise Tour', 'Cusco Colonial Walk', 'Sacred Valley Salt Mines'],
    climate: 'Mountain Subtropical (14°C - 23°C)',
    bestSeason: 'April - October',
  },
  {
    id: 'dest-8',
    name: 'Dubai & Arabian Desert Oasis',
    country: 'United Arab Emirates',
    continent: 'Asia',
    category: 'Ultra Luxury',
    tag: 'Modern Luxury',
    rating: 4.82,
    reviewCount: 460,
    startingPrice: 1150,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    description: 'Futuristic architectural wonders, 7-star hospitality, luxury mega-malls, and golden sunset desert dunes.',
    highlights: ['Burj Khalifa Level 148 Observation', 'Desert 4x4 Dune Bashing & BBQ', 'Marina Yacht Cruise', 'Museum of the Future'],
    climate: 'Sunny Desert (25°C - 35°C)',
    bestSeason: 'November - March',
  },
  {
    id: 'dest-9',
    name: 'Reykjavik & Golden Circle',
    country: 'Iceland',
    continent: 'Europe',
    category: 'Natural Wonders',
    tag: 'Aurora & Glaciers',
    rating: 4.93,
    reviewCount: 280,
    startingPrice: 1580,
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
    description: 'Glacial waterfalls, erupting geysers, thermal Blue Lagoon waters, and dancing Northern Lights.',
    highlights: ['Blue Lagoon Luxury Retreat', 'Gullfoss & Geysir Exploration', 'Northern Lights Super Jeep Hunt', 'Black Sand Beach Vik'],
    climate: 'Subpolar Oceanic (2°C - 13°C)',
    bestSeason: 'Sept - April (Auroras), June - August (Midnight Sun)',
  },
  {
    id: 'dest-10',
    name: 'Queenstown Adventure Capital',
    country: 'New Zealand',
    continent: 'Oceania',
    category: 'Thrill & Nature',
    tag: 'Adrenaline Haven',
    rating: 4.89,
    reviewCount: 198,
    startingPrice: 1420,
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80',
    description: 'Crystal Lake Wakatipu surrounded by The Remarkables mountain range, fjord cruises, and adventure sports.',
    highlights: ['Milford Sound Scenic Cruise', 'Skyline Gondola & Luge', 'Shotover River Jet Boat', 'Central Otago Pinot Noir Tasting'],
    climate: 'Alpine Oceanic (10°C - 22°C)',
    bestSeason: 'December - March (Summer) & July - Sept (Snow)',
  }
];

export const PACKAGES = [
  {
    id: 'pkg-1',
    title: 'Santorini Dream: Aegean Caldera & Sunset Luxury',
    destinationId: 'dest-1',
    destinationName: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    category: 'Beach & Island',
    tag: 'Best Seller',
    badge: 'Popular Choice',
    price: 1399,
    originalPrice: 1750,
    duration: '6 Days / 5 Nights',
    daysCount: 6,
    nightsCount: 5,
    rating: 4.94,
    reviewCount: 184,
    maxGroupSize: 12,
    physicalLevel: 'Easy',
    bestSeason: 'May - October',
    language: 'English, Greek',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Escape to Greece’s most romantic island with handpicked boutique caldera suites, a private luxury catamaran cruise to volcanic springs, and sommelier-guided Aegean wine tastings.',
    highlights: [
      '5 nights in a 5-Star Caldera Cliffside Cave Suite with infinity plunge pool',
      'Private sunset catamaran sailing with freshly prepared Greek BBQ and Aegean wine',
      'Guided walking tour through Oia, Fira, and Pyrgos traditional villages',
      'Sommelier-hosted volcanic vineyard wine tasting paired with local cheeses',
      'Private chauffeur airport and port transfers in premium Mercedes mini-vans'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paradise & Sunset Welcome Dinner',
        morning: 'VIP arrival transfer from Santorini Airport (JTR) to your Caldera Suite in Imerovigli.',
        afternoon: 'Check-in, relax by the infinity pool, and enjoy chilled welcome Champagne.',
        evening: 'Welcome 4-course Greek gastronomy dinner overlooking the famous sunset glow.',
        stay: 'Grace Hotel, Auberge Resorts Collection',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Caldera Trail Hike & Oia Whitewashed Alleys',
        morning: 'Gourmet cliffside breakfast. Scenic morning walk along the Fira-Oia caldera ridge.',
        afternoon: 'Explore Oia’s iconic blue domes, art galleries, and historic windmill views.',
        evening: 'Leisurely dinner at a cliffside seafood tavern tasting fresh Mediterranean sea bass.',
        stay: 'Grace Hotel, Auberge Resorts Collection',
        meals: 'Breakfast Included'
      },
      {
        day: 3,
        title: 'Private Catamaran Cruise & Volcanic Springs',
        morning: 'Morning at leisure for sunbathing or spa treatment.',
        afternoon: 'Board a luxury catamaran from Ammoudi Bay. Swim in hot sulfur volcanic springs and Red Beach.',
        evening: 'Sunset on board with grilled shrimp, Greek salad, and local Assyrtiko wine.',
        stay: 'Grace Hotel, Auberge Resorts Collection',
        meals: 'Breakfast & BBQ Lunch Included'
      },
      {
        day: 4,
        title: 'Volcanic Wine Tasting & Medieval Pyrgos',
        morning: 'Visit the prehistoric ruins of Akrotiri, the "Pompeii of the Aegean".',
        afternoon: 'Tour two historic volcanic wineries with private sommelier tastings.',
        evening: 'Explore Pyrgos medieval village with panoramic 360-degree views of the entire island.',
        stay: 'Grace Hotel, Auberge Resorts Collection',
        meals: 'Breakfast & Wine Tasting Included'
      },
      {
        day: 5,
        title: 'Perivolos Black Beach & Sunset Cocktail Party',
        morning: 'Private transfer to the volcanic black sand beach club of Perivolos with reserved cabanas.',
        afternoon: 'Water sports, ocean swimming, or relaxing beachside massages.',
        evening: 'Farewell sunset cocktail reception at an exclusive cliffside lounge.',
        stay: 'Grace Hotel, Auberge Resorts Collection',
        meals: 'Breakfast Included'
      },
      {
        day: 6,
        title: 'Farewell Aegean & Departure',
        morning: 'Champagne breakfast on your private terrace. Last-minute souvenir shopping in Fira.',
        afternoon: 'Private Mercedes transfer to Santorini Airport or Ferry Port for your onward journey.',
        evening: 'End of services with memories of a lifetime.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '5 Nights in 5-Star Boutique Caldera Cliffside Suite',
      'Daily gourmet breakfast with Aegean panoramic views',
      'Private 5-Hour Sunset Catamaran Cruise with Open Bar & BBQ',
      'Sommelier-led 4-course Wine & Cheese pairing tour',
      'VIP Airport & Port round-trip transfers in luxury van',
      'English-speaking certified private tour guides',
      'All local taxes, tourist fees, and entrance permits'
    ],
    excluded: [
      'International and domestic flights',
      'Travel insurance (available as add-on during booking)',
      'Personal expenses, tips, and optional water sports'
    ],
    hotels: [
      {
        name: 'Grace Hotel, Auberge Resorts Collection',
        stars: 5,
        location: 'Imerovigli, Santorini',
        roomType: 'Deluxe Suite with Heated Plunge Pool',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Caldera Cliff Plunge Pool',
        overlayIcons: [
          { icon: 'Waves', label: 'Infinity Pool' },
          { icon: 'Wine', label: 'Sunset Tasting' },
          { icon: 'Sparkles', label: '5-Star VIP' }
        ],
        amenities: ['Infinity Pool', 'Spa & Wellness', 'Ocean View', 'Free Wi-Fi', '24/7 Concierge']
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Pooja Hegde (Mumbai)',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'October 14, 2025',
        title: 'Pure magic from start to finish!',
        content: 'The catamaran sunset cruise was undeniably the highlight of our entire year. WanderLuxe made the booking effortless from Mumbai with instant UPI confirmation, and our caldera plunge pool suite was beyond breathtaking.'
      },
      {
        id: 'rev-2',
        author: 'Vikram Malhotra (New Delhi)',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'September 28, 2025',
        title: 'Flawless luxury experience',
        content: 'Every transfer was punctual, guides were knowledgeable, and the wine tasting tour introduced us to wines we loved. Complete value in Indian Rupees with 5-star service. 10/10 recommend!'
      }
    ]
  },
  {
    id: 'pkg-2',
    title: 'Bali Wonders: Ubud Jungle Villas & Nusa Penida Escape',
    destinationId: 'dest-2',
    destinationName: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    category: 'Tropical Paradise',
    tag: 'Top Rated',
    badge: 'Trending',
    price: 980,
    originalPrice: 1250,
    duration: '7 Days / 6 Nights',
    daysCount: 7,
    nightsCount: 6,
    rating: 4.88,
    reviewCount: 240,
    maxGroupSize: 10,
    physicalLevel: 'Moderate',
    bestSeason: 'April - November',
    language: 'English, Indonesian',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559628233-eb1b1a45564b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Immerse in spiritual Ubud rainforest sanctuaries with private pool villas, sacred water cleansing, floating breakfast, and a speedboat adventure to Nusa Penida’s iconic Kelingking T-Rex cliff.',
    highlights: [
      '3 nights in a Rainforest Pool Villa in Ubud + 3 nights in Seminyak Beachfront Resort',
      'Signature Balinese Floating Breakfast in your private infinity pool',
      'Fast-boat day excursion to Nusa Penida (Kelingking Beach, Broken Beach, Angel’s Billabong)',
      'Tirta Empul Holy Water Blessing Ceremony and Ubud Monkey Forest sanctuary',
      'Uluwatu Sunset Temple tour with hypnotic Kecak Fire Dance performance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Denpasar & Ubud Rainforest Check-in',
        morning: 'Flower lei welcome at Ngurah Rai International Airport (DPS).',
        afternoon: 'Scenic drive through lush jungle to your luxury villa in Ubud.',
        evening: 'Traditional Balinese blessing massage and relaxing welcome dinner.',
        stay: 'Kamandalu Ubud Rainforest Resort',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Floating Breakfast, Tegalalang Rice Terraces & Swing',
        morning: 'Famous floating breakfast served in your private pool overlooking jungle canopy.',
        afternoon: 'Walk through cascading Tegalalang Rice Terraces and soaring giant swing ride.',
        evening: 'Organic farm-to-table dining experience in downtown Ubud.',
        stay: 'Kamandalu Ubud Rainforest Resort',
        meals: 'Breakfast & Lunch Included'
      },
      {
        day: 3,
        title: 'Sacred Water Blessing & Hidden Waterfalls',
        morning: 'Holy water purification ritual with sarongs at Tirta Empul Temple.',
        afternoon: 'Hike to majestic Tibumana and Tukad Cepung hidden cave waterfalls.',
        evening: 'Artisan craft shopping at Ubud traditional art market.',
        stay: 'Kamandalu Ubud Rainforest Resort',
        meals: 'Breakfast Included'
      },
      {
        day: 4,
        title: 'Nusa Penida Island Wonder Expedition',
        morning: 'Early morning speed boat to Nusa Penida. Visit the iconic Kelingking T-Rex cliff.',
        afternoon: 'Marvel at Angel’s Billabong natural tide pool and Broken Beach cove.',
        evening: 'Transfer to Seminyak luxury beach resort. Sunset drinks at Potato Head Beach Club.',
        stay: 'The Seminyak Beach Resort & Spa',
        meals: 'Breakfast & Island Lunch Included'
      },
      {
        day: 5,
        title: 'Uluwatu Cliff Temple & Kecak Fire Dance',
        morning: 'Morning surfing lesson or relaxing sunbathing along Seminyak beach.',
        afternoon: 'Drive to Uluwatu Temple perched 70 meters high on an ocean cliff.',
        evening: 'Watch the dramatic sunset Kecak Dance followed by Jimbaran Bay grilled seafood feast.',
        stay: 'The Seminyak Beach Resort & Spa',
        meals: 'Breakfast & Seafood Dinner Included'
      },
      {
        day: 6,
        title: 'Spa Indulgence & Beachside Leisure',
        morning: '2-hour traditional Balinese lulur body scrub and flower petal bath.',
        afternoon: 'Boutique shopping along Seminyak’s trendy fashion streets.',
        evening: 'Farewell celebration dinner on the beach with live acoustic music.',
        stay: 'The Seminyak Beach Resort & Spa',
        meals: 'Breakfast Included'
      },
      {
        day: 7,
        title: 'Departure & Tropical Memories',
        morning: 'Buffet breakfast with beachfront views. Final morning dip.',
        afternoon: 'Private chauffeured transfer to Denpasar Airport for departure.',
        evening: 'Safe travels home.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '6 Nights accommodation (3 Nights Jungle Villa + 3 Nights Beach Resort)',
      'Daily breakfast including 1 Signature Private Pool Floating Breakfast',
      'Full Day Nusa Penida speedboat expedition with entrance fees & lunch',
      'Private air-conditioned vehicle with dedicated driver/guide throughout',
      'Uluwatu Sunset Tour + Kecak Dance tickets + Jimbaran Seafood Dinner',
      '2-Hour Traditional Balinese Luxury Spa treatment',
      'All temple donations, sarong rentals, and water bottles provided'
    ],
    excluded: [
      'International flights',
      'Personal shopping and alcoholic beverages outside specified dinners',
      'Travel insurance'
    ],
    hotels: [
      {
        name: 'Kamandalu Ubud Rainforest Resort',
        stars: 5,
        location: 'Ubud, Bali',
        roomType: 'Jungle Pool Villa',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Private Jungle Pool Villa',
        overlayIcons: [
          { icon: 'Palmtree', label: 'Forest Sanctuary' },
          { icon: 'Sparkles', label: 'Floating Breakfast' },
          { icon: 'Waves', label: 'Private Pool' }
        ],
        amenities: ['Private Pool', 'Forest Spa', 'Yoga Shala', 'Free Shuttle to Ubud Center']
      },
      {
        name: 'The Seminyak Beach Resort & Spa',
        stars: 5,
        location: 'Seminyak, Bali',
        roomType: 'Ocean View Suite',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Oceanfront Sunset Suite',
        overlayIcons: [
          { icon: 'Waves', label: 'Beachfront Club' },
          { icon: 'Sun', label: 'Sunset Cabana' }
        ],
        amenities: ['Beachfront Infinity Pool', 'Fitness Club', 'Sunset Lounge', 'Beach Access']
      }
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'Kavita Nair (Bengaluru)',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'November 02, 2025',
        title: 'The floating breakfast in Ubud was a dream!',
        content: 'WanderLuxe organized our trip seamlessly from Bangalore. Our Balinese chauffeur Made was so courteous and attentive. The jungle pool villa in Ubud was sheer tranquility.'
      }
    ]
  },
  {
    id: 'pkg-3',
    title: 'Majestic Swiss Alps: Matterhorn & Glacier Express Expedition',
    destinationId: 'dest-3',
    destinationName: 'Swiss Alps',
    country: 'Switzerland',
    continent: 'Europe',
    category: 'Mountain Adventure',
    tag: 'Luxury Alpine',
    badge: 'Premium Experience',
    price: 2150,
    originalPrice: 2600,
    duration: '8 Days / 7 Nights',
    daysCount: 8,
    nightsCount: 7,
    rating: 4.97,
    reviewCount: 312,
    maxGroupSize: 8,
    physicalLevel: 'Easy to Moderate',
    bestSeason: 'Year Round (Winter Ski / Summer Alpine)',
    language: 'English, German, French',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Traverse the dramatic alpine spine of Switzerland. Ride the panoramic Glacier Express, ascend to Jungfraujoch "Top of Europe", gaze upon the Matterhorn from car-free Zermatt, and savor Swiss fondue.',
    highlights: [
      '1st Class Panoramic Rail passes including the legendary Glacier Express',
      'Ascent to Jungfraujoch (3,454m) with Ice Palace and Sphinx Observatory',
      'Gornergrat cogwheel train ride with 360-degree Matterhorn reflections',
      'Lake Lucerne vintage steamboat cruise and Swiss artisan chocolate workshop',
      'Traditional Alpine fondue dinner in a mountain hut above Interlaken'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Zurich & Scenic Train to Lucerne',
        morning: 'Arrive at Zurich Airport (ZRH). Board 1st class panoramic train to Lucerne.',
        afternoon: 'Stroll across Chapel Bridge and the Old Town squares.',
        evening: 'Welcome dinner overlooking Lake Lucerne with local Swiss delicacies.',
        stay: 'Hotel Schweizerhof Luzern',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Mount Pilatus Golden Round Trip & Chocolate Workshop',
        morning: 'Lake Lucerne boat cruise followed by the world’s steepest cogwheel railway to Mt. Pilatus.',
        afternoon: 'Hands-on Swiss chocolatier masterclass in Lucerne.',
        evening: 'Leisurely evening stroll along the lake promenade.',
        stay: 'Hotel Schweizerhof Luzern',
        meals: 'Breakfast Included'
      },
      {
        day: 3,
        title: 'Scenic Train to Interlaken & Lake Brienz Cruise',
        morning: 'GoldenPass scenic train to Interlaken between emerald lakes.',
        afternoon: 'Cruise across turquoise Lake Brienz to the Giessbach Falls waterfall.',
        evening: 'Alpine fondue dinner in a cozy mountain timber chalet.',
        stay: 'Victoria-Jungfrau Grand Hotel & Spa',
        meals: 'Breakfast & Dinner Included'
      },
      {
        day: 4,
        title: 'Jungfraujoch - Top of Europe Glacier Experience',
        morning: 'Ride the state-of-the-art Eiger Express tricable gondola to Jungfraujoch (3,454m).',
        afternoon: 'Walk inside the carving Ice Palace and step out onto eternal Aletsch Glacier.',
        evening: 'Relax in the hotel’s 5,500m² luxury Roman spa.',
        stay: 'Victoria-Jungfrau Grand Hotel & Spa',
        meals: 'Breakfast Included'
      },
      {
        day: 5,
        title: 'Glacier Express Journey to Car-Free Zermatt',
        morning: 'Board the world-famous Glacier Express in 1st class panoramic dome cars.',
        afternoon: 'Cross deep gorges and 291 bridges as you climb into the Valais Alps to Zermatt.',
        evening: 'Arrive in idyllic car-free Zermatt with immediate views of the Matterhorn.',
        stay: 'The Omnia Mountain Lodge Zermatt',
        meals: 'Breakfast & 3-Course Rail Lunch Included'
      },
      {
        day: 6,
        title: 'Gornergrat Cogwheel & Riffelsee Reflections',
        morning: 'Ascend on Europe’s highest open-air cogwheel train to Gornergrat (3,089m).',
        afternoon: 'Short alpine hike to Riffelsee to capture the legendary Matterhorn mirror reflection.',
        evening: 'Fine dining at Michelin-recommended Valais restaurant.',
        stay: 'The Omnia Mountain Lodge Zermatt',
        meals: 'Breakfast Included'
      },
      {
        day: 7,
        title: 'Matterhorn Glacier Paradise & Alpine Wellness',
        morning: 'Highest cable car in the Alps to Matterhorn Glacier Paradise (3,883m).',
        afternoon: 'Thermal spa therapy, outdoor heated jacuzzi, and relaxing fireside wine.',
        evening: 'Farewell Gala dinner celebrating an epic alpine expedition.',
        stay: 'The Omnia Mountain Lodge Zermatt',
        meals: 'Breakfast & Gala Dinner Included'
      },
      {
        day: 8,
        title: 'Return to Zurich & Departure',
        morning: 'Scenic 1st class rail journey back to Zurich Airport or Zurich City Center.',
        afternoon: 'Departure with unforgettable alpine memories.',
        evening: 'End of tour.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '7 Nights in 5-Star luxury alpine hotels and mountain lodges',
      'Swiss Travel Pass 1st Class with unlimited trains, boats, and city transit',
      'Reserved 1st Class seating on the world-famous Glacier Express with 3-course lunch',
      'Jungfraujoch and Gornergrat mountain excursion tickets',
      'Daily hot breakfast buffet + 3 gourmet dinners (including Swiss fondue)',
      'Artisan Swiss Chocolate Making masterclass',
      'Luggage porterage and hotel concierge support'
    ],
    excluded: [
      'International flights to/from Zurich',
      'Ski equipment rental (if visiting during winter)',
      'Travel insurance'
    ],
    hotels: [
      {
        name: 'Victoria-Jungfrau Grand Hotel & Spa',
        stars: 5,
        location: 'Interlaken, Switzerland',
        roomType: 'Junior Suite with Jungfrau Mountain View',
        image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Historic Swiss Grand Hotel',
        overlayIcons: [
          { icon: 'Mountain', label: 'Jungfrau View' },
          { icon: 'Sparkles', label: 'Roman Spa' },
          { icon: 'Snowflake', label: 'Alpine Luxury' }
        ],
        amenities: ['Luxury Roman Spa', 'Indoor & Outdoor Heated Pools', 'Fine Dining', 'Tennis Courts']
      },
      {
        name: 'The Omnia Mountain Lodge',
        stars: 5,
        location: 'Zermatt, Switzerland',
        roomType: 'Matterhorn Suite',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Matterhorn Panoramic Chalet',
        overlayIcons: [
          { icon: 'Mountain', label: 'Direct Matterhorn View' },
          { icon: 'Flame', label: 'Fireside Lounge' }
        ],
        amenities: ['Matterhorn Views', 'Fireside Library', 'Indoor/Outdoor Pool', 'Gourmet Restaurant']
      }
    ],
    reviews: [
      {
        id: 'rev-4',
        author: 'Rajesh & Sunita Bansal (Jaipur)',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'October 19, 2025',
        title: 'Unbelievable beauty at every turn in the Swiss Alps',
        content: 'Watching the Matterhorn from our balcony at The Omnia in Zermatt was spiritual. The 1st class Glacier Express tickets booked through WanderLuxe in Indian Rupees made traveling through Switzerland effortless. Exceptional service!'
      }
    ]
  },
  {
    id: 'pkg-4',
    title: 'Japan Golden Route: Kyoto Heritage & Tokyo Metropole',
    destinationId: 'dest-4',
    destinationName: 'Kyoto & Tokyo',
    country: 'Japan',
    continent: 'Asia',
    category: 'Cultural Heritage',
    tag: 'Iconic Japan',
    badge: 'Cultural Highlight',
    price: 1890,
    originalPrice: 2200,
    duration: '8 Days / 7 Nights',
    daysCount: 8,
    nightsCount: 7,
    rating: 4.93,
    reviewCount: 268,
    maxGroupSize: 10,
    physicalLevel: 'Moderate',
    bestSeason: 'Spring Blossom & Autumn Foliage',
    language: 'English, Japanese',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Experience the soul of ancient Kyoto with private tea masters, bamboo forests, and Golden Pavilion, paired with a bullet train ride to neon-lit Tokyo, teamLab digital art, and Michelin ramen.',
    highlights: [
      'Authentic Ryokan stay with private cedar onsen bath and multi-course Kaiseki dinner',
      'Shinkansen Bullet Train at 320 km/h between Kyoto and Tokyo in Green Car (First Class)',
      'Early access private tour through Fushimi Inari Shrine and Arashiyama Bamboo Grove',
      'Tea Ceremony masterclass with a licensed Uji green tea master',
      'VIP tickets to teamLab Planets digital art museum in Tokyo'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kyoto & Ryokan Onsen Immersion',
        morning: 'Airport pick-up from Kansai Airport (KIX) and transfer to your traditional luxury Ryokan.',
        afternoon: 'Unpack, don traditional yukata robes, and soak in mineral-rich outdoor onsen baths.',
        evening: 'Exquisite 9-course seasonal Kaiseki banquet served privately in your tatami suite.',
        stay: 'Ryokan Gion Fukuzumi, Kyoto',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Fushimi Inari Torii Gates & Kiyomizu-dera',
        morning: 'Early morning tranquility hike through thousands of vermilion Torii gates at Fushimi Inari.',
        afternoon: 'Explore Kiyomizu-dera wooden temple and historic Ninenzaka preserved alleys.',
        evening: 'Gion Geisha district walking tour with a local cultural historian.',
        stay: 'Ryokan Gion Fukuzumi, Kyoto',
        meals: 'Breakfast & Dinner Included'
      },
      {
        day: 3,
        title: 'Arashiyama Bamboo Grove & Golden Pavilion (Kinkaku-ji)',
        morning: 'Stroll through the towering stalks of Arashiyama Bamboo Grove and Tenryu-ji Zen garden.',
        afternoon: 'Marvel at the gold-leaf covered Kinkaku-ji temple reflecting in its mirror pond.',
        evening: 'Traditional matcha tea preparation ceremony with an Uji master.',
        stay: 'Ryokan Gion Fukuzumi, Kyoto',
        meals: 'Breakfast Included'
      },
      {
        day: 4,
        title: 'Shinkansen Bullet Train to Futuristic Tokyo',
        morning: 'Board the Nozomi Shinkansen bullet train in First Class Green Car to Tokyo (2h 15m).',
        afternoon: 'Check in to luxury hotel in Shinjuku overlooking the Tokyo skyline.',
        evening: 'Explore Shibuya Crossing, Hachiko statue, and Omoide Yokocho lantern alleyways.',
        stay: 'Keio Plaza Hotel Tokyo Premier Grand',
        meals: 'Breakfast Included'
      },
      {
        day: 5,
        title: 'teamLab Planets Digital Art & Tsukiji Outer Market',
        morning: 'Fresh sashimi and wagyu skewers breakfast at vibrant Tsukiji Outer Fish Market.',
        afternoon: 'Immerse your senses barefoot in teamLab Planets interactive digital water museum.',
        evening: 'Ascend to Shibuya Sky open-air rooftop observation deck for 360-degree sunset views.',
        stay: 'Keio Plaza Hotel Tokyo Premier Grand',
        meals: 'Breakfast & Street Food Tastings Included'
      },
      {
        day: 6,
        title: 'Asakusa Senso-ji Temple & Akihabara Tech Culture',
        morning: 'Visit Tokyo’s oldest temple, Senso-ji in Asakusa, along Nakamise shopping street.',
        afternoon: 'Discover electronics and anime pop culture in vibrant Akihabara.',
        evening: 'Omakase sushi dinner experience with master sushi chef.',
        stay: 'Keio Plaza Hotel Tokyo Premier Grand',
        meals: 'Breakfast & Omakase Dinner Included'
      },
      {
        day: 7,
        title: 'Mount Fuji Day Excursion & Lake Kawaguchiko',
        morning: 'Private coach excursion to Mount Fuji 5th Station and Lake Kawaguchiko.',
        afternoon: 'Chureito Pagoda viewpoint photo stop and Oshino Hakkai spring water ponds.',
        evening: 'Return to Tokyo for a memorable farewell dinner in Roppongi Hills.',
        stay: 'Keio Plaza Hotel Tokyo Premier Grand',
        meals: 'Breakfast & Lunch Included'
      },
      {
        day: 8,
        title: 'Sayonara Tokyo & Departure',
        morning: 'Breakfast with panoramic Tokyo views. Last-minute tax-free shopping in Ginza.',
        afternoon: 'Narita/Haneda Express or private limousine bus transfer to the airport.',
        evening: 'Board flight home.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '7 Nights luxury accommodation (3 Nights Kyoto Luxury Ryokan + 4 Nights Tokyo 5-Star Hotel)',
      'First Class Green Car JR Shinkansen Bullet Train tickets',
      'Daily breakfast + 2 multi-course Kaiseki banquets + 1 Chef Omakase Sushi dinner',
      'teamLab Planets VIP entrance & Shibuya Sky observation deck passes',
      'Private Mount Fuji & Lake Kawaguchiko full day excursion with lunch',
      'Licensed English-speaking Japanese cultural guide throughout',
      'Pocket Wi-Fi device or eSIM provided upon arrival'
    ],
    excluded: [
      'International airfare',
      'Personal shopping and alcoholic drinks outside included banquets',
      'Comprehensive travel insurance'
    ],
    hotels: [
      {
        name: 'Ryokan Gion Fukuzumi',
        stars: 5,
        location: 'Kyoto, Japan',
        roomType: 'Traditional Japanese Tatami Suite with Hinoki Bath',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Gion Traditional Ryokan',
        overlayIcons: [
          { icon: 'Compass', label: 'Hinoki Onsen' },
          { icon: 'Utensils', label: 'Kaiseki Master' },
          { icon: 'Sparkles', label: 'Tatami Garden' }
        ],
        amenities: ['Private Onsen Bath', 'Kaiseki Dining', 'Zen Garden', 'Tea Ceremony Room']
      },
      {
        name: 'Keio Plaza Hotel Tokyo Premier Grand',
        stars: 5,
        location: 'Shinjuku, Tokyo',
        roomType: 'Club Floor Executive Room',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Tokyo Skyline Club Floor',
        overlayIcons: [
          { icon: 'Camera', label: 'Tokyo Skyline' },
          { icon: 'Wine', label: 'Club Lounge' }
        ],
        amenities: ['Skyline Views', 'Club Lounge', 'Fitness Center', 'Multiple Michelin Restaurants']
      }
    ],
    reviews: [
      {
        id: 'rev-5',
        author: 'Arjun Kapoor & Tanvi (Pune)',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'October 11, 2025',
        title: 'The ryokan onsen and Kaiseki dinner was sublime!',
        content: 'From the private Kyoto Kaiseki banquet to the exhilarating 320 km/h Shinkansen ride, every detail was orchestrated with Japanese precision. Booking from Pune with Rupee payment was smooth and transparent.'
      }
    ]
  },
  {
    id: 'pkg-5',
    title: 'Amalfi Coast Splendor: Positano, Capri & Sorrento Yachting',
    destinationId: 'dest-5',
    destinationName: 'Amalfi Coast',
    country: 'Italy',
    continent: 'Europe',
    category: 'Luxury Coastal',
    tag: 'La Dolce Vita',
    badge: 'Exclusive',
    price: 1980,
    originalPrice: 2400,
    duration: '7 Days / 6 Nights',
    daysCount: 7,
    nightsCount: 6,
    rating: 4.91,
    reviewCount: 175,
    maxGroupSize: 8,
    physicalLevel: 'Easy',
    bestSeason: 'May - September',
    language: 'English, Italian',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Live La Dolce Vita along Italy’s glamorous coastline. Bask in Positano’s pastel panoramas, cruise private speedboats around Capri’s Faraglioni sea stacks, and savor artisan limoncello.',
    highlights: [
      '6 nights in a cliffside boutique resort overlooking Positano bay',
      'Private vintage Riva speedboat day charter around Capri Island and Blue Grotto',
      'Scenic drive along the legendary Amalfi Cliffway in vintage convertible or Mercedes van',
      'Authentic Neapolitan pizza making class and mozzarella tasting in Sorrento',
      'Sunset Aperitivo overlooking Ravello’s Villa Rufolo cliff gardens'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Naples & Drive to Positano',
        morning: 'Private Mercedes transfer from Naples Airport or Train Station.',
        afternoon: 'Winding scenic drive along the Amalfi Coast cliff road to Positano.',
        evening: 'Welcome Prosecco and cliffside seafood pasta dinner in Positano.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Dinner Included'
      },
      {
        day: 2,
        title: 'Positano Coastal Charm & Spiaggia Grande Beach',
        morning: 'Espresso and sfogliatella pastry breakfast overlooking the pastel village.',
        afternoon: 'Reserved sun loungers at Spiaggia Grande beach with ocean swimming.',
        evening: 'Romantic dinner at candlelit restaurant carved into coastal cliff rock.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Breakfast Included'
      },
      {
        day: 3,
        title: 'Private Riva Speedboat Charter to Capri Island',
        morning: 'Board your private captained yacht. Sail past the dramatic Faraglioni Rocks.',
        afternoon: 'Visit the electric Blue Grotto and explore Capri’s luxury Piazzetta boutiques.',
        evening: 'Sunset champagne cruise back along the Sirenusa islands.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Breakfast & Yacht Snacks Included'
      },
      {
        day: 4,
        title: 'Ravello Mountain Heights & Villa Rufolo Gardens',
        morning: 'Scenic drive up to aristocratic Ravello perched high above the Mediterranean.',
        afternoon: 'Walk through the breathtaking flower terraces of Villa Rufolo and Villa Cimbrone.',
        evening: 'Aperitivo cocktails accompanied by classical violin music.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Breakfast Included'
      },
      {
        day: 5,
        title: 'Sorrento Lemon Orchards & Neapolitan Pizza Masterclass',
        morning: 'Visit organic Sorrento lemon groves and taste cold freshly made Limoncello.',
        afternoon: 'Hands-on pizza making masterclass with wood-fired oven and buffalo mozzarella.',
        evening: 'Free evening to stroll Sorrento’s lively artisan alleys and gelato parlors.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Breakfast & Pizza Lunch Included'
      },
      {
        day: 6,
        title: 'Amalfi Town & Ancient Paper Mills',
        morning: 'Ferry ride to historic Amalfi town and its magnificent 9th-century Duomo.',
        afternoon: 'Discover the ancient Valle delle Ferriere waterfalls and paper museum.',
        evening: 'Gala Farewell Dinner at Michelin-starred seaside terrace.',
        stay: 'Hotel Le Sirenuse Partner Property, Positano',
        meals: 'Breakfast & Gala Dinner Included'
      },
      {
        day: 7,
        title: 'Arrivederci Amalfi & Departure',
        morning: 'Final panoramic breakfast watching fishing boats leave the harbor.',
        afternoon: 'Private Mercedes transfer back to Naples International Airport.',
        evening: 'Flight departures.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '6 Nights in Luxury 5-Star Cliffside Sea View Suite',
      'Full Day Private Capri Yacht Charter with Skipper, Fuel & Towels',
      'Daily artisan Italian breakfast with freshly baked pastries',
      'Private Chauffeur Mercedes-Benz throughout all excursions',
      'Pizza Making Masterclass with local wine pairing',
      'Villa Rufolo entrance tickets and limoncello tasting session'
    ],
    excluded: [
      'International flights to Naples/Rome',
      'Blue Grotto rowboat admission fee (€15 paid locally to boatmen)',
      'Personal travel insurance'
    ],
    hotels: [
      {
        name: 'Villa Franca Luxury Resort',
        stars: 5,
        location: 'Positano, Amalfi Coast',
        roomType: 'Deluxe Mediterranean Sea View Suite',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Positano Clifftop Infinity Pool',
        overlayIcons: [
          { icon: 'Waves', label: 'Faraglioni Views' },
          { icon: 'Wine', label: 'Champagne Terrace' },
          { icon: 'Utensils', label: 'Michelin Dining' }
        ],
        amenities: ['Rooftop Infinity Pool', 'Michelin Star Dining', 'Spa & Hamam', 'Private Balcony']
      }
    ],
    reviews: [
      {
        id: 'rev-6',
        author: 'Deepak & Shreya Joshi (Kolkata)',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'September 15, 2025',
        title: 'Positano & Capri felt like a dream!',
        content: 'The private speedboat to Capri was pure heaven. Sailing through the Faraglioni arch with chilled limoncello is something we will cherish forever. 24/7 concierge support on WhatsApp was incredible.'
      }
    ]
  },
  {
    id: 'pkg-6',
    title: 'Serengeti & Ngorongoro Big Five Luxury Safari',
    destinationId: 'dest-6',
    destinationName: 'Serengeti Safari',
    country: 'Tanzania',
    continent: 'Africa',
    category: 'Wildlife Safari',
    tag: 'Wildlife Bucket List',
    badge: 'Once in a Lifetime',
    price: 2790,
    originalPrice: 3400,
    duration: '7 Days / 6 Nights',
    daysCount: 7,
    nightsCount: 6,
    rating: 4.99,
    reviewCount: 142,
    maxGroupSize: 6,
    physicalLevel: 'Moderate',
    bestSeason: 'June - October (Migration) & Jan - March (Calving)',
    language: 'English, Swahili',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508672019048-805b876b67e2?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Witness the greatest wildlife spectacle on Earth. Explore Serengeti National Park and the ancient volcanic Ngorongoro Crater in customized pop-up 4x4 Land Cruisers with luxury tented camps.',
    highlights: [
      '6 nights in luxury tented safari camps with en-suite baths and private verandas',
      'Serengeti Sunrise Hot Air Balloon Safari with champagne bush breakfast',
      'Full-day game drive descending 600m into the wildlife-dense Ngorongoro Crater',
      'Guaranteed window seat in customized 4x4 Land Cruiser with pop-up photography roof',
      'Authentic cultural encounter at a traditional Maasai Boma village'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha Arrival & Scenic Bush Flight to Serengeti',
        morning: 'Arrive at Kilimanjaro International Airport (JRO). Board scenic light aircraft to Serengeti airstrip.',
        afternoon: 'First thrilling game drive en route to your luxury tented bush lodge.',
        evening: 'Fireside sundowner gin & tonic followed by a 4-course safari banquet under starry African skies.',
        stay: 'Four Seasons Safari Lodge Serengeti',
        meals: 'Lunch & Dinner Included'
      },
      {
        day: 2,
        title: 'Serengeti Sunrise Hot Air Balloon & Big Five Tracking',
        morning: 'Dawn takeoff in a hot air balloon floating silently over herds of wildebeests and lions.',
        afternoon: 'Champagne bush breakfast followed by an afternoon game drive tracking leopards and cheetahs.',
        evening: 'Bush dinner around a roaring campfire listening to the calls of the wild.',
        stay: 'Four Seasons Safari Lodge Serengeti',
        meals: 'All Meals Included'
      },
      {
        day: 3,
        title: 'Full Day Great Migration Tracking',
        morning: 'Head into the Mara or Seronera river valleys to witness river crossings and predator action.',
        afternoon: 'Picnic lunch under an acacia tree surrounded by rolling savanna plains.',
        evening: 'Relax in the lodge’s infinity pool overlooking an active elephant watering hole.',
        stay: 'Four Seasons Safari Lodge Serengeti',
        meals: 'All Meals Included'
      },
      {
        day: 4,
        title: 'Drive to Ngorongoro Conservation Area',
        morning: 'Morning game drive tracking rhinos, giraffes, and hippos in central Serengeti.',
        afternoon: 'Scenic drive through Olduvai Gorge, the cradle of mankind, up to Ngorongoro crater rim.',
        evening: 'Dinner at luxury lodge perched on the rim of the 20km-wide volcanic caldera.',
        stay: 'Ngorongoro Crater Lodge',
        meals: 'All Meals Included'
      },
      {
        day: 5,
        title: 'Ngorongoro Crater Floor Safari Expedition',
        morning: 'Descend 600 meters into the crater floor for maximum density Big 5 sightings.',
        afternoon: 'Encounter black rhinos, giant tusked elephants, pink flamingos on Lake Magadi.',
        evening: 'Sunset drinks on your private viewing deck looking down into the mist-covered crater.',
        stay: 'Ngorongoro Crater Lodge',
        meals: 'All Meals Included'
      },
      {
        day: 6,
        title: 'Maasai Boma Cultural Experience & Lake Manyara',
        morning: 'Warm traditional welcoming dance and fire-making demonstration at a local Maasai village.',
        afternoon: 'Game drive through Lake Manyara National Park famous for tree-climbing lions.',
        evening: 'Farewell Gala safari dinner under the southern constellations.',
        stay: 'Ngorongoro Crater Lodge',
        meals: 'All Meals Included'
      },
      {
        day: 7,
        title: 'Return to Arusha & Departure',
        morning: 'Leisurely bush breakfast. Scenic flight back to Arusha.',
        afternoon: 'Transfer to Kilimanjaro Airport (JRO) for flight departures home.',
        evening: 'End of an unforgettable African safari.',
        stay: 'Departure',
        meals: 'Breakfast Included'
      }
    ],
    included: [
      '6 Nights in Luxury 5-Star Tented Safari Lodges',
      'All meals (Breakfast, Lunch, Gourmet Bush Dinners) and select wines/beers',
      'Serengeti Sunrise Hot Air Balloon Safari with Champagne Bush Breakfast',
      'Unlimited game drives in customized 4x4 Land Cruiser with charging ports & binoculars',
      'All National Park Conservation fees and Crater Service permits',
      'Internal light aircraft bush flights (Kilimanjaro/Arusha - Serengeti roundtrip)',
      'Expert certified Tanzanian wildlife ranger guide'
    ],
    excluded: [
      'International flights to Tanzania',
      'Tanzania tourist visa ($50-$100 paid online/upon arrival)',
      'Driver guide gratuity and comprehensive travel insurance'
    ],
    hotels: [
      {
        name: 'Four Seasons Safari Lodge Serengeti',
        stars: 5,
        location: 'Central Serengeti, Tanzania',
        roomType: 'Waterhole View Villa',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Watering Hole Wildlife Villa',
        overlayIcons: [
          { icon: 'Compass', label: 'Elephant Watering Hole' },
          { icon: 'Sun', label: 'Private Veranda' },
          { icon: 'Sparkles', label: 'Personal Butler' }
        ],
        amenities: ['Waterhole Infinity Pool', 'Discovery Centre Museum', 'Bush Spa', 'Private Butler']
      },
      {
        name: 'Ngorongoro Crater Lodge',
        stars: 5,
        location: 'Ngorongoro Crater Rim, Tanzania',
        roomType: 'Luxury Crater View Suite',
        image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80',
        overlayBadge: 'Crater Rim Stilted Chateau',
        overlayIcons: [
          { icon: 'Flame', label: 'Fireplace Butler' },
          { icon: 'Eye', label: '600m Crater View' }
        ],
        amenities: ['Panoramic Crater Deck', 'Fireplace Butler', 'Fine Dining', 'Wildlife Viewing Telescope']
      }
    ],
    reviews: [
      {
        id: 'rev-7',
        author: 'Dr. Sameer & Neha Kulkarni (Hyderabad)',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        date: 'October 05, 2025',
        title: 'Beyond our wildest dreams in Serengeti!',
        content: 'We saw the Big Five in the first 48 hours! The sunrise hot air balloon flight over thousands of wildebeests brought tears of joy. WanderLuxe managed all park permits, bush flights, and luxury tented stays flawlessly.'
      }
    ]
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Destinations', icon: 'Globe' },
  { id: 'Beach & Island', name: 'Beach & Coastal', icon: 'Palmtree' },
  { id: 'Mountain Adventure', name: 'Alpine & Hiking', icon: 'Mountain' },
  { id: 'Cultural Heritage', name: 'Culture & Temples', icon: 'Landmark' },
  { id: 'Wildlife Safari', name: 'Wildlife & Nature', icon: 'Compass' },
  { id: 'Ultra Luxury', name: 'Luxury City & Desert', icon: 'Sparkles' }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Vikram & Radhika Malhotra',
    role: 'Honeymoon Travelers (Mumbai)',
    trip: 'Santorini Dream Package',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    content: 'WanderLuxe turned our honeymoon into an unforgettable fairytale. The private caldera suite was spectacular, and the 24/7 concierge took care of every restaurant reservation flawlessly.'
  },
  {
    id: 2,
    name: 'Aarav Mehta',
    role: 'Solo Explorer & Photographer (Bengaluru)',
    trip: 'Japan Golden Route',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    content: 'The itinerary pacing was perfection. The First Class Shinkansen pass, access to teamLab, and authentic ryokan stay gave me once-in-a-lifetime photos. Booking from Bangalore was effortless with Indian Rupee pricing!'
  },
  {
    id: 3,
    name: 'Dr. Sneha & Rajesh Reddy',
    role: 'Family Vacation (Hyderabad)',
    trip: 'Swiss Alps Expedition',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    content: 'Booking for our family of 4 from Hyderabad was completely stress-free. The transparent INR pricing, instant WhatsApp concierge updates, and confirmed Swiss rail passes gave us complete peace of mind.'
  }
];

export const PROMO_CODES = {
  WANDER20: { discountPercent: 20, description: '20% Off WanderLuxe Special Welcome' },
  SUMMER10: { discountPercent: 10, description: '10% Off Seasonal Vacation Discount' },
  LUXURY100: { discountFixed: 100, description: '₹8,500 Off Any Luxury Booking' }
};

export const INITIAL_BOOKINGS = [
  {
    id: 'BK-78412',
    packageId: 'pkg-1',
    packageTitle: 'Santorini Dream: Aegean Caldera & Sunset Luxury',
    destinationName: 'Santorini, Greece',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    travelDate: '2026-11-15',
    adults: 2,
    children: 0,
    roomTier: 'deluxe',
    roomTierLabel: 'Deluxe Suite with Heated Plunge Pool (+₹25,500)',
    addOns: ['Airport VIP Chauffeur Transfer', 'Full Travel Protection Insurance'],
    customer: {
      fullName: 'Rohan Sharma',
      email: 'rohan.sharma@gmail.com',
      phone: '+91 98201 45892',
      country: 'India'
    },
    paymentMethod: 'UPI (rohan@okhdfcbank)',
    pricing: {
      basePrice: 1399,
      adultsCount: 2,
      baseTotal: 2798,
      childrenDiscount: 0,
      roomUpgrade: 300,
      addOnsTotal: 205,
      subtotal: 3303,
      discount: 660.6,
      promoCode: 'WANDER20',
      taxesAndFees: 211.39,
      totalPaid: 2853.79
    },
    status: 'Confirmed',
    createdAt: '2026-10-20T10:15:00.000Z'
  },
  {
    id: 'BK-33593',
    packageId: 'pkg-3',
    packageTitle: 'Majestic Swiss Alps: Matterhorn & Glacier Express Expedition',
    destinationName: 'Swiss Alps, Switzerland',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    travelDate: '2026-11-20',
    adults: 2,
    children: 0,
    roomTier: 'standard',
    roomTierLabel: 'Standard Alpine Suite (Included)',
    addOns: ['Full Travel Protection Insurance'],
    customer: {
      fullName: 'Ananya Iyer',
      email: 'ananya.iyer@outlook.com',
      phone: '+91 98450 71234',
      country: 'India'
    },
    paymentMethod: 'NetBanking (HDFC Bank)',
    pricing: {
      basePrice: 2150,
      adultsCount: 2,
      baseTotal: 4300,
      childrenDiscount: 0,
      roomUpgrade: 0,
      addOnsTotal: 120,
      subtotal: 4420,
      discount: 884,
      promoCode: 'WANDER20',
      taxesAndFees: 282.88,
      totalPaid: 3818.88
    },
    status: 'Confirmed',
    createdAt: '2026-10-22T14:30:00.000Z'
  }
];

export const COMMUNITY_STORIES = [
  {
    id: 'story-1',
    traveler: 'Priya & Arjun Kapoor',
    handle: '@priya.wanderlust',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    location: 'Positano, Italy',
    caption: 'Private vintage yacht cruising around Capri Faraglioni rocks at sunset with chilled limoncello.',
    likes: '2.8k',
    overlayIcons: [
      { name: 'Sailboat', label: 'Private Yacht' },
      { name: 'Wine', label: 'Prosecco Sunset' },
      { name: 'Camera', label: 'Scenic View' }
    ]
  },
  {
    id: 'story-2',
    traveler: 'Kabir Verma',
    handle: '@kabir.lens',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    location: 'Zermatt, Switzerland',
    caption: 'Matterhorn mirror reflection at Riffelsee before boarding the Glacier Express Excellence Class.',
    likes: '3.9k',
    overlayIcons: [
      { name: 'Mountain', label: 'Glacier Peak' },
      { name: 'Snowflake', label: 'Powder Snow' },
      { name: 'Utensils', label: 'Alpine Fondue' }
    ]
  },
  {
    id: 'story-3',
    traveler: 'Meera Singhania',
    handle: '@meera.zen',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    location: 'Ubud, Bali',
    caption: 'Morning floating breakfast in our rainforest pool villa overlooking the jungle mist in Bali.',
    likes: '4.6k',
    overlayIcons: [
      { name: 'Palmtree', label: 'Jungle Villa' },
      { name: 'Sparkles', label: 'Floating Breakfast' },
      { name: 'Heart', label: 'Soul Healing' }
    ]
  },
  {
    id: 'story-4',
    traveler: 'Aarav & Tanvi Deshmukh',
    handle: '@aarav.tanvi',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    location: 'Kyoto, Japan',
    caption: 'Early morning tranquility along 10,000 vermilion Torii gates at Fushimi Inari Taisha.',
    likes: '3.2k',
    overlayIcons: [
      { name: 'Landmark', label: 'Torii Shrines' },
      { name: 'Compass', label: 'Zen Walk' },
      { name: 'Camera', label: 'Golden Hour' }
    ]
  },
  {
    id: 'story-5',
    traveler: 'Dr. Vikramaditya Sen',
    handle: '@vikram.wildlife',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    location: 'Serengeti, Tanzania',
    caption: 'Sunrise hot air balloon drifting over the Great Migration savanna herds across the Mara River.',
    likes: '5.8k',
    overlayIcons: [
      { name: 'Compass', label: 'Big Five Safari' },
      { name: 'Sun', label: 'Balloon Sunrise' },
      { name: 'Camera', label: 'Savanna Wildlife' }
    ]
  },
  {
    id: 'story-6',
    traveler: 'Ananya Iyer',
    handle: '@ananya.journeys',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    location: 'Oia, Santorini',
    caption: 'Infinity pool sunset overlooking the volcanic caldera and whitewashed Aegean bell towers.',
    likes: '7.1k',
    overlayIcons: [
      { name: 'Waves', label: 'Infinity Pool' },
      { name: 'Wine', label: 'Caldera Wine' },
      { name: 'Heart', label: 'Romantic Vibe' }
    ]
  }
];

export const TRAVEL_VIBES = [
  {
    id: 'vibe-1',
    title: 'Honeymoon & Romantic Calderas',
    tag: 'Couples & Honeymoon',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    destination: 'Santorini & Amalfi Coast',
    overlayIcons: ['Heart', 'Wine', 'Waves'],
    activityHighlights: ['Private Infinity Pool', 'Sunset Catamaran', 'Cliffside Dining']
  },
  {
    id: 'vibe-2',
    title: 'High-Altitude Alpine Expeditions',
    tag: 'Mountain & Adventure',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80',
    destination: 'Swiss Alps & Interlaken',
    overlayIcons: ['Mountain', 'Snowflake', 'Compass'],
    activityHighlights: ['Glacier Express Rail', 'Top of Europe 3,454m', 'Matterhorn Hike']
  },
  {
    id: 'vibe-3',
    title: 'Tropical Jungle & Island Sanctuaries',
    tag: 'Rainforest & Wellness',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    destination: 'Bali & Nusa Penida',
    overlayIcons: ['Palmtree', 'Sparkles', 'Waves'],
    activityHighlights: ['Rainforest Villa Pool', 'Floating Breakfast', 'Holy Water Cleansing']
  },
  {
    id: 'vibe-4',
    title: 'Sacred Temples & Metropole Neon',
    tag: 'Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    destination: 'Kyoto & Tokyo Blossom',
    overlayIcons: ['Landmark', 'Compass', 'Camera'],
    activityHighlights: ['First Class Bullet Train', 'Kaiseki Onsen Ryokan', 'Zen Tea Masterclass']
  },
  {
    id: 'vibe-5',
    title: 'Untamed Savanna & Big Five Safaris',
    tag: 'Wilderness & Nature',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80',
    destination: 'Serengeti & Ngorongoro',
    overlayIcons: ['Compass', 'Sun', 'Camera'],
    activityHighlights: ['Sunrise Hot Air Balloon', 'Ngorongoro Crater 4x4', 'Luxury Tented Lodge']
  }
];

// Featured 5-Star Luxury Villas & Signature Hotels
export const FEATURED_HOTELS = [
  {
    id: 'hotel-1',
    name: 'Canaves Oia Epitome',
    destination: 'Santorini, Greece',
    badge: '5-Star Ultra Luxury',
    pricePerNight: 1450,
    rating: 4.98,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Private Caldera Pool Villa',
    overlayIcons: [
      { name: 'Waves', label: 'Infinity Plunge Pool' },
      { name: 'Wine', label: 'Sunset Sommelier' },
      { name: 'Sparkles', label: '24/7 Butler' }
    ],
    highlights: ['Aegean Sunset Views', 'Private Heliport', 'Michelin-Trained Chef']
  },
  {
    id: 'hotel-2',
    name: 'The Chedi Andermatt',
    destination: 'Swiss Alps, Switzerland',
    badge: 'Alpine Grandeur',
    pricePerNight: 1890,
    rating: 4.96,
    reviews: 240,
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Matterhorn View Chalet',
    overlayIcons: [
      { name: 'Mountain', label: 'Glacier Panorama' },
      { name: 'Snowflake', label: 'Heated Hydrotherapy' },
      { name: 'Flame', label: 'Granite Fireplace' }
    ],
    highlights: ['2,400m² Tibetan Spa', 'Ski-in Ski-out Butler', 'Cheese Humidor']
  },
  {
    id: 'hotel-3',
    name: 'Mandapa, a Ritz-Carlton Reserve',
    destination: 'Ubud, Bali',
    badge: 'Rainforest Sanctuary',
    pricePerNight: 1250,
    rating: 4.99,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Ayung River Pool Villa',
    overlayIcons: [
      { name: 'Palmtree', label: 'Jungle Canopy' },
      { name: 'Waves', label: 'Riverfront Deck' },
      { name: 'Sparkles', label: 'Patih Butler Service' }
    ],
    highlights: ['Private Rice Paddy Terraces', 'Sacred Water Blessing', 'Kubu Organic Dining']
  },
  {
    id: 'hotel-4',
    name: 'Hoshinoya Kyoto',
    destination: 'Kyoto, Japan',
    badge: 'Historic Riverside Ryokan',
    pricePerNight: 1620,
    rating: 4.95,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Oi River Wooden Pavilion',
    overlayIcons: [
      { name: 'Compass', label: 'Private Boat Access' },
      { name: 'Utensils', label: 'Kaiseki Banquet' },
      { name: 'Landmark', label: 'Arashiyama Forest' }
    ],
    highlights: ['Cedarwood Onsen Bath', 'Zen Tea Master Ceremony', 'Kimono Concierge']
  },
  {
    id: 'hotel-5',
    name: 'Villa Franca Positano',
    destination: 'Amalfi Coast, Italy',
    badge: 'Cliffside Splendor',
    pricePerNight: 1780,
    rating: 4.94,
    reviews: 167,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Rooftop Panoramic Suite',
    overlayIcons: [
      { name: 'Waves', label: 'Capri Sea View' },
      { name: 'Wine', label: 'Limoncello Lounge' },
      { name: 'Camera', label: 'Faraglioni Sunset' }
    ],
    highlights: ['Rooftop Sky Pool', 'Li Galli Michelin Restaurant', 'Private Riva Yacht']
  },
  {
    id: 'hotel-6',
    name: 'Singita Sasakwa Lodge',
    destination: 'Serengeti, Tanzania',
    badge: 'Edwardian Safari Palace',
    pricePerNight: 2850,
    rating: 5.0,
    reviews: 130,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
    overlayBadge: 'Savanna Hilltop Manor',
    overlayIcons: [
      { name: 'Compass', label: 'Big 5 Tracker' },
      { name: 'Sun', label: 'Private Bush Deck' },
      { name: 'Sparkles', label: 'Vintage Cellar' }
    ],
    highlights: ['Private 350,000-Acre Reserve', 'Equestrian Safari', 'Heated Rim-Flow Pool']
  }
];

// Curated Editorial Guides & Bucket List Insights
export const TRAVEL_GUIDES = [
  {
    id: 'guide-1',
    title: 'The Secret Caldera: 7 Hidden Sunset Coves in Santorini',
    author: 'Priya Patel',
    authorRole: 'Senior Luxury Travel Curator',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
    readTime: '4 Min Read',
    category: 'Hidden Gems',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80',
    overlayIcons: [
      { name: 'Camera', label: 'Photo Spots' },
      { name: 'Wine', label: 'Sunset Coves' }
    ],
    summary: 'Escape the crowds in Oia and discover secluded volcanic coves, private sea caves, and cliffside taverns known only to local boatmen.'
  },
  {
    id: 'guide-2',
    title: 'First-Class Across the Alps: The Glacier Express Excellence Guide',
    author: 'Rohan Nambiar',
    authorRole: 'Alpine Expedition Specialist',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    readTime: '6 Min Read',
    category: 'Scenic Rail',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80',
    overlayIcons: [
      { name: 'Mountain', label: 'Panoramic Rail' },
      { name: 'Sparkles', label: 'Excellence Class' }
    ],
    summary: 'Everything you need to know about the world-renowned panoramic train journey through 291 bridges, 91 tunnels, and the Swiss Rhine Gorge.'
  },
  {
    id: 'guide-3',
    title: 'Sacred Kyoto: Zen Tea Ceremonies & Private Bamboo Trails',
    author: 'Nisha Krishnan',
    authorRole: 'Asian Culture & Heritage Director',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    readTime: '5 Min Read',
    category: 'Culture & Zen',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
    overlayIcons: [
      { name: 'Compass', label: 'Ancient Shrines' },
      { name: 'Utensils', label: 'Tea Master' }
    ],
    summary: 'A curated journey into Kyoto’s secret garden pavilions, centuries-old Uji matcha estates, and sunrise strolls before temple doors open.'
  },
  {
    id: 'guide-4',
    title: 'Serengeti From Above: The Ultimate Dawn Balloon Expedition',
    author: 'Devrat Sen',
    authorRole: 'Wildlife Expedition Leader',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    readTime: '7 Min Read',
    category: 'Wilderness',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
    overlayIcons: [
      { name: 'Sun', label: 'Sunrise Flight' },
      { name: 'Compass', label: 'Migration Tracking' }
    ],
    summary: 'Float silently above golden acacia treetops as millions of wildebeests, lions, and giraffes awaken in the world’s greatest wilderness.'
  }
];
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-components-common-navbar-jsx"></a>
## File: `src/components/common/Navbar.jsx`

**Category**: Common Components & Navigation  
**Description**: Responsive navbar with mobile/tab drawer, AI Matcher trigger, wishlist counter, active bookings badge, and currency selector.  
**Lines**: 1 | **Size**: 11.70 KB  

```jsx
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
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-components-common-footer-jsx"></a>
## File: `src/components/common/Footer.jsx`

**Category**: Common Components & Navigation  
**Description**: Luxury footer with trust badges, Indian contact numbers (+91), Mumbai/Bengaluru hubs, newsletter, and links.  
**Lines**: 1 | **Size**: 12.32 KB  

```jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlaneTakeoff, 
  Mail, 
  ShieldCheck, 
  Headphones, 
  CreditCard, 
  Heart,
  CheckCircle2,
  Sparkles,
  Camera,
  MapPin
} from 'lucide-react';
import { useBooking } from '../../context/BookingContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useBooking();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Subscribed! Promo code WANDER20 for 20% off has been applied to your session!', 'success');
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Newsletter Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-900/60 via-slate-900 to-cyan-950/60 border border-teal-500/20 p-8 sm:p-12 mb-16 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-semibold mb-3 border border-teal-500/20">
                <Sparkles className="w-3.5 h-3.5" /> Special Traveler Perks
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
                Unlock 20% Off Your First Luxury Journey
              </h3>
              <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
                Join our VIP club for exclusive private flash sales, secret destination guides, and early access to luxury villa bookings.
              </p>
            </div>

            <div className="w-full lg:w-auto shrink-0">
              {subscribed ? (
                <div className="flex items-center gap-3 bg-teal-500/20 border border-teal-500/40 text-teal-300 px-6 py-4 rounded-2xl shadow-inner">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">You're on the VIP Guestlist!</div>
                    <div className="text-xs text-teal-300">Use promo code <span className="font-mono bg-teal-900/80 px-1.5 py-0.5 rounded text-white font-bold">WANDER20</span> at checkout.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="w-full bg-slate-900/90 border border-slate-700 text-white rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 placeholder:text-slate-500"
                      required
                      id="newsletter-email-input"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-teal-500/20 whitespace-nowrap"
                    id="newsletter-submit-btn"
                  >
                    Claim VIP Access
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                <PlaneTakeoff className="w-5 h-5 text-teal-400 -rotate-12" />
              </div>
              <span className="text-2xl font-extrabold text-white font-display">
                Wander<span className="text-teal-400">Luxe</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Crafting extraordinary journeys to the world’s most coveted destinations. From Santorini cliffside suites to Serengeti savanna balloon flights.
            </p>
            
            {/* Trust points */}
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>100% Verified Stays &amp; Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-teal-400 shrink-0" />
                <span>24/7 Dedicated Concierge Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Secure 256-Bit Encrypted Payment Processing</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 font-display">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-teal-400 transition-colors">All Destinations</Link>
              </li>
              <li>
                <Link to="/destinations?tab=packages" className="hover:text-teal-400 transition-colors">Curated Packages</Link>
              </li>
              <li>
                <Link to="/my-bookings" className="hover:text-teal-400 transition-colors">Manage Bookings</Link>
              </li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 font-display">
              Featured Trips
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/packages/pkg-1" className="hover:text-teal-400 transition-colors">Santorini Dream</Link>
              </li>
              <li>
                <Link to="/packages/pkg-2" className="hover:text-teal-400 transition-colors">Bali Ubud &amp; Nusa</Link>
              </li>
              <li>
                <Link to="/packages/pkg-3" className="hover:text-teal-400 transition-colors">Swiss Alps Glacier</Link>
              </li>
              <li>
                <Link to="/packages/pkg-4" className="hover:text-teal-400 transition-colors">Kyoto &amp; Tokyo Route</Link>
              </li>
              <li>
                <Link to="/packages/pkg-6" className="hover:text-teal-400 transition-colors">Serengeti Safari</Link>
              </li>
            </ul>
          </div>

          {/* Contact / Help */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4 font-display">
              Concierge Desk
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-slate-300 font-medium">Available 24/7 Worldwide</li>
              <li><span className="text-slate-500">Toll Free:</span> 1800 258 7890 (India)</li>
              <li><span className="text-slate-500">WhatsApp:</span> +91 98201 98201</li>
              <li><span className="text-slate-500">Email:</span> concierge@wanderluxe.in</li>
              <li><span className="text-slate-500">Offices:</span> Nariman Point, Mumbai &amp; Indiranagar, Bengaluru</li>
            </ul>
          </div>

        </div>

        {/* Social Visual Gallery Strip with Overlaid Icons in Images */}
        <div className="py-10 border-b border-slate-800">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Follow @WanderLuxeJourneys • Live Field Gallery
              </span>
            </div>
            <span className="text-xs text-teal-400 font-semibold hover:underline cursor-pointer">
              #WanderLuxeMoments
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80', loc: 'Santorini', likes: '2.4k' },
              { img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=400&q=80', loc: 'Zermatt', likes: '1.9k' },
              { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80', loc: 'Bali', likes: '3.1k' },
              { img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80', loc: 'Kyoto', likes: '2.8k' },
              { img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80', loc: 'Amalfi', likes: '2.2k' },
              { img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=400&q=80', loc: 'Serengeti', likes: '4.5k' },
            ].map((item, idx) => (
              <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                <img src={item.img} alt={item.loc} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Overlaid Badges on Image */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="px-2 py-0.5 rounded-md text-[9px] font-bold bg-slate-950/80 backdrop-blur-md text-white border border-slate-700 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-teal-400" />
                    <span>{item.loc}</span>
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 z-10">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-950/80 backdrop-blur-md text-rose-300 border border-slate-700 flex items-center gap-1">
                    <Heart className="w-2.5 h-2.5 fill-rose-500 text-rose-500" />
                    <span>{item.likes}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} WanderLuxe Inc. All rights reserved. Built with React &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Cookie Preferences</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-components-common-toast-jsx"></a>
## File: `src/components/common/Toast.jsx`

**Category**: Common Components & Navigation  
**Description**: Floating notification toast for booking actions, wishlist updates, and alerts.  
**Lines**: 1 | **Size**: 1.51 KB  

```jsx
import React from 'react';
import { useBooking } from '../../context/BookingContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast, clearToast } = useBooking();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-bounce-once">
      <div
        className={`flex items-start gap-3 p-4 rounded-xl shadow-2xl border backdrop-blur-md transition-all ${
          isSuccess
            ? 'bg-teal-900/95 border-teal-500/40 text-teal-50 shadow-teal-900/30'
            : isError
            ? 'bg-rose-900/95 border-rose-500/40 text-rose-50 shadow-rose-900/30'
            : 'bg-slate-900/95 border-slate-700 text-slate-100 shadow-slate-900/30'
        }`}
      >
        <div className="mt-0.5 shrink-0">
          {isSuccess && <CheckCircle2 className="w-5 h-5 text-teal-400" />}
          {isError && <AlertCircle className="w-5 h-5 text-rose-400" />}
          {!isSuccess && !isError && <Info className="w-5 h-5 text-cyan-400" />}
        </div>
        <div className="flex-1 text-sm font-medium leading-relaxed">
          {toast.message}
        </div>
        <button
          onClick={clearToast}
          className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-components-common-wishlistdrawer-jsx"></a>
## File: `src/components/common/WishlistDrawer.jsx`

**Category**: Common Components & Navigation  
**Description**: Slide-out drawer displaying favorited destinations and packages with quick book links.  
**Lines**: 1 | **Size**: 6.43 KB  

```jsx
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
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-components-common-tripmatchermodal-jsx"></a>
## File: `src/components/common/TripMatcherModal.jsx`

**Category**: Common Components & Navigation  
**Description**: Interactive 3-question AI travel quiz that recommends tailor-made packages.  
**Lines**: 1 | **Size**: 14.54 KB  

```jsx
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
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-components-home-liveweatherticker-jsx"></a>
## File: `src/components/home/LiveWeatherTicker.jsx`

**Category**: Feature Components  
**Description**: Live atmospheric weather ticker displaying real-time weather at luxury destinations.  
**Lines**: 1 | **Size**: 2.02 KB  

```jsx
import React, { useState, useEffect } from 'react';
import { Sun, CloudRain, Snowflake, Wind, Clock, Compass, Sparkles } from 'lucide-react';

const DESTINATION_WEATHERS = [
  { city: 'Santorini, GR', temp: '25°C / 77°F', cond: 'Sunset Golden Hour', icon: Sun, vibe: 'Sunset in 1h 15m' },
  { city: 'Zermatt, CH', temp: '-2°C / 28°F', cond: 'Fresh Alpine Powder', icon: Snowflake, vibe: 'Matterhorn Clear' },
  { city: 'Bali, ID', temp: '29°C / 84°F', cond: 'Tropical Ocean Breeze', icon: Wind, vibe: 'Perfect Surf' },
  { city: 'Kyoto, JP', temp: '20°C / 68°F', cond: 'Crisp Temple Mist', icon: Sun, vibe: 'Cherry Blossom Bloom' },
  { city: 'Amalfi Coast, IT', temp: '23°C / 73°F', cond: 'Mediterranean Sun', icon: Sun, vibe: 'Yacht Cruising' },
  { city: 'Serengeti, TZ', temp: '28°C / 82°F', cond: 'Golden Savanna', icon: Compass, vibe: 'Migration Active' }
];

export default function LiveWeatherTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DESTINATION_WEATHERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const current = DESTINATION_WEATHERS[currentIndex];
  const Icon = current.icon;

  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-teal-500/30 text-white backdrop-blur-md shadow-lg shadow-teal-500/10 text-xs transition-all duration-300">
      <div className="flex items-center gap-1.5 text-teal-400 font-bold">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
        <span className="uppercase tracking-wider text-[10px]">Live Global Feed:</span>
      </div>

      <div className="flex items-center gap-2 font-medium">
        <span className="font-bold text-slate-100">{current.city}</span>
        <span className="text-teal-300 font-mono font-bold">{current.temp}</span>
        <span className="hidden sm:inline text-slate-400">• {current.vibe}</span>
      </div>
    </div>
  );
}
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-components-destination-destinationcard-jsx"></a>
## File: `src/components/destination/DestinationCard.jsx`

**Category**: Feature Components  
**Description**: Card component for destinations with overlaid icons, wishlist button, and rating badges.  
**Lines**: 1 | **Size**: 8.12 KB  

```jsx
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
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-components-package-packagecard-jsx"></a>
## File: `src/components/package/PackageCard.jsx`

**Category**: Feature Components  
**Description**: Package card with photo gallery, itinerary preview, inclusions, price, and booking CTA.  
**Lines**: 1 | **Size**: 9.58 KB  

```jsx
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
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-components-package-packingchecklistmodal-jsx"></a>
## File: `src/components/package/PackingChecklistModal.jsx`

**Category**: Feature Components  
**Description**: Interactive packing checklist modal with weather-specific recommendations and checklist items.  
**Lines**: 1 | **Size**: 6.49 KB  

```jsx
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
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-pages-homepage-jsx"></a>
## File: `src/pages/HomePage.jsx`

**Category**: Application Pages  
**Description**: Homepage with cinematic hero carousel, search widget, trust stats, curated travel vibes, popular destinations, and community stories.  
**Lines**: 1 | **Size**: 52.51 KB  

```jsx
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
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-pages-destinationspage-jsx"></a>
## File: `src/pages/DestinationsPage.jsx`

**Category**: Application Pages  
**Description**: Destinations and packages catalog with multi-facet filters (continent, style, price range, rating), tabs, and sorting.  
**Lines**: 1 | **Size**: 24.87 KB  

```jsx
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
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-pages-packagedetailpage-jsx"></a>
## File: `src/pages/PackageDetailPage.jsx`

**Category**: Application Pages  
**Description**: Comprehensive package detail page with photo gallery, day-by-day itinerary, hotel stays, inclusions, reviews, and sticky price calculator.  
**Lines**: 1 | **Size**: 47.34 KB  

```jsx
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
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-pages-bookingpage-jsx"></a>
## File: `src/pages/BookingPage.jsx`

**Category**: Application Pages  
**Description**: Reservation and checkout page with validation, traveler form, room tiers, add-ons, promo codes, and Indian payment options (UPI, QR, RuPay, NetBanking).  
**Lines**: 1 | **Size**: 54.92 KB  

```jsx
import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate, Link } from 'react-router-dom';
import { PACKAGES, PROMO_CODES } from '../data/travelData';
import { useBooking } from '../context/BookingContext';
import confetti from 'canvas-confetti';
import { 
  ShieldCheck, 
  CreditCard, 
  Calendar, 
  Users, 
  MapPin, 
  Sparkles, 
  Check, 
  AlertCircle, 
  Tag, 
  Lock, 
  ArrowRight,
  PlaneTakeoff,
  Clock,
  TicketCheck,
  Star,
  Award,
  Headphones,
  Waves,
  QrCode,
  Landmark
} from 'lucide-react';

export default function BookingPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addBooking, formatPrice, showToast } = useBooking();

  // Find package (or default to first)
  const pkg = PACKAGES.find((p) => p.id === id) || PACKAGES[0];

  // URL Initial State
  const initialAdults = parseInt(searchParams.get('adults') || '2', 10);
  const initialChildren = parseInt(searchParams.get('children') || '0', 10);
  const initialDate = searchParams.get('date') || '2026-11-20';
  const initialTier = searchParams.get('tier') || 'standard';

  // Form State (Defaulting to India)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'India',
    passportNumber: '',
    emergencyContact: '',
    specialRequests: ''
  });

  // Trip config
  const [travelDate, setTravelDate] = useState(initialDate);
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);
  const [roomTier, setRoomTier] = useState(initialTier);
  const [selectedAddOns, setSelectedAddOns] = useState({
    vipTransfer: false,
    insurance: true,
    privateTour: false
  });

  // Payment State (Defaults to UPI / QR for Indian Travelers)
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('HDFC Bank');
  const [cardData, setCardData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  // Promo Code State
  const [promoInput, setPromoInput] = useState('WANDER20');
  const [appliedPromo, setAppliedPromo] = useState('WANDER20');
  const [promoError, setPromoError] = useState('');

  // Form Validation & Errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingCompleted, setBookingCompleted] = useState(null);

  // Prices and calculations
  const addOnDetails = {
    vipTransfer: { label: 'Private VIP Chauffeur Airport Transfer', price: 85 },
    insurance: { label: 'Comprehensive Worldwide Travel Protection', price: 120 },
    privateTour: { label: 'Private Sommelier & Sunset Yacht Cruise Upgrade', price: 190 }
  };

  const roomTierDetails = {
    standard: { label: 'Standard Luxury Suite', price: 0 },
    deluxe: { label: 'Deluxe Sea View Suite', price: 300 },
    luxuryVilla: { label: 'Penthouse Presidential Villa', price: 650 }
  };

  // Dynamic Price Breakdown
  const baseAdultsCost = pkg.price * adults;
  const baseChildrenCost = Math.round(pkg.price * 0.7) * children;
  const roomUpgradeCost = roomTierDetails[roomTier]?.price || 0;

  let addOnsTotal = 0;
  if (selectedAddOns.vipTransfer) addOnsTotal += addOnDetails.vipTransfer.price;
  if (selectedAddOns.insurance) addOnsTotal += addOnDetails.insurance.price;
  if (selectedAddOns.privateTour) addOnsTotal += addOnDetails.privateTour.price;

  const rawSubtotal = baseAdultsCost + baseChildrenCost + roomUpgradeCost + addOnsTotal;

  // Calculate discount
  let discountAmount = 0;
  if (appliedPromo && PROMO_CODES[appliedPromo]) {
    const promo = PROMO_CODES[appliedPromo];
    if (promo.discountPercent) {
      discountAmount = Math.round(rawSubtotal * (promo.discountPercent / 100));
    } else if (promo.discountFixed) {
      discountAmount = promo.discountFixed;
    }
  }

  const subtotalAfterDiscount = Math.max(0, rawSubtotal - discountAmount);
  const taxesAndFees = Math.round(subtotalAfterDiscount * 0.08); // 8% service tax & eco fees
  const finalTotal = subtotalAfterDiscount + taxesAndFees;

  // Handle promo code apply
  const handleApplyPromo = (e) => {
    e.preventDefault();
    const cleanCode = promoInput.trim().toUpperCase();
    if (!cleanCode) {
      setPromoError('Please enter a promo code');
      return;
    }
    if (PROMO_CODES[cleanCode]) {
      setAppliedPromo(cleanCode);
      setPromoError('');
      showToast(`Promo code ${cleanCode} applied!`, 'success');
    } else {
      setPromoError('Invalid promo code. Try "WANDER20" or "SUMMER10"');
    }
  };

  // Form input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Card input handler with auto formatting
  const handleCardChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') {
      // Format 16 digits into 4-digit chunks
      const digits = value.replace(/\D/g, '').slice(0, 16);
      const formatted = digits.replace(/(\d{4})/g, '$1 ').trim();
      setCardData((prev) => ({ ...prev, cardNumber: formatted }));
    } else if (name === 'expiry') {
      const digits = value.replace(/\D/g, '').slice(0, 4);
      let formatted = digits;
      if (digits.length >= 2) {
        formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
      }
      setCardData((prev) => ({ ...prev, expiry: formatted }));
    } else if (name === 'cvc') {
      const digits = value.replace(/\D/g, '').slice(0, 4);
      setCardData((prev) => ({ ...prev, cvc: digits }));
    } else {
      setCardData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Comprehensive Client-side Form Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full Name must be at least 3 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim() || phoneDigits.length < 8) {
      newErrors.phone = 'Please provide a valid phone number (min 8 digits).';
    }

    if (!formData.passportNumber.trim() || formData.passportNumber.trim().length < 4) {
      newErrors.passportNumber = 'Passport / ID number is required for international booking.';
    }

    if (!travelDate) {
      newErrors.travelDate = 'Please select a departure date.';
    }

    // Payment method validations
    if (paymentMethod === 'card') {
      if (!cardData.cardName.trim()) {
        newErrors.cardName = 'Name on card is required.';
      }
      const rawCardNum = cardData.cardNumber.replace(/\s/g, '');
      if (rawCardNum.length < 16) {
        newErrors.cardNumber = 'Card number must be 16 digits.';
      }
      if (!cardData.expiry || cardData.expiry.length < 5) {
        newErrors.expiry = 'Expiry date must be MM/YY.';
      }
      if (!cardData.cvc || cardData.cvc.length < 3) {
        newErrors.cvc = 'CVC must be 3 or 4 digits.';
      }
    } else if (paymentMethod === 'upi') {
      if (!upiId.trim() || !upiId.includes('@')) {
        newErrors.upiId = 'Please enter a valid UPI ID (e.g. yourname@okhdfcbank or 9820012345@paytm).';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submit Execution
  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast('Please fix the highlighted errors before submitting.', 'error');
      // Scroll to top of form
      window.scrollTo({ top: 200, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    // Simulate payment gateway authorization delay (1.2s)
    setTimeout(() => {
      setIsSubmitting(false);

      // Collect active add-ons
      const selectedAddOnNames = [];
      if (selectedAddOns.vipTransfer) selectedAddOnNames.push(addOnDetails.vipTransfer.label);
      if (selectedAddOns.insurance) selectedAddOnNames.push(addOnDetails.insurance.label);
      if (selectedAddOns.privateTour) selectedAddOnNames.push(addOnDetails.privateTour.label);

      const bookingRecord = {
        packageId: pkg.id,
        packageTitle: pkg.title,
        destinationName: `${pkg.destinationName}, ${pkg.country}`,
        heroImage: pkg.heroImage,
        travelDate,
        adults,
        children,
        roomTier,
        roomTierLabel: roomTierDetails[roomTier].label,
        addOns: selectedAddOnNames,
        customer: { ...formData },
        paymentMethod:
          paymentMethod === 'upi'
            ? `UPI / QR (${upiId || 'rohan@okhdfcbank'})`
            : paymentMethod === 'netbanking'
            ? `NetBanking (${selectedBank})`
            : paymentMethod === 'card'
            ? `Credit Card (•••• ${cardData.cardNumber.slice(-4) || '4242'})`
            : 'Zero Cost EMI (No Cost)',
        pricing: {
          basePrice: pkg.price,
          adultsCount: adults,
          childrenCount: children,
          baseAdultsCost,
          baseChildrenCost,
          roomUpgradeCost,
          addOnsTotal,
          rawSubtotal,
          discountAmount,
          promoCode: appliedPromo,
          taxesAndFees,
          totalPaid: finalTotal
        }
      };

      // Add to context and persist in localStorage
      const savedBooking = addBooking(bookingRecord);
      setBookingCompleted(savedBooking);

      // Confetti celebration
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.warn('Confetti error:', err);
      }
    }, 1200);
  };

  // Success Confirmation Screen
  if (bookingCompleted) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-slate-900 rounded-3xl p-8 sm:p-12 border border-teal-500/40 shadow-2xl text-center animate-fade-in relative overflow-hidden">
          
          <div className="w-20 h-20 bg-teal-500/20 text-teal-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Check className="w-10 h-10 stroke-[3]" />
          </div>

          <span className="px-3.5 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-2 border border-teal-500/30">
            Booking Confirmed &amp; Stored in LocalStorage
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            You're Going to {pkg.destinationName}!
          </h2>

          <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
            Your luxury booking reference is <strong className="text-teal-400 font-mono text-base">{bookingCompleted.id}</strong>. We've recorded your itinerary and saved your digital pass in <span className="font-semibold text-white">My Bookings</span>.
          </p>

          {/* Ticket Summary Card */}
          <div className="mt-8 p-6 bg-slate-950/70 rounded-2xl border border-slate-800 text-left space-y-3">
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <span className="text-xs text-slate-400 uppercase font-bold">Package</span>
              <span className="text-xs font-bold text-white truncate max-w-[200px]">{bookingCompleted.packageTitle}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Departure Date</span>
              <span className="font-bold text-teal-300">{bookingCompleted.travelDate}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Guests</span>
              <span className="font-bold text-white">{bookingCompleted.adults} Adults {bookingCompleted.children > 0 ? `, ${bookingCompleted.children} Children` : ''}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Lead Passenger</span>
              <span className="font-bold text-white">{bookingCompleted.customer.fullName}</span>
            </div>
            <div className="flex justify-between items-center text-xs pt-3 border-t border-slate-800">
              <span className="text-sm font-bold text-white">Total Amount Paid</span>
              <span className="text-xl font-extrabold text-teal-400 font-display">
                {formatPrice(bookingCompleted.pricing.totalPaid)}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/my-bookings')}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 font-extrabold rounded-2xl shadow-xl shadow-teal-500/25 transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
              id="success-view-bookings-btn"
            >
              <TicketCheck className="w-4 h-4" />
              <span>View in My Bookings</span>
            </button>
            <button
              onClick={() => navigate('/destinations')}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-2xl transition-colors text-xs sm:text-sm"
            >
              Explore More Trips
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20">
      
      {/* Top Breadcrumb */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-3">
        <nav className="flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link to="/" className="hover:text-teal-400">Home</Link>
          <span>/</span>
          <Link to="/destinations" className="hover:text-teal-400">Destinations</Link>
          <span>/</span>
          <Link to={`/packages/${pkg.id}`} className="hover:text-teal-400">{pkg.destinationName}</Link>
          <span>/</span>
          <span className="text-white font-bold">Secure Reservation</span>
        </nav>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mt-2">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> 256-Bit SSL Encrypted Checkout
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display">
            Complete Your Luxury Reservation
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Fill in your traveler contact details and payment method for instant trip confirmation.
          </p>
        </div>

        <form onSubmit={handleSubmitBooking} noValidate>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Columns: Traveler, Dates, Add-ons, Payment */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Selected Package Card Preview with Overlaid Icons on Image */}
              <div className="bg-slate-900/90 rounded-3xl p-6 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center gap-5 backdrop-blur-md">
                <div className="relative w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0 bg-slate-950">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
                  
                  {/* Overlaid Badges Directly on Image */}
                  <div className="absolute top-2 left-2 z-10">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/25 backdrop-blur-md text-teal-300 border border-teal-500/40 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-teal-400" />
                      <span>VIP 5★</span>
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 z-10">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-white border border-slate-700 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{pkg.rating}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 z-10">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-slate-200 border border-slate-700 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-teal-400" />
                      <span>{pkg.duration}</span>
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" /> {pkg.destinationName}, {pkg.country}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display line-clamp-1">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-2">
                    <span className="flex items-center gap-1 text-slate-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> Instant Confirmation
                    </span>
                    <span>•</span>
                    <span className="text-teal-400 font-bold">
                      {formatPrice(pkg.price)} / person
                    </span>
                  </div>
                </div>
                <Link
                  to="/destinations?tab=packages"
                  className="text-xs font-bold text-teal-400 hover:text-teal-300 hover:underline shrink-0"
                >
                  Change Package
                </Link>
              </div>

              {/* Section 1: Lead Traveler Contact Details */}
              <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-5 backdrop-blur-md text-white">
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <Users className="w-5 h-5 text-teal-400" />
                  <span>1. Traveler Contact Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Full Legal Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rohan Sharma"
                      className={`w-full bg-slate-800/90 border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:bg-slate-800 transition-colors ${
                        errors.fullName ? 'border-rose-500 bg-rose-500/10' : 'border-slate-700 focus:border-teal-400'
                      }`}
                      id="input-fullname"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="rohan.sharma@gmail.com"
                      className={`w-full bg-slate-800/90 border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:bg-slate-800 transition-colors ${
                        errors.email ? 'border-rose-500 bg-rose-500/10' : 'border-slate-700 focus:border-teal-400'
                      }`}
                      id="input-email"
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Phone Number (WhatsApp Active) <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98201 45892"
                      className={`w-full bg-slate-800/90 border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:bg-slate-800 transition-colors ${
                        errors.phone ? 'border-rose-500 bg-rose-500/10' : 'border-slate-700 focus:border-teal-400'
                      }`}
                      id="input-phone"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Nationality / Country */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Nationality / Residence
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-teal-400"
                      id="input-country"
                    >
                      <option value="India">India (Default)</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Singapore">Singapore</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other Country</option>
                    </select>
                  </div>

                  {/* Passport / National ID */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Passport / National ID / Aadhaar <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="passportNumber"
                      value={formData.passportNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. A98234710 / Aadhaar No."
                      className={`w-full bg-slate-800/90 border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:bg-slate-800 transition-colors ${
                        errors.passportNumber ? 'border-rose-500 bg-rose-500/10' : 'border-slate-700 focus:border-teal-400'
                      }`}
                      id="input-passport"
                    />
                    {errors.passportNumber && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.passportNumber}
                      </p>
                    )}
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Emergency Contact Name &amp; Phone
                    </label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      placeholder="e.g. Priya Sharma (+91 98450 12345)"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Dietary Requirements or Special Requests
                  </label>
                  <textarea
                    rows="2"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="e.g. Vegetarian breakfast, celebrating 10th anniversary, high floor preference..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400"
                  />
                </div>
              </div>

              {/* Section 2: Trip Customization & Add-ons */}
              <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-5 backdrop-blur-md text-white">
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-teal-400" />
                  <span>2. Dates &amp; Room Customization</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Date */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Departure Date
                    </label>
                    <input
                      type="date"
                      value={travelDate}
                      min="2026-11-01"
                      onChange={(e) => setTravelDate(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-teal-400"
                    />
                  </div>

                  {/* Adults */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Adults
                    </label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-teal-400 cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                        <option key={num} value={num} className="bg-slate-950 text-white">{num} Adult{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  {/* Children */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Children (30% off)
                    </label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white focus:outline-none focus:border-teal-400 cursor-pointer"
                    >
                      {[0, 1, 2, 3, 4].map((num) => (
                        <option key={num} value={num} className="bg-slate-950 text-white">{num} Child{num !== 1 ? 'ren' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Room Tier Upgrade Selection */}
                <div className="pt-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Select Accommodation Tier
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {Object.keys(roomTierDetails).map((tierKey) => {
                      const tier = roomTierDetails[tierKey];
                      const isSelected = roomTier === tierKey;
                      return (
                        <div
                          key={tierKey}
                          onClick={() => setRoomTier(tierKey)}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'border-teal-400 bg-teal-500/20 text-white shadow-glow'
                              : 'border-slate-800 bg-slate-800/60 hover:bg-slate-800 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-white">{tier.label}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-teal-400 bg-teal-500 text-slate-950' : 'border-slate-600'}`}>
                              {isSelected && <Check className="w-3 h-3 text-slate-950 font-black" />}
                            </div>
                          </div>
                          <span className="text-xs text-teal-300 font-bold">
                            {tier.price === 0 ? 'Included' : `+${formatPrice(tier.price)}`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Add-ons */}
                <div className="pt-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Enhance Your Journey with Add-ons
                  </label>
                  <div className="space-y-2">
                    {Object.keys(addOnDetails).map((key) => {
                      const item = addOnDetails[key];
                      const isChecked = selectedAddOns[key];
                      return (
                        <label
                          key={key}
                          className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-800 bg-slate-800/40 hover:bg-slate-800/80 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={(e) =>
                                setSelectedAddOns((prev) => ({
                                  ...prev,
                                  [key]: e.target.checked
                                }))
                              }
                              className="accent-teal-400 rounded w-4 h-4"
                            />
                            <span className="text-xs font-semibold text-slate-200">{item.label}</span>
                          </div>
                          <span className="text-xs font-bold text-teal-300">+{formatPrice(item.price)}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Section 3: Payment Simulation Gateway */}
              <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-5 backdrop-blur-md text-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                    <Lock className="w-5 h-5 text-teal-400" />
                    <span>3. Payment Method</span>
                  </h3>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-4 h-4 text-teal-400" /> 256-Bit SSL
                  </span>
                </div>

                {/* Payment Type Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'upi', label: 'UPI & QR Pay', icon: QrCode, badge: 'Fastest' },
                    { id: 'netbanking', label: 'NetBanking', icon: Landmark },
                    { id: 'card', label: 'Cards (RuPay)', icon: CreditCard },
                    { id: 'emi', label: 'No Cost EMI', icon: ShieldCheck }
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-3 rounded-2xl border font-bold text-xs flex flex-col items-center justify-center gap-1.5 transition-all relative ${
                          paymentMethod === method.id
                            ? 'border-teal-400 bg-teal-500/20 text-white shadow-glow'
                            : 'border-slate-800 bg-slate-800/50 hover:bg-slate-800 text-slate-400'
                        }`}
                      >
                        {method.badge && (
                          <span className="absolute -top-1.5 right-1 px-1.5 py-0.2 bg-teal-400 text-slate-950 text-[9px] font-black rounded-full shadow-sm">
                            {method.badge}
                          </span>
                        )}
                        <Icon className="w-4 h-4 text-teal-400" />
                        <span className="text-[11px] sm:text-xs text-center">{method.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* UPI & QR Pay Option */}
                {paymentMethod === 'upi' && (
                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                        Enter UPI VPA / ID <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          placeholder="e.g. rohan@okhdfcbank or 9820145892@paytm"
                          className={`w-full bg-slate-800/90 border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:bg-slate-800 ${
                            errors.upiId ? 'border-rose-500 bg-rose-500/10' : 'border-slate-700 focus:border-teal-400'
                          }`}
                          id="input-upi-id"
                        />
                      </div>
                      {errors.upiId && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.upiId}</p>
                      )}

                      {/* Quick UPI Handle suggestions */}
                      <div className="flex items-center gap-1.5 flex-wrap mt-2 text-[11px] text-slate-400">
                        <span>Quick handles:</span>
                        {['@okhdfcbank', '@okicici', '@paytm', '@ybl'].map((h) => (
                          <button
                            key={h}
                            type="button"
                            onClick={() => {
                              const base = upiId.includes('@') ? upiId.split('@')[0] : upiId || 'rohan';
                              setUpiId(`${base}${h}`);
                            }}
                            className="px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700 text-teal-300 transition-colors"
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* QR Code Scan Simulator Box */}
                    <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700 flex flex-col sm:flex-row items-center gap-4">
                      <div className="w-20 h-20 bg-white p-1.5 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                        <div className="w-full h-full border-2 border-dashed border-slate-900 rounded-lg flex flex-col items-center justify-center text-slate-900">
                          <QrCode className="w-8 h-8 text-slate-950" />
                          <span className="text-[8px] font-black uppercase tracking-tighter">BHIM UPI</span>
                        </div>
                      </div>
                      <div className="text-left text-xs">
                        <span className="font-bold text-white block">Scan &amp; Pay using Any UPI App</span>
                        <p className="text-slate-400 text-[11px] mt-0.5">
                          Open Google Pay, PhonePe, Paytm, CRED or BHIM to complete zero-friction authorization.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-2 py-0.5 rounded bg-teal-500/15 border border-teal-500/30 text-teal-300 text-[10px] font-bold">
                            Instant Approval
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-700 text-slate-300 text-[10px]">
                            Zero Surcharge
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* NetBanking Option */}
                {paymentMethod === 'netbanking' && (
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Select Your Preferred Indian Bank
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        'HDFC Bank',
                        'ICICI Bank',
                        'State Bank of India (SBI)',
                        'Axis Bank',
                        'Kotak Mahindra Bank',
                        'Punjab National Bank'
                      ].map((bank) => (
                        <button
                          key={bank}
                          type="button"
                          onClick={() => setSelectedBank(bank)}
                          className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all flex items-center justify-between ${
                            selectedBank === bank
                              ? 'border-teal-400 bg-teal-500/20 text-white shadow-sm'
                              : 'border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-300'
                          }`}
                        >
                          <span className="truncate">{bank}</span>
                          {selectedBank === bank && <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />}
                        </button>
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-400 pt-1">
                      You will be securely redirected to {selectedBank}'s retail netbanking gateway upon confirming.
                    </p>
                  </div>
                )}

                {/* Credit / Debit Card Fields */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4 pt-2">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                          Cardholder Name <span className="text-rose-400">*</span>
                        </label>
                        <span className="text-[10px] text-teal-300 font-semibold">RuPay / Visa / Mastercard / Amex</span>
                      </div>
                      <input
                        type="text"
                        name="cardName"
                        value={cardData.cardName}
                        onChange={handleCardChange}
                        placeholder="e.g. Rohan Sharma"
                        className={`w-full bg-slate-800/90 border rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:bg-slate-800 ${
                          errors.cardName ? 'border-rose-500 bg-rose-500/10' : 'border-slate-700 focus:border-teal-400'
                        }`}
                        id="input-cardname"
                      />
                      {errors.cardName && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.cardName}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                        Card Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={cardData.cardNumber}
                        onChange={handleCardChange}
                        placeholder="•••• •••• •••• •••• (16 Digits)"
                        className={`w-full bg-slate-800/90 border rounded-xl px-4 py-2.5 text-xs sm:text-sm font-mono text-white placeholder:text-slate-500 focus:outline-none focus:bg-slate-800 ${
                          errors.cardNumber ? 'border-rose-500 bg-rose-500/10' : 'border-slate-700 focus:border-teal-400'
                        }`}
                        id="input-cardnumber"
                      />
                      {errors.cardNumber && (
                        <p className="text-[11px] text-rose-400 mt-1">{errors.cardNumber}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          Expiry Date (MM/YY) <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          value={cardData.expiry}
                          onChange={handleCardChange}
                          placeholder="12/28"
                          className={`w-full bg-slate-800/90 border rounded-xl px-4 py-2.5 text-xs sm:text-sm font-mono text-white placeholder:text-slate-500 focus:outline-none focus:bg-slate-800 ${
                            errors.expiry ? 'border-rose-500 bg-rose-500/10' : 'border-slate-700 focus:border-teal-400'
                          }`}
                          id="input-cardexpiry"
                        />
                        {errors.expiry && (
                          <p className="text-[11px] text-rose-400 mt-1">{errors.expiry}</p>
                        )}
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                          CVC / CVV <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="password"
                          name="cvc"
                          value={cardData.cvc}
                          onChange={handleCardChange}
                          placeholder="•••"
                          className={`w-full bg-slate-800/90 border rounded-xl px-4 py-2.5 text-xs sm:text-sm font-mono text-white placeholder:text-slate-500 focus:outline-none focus:bg-slate-800 ${
                            errors.cvc ? 'border-rose-500 bg-rose-500/10' : 'border-slate-700 focus:border-teal-400'
                          }`}
                          id="input-cardcvc"
                        />
                        {errors.cvc && (
                          <p className="text-[11px] text-rose-400 mt-1">{errors.cvc}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Zero Cost EMI Option */}
                {paymentMethod === 'emi' && (
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Choose Your No-Cost EMI Plan
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { tenure: '3 Months', rate: '0% Interest', perMonth: Math.round(finalTotal / 3) },
                        { tenure: '6 Months', rate: '0% Interest', perMonth: Math.round(finalTotal / 6) },
                        { tenure: '9 Months', rate: '0% Interest', perMonth: Math.round(finalTotal / 9) },
                      ].map((plan, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-2xl border border-teal-500/30 bg-slate-800/70 text-left"
                        >
                          <span className="text-[10px] text-teal-400 font-extrabold uppercase block">{plan.rate}</span>
                          <span className="text-xs font-bold text-white block mt-0.5">{plan.tenure}</span>
                          <span className="text-sm font-extrabold text-teal-300 block mt-1">
                            {formatPrice(plan.perMonth)} <span className="text-[10px] font-normal text-slate-400">/ mo</span>
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-400">
                      Zero Cost EMI available across HDFC, ICICI, SBI, Axis, and Bajaj Finserv credit cards.
                    </p>
                  </div>
                )}
              </div>

            </div>

            {/* Right Sticky Column: Order Summary & Live Price Calculation */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-slate-900/95 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-2xl space-y-6 text-white backdrop-blur-xl">
                
                <h3 className="text-lg font-bold text-white font-display pb-3 border-b border-slate-800">
                  Price Calculation &amp; Summary
                </h3>

                {/* Promo Code Input */}
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1 flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-teal-400" /> Promo Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                      placeholder="e.g. WANDER20"
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono font-bold uppercase text-teal-300 focus:outline-none focus:border-teal-400"
                      id="input-promocode"
                    />
                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 text-xs font-extrabold transition-all shrink-0"
                      id="apply-promocode-btn"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <p className="text-[11px] text-teal-400 font-semibold mt-1">
                      ✓ Promo "{appliedPromo}" applied ({PROMO_CODES[appliedPromo]?.description})
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[11px] text-rose-400 mt-1">{promoError}</p>
                  )}
                </div>

                {/* Line Item Calculation */}
                <div className="space-y-2.5 text-xs text-slate-400 border-t border-slate-800 pt-4">
                  <div className="flex justify-between">
                    <span>Adults ({adults} × {formatPrice(pkg.price)})</span>
                    <span className="font-semibold text-white">{formatPrice(baseAdultsCost)}</span>
                  </div>

                  {children > 0 && (
                    <div className="flex justify-between">
                      <span>Children ({children} × {formatPrice(Math.round(pkg.price * 0.7))})</span>
                      <span className="font-semibold text-white">{formatPrice(baseChildrenCost)}</span>
                    </div>
                  )}

                  {roomUpgradeCost > 0 && (
                    <div className="flex justify-between">
                      <span>Room Upgrade ({roomTierDetails[roomTier].label})</span>
                      <span className="font-semibold text-white">+{formatPrice(roomUpgradeCost)}</span>
                    </div>
                  )}

                  {addOnsTotal > 0 && (
                    <div className="flex justify-between">
                      <span>Selected Add-ons</span>
                      <span className="font-semibold text-white">+{formatPrice(addOnsTotal)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-500 pt-1">
                    <span>Gross Subtotal</span>
                    <span>{formatPrice(rawSubtotal)}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-teal-400 font-bold">
                      <span>Discount ({appliedPromo})</span>
                      <span>-{formatPrice(discountAmount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span>Taxes &amp; Tourism Fees (8%)</span>
                    <span className="font-semibold text-white">+{formatPrice(taxesAndFees)}</span>
                  </div>

                  {/* Grand Total */}
                  <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
                    <span className="text-sm font-extrabold text-white">Total Payable:</span>
                    <span className="text-2xl font-extrabold text-teal-400 font-display">
                      {formatPrice(finalTotal)}
                    </span>
                  </div>
                </div>

                {/* Confirm Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-500 via-teal-400 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 font-extrabold py-4 rounded-2xl shadow-xl shadow-teal-500/25 transition-all flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-60 cursor-pointer"
                  id="confirm-booking-btn"
                >
                  {isSubmitting ? (
                    <span>Processing Secure Reservation...</span>
                  ) : (
                    <>
                      <span>Confirm &amp; Pay {formatPrice(finalTotal)}</span>
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </>
                  )}
                </button>

                {/* Trust Guarantee Badges */}
                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Free cancellation up to 14 days before departure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Best Price Guarantee &amp; Zero Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Headphones className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>24/7 Personal VIP Concierge Support</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </form>

      </div>

    </div>
  );
}
```

[⬆ Return to Table of Contents](#-table-of-contents)

---

<a id="src-pages-mybookingspage-jsx"></a>
## File: `src/pages/MyBookingsPage.jsx`

**Category**: Application Pages  
**Description**: My Bookings page synced with localStorage, status filtering, booking cancellation, and printable digital boarding passes.  
**Lines**: 1 | **Size**: 23.59 KB  

```jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { PACKAGES } from '../data/travelData';
import PackageCard from '../components/package/PackageCard';
import { 
  TicketCheck, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  AlertCircle, 
  Printer, 
  X, 
  Trash2, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  QrCode,
  CheckCircle2,
  Check,
  DollarSign,
  Download,
  Share2,
  Star,
  ArrowRight,
  Plane
} from 'lucide-react';

export default function MyBookingsPage() {
  const { bookings, cancelBooking, deleteBooking, formatPrice, showToast } = useBooking();
  const navigate = useNavigate();

  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'confirmed', 'cancelled'
  const [selectedBookingForReceipt, setSelectedBookingForReceipt] = useState(null);
  const [cancelModalBooking, setCancelModalBooking] = useState(null);

  // Filtered bookings
  const filteredBookings = bookings.filter((b) => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'confirmed') return b.status === 'Confirmed';
    if (filterStatus === 'cancelled') return b.status === 'Cancelled';
    return true;
  });

  const handleConfirmCancel = () => {
    if (cancelModalBooking) {
      cancelBooking(cancelModalBooking.id);
      setCancelModalBooking(null);
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20">
      
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-3">
            <TicketCheck className="w-3.5 h-3.5 text-teal-400" /> Persistent LocalStorage Sync
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display">
            My Travel Bookings
          </h1>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
            Manage your booked itineraries, view official boarding passes, and download receipts.
          </p>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mt-8">
        
        {/* Status Filter Tabs */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800 gap-4 flex-wrap">
          <div className="flex items-center bg-slate-900 p-1 rounded-2xl border border-slate-800 shadow-sm">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filterStatus === 'all'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 shadow-md shadow-teal-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({bookings.length})
            </button>
            <button
              onClick={() => setFilterStatus('confirmed')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filterStatus === 'confirmed'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-950 shadow-md shadow-teal-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Confirmed ({bookings.filter((b) => b.status === 'Confirmed').length})
            </button>
            <button
              onClick={() => setFilterStatus('cancelled')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filterStatus === 'cancelled'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cancelled ({bookings.filter((b) => b.status === 'Cancelled').length})
            </button>
          </div>

          <button
            onClick={() => navigate('/destinations')}
            className="text-xs font-bold text-teal-300 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <span>Book Another Journey</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bookings List */}
        <div className="mt-8 space-y-6">
          {filteredBookings.length === 0 ? (
            <div className="bg-slate-900/80 rounded-3xl p-12 text-center border border-slate-800 shadow-xl max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto mb-4">
                <TicketCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">No Bookings Found</h3>
              <p className="text-slate-400 text-xs mt-1">
                {filterStatus === 'all'
                  ? "You haven't made any travel reservations yet. Start exploring our handpicked destinations!"
                  : `You have no ${filterStatus} bookings.`}
              </p>
              <button
                onClick={() => navigate('/destinations')}
                className="mt-6 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 font-extrabold rounded-xl text-xs transition-colors shadow-lg shadow-teal-500/20"
              >
                Explore Destinations
              </button>
            </div>
          ) : (
            filteredBookings.map((booking) => {
              const isConfirmed = booking.status === 'Confirmed';
              return (
                <div
                  key={booking.id}
                  className="bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl hover:border-teal-500/40 transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 backdrop-blur-md"
                  id={`booking-card-${booking.id}`}
                >
                  {/* Left: Package Media & Basic Details with Overlaid Badges */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full lg:w-auto">
                    <div className="relative w-full sm:w-48 h-32 rounded-2xl overflow-hidden shrink-0 bg-slate-950">
                      <img
                        src={booking.heroImage}
                        alt={booking.packageTitle}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
                      
                      {/* Overlaid Status Badge on Image */}
                      <div className="absolute top-2 left-2 z-10">
                        <span
                          className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 backdrop-blur-md shadow-md ${
                            isConfirmed
                              ? 'bg-teal-500 text-slate-950 font-black'
                              : 'bg-rose-600 text-white'
                          }`}
                        >
                          {isConfirmed ? (
                            <CheckCircle2 className="w-3 h-3 text-slate-950 stroke-[3]" />
                          ) : (
                            <AlertCircle className="w-3 h-3 text-white" />
                          )}
                          <span>{booking.status}</span>
                        </span>
                      </div>

                      {/* E-Ticket Badge on Image */}
                      <div className="absolute top-2 right-2 z-10">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/80 backdrop-blur-md text-white border border-slate-700 flex items-center gap-1 shadow-sm">
                          <QrCode className="w-3 h-3 text-teal-400" />
                          <span>Pass</span>
                        </span>
                      </div>

                      {/* Date Badge on Image */}
                      <div className="absolute bottom-2 left-2 z-10">
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-950/85 backdrop-blur-md text-slate-200 border border-slate-700 flex items-center gap-1 shadow-sm">
                          <Calendar className="w-3 h-3 text-teal-400" />
                          <span>{booking.travelDate}</span>
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-800 text-teal-300 border border-slate-700">
                          {booking.id}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white font-display">
                        {booking.packageTitle}
                      </h3>

                      <div className="flex items-center gap-3 text-xs text-slate-400 flex-wrap">
                        <span className="flex items-center gap-1 text-teal-400 font-semibold">
                          <MapPin className="w-3.5 h-3.5" /> {booking.destinationName}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> Date: {booking.travelDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" /> {booking.adults} Adults {booking.children > 0 ? `, ${booking.children} Kids` : ''}
                        </span>
                      </div>

                      <div className="text-xs text-slate-400 pt-1">
                        <span className="font-medium text-slate-300">Lead Passenger:</span> {booking.customer.fullName} ({booking.customer.email})
                      </div>
                    </div>
                  </div>

                  {/* Right: Total Price & Actions */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800 gap-4 shrink-0">
                    <div className="text-left lg:text-right">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                        Total Paid
                      </span>
                      <span className="text-2xl font-extrabold text-teal-300 font-display">
                        {formatPrice(booking.pricing.totalPaid)}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        via {booking.paymentMethod}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <button
                        onClick={() => setSelectedBookingForReceipt(booking)}
                        className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-md shadow-teal-500/20"
                        id={`btn-view-ticket-${booking.id}`}
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>View E-Ticket</span>
                      </button>

                      {isConfirmed && (
                        <button
                          onClick={() => setCancelModalBooking(booking)}
                          className="px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-xl text-xs font-semibold transition-colors"
                        >
                          Cancel
                        </button>
                      )}

                      {!isConfirmed && (
                        <button
                          onClick={() => deleteBooking(booking.id)}
                          className="p-2 text-slate-500 hover:text-rose-400 transition-colors"
                          title="Delete booking record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Recommended Next Adventures Section (eliminates blank space) */}
        <div className="mt-20 pt-12 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-teal-400 block mb-1">
                Continue Exploring
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Recommended Next Journeys
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Handpicked luxury escapes tailored to your discerning travel profile.
              </p>
            </div>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-400 hover:text-teal-300"
            >
              <span>Browse All Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.slice(0, 3).map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

      </div>

      {/* E-Ticket / Receipt Modal */}
      {selectedBookingForReceipt && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 flex items-center justify-center animate-fade-in overflow-y-auto">
          <div className="bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-teal-500/40 shadow-2xl relative my-8 text-white">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedBookingForReceipt(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Printable Ticket Header */}
            <div className="border-b border-slate-800 pb-5 mb-6 flex items-center justify-between">
              <div>
                <span className="text-xl font-extrabold text-white font-display">
                  Wander<span className="text-teal-400">Luxe</span>
                </span>
                <span className="text-[10px] text-slate-400 block tracking-wider uppercase font-semibold">
                  Official Travel Boarding Voucher
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Booking Reference</span>
                <span className="font-mono text-base font-extrabold text-teal-400">
                  {selectedBookingForReceipt.id}
                </span>
              </div>
            </div>

            {/* Ticket Body */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-4 bg-teal-500/15 rounded-2xl border border-teal-500/30 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-teal-400 block">Status</span>
                  <span className="text-base font-extrabold text-white">{selectedBookingForReceipt.status}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-teal-400 block">Departure Date</span>
                  <span className="text-base font-extrabold text-white">{selectedBookingForReceipt.travelDate}</span>
                </div>
              </div>

              {/* Package Details */}
              <div className="border-t border-slate-800 pt-3">
                <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Package &amp; Destination</span>
                <h4 className="text-base font-bold text-white">{selectedBookingForReceipt.packageTitle}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{selectedBookingForReceipt.destinationName}</p>
              </div>

              {/* Passenger & Room */}
              <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-3 text-xs">
                <div>
                  <span className="text-slate-400 uppercase font-bold block mb-0.5">Lead Passenger</span>
                  <strong className="text-white text-sm block">{selectedBookingForReceipt.customer.fullName}</strong>
                  <span className="text-slate-400">{selectedBookingForReceipt.customer.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-bold block mb-0.5">Room &amp; Guests</span>
                  <strong className="text-white block">{selectedBookingForReceipt.roomTierLabel || 'Standard Suite'}</strong>
                  <span className="text-slate-400">{selectedBookingForReceipt.adults} Adults {selectedBookingForReceipt.children > 0 ? `, ${selectedBookingForReceipt.children} Children` : ''}</span>
                </div>
              </div>

              {/* Add-ons if any */}
              {selectedBookingForReceipt.addOns && selectedBookingForReceipt.addOns.length > 0 && (
                <div className="border-t border-slate-800 pt-3">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Selected Add-ons</span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {selectedBookingForReceipt.addOns.map((ao, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-teal-400" />
                        <span>{ao}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Financial Breakdown */}
              <div className="border-t border-slate-800 pt-3 space-y-1.5 text-xs text-slate-300">
                <span className="text-slate-400 uppercase font-bold block mb-1">Payment Breakdown</span>
                <div className="flex justify-between">
                  <span>Base Trip Cost</span>
                  <span>{formatPrice(selectedBookingForReceipt.pricing.baseAdultsCost || selectedBookingForReceipt.pricing.basePrice * selectedBookingForReceipt.adults)}</span>
                </div>
                {selectedBookingForReceipt.pricing.discountAmount > 0 && (
                  <div className="flex justify-between text-teal-400 font-bold">
                    <span>Promo Discount ({selectedBookingForReceipt.pricing.promoCode})</span>
                    <span>-{formatPrice(selectedBookingForReceipt.pricing.discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Taxes &amp; Tourism Service Fees</span>
                  <span>{formatPrice(selectedBookingForReceipt.pricing.taxesAndFees)}</span>
                </div>
                <div className="flex justify-between font-extrabold text-sm text-white pt-2 border-t border-slate-800">
                  <span>Total Amount Paid</span>
                  <span className="text-teal-400 text-base">{formatPrice(selectedBookingForReceipt.pricing.totalPaid)}</span>
                </div>
              </div>

              {/* Barcode & Security stamp */}
              <div className="mt-4 pt-4 border-t border-dashed border-slate-700 flex items-center justify-between text-slate-400">
                <div className="text-[11px]">
                  <span>Authorized by WanderLuxe Concierge Global</span>
                  <span className="block font-mono text-[10px] text-teal-400">AUTH-DIGITAL-TOKEN-{selectedBookingForReceipt.id}</span>
                </div>
                <div className="p-1.5 bg-slate-950 rounded-lg border border-slate-800">
                  <QrCode className="w-8 h-8 text-teal-400" />
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={handlePrintReceipt}
                className="px-5 py-2.5 bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-400 hover:to-cyan-300 text-slate-950 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 shadow-md shadow-teal-500/20"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Download Receipt</span>
              </button>
              <button
                onClick={() => setSelectedBookingForReceipt(null)}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Cancel Confirmation Dialog */}
      {cancelModalBooking && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md p-4 flex items-center justify-center animate-fade-in">
          <div className="bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-800 shadow-2xl text-white">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">
              Cancel Reservation {cancelModalBooking.id}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              Are you sure you want to cancel your booking for <strong className="text-white">{cancelModalBooking.packageTitle}</strong>? Free cancellation terms apply and your spot will be released.
            </p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                onClick={() => setCancelModalBooking(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold transition-colors"
              >
                Keep Booking
              </button>
              <button
                onClick={handleConfirmCancel}
                className="px-5 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                id="modal-confirm-cancel-btn"
              >
                Yes, Cancel Trip
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
```

[⬆ Return to Table of Contents](#-table-of-contents)

---
