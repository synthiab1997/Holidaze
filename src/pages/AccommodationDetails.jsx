import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVenueById } from "../services/venues";

function AccommodationDetails() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    fetchVenueById(id).then(setVenue);
  }, [id]);

  if (!venue) return <div className="p-6">Loading...</div>;

  const imageUrl = venue.media?.[0] || "/images/default-venue.jpg";

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-8 shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-green-800 mb-4">{venue.name}</h1>
      <img
        src={imageUrl}
        alt={venue.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="mb-2 text-gray-700">{venue.description}</p>
      <p className="text-sm text-gray-500">
        Location: {venue.location?.city}, {venue.location?.country}
      </p>
      <p className="text-sm text-gray-500">Price: ${venue.price} per night</p>
    </div>
  );
}

export default AccommodationDetails;