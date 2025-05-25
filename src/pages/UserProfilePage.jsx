import React, { useState, useEffect } from "react";
import { fetchUserProfile } from "../services/profiles";
import BookingList from "../components/BookingList";

const UserProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      const data = await fetchUserProfile();
      setUser(data);
    };
    getUserProfile();
  }, []);

  if (!user) return <div className="p-6 text-slate-600">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md border border-stone">
      <h1 className="text-3xl font-bold text-forest mb-4">Welcome, {user.name}</h1>
      <div className="flex items-center space-x-4 mb-4">
        <img src={user.avatar} alt="User Avatar" className="w-20 h-20 rounded-full border border-forest" />
        <div>
          <p className="text-slate-700">Email: {user.email}</p>
          <p className="text-sm text-stone">Role: {user.venueManager ? "Venue Manager" : "Customer"}</p>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-moss mb-2">Upcoming Bookings</h2>
      <BookingList bookings={user.bookings || []} />
    </div>
  );
};

export default UserProfilePage;
