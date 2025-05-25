import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/auth';

export default function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    avatar: '',
    venueManager: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateEmail = (email) => email.endsWith('@stud.noroff.no');
  const isValidName = (name) => /^[a-zA-Z0-9_]+$/.test(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(form.email)) {
      setError('Only @stud.noroff.no email addresses are allowed.');
      return;
    }

    if (!isValidName(form.name)) {
      setError('Name can only use letters, numbers, and underscores.');
      return;
    }

    try {
      const result = await registerUser(form);
      if (!result.id) {
        throw new Error(result.errors?.[0]?.message || 'Registration failed.');
      }
      navigate('/login');
    } catch (err) {
      setError(err.message || 'An error occurred during registration.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-800 mb-4 text-center">Create Your Account</h1>

        <input
          type="text"
          name="name"
          placeholder="Username (letters, numbers, or underscores)"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email (must be @stud.noroff.no)"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600"
          required
        />

        <input
          type="url"
          name="avatar"
          placeholder="Avatar URL (optional)"
          value={form.avatar}
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600"
        />

        <label className="flex items-center space-x-2 mb-4 text-sm">
          <input
            type="checkbox"
            name="venueManager"
            checked={form.venueManager}
            onChange={handleChange}
            className="accent-green-600"
          />
          <span>Register as Venue Manager</span>
        </label>

        {error && <p className="text-red-600 mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800"
        >
          Register
        </button>
      </form>
    </div>
  );
}
