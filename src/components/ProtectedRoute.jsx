import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children, requireManager = false }) {
  const { isAuthenticated, isVenueManager } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireManager && !isVenueManager) {
    return <Navigate to="/" replace />;
  }

  return children;
}
