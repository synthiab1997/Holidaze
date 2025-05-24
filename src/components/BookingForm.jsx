import React, { useState } from 'react';

const BookingForm = ({ venueId, onSubmit }) => {
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(bookingDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700">Check-In</label>
        <input
          type="date"
          id="checkIn"
          name="checkIn"
          value={bookingDetails.checkIn}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700">Check-Out</label>
        <input
          type="date"
          id="checkOut"
          name="checkOut"
          value={bookingDetails.checkOut}
          onChange={handleChange}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={bookingDetails.guests}
          onChange={handleChange}
          min="1"
          max="10"
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Book Now</button>
    </form>
  );
};

export default BookingForm;
