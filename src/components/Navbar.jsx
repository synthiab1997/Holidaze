import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="bg-[#228B22] text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="Holidaze Logo" className="h-10 w-10 object-contain rounded-full" />
        <span className="text-2xl font-bold">Holidaze</span>
      </Link>

      <div className="space-x-6 text-sm font-medium">
        <Link to="/venues" className="hover:text-[#FFD700]">Venues</Link>
        {user ? (
          <>
            <Link to={user.venueManager ? "/admin" : "/profile"} className="hover:text-[#FFD700]">Dashboard</Link>
            <button onClick={handleLogout} className="hover:text-[#FFD700]">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-[#FFD700]">Login</Link>
            <Link to="/signup" className="hover:text-[#FFD700]">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
