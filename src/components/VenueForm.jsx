import React, { useState, useEffect } from "react";

export default function VenueForm({ venue = {}, onSubmit }) {
  const [form, setForm] = useState({
    name: venue.name || "",
    description: venue.description || "",
    price: venue.price || 0,
    maxGuests: venue.maxGuests || 1,
    rating: venue.rating || "",
    wifi: venue.meta?.wifi || false,
    breakfast: venue.meta?.breakfast || false,
    petsAllowed: venue.meta?.pets || false,
    kidsAllowed: venue.meta?.kids || false,
    media: venue.media || [{ url: "", alt: "" }],
  });

  useEffect(() => {
    if (venue.name) {
      setForm({
        name: venue.name,
        description: venue.description,
        price: venue.price,
        maxGuests: venue.maxGuests,
        rating: venue.rating || "",
        wifi: venue.meta?.wifi || false,
        breakfast: venue.meta?.breakfast || false,
        petsAllowed: venue.meta?.pets || false,
        kidsAllowed: venue.meta?.kids || false,
        media: venue.media || [{ url: "", alt: "" }],
      });
    }
  }, [venue]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("media")) {
      const index = parseInt(name.split("-")[1]);
      const key = name.split("-")[2];
      const updatedMedia = [...form.media];
      updatedMedia[index][key] = value;
      return setForm({ ...form, media: updatedMedia });
    }

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      name: form.name,
      description: form.description,
      price: Number(form.price),
      maxGuests: Number(form.maxGuests),
      rating: Number(form.rating),
      meta: {
        wifi: form.wifi,
        breakfast: form.breakfast,
        pets: form.petsAllowed,
        kids: form.kidsAllowed,
      },
      media: form.media.filter((item) => item.url),
    };

    onSubmit(finalData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700">Venue Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="input-base"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          className="input-base"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm">Price per night</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            className="input-base"
          />
        </div>

        <div>
          <label className="text-sm">Max Guests</label>
          <input
            type="number"
            name="maxGuests"
            value={form.maxGuests}
            onChange={handleChange}
            required
            className="input-base"
          />
        </div>
      </div>

      <div>
        <label className="text-sm">Rating (1-5)</label>
        <input
          type="number"
          step="0.1"
          max="5"
          min="1"
          name="rating"
          value={form.rating}
          onChange={handleChange}
          className="input-base"
        />
      </div>

      <fieldset className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" name="wifi" checked={form.wifi} onChange={handleChange} />
          Wi-Fi
        </label>
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" name="breakfast" checked={form.breakfast} onChange={handleChange} />
          Breakfast
        </label>
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" name="petsAllowed" checked={form.petsAllowed} onChange={handleChange} />
          Pets Allowed
        </label>
        <label className="text-sm flex items-center gap-2">
          <input type="checkbox" name="kidsAllowed" checked={form.kidsAllowed} onChange={handleChange} />
          Kids Allowed
        </label>
      </fieldset>

      <div className="space-y-2 mt-4">
        <label className="block text-sm font-medium text-gray-700">Media (image URLs)</label>
        {form.media.map((mediaItem, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="url"
              placeholder="Image URL"
              name={`media-${index}-url`}
              value={mediaItem.url}
              onChange={handleChange}
              className="input-base w-full"
            />
            <input
              type="text"
              placeholder="Alt text"
              name={`media-${index}-alt`}
              value={mediaItem.alt}
              onChange={handleChange}
              className="input-base w-full"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              media: [...prev.media, { url: "", alt: "" }],
            }))
          }
          className="text-sm text-sky hover:underline"
        >
          + Add another image
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-forestDark text-white rounded-md font-medium hover:bg-forest transition"
      >
        {venue?.name ? "Update Venue" : "Create Venue"}
      </button>
    </form>
  );
}
