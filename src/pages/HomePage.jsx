import React from 'react';
import SearchBar from '../components/SearchBar';
import AccommodationCard from '../components/AccommodationCard';
import { fetchVenues } from '../services/api';


/*function HomePage() {
  const [venues, setVenues] = React.useState([]);

  React.useEffect(() => {
    fetchVenues().then(setVenues);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <h1 className="text-3xl font-bold mb-4">Popular Venues</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {venues.map(venue => (
          <AccommodationCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  );
  
}

export default HomePage;*/

function HomePage() {
  const [venues, setVenues] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    fetchVenues()
      .then(data => {
        if (Array.isArray(data)) {
          setVenues(data);
        } else {
          throw new Error("Invalid API data format");
        }
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError("Could not load venues.");
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <h1 className="text-3xl font-bold mb-4">Popular Venues</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {venues.map(venue => (
          <AccommodationCard key={venue.id} venue={venue} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
