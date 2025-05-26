import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-forest">
        404 - Page Not Found
      </h1>
      <p className="text-lg mb-6 text-slate-600">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="text-sun underline font-medium hover:text-moss transition"
      >
        Return to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
