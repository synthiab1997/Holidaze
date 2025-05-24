import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Holidaze
      </Link>
      <div className="space-x-4">
        <Link to="/login" className="text-white">Login</Link>
        <Link to="/signup" className="text-white">Sign Up</Link>
        <Link to="/venues">Venues</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}