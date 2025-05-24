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

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="mb-4">
        <h2 className="text-xl">{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <BookingList userId={user.id} />
    </div>
  );
};

export default UserProfilePage;
