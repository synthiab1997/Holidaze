import React from "react";

function BookingConfirmationPage() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4 text-center bg-cream text-slate-800">
      <div className="bg-white p-6 rounded-xl shadow-md border border-stone max-w-md w-full">
        <h1 className="text-2xl font-bold text-forest mb-2">
          Booking Confirmed!
        </h1>
        <p className="text-lg text-moss">
          Thank you for booking. We hope you enjoy your stay.
        </p>
      </div>
    </div>
  );
}

export default BookingConfirmationPage;
