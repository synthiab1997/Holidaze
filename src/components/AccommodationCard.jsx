import React from "react";
import { Link } from "react-router-dom";

function AccommodationCard({ venue }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/venues/${venue.id}`}>
        <img
          src={venue.media?.[0] || "/bilderboken-rlwE8f8anOc-unsplash.jpg"}
          alt={venue.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-1">{venue.name}</h2>
          <p className="text-gray-600 mb-2">{venue.location?.city || "Unknown city"}</p>
          <p className="text-gray-800 font-bold">${venue.price} / night</p>
        </div>
      </Link>
    </div>
  );
}

export default AccommodationCard;
