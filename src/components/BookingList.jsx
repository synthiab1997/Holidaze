import React from 'react';

const BookingList = ({ bookings }) => {
  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking.id} className="p-4 border-b border-gray-300">
          <h3 className="text-xl">{booking.venueName}</h3>
          <p className="text-sm">Check-in: {booking.checkIn} | Check-out: {booking.checkOut}</p>
          <p className="text-sm">Guests: {booking.guests}</p>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
