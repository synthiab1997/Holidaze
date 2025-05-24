// src/pages/LoginPage.jsx
import React from 'react';
import { loginUser } from '../services/profiles';

function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(email, password);
    console.log(result);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-800 mb-4 text-center">Login to Holidaze</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-600"
        />
        <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
