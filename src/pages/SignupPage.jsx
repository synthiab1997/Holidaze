import React from 'react';
import { registerUser } from '../services/profiles.js';

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
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Sign Up</h1>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="input" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="input mt-2" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="input mt-2" />
      <button type="submit" className="btn mt-4">Create Account</button>
    </form>
  );
}

export default SignupPage;