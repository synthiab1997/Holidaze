import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchUserProfile } from "../services/profiles";
import { fetchProfileVenues } from "../services/profiles";
import { fetchVenueBookings } from "../services/bookings";
import { deleteVenue } from "../services/venues";

import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import AvatarEditor from "../components/AvatarEditor";
import BookingList from "../components/BookingList";

export default function UserDashboardPage() {
  const [user, setUser] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState("");

  const [venues, setVenues] = useState([]);
  const [bookingsMap, setBookingsMap] = useState({});
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        const data = await fetchUserProfile();
        setUser(data);
        setAvatarUrl(data.avatar?.url || "");

        // If manager, fetch their venues and bookings
        if (data.venueManager) {
          const myVenues = await fetchProfileVenues(data.name);
          setVenues(myVenues);

          const bookingsByVenue = {};
          for (const venue of myVenues) {
            bookingsByVenue[venue.id] = await fetchVenueBookings(venue.id);
          }
          setBookingsMap(bookingsByVenue);
        }
      } catch (err) {
        console.error("Dashboard load failed:", err);
      }
    };
    init();
  }, []);

  const handleAvatarUpdate = async () => {
    if (!avatarUrl || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(avatarUrl)) {
      return setMessage("❗ Please enter a valid image URL.");
    }

    try {
      setUpdating(true);
      await updateUserProfile({
        avatar: { url: avatarUrl, alt: `${user.name}'s avatar` },
      });
      setMessage("✅ Avatar updated!");
      setTimeout(() => window.location.reload(), 1000);
    } catch (err) {
      setMessage("❌ Update failed.");
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  const confirmDelete = async (id) => {
    try {
      await deleteVenue(id);
      setVenues((prev) => prev.filter((v) => v.id !== id));
      setDeleteTarget(null);
    } catch {
      alert("❌ Failed to delete venue.");
    }
  };

  if (!user) return <div className="p-6 text-slate-600">Loading...</div>;

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <ProfileCard user={user} />
            <AvatarEditor
              avatarUrl={avatarUrl}
              setAvatarUrl={setAvatarUrl}
              onSave={handleAvatarUpdate}
              loading={updating}
              message={message}
            />
          </div>

          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-forest mb-2">Your Bookings</h2>
            <BookingList bookings={user.bookings || []} />

            {user.venueManager && (
              <>
                <div className="flex justify-between items-center mt-10 mb-3">
                  <h2 className="text-xl font-semibold text-forest">Your Venues</h2>
                  <Link
                    to="/venue-form"
                    className="bg-sun text-forestDark px-4 py-2 rounded-md font-semibold hover:bg-yellow-400"
                  >
                    + Create Venue
                  </Link>
                </div>

                {venues.length === 0 ? (
                  <p className="text-slate-600">You haven't created any venues yet.</p>
                ) : (
                  venues.map((venue) => (
                    <div
                      key={venue.id}
                      className="bg-white p-6 border border-stone rounded-xl shadow-md space-y-4 mb-6"
                    >
                      {venue.media?.[0]?.url && (
                        <img
                          src={venue.media[0].url}
                          alt={venue.media[0].alt || "Venue"}
                          className="w-full h-48 object-cover rounded-md"
                        />
                      )}
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-bold">{venue.name}</h3>
                          <p className="text-sm text-stone">{venue.location?.address}</p>
                        </div>
                        <div className="flex gap-3">
                          <Link
                            to={`/venue-form/${venue.id}`}
                            className="text-sm text-sky-600 hover:underline"
                          >
                            ✏️ Edit
                          </Link>
                          <button
                            onClick={() => setDeleteTarget(venue)}
                            className="text-sm text-red-600 hover:underline"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-moss mb-2">Bookings</h4>
                        {bookingsMap[venue.id]?.length ? (
                          <ul className="space-y-2">
                            {bookingsMap[venue.id].map((booking) => (
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
              </>
            )}
          </div>
        </div>
      </div>

      {/* Delete confirmation modal */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full space-y-4">
            <h2 className="text-lg font-bold text-red-700">Confirm Deletion</h2>
            <p>
              Delete <strong className="text-forest">{deleteTarget.name}</strong>?
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
