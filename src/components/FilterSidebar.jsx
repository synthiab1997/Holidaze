import React, { useState } from "react";

const FilterSidebar = ({ onFilterChange = () => {} }) => {
  const [price, setPrice] = useState(250);
  const [guests, setGuests] = useState(2);

  const handlePriceChange = (e) => {
    const value = Number(e.target.value);
    setPrice(value);
    onFilterChange("priceRange", value);
  };

  const handleGuestChange = (e) => {
    const value = Number(e.target.value);
    setGuests(value);
    onFilterChange("maxGuests", value);
  };

  return (
    <aside className="w-full sm:w-64 bg-white border border-stone p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-xl font-bold text-forestDark">Filter Venues</h2>

      <div>
        <label
          htmlFor="priceRange"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Price Range: ${price}
        </label>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min="0"
          max="500"
          step="10"
          value={price}
          onChange={handlePriceChange}
          className="w-full accent-moss"
        />
      </div>

      <div>
        <label
          htmlFor="maxGuests"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Max Guests: {guests}
        </label>
        <input
          type="number"
          id="maxGuests"
          name="maxGuests"
          min="1"
          max="10"
          value={guests}
          onChange={handleGuestChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-forest"
        />
      </div>
    </aside>
  );
};

export default FilterSidebar;
