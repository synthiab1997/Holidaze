import React, { useState, useEffect } from 'react';
import { fetchUserVenues } from '../services/venues';

const AdminDashboard = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const getVenues = async () => {
      const data = await fetchUserVenues();
      setVenues(data);
    };

    getVenues();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div>
        {venues.map((venue) => (
          <div key={venue.id}>
            <h2>{venue.name}</h2>
            <p>{venue.description}</p>
            <p>Price: ${venue.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
