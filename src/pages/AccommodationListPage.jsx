import React, { useState, useEffect } from "react";
import FilterSidebar from "../components/FilterSidebar";
import AccommodationCard from "../components/AccommodationCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import { fetchVenues } from "../services/venues";

function AccommodationListPage() {
  const [venues, setVenues] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchVenues().then(setVenues);
  }, []);

  const handleFilterChange = (name, value) => {
    console.log("Filter:", name, value);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cream text-slate-800 flex flex-col">
      {/* ✅ Navbar always on top */}
      <Navbar />

      {/* Main content wrapper */}
      <main className="flex-grow px-4 py-6 max-w-7xl mx-auto">
        {/* 🔍 Search */}
        <div className="mb-4">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* 📱 Mobile Filter Toggle */}
        <div className="sm:hidden text-right mb-4">
          <button
            className="bg-forest text-white px-4 py-2 rounded"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* 🧭 Layout: Filters + Grid */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Filters sidebar */}
          <aside className={`w-full sm:w-64 ${showFilters ? "block" : "hidden"} sm:block`}>
            <FilterSidebar onFilterChange={handleFilterChange} />
          </aside>

          {/* Venues Grid */}
          <section className="flex-grow">
            <h2 className="text-2xl font-bold text-forestDark mb-4">Available Venues</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVenues.length > 0 ? (
                filteredVenues.map((venue) => (
                  <AccommodationCard key={venue.id} venue={venue} />
                ))
              ) : (
                <p className="col-span-full text-center text-slate-500">
                  No venues found.
                </p>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AccommodationListPage;
