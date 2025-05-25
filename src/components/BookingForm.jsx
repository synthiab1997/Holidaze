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
    onSubmit(bookingDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg border border-stone">
      <h2 className="text-xl font-semibold text-forest">Book Your Stay</h2>

      <div>
        <label htmlFor="checkIn" className="block text-sm font-medium text-forest">
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
        <label htmlFor="checkOut" className="block text-sm font-medium text-forest">
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
        <label htmlFor="guests" className="block text-sm font-medium text-forest">
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


//OTHER BOOKING FORM OPTION WITH REACT CALENDAR//

/*import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookingForm = ({ onSubmit, bookedDates = [] }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const [checkIn, checkOut] = dateRange;
    if (!checkIn || !checkOut) return;
    onSubmit({
      checkIn: checkIn.toISOString(),
      checkOut: checkOut.toISOString(),
      guests,
    });
  };

  const isDateBooked = (date) =>
    bookedDates.some(
      (range) =>
        new Date(date).getTime() >= new Date(range.from).getTime() &&
        new Date(date).getTime() <= new Date(range.to).getTime()
    );

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md border border-stone">
      <h2 className="text-xl font-bold text-forest">Book Your Stay</h2>

      <div className="text-sm text-slate-700">
        <label className="block font-medium mb-2">Select Dates</label>
        <Calendar
          selectRange
          onChange={setDateRange}
          value={dateRange}
          tileDisabled={({ date }) => isDateBooked(date)}
          className="rounded-md shadow-sm border border-stone"
        />
      </div>

      <div>
        <label htmlFor="guests" className="block text-sm font-medium text-forest">
          Guests
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
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
*/ 