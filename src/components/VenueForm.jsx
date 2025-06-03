import React, { useState } from "react";

const VenueForm = ({ venue, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: venue ? venue.name : "",
    description: venue ? venue.description : "",
    price: venue ? venue.price : 0,
    maxGuests: venue ? venue.maxGuests : 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Venue Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price per Night
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
  <label className="text-sm">
    Max Guests
    <input
      type="number"
      name="maxGuests"
      value={form.maxGuests}
      onChange={handleChange}
      className="input-base mt-1"
      required
    />
  </label>

  <label className="text-sm">
    Rating
    <input
      type="number"
      step="0.1"
      max="5"
      min="1"
      name="rating"
      value={form.rating}
      onChange={handleChange}
      className="input-base mt-1"
    />
  </label>

  <label className="text-sm flex items-center gap-2">
    <input type="checkbox" name="wifi" checked={form.wifi} onChange={handleChange} />
    Wi-Fi Available
  </label>

  <label className="text-sm flex items-center gap-2">
    <input type="checkbox" name="breakfast" checked={form.breakfast} onChange={handleChange} />
    Breakfast Included
  </label>

  <label className="text-sm flex items-center gap-2">
    <input type="checkbox" name="petsAllowed" checked={form.petsAllowed} onChange={handleChange} />
    Pets Allowed
  </label>

  <label className="text-sm flex items-center gap-2">
    <input type="checkbox" name="kidsAllowed" checked={form.kidsAllowed} onChange={handleChange} />
    Kids Allowed
  </label>
</div>


      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Save Venue
      </button>
    </form>
  );
};

export default VenueForm;
