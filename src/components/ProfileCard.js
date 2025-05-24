import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
      <p>Bookings: {user.bookings.length}</p>
    </div>
  );
};

export default ProfileCard;
