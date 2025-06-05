import React from "react";
import VenueForm from "../components/VenueForm";
import { createVenue } from "../services/venues";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="max-w-3xl mx-auto p-6 bg-white mt-8 rounded-xl shadow-md border border-stone space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-forest">Create New Venue</h1>
        <Link to="/admin" className="text-sm text-forest hover:underline">
          ← Back to Dashboard
        </Link>
      </div>

      <VenueForm onSubmit={handleSubmit} />
    </div>
  );
}