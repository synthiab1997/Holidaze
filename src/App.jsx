import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";
import AccommodationListPage from "./pages/AccommodationListPage.jsx";
import AccommodationDetails from "./pages/AccommodationDetails.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import BookingConfirmationPage from "./pages/BookingConfirmationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import AdminDashboard from "./pages/AdminDashboardPage.jsx";
import EditVenuePage from "./pages/EditVenuePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/venues" element={<AccommodationListPage />} />
          <Route path="/venues/:id" element={<AccommodationDetails />} />
          <Route path="/booking/:id" element={<BookingPage />} />
          <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/edit-venue/:id" element={<EditVenuePage />} />
          <Route path="*" element={<PageNotFound />} /> {/* ✅ Wildcard route */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
