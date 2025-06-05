import React from "react";

const ProfileCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-stone text-slate-800 w-full">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-forest mb-2">{user.name}</h2>
        <p className="text-sm text-stone mb-1">
          Email: <span className="text-slate-700">{user.email}</span>
        </p>
        <p className="text-sm text-stone mb-1">
          Role: <span className="font-medium text-forest">{user.venueManager ? "Venue Manager" : "Customer"}</span>
        </p>
        <p className="text-sm text-stone">
          Bookings: <span className="font-semibold text-moss">{user.bookings?.length ?? 0}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;