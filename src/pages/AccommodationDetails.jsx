import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { fetchVenueById } from "../services/venues";
import { fetchVenueBookings } from "../services/bookings";
import Navbar from "../components/Navbar";

export default function AccommodationDetails() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);

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

          <div className="p-6 space-y-4">
            {/* Title + Price */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h1 className="text-3xl font-bold text-forest">{venue.name}</h1>
              <span className="text-moss font-semibold text-lg mt-2 sm:mt-0">
                {venue.price} NOK / night
              </span>
            </div>

            <p className="text-slate-700">{venue.description}</p>

            <div className="text-sm text-stone">
              📍 {venue.location?.address}, {venue.location?.city}, {venue.location?.country}
            </div>

            {/* Calendar Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-forest mb-2">Availability</h2>
              <div className="bg-cream p-3 rounded-lg border border-slate-200">
                <Calendar
                  tileDisabled={({ date }) => isDateBooked(date)}
                  tileClassName={({ date }) =>
                    isDateBooked(date) ? "bg-red-200 text-red-800" : ""
                  }
                />
              </div>
              <p className="text-sm text-slate-500 mt-2">❌ Red dates are unavailable</p>
            </div>

            {/* Amenities */}
            <div className="mt-6 space-y-2">
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

            {/* CTA */}
            <div className="pt-6">
              <Link
                to={`/booking/${venue.id}`}
                className="inline-block bg-sun text-forestDark px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-all duration-200"
              >
                🛏️ Book This Venue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
