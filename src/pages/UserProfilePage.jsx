import React, { useState, useEffect } from "react";
import { fetchUserProfile, updateUserProfile } from "../services/profiles";
import BookingList from "../components/BookingList";
import AvatarPreview from "../components/AvatarPreview";

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const data = await fetchUserProfile();
        setUser(data);
        setAvatarUrl(data.avatar?.url || "");
      } catch (err) {
        console.error("❌ Failed to fetch user profile:", err);
      }
    };
    getUserProfile();
  }, []);

  const handleAvatarUpdate = async () => {
    if (!avatarUrl || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(avatarUrl)) {
      return setMessage("❗ Please enter a valid image URL.");
    }

    try {
      setUpdating(true);
      await updateUserProfile({
        avatar: {
          url: avatarUrl,
          alt: `${user.name}'s avatar`,
        },
      });
      setMessage("✅ Avatar updated!");
      setTimeout(() => window.location.reload(), 1200);
    } catch (err) {
      setMessage("❌ Update failed. Please try again.");
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  if (!user) return <div className="p-6 text-slate-600">Loading profile...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md border border-stone">
      <h1 className="text-3xl font-bold text-forest mb-4">
        Welcome, {user.name}
      </h1>

      <div className="flex items-center space-x-4 mb-4">
        <AvatarPreview url={user.avatar?.url} />
        <div>
          <p className="text-slate-700">Email: {user.email}</p>
          <p className="text-sm text-stone">
            Role: {user.venueManager ? "Venue Manager" : "Customer"}
          </p>
        </div>
      </div>

      {/* ✅ Avatar Update Form */}
      <div className="mb-6">
        <label htmlFor="avatar" className="block text-sm font-medium text-slate-700 mb-1">
          Update Avatar URL
        </label>
        <input
          type="url"
          id="avatar"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="input-base"
        />
        <button
          onClick={handleAvatarUpdate}
          disabled={updating}
          className="btn-primary mt-2"
        >
          {updating ? "Updating..." : "Save Avatar"}
        </button>
        {message && <p className="text-sm mt-2 text-moss">{message}</p>}
      </div>

      <h2 className="text-xl font-semibold text-moss mb-2">Upcoming Bookings</h2>
      <BookingList bookings={user.bookings || []} />
    </div>
  );
};

export default UserProfilePage;
