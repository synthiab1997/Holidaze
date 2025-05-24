import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import { createBooking } from '../services/bookings';

const BookingPage = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSubmit = async (details) => {
    const booking = await createBooking(details);
    setBookingDetails(booking);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Booking</h1>
      {!bookingDetails ? (
        <BookingForm onSubmit={handleSubmit} />
      ) : (
        <div>Booking Confirmed: {bookingDetails.id}</div>
      )}
    </div>
  );
};

export default BookingPage;
