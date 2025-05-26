import React, { useState, useEffect } from "react";
import FilterSidebar from "../components/FilterSidebar";
import AccommodationCard from "../components/AccommodationCard";
import SearchBar from "../components/SearchBar";
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
    <div className="bg-cream min-h-screen px-4 pb-10">
      {/* Mobile filter toggle */}
      <div className="sm:hidden text-right pt-4">
        <button
          className="bg-forest text-white px-4 py-2 rounded"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* SearchBar at the top */}
      <div className="py-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Sidebar: collapsible on mobile */}
        <div className={`w-full sm:w-64 ${showFilters ? "block" : "hidden"} sm:block`}>
          <FilterSidebar onFilterChange={handleFilterChange} />
        </div>

        {/* Venue Grid */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-forestDark mb-4"> Venues:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVenues.length > 0 ? (
              filteredVenues.map((venue) => (
                <AccommodationCard key={venue.id} venue={venue} />
              ))
            ) : (
              <p className="col-span-full text-center text-slate-500">No venues found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccommodationListPage;
