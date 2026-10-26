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
