import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await loginUser(email.trim(), password.trim());
      const user = result.data;

      if (user && user.accessToken) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate(user.venueManager ? "/dashboard" : "/profile");
      } else {
        setError("Invalid credentials.");
      }
    } catch (err) {
      setError(err.message || "Login failed.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-cream text-slate-800 flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
        >
          <h1 className="text-3xl font-bold text-forest text-center">
            Login to Holidaze
          </h1>
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-base"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-base"
          />
          <button type="submit" className="btn-primary w-full">
            Login
          </button>
        </form>
      </main>
    </div>
  );
}
