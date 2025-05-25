import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VenueForm from "../components/VenueForm";
import { fetchVenueById, updateVenue } from "../services/venues";

const EditVenuePage = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    const getVenue = async () => {
      const data = await fetchVenueById(id);
      setVenue(data);
    };
    getVenue();
  }, [id]);

  const handleUpdate = async (updatedData) => {
    await updateVenue(id, updatedData);
    alert("Venue updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-8 shadow-md rounded-xl border border-stone">
      <h1 className="text-2xl font-bold text-forest mb-4">Edit Venue</h1>
      {venue && <VenueForm venue={venue} onSubmit={handleUpdate} />}
    </div>
  );
};

export default EditVenuePage;
