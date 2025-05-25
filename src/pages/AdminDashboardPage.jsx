import React, { useEffect, useState } from "react";
import { getProfile, fetchProfileVenues } from "../services/profiles";
import { fetchVenueBookings } from "../services/bookings";

export default function AdminDashboardPage() {
  const [venues, setVenues] = useState([]);
  const [bookings, setBookings] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const loadVenues = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const profile = await getProfile(user.name);
        const myVenues = await fetchProfileVenues(profile.name);
        setVenues(myVenues);

        const bookingsMap = {};
        for (const venue of myVenues) {
          const venueBookings = await fetchVenueBookings(venue.id);
          bookingsMap[venue.id] = venueBookings;
        }
        setBookings(bookingsMap);
      } catch (err) {
        setError("Failed to load venues or bookings.");
      }
    };

    loadVenues();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-forest">Venue Manager Dashboard</h1>

      {error && <p className="text-red-600">{error}</p>}

      {venues.length === 0 ? (
        <p className="text-slate-600">You haven't created any venues yet.</p>
      ) : (
        venues.map((venue) => (
          <div
            key={venue.id}
            className="bg-white p-6 border border-stone rounded-xl shadow-md space-y-3"
          >
            <h2 className="text-2xl font-semibold text-forest">{venue.name}</h2>
            <p className="text-sm text-stone">
              {venue.location?.address || "No address provided"}
            </p>

            <h3 className="font-semibold text-moss">Bookings:</h3>
            {bookings[venue.id]?.length ? (
              <ul className="space-y-2">
                {bookings[venue.id].map((booking) => (
                  <li
                    key={booking.id}
                    className="border border-slate-200 p-3 rounded-md bg-cream"
                  >
                    <strong>Customer:</strong> {booking.customer?.name || "Unknown"} <br />
                    <strong>From:</strong>{" "}
                    {new Date(booking.dateFrom).toLocaleDateString()} <br />
                    <strong>To:</strong>{" "}
                    {new Date(booking.dateTo).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500">No bookings yet.</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}
