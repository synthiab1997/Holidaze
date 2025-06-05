import React from "react";
import { Link } from "react-router-dom";

const VenueCard = ({ venue }) => {
  if (!venue) return null;

  const imageUrl =
    venue.media?.[0]?.url ||
    "https://via.placeholder.com/400x300?text=No+Image";

  return (
    <Link to={`/venue/${venue.id}`} className="block group">
      <div className="bg-white rounded-xl border border-stone shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src={imageUrl}
          alt={venue.media?.[0]?.alt || venue.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold text-forest group-hover:underline">
            {venue.name}
          </h2>
          <p className="text-sm text-stone line-clamp-2">{venue.description}</p>
          <div className="flex justify-between items-center text-sm text-slate-700">
            <span>💵 {venue.price} / night</span>
            <span>👥 {venue.maxGuests} guests</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VenueCard;