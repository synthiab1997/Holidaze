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
import UserProfilePage from "./pages/UserProfilePage.jsx";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";
import EditVenuePage from "./pages/EditVenuePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import CreateVenuePage from "./pages/CreateVenuePage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/venues" element={<AccommodationListPage />} />
      <Route path="/venues/:id" element={<AccommodationDetails />} />
      <Route path="/booking/:id" element={<BookingPage />} />
      <Route
        path="/booking-confirmation"
        element={<BookingConfirmationPage />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* ✅ Protected Routes */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute requireManager>
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-venue/:id"
        element={
          <ProtectedRoute requireManager>
            <EditVenuePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-venue"
        element={
          <ProtectedRoute requireManager>
            <CreateVenuePage />
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
