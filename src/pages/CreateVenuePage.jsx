import React from "react";
import VenueForm from "../components/VenueForm";
import { createVenue } from "../services/venues";
import { useNavigate } from "react-router-dom";

export default function CreateVenuePage() {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await createVenue(data);
      navigate("/admin");
    } catch (err) {
      console.error("Error creating venue:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white mt-8 rounded-xl shadow border border-stone">
      <h1 className="text-2xl font-bold text-forestDark mb-4">Create New Venue</h1>
      <VenueForm onSubmit={handleSubmit} />
    </div>
  );

  <Link to="/admin" className="text-sm text-forest hover:underline">
  ← Back to Dashboard
</Link>
}
