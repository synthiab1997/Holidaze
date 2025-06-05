import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
    venueManager: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateEmail = (email) => email.endsWith("@stud.noroff.no");
  const isValidName = (name) => /^[a-zA-Z0-9_]+$/.test(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(form.email)) {
      setError("Only @stud.noroff.no email addresses are allowed.");
      return;
    }

    if (!isValidName(form.name)) {
      setError("Name can only use letters, numbers, and underscores.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (
      form.avatar &&
      !/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(form.avatar)
    ) {
      setError("Avatar must be a valid image URL.");
      return;
    }

    try {
      const result = await registerUser(form);

      if (!result.data || !result.data.name) {
        throw new Error(result.errors?.[0]?.message || "Registration failed.");
      }

      localStorage.setItem("user", JSON.stringify(result.data));

      if (result.data.venueManager) {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    } catch (err) {
      setError(err.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="min-h-screen bg-cream text-slate-800 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-forestDark mb-4 text-center">
            Create Your Account
          </h1>

          <input
            type="text"
            name="name"
            placeholder="Username (letters, numbers, or underscores)"
            value={form.name}
            onChange={handleChange}
            className="input-base mb-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email (must be @stud.noroff.no)"
            value={form.email}
            onChange={handleChange}
            className="input-base mb-3"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="input-base mb-3"
            required
          />

          <input
            type="url"
            name="avatar"
            placeholder="Avatar URL (optional)"
            value={form.avatar}
            onChange={handleChange}
            className="input-base mb-3"
          />

          <label className="block text-sm font-medium text-slate-700 mb-1">
            Register as
          </label>
          <div className="flex justify-between items-center mb-4 bg-slate-100 rounded-md p-1">
            <button
              type="button"
              className={`flex-1 text-center py-2 rounded-md transition font-medium ${
                !form.venueManager
                  ? "bg-forestDark text-white"
                  : "bg-transparent text-forestDark hover:bg-forestLight"
              }`}
              onClick={() =>
                setForm((prev) => ({ ...prev, venueManager: false }))
              }
            >
              Customer
            </button>
            <button
              type="button"
              className={`flex-1 text-center py-2 rounded-md transition font-medium ${
                form.venueManager
                  ? "bg-forestDark text-white"
                  : "bg-transparent text-forestDark hover:bg-forestLight"
              }`}
              onClick={() =>
                setForm((prev) => ({ ...prev, venueManager: true }))
              }
            >
              Venue Manager
            </button>
          </div>

          {error && <p className="text-red-600 mb-3">{error}</p>}

          <button
            type="submit"
            className="w-full bg-forestDark hover:bg-forest text-white py-2 rounded-md font-semibold transition"
          >
            Register
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
