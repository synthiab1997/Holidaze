import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { createBooking } from "../services/bookings";

const BookingPage = () => {
  const { id: venueId } = useParams(); // Get venue ID from URL
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSubmit = async (details) => {
    const bookingPayload = {
      ...details,
      venueId,
    };

    try {
      const booking = await createBooking(bookingPayload);
      setBookingDetails(booking);
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md border border-stone mt-8">
      <h1 className="text-2xl font-bold text-forest mb-4">Booking</h1>
      {!bookingDetails ? (
        <BookingForm onSubmit={handleSubmit} />
      ) : (
        <div className="text-center text-moss font-semibold">
          Booking Confirmed: #{bookingDetails.id}
        </div>
      )}
    </div>
  );
};

export default BookingPage;
