import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#228B22] text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="public/logo.png"
          alt="Holidaze Logo"
          className="h-10 w-10 object-contain rounded-full"
        />
        <span className="text-2xl font-bold">Holidaze</span>
      </Link>
      
      <div className="space-x-6 text-sm font-medium">
        <Link to="/venues" className="hover:text-[#FFD700] transition-colors">
          Venues
        </Link>
        <Link to="/profile" className="hover:text-[#FFD700] transition-colors">
          Profile
        </Link>
        <Link to="/login" className="hover:text-[#FFD700] transition-colors">
          Login
        </Link>
        <Link to="/signup" className="hover:text-[#FFD700] transition-colors">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
