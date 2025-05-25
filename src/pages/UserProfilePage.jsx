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

  if (!user) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Avatar: <img src={user.avatar} alt="User Avatar" className="w-20 h-20 rounded-full" /></p>
      <BookingList userId={user.name} />
    </div>
  );
};

export default UserProfilePage;