// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';
import AccommodationCard from '../components/AccommodationCard';
import Footer from '../components/Footer';
import { fetchVenues } from '../services/venues';

function HomePage() {
  const [venues, setVenues] = React.useState([]);

  React.useEffect(() => {
    fetchVenues()
      .then(setVenues)
      .catch((err) => {
        console.error('Failed to fetch venues:', err);
        setVenues([]);
      });
  }, []);

  const handleSearch = (query) => {
    console.log('Search:', query);
    // Add search filtering logic here if needed
  };

  return (
    <div className="min-h-screen bg-cream text-slate-800">
      {/* Navbar */}
      
      {/* Hero */}
      <section className="relative">
        <img
          src="/public/drew-dau-GEdoSfYHsPs-unsplash.jpg"
          alt="Scenic Vacation"
          className="w-full h-[500px] object-cover brightness-75"
        />
        <div className="absolute top-1/2 left-1/2 text-center text-white transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Next Adventure</h1>
          <p className="text-lg md:text-xl mb-6">Book unique stays with nature at your doorstep</p>
          <Link to="/venues" className="bg-forest hover:bg-[#1e7c1e] text-white px-6 py-3 rounded text-sm font-semibold">
            Browse Stays
          </Link>
        </div>
      </section>

      {/* SearchBar */}
      <div className="relative z-10 -mt-12 mb-10">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Venues */}
      <div className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.length > 0 ? (
          venues.map((venue) => (
            <AccommodationCard key={venue.id} venue={venue} />
          ))
        ) : (
          <p className="text-center col-span-full text-slate-500">No venues found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;



