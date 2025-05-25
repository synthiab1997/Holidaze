import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import { createBooking } from "../services/bookings";

const BookingPage = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSubmit = async (details) => {
    const booking = await createBooking(details);
    setBookingDetails(booking);
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
