import React from "react";
import { Link } from "react-router-dom";

function AccommodationCard({ venue }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-stone overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/venues/${venue.id}`}>
        <img
          src={venue.media?.[0]?.url || "src/assets/zachary-kyra-derksen-f7PF7yGqpEM-unsplash.jpg"}
          alt={venue.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-forest mb-1">{venue.name}</h2>
          <p className="text-sm text-slate-600 mb-1">
            {venue.location?.city || "Unknown city"}
          </p>
          <p className="text-sm font-medium text-moss">
            {venue.price} NOK / night
          </p>
        </div>
      </Link>
    </div>
  );
}

export default AccommodationCard;
