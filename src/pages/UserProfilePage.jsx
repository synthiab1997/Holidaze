// src/pages/UserProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { fetchUserProfile } from '../services/profiles';
import BookingList from '../components/BookingList';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      const data = await fetchUserProfile();
      setUser(data);
    };

    getUserProfile();
  }, []);

  if (!user) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg mt-8">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Your Profile</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-slate-600">{user.email}</p>
      </div>
      <BookingList userId={user.id} />
    </div>
  );
};

export default UserProfilePage;
