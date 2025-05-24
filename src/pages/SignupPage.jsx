// src/pages/SignupPage.jsx
import React from 'react';
import { registerUser } from '../services/profiles';

function SignupPage() {
  const [form, setForm] = React.useState({ email: '', password: '', name: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await registerUser(form);
    console.log(result);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-800 mb-4 text-center">Create Your Account</h1>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600"
        />
        <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md font-semibold">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
