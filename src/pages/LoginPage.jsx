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
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="input" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="input mt-2" />
      <button type="submit" className="btn mt-4">Login</button>
    </form>
  );
}

export default LoginPage;