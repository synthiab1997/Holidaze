import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-cream text-white shadow-md">
      <div className="container-section flex justify-between items-center py-4">
        {/* Logo and Brand */}
        <Link to="src/assets/logo.png" className="flex items-center gap-2">
          <img
            src="src/assets/logo.png"
            alt="Holidaze Logo"
            className="h-14 w-14 object-contain rounded-full"
          />
          <span
            className="text-xl font-bold tracking-tight text-gold"
            style={{ color: "#C5A706" }}
          >
            Holidaze
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-5 text-sm font-medium">
          <Link to="/venues" className="hover:text-moss">
            Venues
          </Link>
          <Link to="/about" className="hover:text-moss">
            About
          </Link>
          <Link to="/contact" className="hover:text-moss">
            Contact
          </Link>

          {user ? (
            <>
              <Link
                to={user.venueManager ? "/admin" : "/profile"}
                className="hover:text-moss"
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
              <Link to="/login" className="hover:text-moss">
                Login
              </Link>
              <Link to="/signup" className="hover:text-moss">
                Sign Up
              </Link>
            </>
          )}

          {/* CTA */}
          <Link
            to="/venues"
            className="ml-2 bg-[#C5A706] text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
