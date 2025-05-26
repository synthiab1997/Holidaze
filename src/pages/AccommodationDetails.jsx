import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // required for styling
import { fetchVenueById } from "../services/venues";
import { fetchVenueBookings } from "../services/bookings";

function AccommodationDetails() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);

  useEffect(() => {
    const loadVenue = async () => {
      const venueData = await fetchVenueById(id);
      setVenue(venueData);

      // Fetch bookings and extract date ranges
      const bookings = await fetchVenueBookings(id);
      const booked = bookings.flatMap((booking) => {
        const start = new Date(booking.dateFrom);
        const end = new Date(booking.dateTo);
        const dates = [];

        for (
          let date = new Date(start);
          date <= end;
          date.setDate(date.getDate() + 1)
        ) {
          dates.push(new Date(date));
        }

        return dates;
      });

      setBookedDates(booked);
    };

    loadVenue();
  }, [id]);

  if (!venue) {
    return <div className="p-6 text-slate-600">Loading venue details...</div>;
  }

  const imageUrl = venue.media?.[0]?.url || "/images/default-venue.jpg";

  const isDateBooked = (date) =>
    bookedDates.some(
      (bookedDate) => bookedDate.toDateString() === date.toDateString()
    );

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-md border border-stone">
      <h1 className="text-3xl font-bold text-forest mb-4">{venue.name}</h1>
      <img
        src={imageUrl}
        alt={venue.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="mb-3 text-slate-700">{venue.description}</p>
      <p className="text-sm text-stone">
        Location: {venue.location?.city}, {venue.location?.country}
      </p>
      <p className="text-sm text-forest font-semibold mt-1">
        Price: <span className="text-moss">{venue.price} NOK</span> per night
      </p>

      {/* 🗓️ Calendar */}
      <div className="mt-6 mb-6">
        <h2 className="text-lg font-semibold text-forest mb-2">Availability</h2>
        <Calendar
          tileDisabled={({ date }) => isDateBooked(date)}
          tileClassName={({ date }) =>
            isDateBooked(date) ? "bg-red-200 text-red-800" : ""
          }
        />
        <p className="text-sm text-stone mt-2">
          Red dates are already booked and unavailable.
        </p>
      </div>

      <Link
        to={`/booking/${venue.id}`}
        className="inline-block mt-6 bg-sun text-forestDark px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
      >
        Book This Venue
      </Link>
    </div>
  );
}

export default AccommodationDetails;
