import React from "react";

const BookingList = ({ bookings }) => {
  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <div key={booking.id} className="p-4 rounded-md bg-white border border-stone shadow-sm">
          <h3 className="text-lg font-semibold text-forest">{booking.venueName}</h3>
          <p className="text-sm text-slate-700">
            Check-in: <span className="text-moss">{booking.checkIn}</span> | Check-out:{" "}
            <span className="text-moss">{booking.checkOut}</span>
          </p>
          <p className="text-sm text-slate-700">Guests: {booking.guests}</p>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
