import React, { useState } from "react";

const BookingForm = ({ venueId, onSubmit }) => {
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { checkIn, checkOut, guests } = bookingDetails;

    const payload = {
      dateFrom: new Date(checkIn).toISOString(),
      dateTo: new Date(checkOut).toISOString(),
      guests: Number(guests),
      venueId,
    };

    onSubmit(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-lg border border-stone"
    >
      <h2 className="text-xl font-semibold text-forest">Book Your Stay</h2>

      <div>
        <label
          htmlFor="checkIn"
          className="block text-sm font-medium text-forest"
        >
          Check-In
        </label>
        <input
          type="date"
          id="checkIn"
          name="checkIn"
          value={bookingDetails.checkIn}
          onChange={handleChange}
          required
          className="input-base mt-1"
        />
      </div>

      <div>
        <label
          htmlFor="checkOut"
          className="block text-sm font-medium text-forest"
        >
          Check-Out
        </label>
        <input
          type="date"
          id="checkOut"
          name="checkOut"
          value={bookingDetails.checkOut}
          onChange={handleChange}
          required
          className="input-base mt-1"
        />
      </div>

      <div>
        <label
          htmlFor="guests"
          className="block text-sm font-medium text-forest"
        >
          Guests
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={bookingDetails.guests}
          onChange={handleChange}
          min="1"
          max="20"
          required
          className="input-base mt-1"
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
