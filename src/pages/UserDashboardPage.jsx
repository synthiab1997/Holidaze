import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfile, fetchProfileVenues } from "../services/profiles";
import { fetchVenueBookings } from "../services/bookings";
import { deleteVenue } from "../services/venues";

export default function UserDashboardPage() {
  const [venues, setVenues] = useState([]);
  const [bookings, setBookings] = useState({});
  const [error, setError] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null);

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

  const confirmDelete = async (id) => {
    try {
      await deleteVenue(id);
      setVenues((prev) => prev.filter((v) => v.id !== id));
      setDeleteTarget(null);
    } catch {
      alert("Failed to delete venue.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-forest">Your Venues</h1>
        <Link
          to="/create-venue"
          className="bg-sun text-forestDark px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition"
        >
          + Create Venue
        </Link>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      {venues.length === 0 ? (
        <p className="text-slate-600">You haven't created any venues yet.</p>
      ) : (
        venues.map((venue) => (
          <div
            key={venue.id}
            className="bg-white p-6 border border-stone rounded-xl shadow-md space-y-4"
          >
            {venue.media?.[0]?.url && (
              <img
                src={venue.media[0].url}
                alt={venue.media[0].alt || "Venue"}
                className="w-full h-48 object-cover rounded-md"
              />
            )}

            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-forest">{venue.name}</h2>
                <p className="text-sm text-stone">
                  {venue.location?.address || "No address provided"}
                </p>
              </div>

              <div className="flex gap-3">
                <Link
                  to={`/edit-venue/${venue.id}`}
                  className="text-sm text-sky-700 hover:underline font-medium"
                >
                  ✏️ Edit
                </Link>
                <button
                  onClick={() => setDeleteTarget(venue)}
                  className="text-sm text-red-600 hover:underline font-medium"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-moss mb-2">Bookings</h3>
              {bookings[venue.id]?.length ? (
                <ul className="space-y-2">
                  {bookings[venue.id].map((booking) => (
                    <li
                      key={booking.id}
                      className="bg-cream border border-slate-200 rounded-md p-3 text-sm"
                    >
                      <p><strong>👤 Customer:</strong> {booking.customer?.name || "Unknown"}</p>
                      <p><strong>📅 From:</strong> {new Date(booking.dateFrom).toLocaleDateString()}</p>
                      <p><strong>📅 To:</strong> {new Date(booking.dateTo).toLocaleDateString()}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500 text-sm">No bookings yet.</p>
              )}
            </div>
          </div>
        ))
      )}

      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full space-y-4">
            <h2 className="text-lg font-bold text-red-700">Confirm Deletion</h2>
            <p>
              Are you sure you want to delete <strong className="text-forest">{deleteTarget.name}</strong>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="px-4 py-2 rounded bg-gray-200 text-slate-700 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => confirmDelete(deleteTarget.id)}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}