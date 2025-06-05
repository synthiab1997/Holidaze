import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { createVenue, fetchVenueById, updateVenue } from "../services/venues";
import VenueForm from "../components/VenueForm";
import Navbar from "../components/Navbar";

export default function VenueFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(false);
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (isEditMode) {
      const loadVenue = async () => {
        setLoading(true);
        try {
          const data = await fetchVenueById(id);
          setVenue(data);
        } catch (err) {
          console.error("❌ Failed to fetch venue:", err);
        } finally {
          setLoading(false);
        }
      };
      loadVenue();
    }
  }, [id, isEditMode]);

  const handleSubmit = async (formData) => {
    try {
      if (isEditMode) {
        await updateVenue(id, formData);
        alert("✅ Venue updated successfully!");
      } else {
        await createVenue(formData);
        alert("✅ Venue created successfully!");
      }
      navigate("/dashboard");
    } catch (err) {
      console.error("❌ Venue submission failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 bg-white mt-8 rounded-xl shadow-md border border-stone space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-forest">
            {isEditMode ? "Edit Venue" : "Create New Venue"}
          </h1>
          <Link to="/dashboard" className="text-sm text-forest hover:underline">
            ← Back to Dashboard
          </Link>
        </div>

        {loading ? (
          <p className="text-slate-500">Loading venue data...</p>
        ) : (
          <VenueForm venue={venue} onSubmit={handleSubmit} />
        )}
      </main>
    </div>
  );
}
