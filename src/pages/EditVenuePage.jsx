import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VenueForm from '../components/VenueForm';
import { fetchVenueById, updateVenue } from '../services/venues';

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
    alert('Venue updated successfully!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Venue</h1>
      {venue && <VenueForm initialData={venue} onSubmit={handleUpdate} />}
    </div>
  );
};

export default EditVenuePage;
