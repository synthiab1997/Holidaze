
import React, { useState, useEffect } from "react";
import { fetchUserProfile, updateUserProfile } from "../services/profiles";
import BookingList from "../components/BookingList";
import AvatarEditor from "../components/AvatarEditor";
import ProfileCard from "../components/ProfileCard";
import Navbar from "../components/Navbar";

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
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="p-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1">
            <ProfileCard user={user} />
            <AvatarEditor
              avatarUrl={avatarUrl}
              setAvatarUrl={setAvatarUrl}
              onSave={handleAvatarUpdate}
              loading={updating}
              message={message}
            />
            {user.venueManager && (
              <div className="mt-4">
                <a
                  href="/dashboard"
                  className="inline-block bg-sky text-white font-medium px-4 py-2 rounded-md hover:bg-forestDark"
                >
                  🛠 Go to Admin Dashboard
                </a>
              </div>
            )}
          </div>
          <div className="col-span-2">
            <h2 className="text-xl font-semibold text-forest mb-2">Upcoming Bookings</h2>
            <BookingList bookings={user.bookings || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
