import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import HeroBanner from "../assets/bilderboken-rlwE8f8anOc-unsplash.jpg";
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

      {/* Hero Section with embedded Search */}
      <section className="relative">
        <img
          src={HeroBanner}
          alt="Scenic Vacation"
          className="w-full h-[500px] object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            Find Your Next Adventure
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-sm">
            Book unique stays with nature at your doorstep
          </p>

          {/* SearchBar Inside Hero */}
          <div className="w-full max-w-xl">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Optional CTA Button */}
          <Link
            to="/venues"
            className="mt-6 inline-block bg-forestDark text-white px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition"
          >
            Browse Stays
          </Link>
        </div>
      </section>

      {/* Popular Venues */}
      <main className="flex-grow">
        <section className="container-section py-12">
          <h2 className="section-title text-center mb-8">Popular Stays</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.length > 0 ? (
              venues.map((venue) => (
                <AccommodationCard key={venue.id} venue={venue} />
              ))
            ) : (
              <p className="col-span-full text-center text-slate-500">
                No venues found.
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
