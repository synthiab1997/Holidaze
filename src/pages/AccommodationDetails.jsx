import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchVenueById } from "../services/venues";

function AccommodationDetails() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    fetchVenueById(id).then(setVenue);
  }, [id]);

  if (!venue) return <div className="p-6 text-slate-600">Loading venue details...</div>;

  const imageUrl = venue.media?.[0] || "/images/default-venue.jpg";

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-md border border-stone">
      <h1 className="text-3xl font-bold text-forest mb-4">{venue.name}</h1>
      <img
        src={imageUrl}
        alt={venue.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="mb-3 text-slate-700">{venue.description}</p>
      <p className="text-sm text-stone">
        Location: {venue.location?.city}, {venue.location?.country}
      </p>
      <p className="text-sm text-forest font-semibold mt-1">
        Price: <span className="text-moss">{venue.price} NOK</span> per night
      </p>
    </div>
  );
}

export default AccommodationDetails;
