import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import AccommodationCard from "../components/AccommodationCard";
import Footer from "../components/Footer";
import { fetchVenues } from "../services/venues";

function HomePage() {
  const [venues, setVenues] = React.useState([]);

  React.useEffect(() => {
    fetchVenues()
      .then(setVenues)
      .catch(() => setVenues([]));
  }, []);

  const handleSearch = (query) => {
    console.log("Search:", query);
  };

  return (
    <div className="min-h-screen bg-cream text-slate-800 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <img
          src="/public/drew-dau-GEdoSfYHsPs-unsplash.jpg"
          alt="Scenic Vacation"
          className="w-full h-[500px] object-cover brightness-75"
        />
        <div className="absolute top-1/2 left-1/2 w-full text-center text-white transform -translate-x-1/2 -translate-y-1/2 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Find Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Book unique stays with nature at your doorstep
          </p>
          <Link
            to="/venues"
            className="inline-block bg-forestDark text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Browse Stays
          </Link>
        </div>
      </section>

      {/* Search & Venues */}
      <main className="flex-grow">
        <div className="container-section -mt-12 z-10 relative">
          <SearchBar onSearch={handleSearch} />
        </div>

        <section className="container-section py-12">
          <h2 className="section-title text-center mb-8">Popular Stays</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.length > 0 ? (
              venues.map((venue) => (
                <AccommodationCard key={venue.id} venue={venue} />
              ))
            ) : (
              <p className="col-span-full text-center text-slate-500">No venues found.</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
