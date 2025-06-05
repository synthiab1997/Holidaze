import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { fetchVenueById } from "../services/venues";
import { fetchVenueBookings } from "../services/bookings";
import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";

export default function AccommodationDetails() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const getNights = (from, to) => {
    const start = new Date(from);
    const end = new Date(to);
    const diff = (end - start) / (1000 * 60 * 60 * 24);
    return Math.max(0, Math.round(diff));
  };

  const nights = checkIn && checkOut ? getNights(checkIn, checkOut) : 0;

  useEffect(() => {
    const loadVenue = async () => {
      const venueData = await fetchVenueById(id);
      setVenue(venueData);

      const bookings = await fetchVenueBookings(id);
      const booked = bookings.flatMap((booking) => {
        const start = new Date(booking.dateFrom);
        const end = new Date(booking.dateTo);
        const dates = [];
        for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
          dates.push(new Date(date));
        }
        return dates;
      });

      setBookedDates(booked);
    };

    loadVenue();
  }, [id]);

  const isDateBooked = (date) =>
    bookedDates.some(
      (bookedDate) => bookedDate.toDateString() === date.toDateString()
    );

  const handleBookingSubmit = (details) => {
    setBookingDetails(details);
    setShowForm(false);
  };

  if (!venue) {
    return <div className="p-6 text-slate-600">Loading venue details...</div>;
  }

  const imageUrl = venue.media?.[0]?.url || "/images/default-venue.jpg";

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="pt-4 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl shadow-md border border-stone overflow-hidden mt-6">
          <img
            src={imageUrl}
            alt={venue.name}
            className="w-full h-64 sm:h-96 object-cover"
          />

          <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h1 className="text-3xl font-bold text-forest">{venue.name}</h1>
              <span className="text-moss font-semibold text-lg mt-2 sm:mt-0">
                {venue.price} NOK / night
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-forest">About This Venue</h2>
              <p className="text-slate-700 leading-relaxed">
                {venue.description}
              </p>
            </div>

            <div className="text-sm text-stone">
              📍 {venue.location?.address}, {venue.location?.city}, {venue.location?.country}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-forest mb-2">Availability</h2>
              <div className="p-4 bg-white rounded-lg border border-stone shadow-sm">
                <Calendar
                  tileDisabled={({ date }) => isDateBooked(date)}
                  tileClassName={({ date }) =>
                    isDateBooked(date) ? "bg-red-200 text-red-800" : ""
                  }
                  className="w-full"
                />
                <p className="text-sm text-slate-500 mt-2">
                  ❌ Red dates are unavailable
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-forest">Amenities</h2>
              <ul className="text-sm text-slate-700 grid grid-cols-2 sm:grid-cols-3 gap-2">
                <li>👤 Max Guests: {venue.maxGuests}</li>
                <li>📶 Wi-Fi: {venue.wifi ? "Yes" : "No"}</li>
                <li>🍳 Breakfast: {venue.breakfast ? "Included" : "Not Included"}</li>
                <li>🐾 Pets Allowed: {venue.petsAllowed ? "Yes" : "No"}</li>
                <li>👶 Kids Allowed: {venue.kidsAllowed ? "Yes" : "No"}</li>
                <li>⭐ Rating: {venue.rating || "N/A"}</li>
              </ul>
            </div>

            {bookingDetails ? (
              <div className="text-center text-moss font-semibold">
                ✅ Booking Confirmed!
              </div>
            ) : showForm ? (
              <BookingForm venueId={id} onSubmit={handleBookingSubmit} />
            ) : (
              <div className="pt-6 space-y-3">
                <h2 className="text-lg font-semibold text-forest">Ready to Book?</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="text-sm">
                    Check-In Date
                    <input
                      type="date"
                      className="input-base mt-1"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </label>
                  <label className="text-sm">
                    Check-Out Date
                    <input
                      type="date"
                      className="input-base mt-1"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </label>
                </div>

                {checkIn && checkOut && (
                  <div className="text-moss text-sm font-medium">
                    Total for {nights} {nights === 1 ? "night" : "nights"}:{" "}
                    <span className="text-forest font-bold">{nights * venue.price} NOK</span>
                  </div>
                )}

                <button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-sun text-forestDark px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-all duration-200"
                >
                  🛏️ Book This Venue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
