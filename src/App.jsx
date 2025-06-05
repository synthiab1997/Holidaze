import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AccommodationListPage from "./pages/AccommodationListPage.jsx";
import AccommodationDetails from "./pages/AccommodationDetails.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import BookingConfirmationPage from "./pages/BookingConfirmationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CreateVenuePage from "./pages/CreateVenuePage.jsx";
import EditVenuePage from "./pages/EditVenuePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import UserDashboardPage from "./pages/UserDashboardPage.jsx"; // ✅ NEW COMBINED PAGE

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/venues" element={<AccommodationListPage />} />
      <Route
        path="/venues/:id"
        element={
          <ProtectedRoute>
            <AccommodationDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/booking/:id"
        element={
          <ProtectedRoute>
            <BookingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/booking-confirmation"
        element={<BookingConfirmationPage />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* ✅ Unified Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <UserDashboardPage />
          </ProtectedRoute>
        }
      />

      {/* ✅ Venue Create/Edit (still protected) */}
      <Route
        path="/create-venue"
        element={
          <ProtectedRoute>
            <CreateVenuePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-venue/:id"
        element={
          <ProtectedRoute>
            <EditVenuePage />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
