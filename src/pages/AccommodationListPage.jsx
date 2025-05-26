import React, { useState, useEffect } from "react";
import FilterSidebar from "../components/FilterSidebar";
import AccommodationCard from "../components/AccommodationCard";
import SearchBar from "../components/SearchBar";
import { fetchVenues } from "../services/venues";

function AccommodationListPage() {
  const [venues, setVenues] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="flex bg-cream min-h-screen">
      <FilterSidebar onFilterChange={handleFilterChange} />
      <div className="flex-grow p-6">
        <SearchBar onSearch={handleSearch} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
  );
}

export default AccommodationListPage;
