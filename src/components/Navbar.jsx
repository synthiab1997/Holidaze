import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setMenuOpen(false);
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-cream shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Holidaze Logo"
            className="h-12 w-12 object-contain rounded-full"
          />
          <span className="text-2xl font-bold" style={{ color: "#C5A706" }}>
            Holidaze
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="sm:hidden text-slate-800 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links - hidden on mobile unless menuOpen */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute sm:static top-16 left-0 w-full sm:w-auto bg-cream sm:bg-transparent shadow-md sm:shadow-none sm:flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-0 py-4 sm:py-0 space-y-4 sm:space-y-0 sm:space-x-6 text-sm font-medium text-slate-800`}
        >
          <Link to="/venues" className="hover:text-moss" onClick={() => setMenuOpen(false)}>
            Venues
          </Link>
          <Link to="/about" className="hover:text-moss" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="hover:text-moss" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          {user ? (
            <>
              <Link
                to={user.venueManager ? "/admin" : "/profile"}
                className="hover:text-moss"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-moss transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-moss" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/signup" className="hover:text-moss" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
            </>
          )}

          <Link
            to="/venues"
            className="bg-[#C5A706] text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
