import React from "react";
import useAuth from "../hooks/useAuth";

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
}
