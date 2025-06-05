import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import VenueForm from "../components/VenueForm";
import { fetchVenueById, createVenue, updateVenue } from "../services/venues";
import Navbar from "../components/Navbar";

export default function VenueFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(isEditMode);

  useEffect(() => {
    if (isEditMode) {
      const getVenue = async () => {
        try {
          const data = await fetchVenueById(id);
          setVenue(data);
        } catch (err) {
          console.error("Failed to fetch venue for editing:", err);
        } finally {
          setLoading(false);
        }
      };
      getVenue();
    }
  }, [id, isEditMode]);

  const handleSubmit = async (formData) => {
    try {
      if (isEditMode) {
        await updateVenue(id, formData);
        alert("✅ Venue updated!");
      } else {
        await createVenue(formData);
        alert("✅ Venue created!");
      }
      navigate("/admin");
    } catch (err) {
      console.error("Venue submission failed:", err);
      alert("❌ Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-md border border-stone space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-forest">
            {isEditMode ? "Edit Venue" : "Create New Venue"}
          </h1>
          <Link to="/admin" className="text-sm text-forest hover:underline">
            ← Back to Dashboard
          </Link>
        </div>

        {loading && isEditMode ? (
          <p className="text-slate-600">Loading venue...</p>
        ) : (
          <VenueForm venue={venue} onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}
