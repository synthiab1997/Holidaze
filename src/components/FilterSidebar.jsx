import React from "react";

const FilterSidebar = ({ onFilterChange = () => {} }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.name, e.target.value);
  };

  return (
    <aside className="w-full max-w-xs bg-white border-r border-stone p-6 shadow-sm space-y-6 hidden md:block">
      <h2 className="text-xl font-bold text-forest">Filter Venues</h2>

      <div>
        <label htmlFor="priceRange" className="block text-sm font-medium text-slate-700">
          Price Range
        </label>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min="0"
          max="500"
          step="10"
          onChange={handleChange}
          className="w-full accent-moss"
        />
      </div>

      <div>
        <label htmlFor="maxGuests" className="block text-sm font-medium text-slate-700">
          Max Guests
        </label>
        <input
          type="number"
          id="maxGuests"
          name="maxGuests"
          min="1"
          max="10"
          onChange={handleChange}
          className="input-base mt-1"
        />
      </div>
    </aside>
  );
};

export default FilterSidebar;
