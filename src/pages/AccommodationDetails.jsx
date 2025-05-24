import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVenueById } from "../services/venues";

function AccommodationDetails() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    fetchVenueById(id).then(setVenue);
  }, [id]);

  if (!venue) return <div>Loading...</div>;

  const imageUrl = venue.media?.[0] || "/images/default-venue.jpg";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{venue.name}</h1>
      <img
        src={imageUrl}
        alt={venue.name}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="mb-2">{venue.description}</p>
      <p className="text-sm text-gray-600">
        Location: {venue.location?.city}, {venue.location?.country}
      </p>
      <p className="text-sm text-gray-600">Price: ${venue.price} per night</p>
    </div>
  );
}

export default AccommodationDetails;
