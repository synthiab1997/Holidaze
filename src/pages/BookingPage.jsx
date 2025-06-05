import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { createBooking } from "../services/bookings";

const BookingPage = () => {
  const { id: venueId } = useParams(); // Get venue ID from URL
  const [bookingDetails, setBookingDetails] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (details) => {
    try {
      const booking = await createBooking(details); // details includes venueId
      setBookingDetails(booking);

      // Optional redirect after 2 seconds
      setTimeout(() => {
        navigate("/booking-confirmation");
      }, 2000);
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-cream py-8 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md border border-stone">
        <h1 className="text-2xl font-bold text-forest mb-4">Booking</h1>

        {!bookingDetails ? (
          <>
            <BookingForm venueId={venueId} onSubmit={handleSubmit} />
            <Link
              to={`/venues/${venueId}`}
              className="block mt-4 text-sky-600 hover:underline text-sm text-center"
            >
              ← Back to Venue Details
            </Link>
          </>
        ) : (
          <div className="text-center space-y-4">
            <p className="text-moss font-semibold text-lg">
              ✅ Booking Confirmed! #{bookingDetails.id}
            </p>
            <p className="text-slate-600 text-sm">
              Redirecting to confirmation page...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
