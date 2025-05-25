import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-forest text-white shadow-md">
      <div className="container-section flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Holidaze Logo"
            className="h-10 w-10 object-contain rounded-full"
          />
          <span className="text-xl font-bold">Holidaze</span>
        </Link>

        <div className="flex gap-4 text-sm font-medium items-center">
          <Link to="/venues" className="hover:text-sun">
            Venues
          </Link>
          {user ? (
            <>
              <Link
                to={user.venueManager ? "/admin" : "/profile"}
                className="hover:text-sun"
              >
                Dashboard
              </Link>
              <button onClick={handleLogout} className="hover:text-sun">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-sun">
                Login
              </Link>
              <Link to="/signup" className="hover:text-sun">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
