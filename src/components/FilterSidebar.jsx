import React from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.name, e.target.value);
  };

  return (
    <div className="space-y-4 p-4 border-r border-gray-300">
      <h2 className="text-lg font-semibold">Filters</h2>
      
      <div>
        <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">Price Range</label>
        <input
          type="range"
          id="priceRange"
          name="priceRange"
          min="0"
          max="500"
          step="10"
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Max Guests</label>
        <input
          type="number"
          id="guests"
          name="maxGuests"
          min="1"
          max="10"
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
