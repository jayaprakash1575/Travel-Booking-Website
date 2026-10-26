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
