import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const user = await loginUser(email, password);
      if (user && user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user));
        const isManager = user.venueManager;
        navigate(isManager ? '/admin' : '/profile');
      } else {
        setError('Invalid credentials.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h1 className="text-3xl font-bold text-green-800 text-center">Login to Holidaze</h1>
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600" />
        <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md font-semibold">Login</button>
      </form>
    </div>
  );
}
