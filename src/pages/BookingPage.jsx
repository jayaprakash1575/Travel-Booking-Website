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
