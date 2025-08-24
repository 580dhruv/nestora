import { useEffect, useState } from "react";

const Navbar = ({ navLinks = [], profileImage = "", showProfile = true }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check auth via backend
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/users/checkAuth/", {
          method: "GET",
          credentials: "include", // ✅ important to send cookies
        });
        if (res.status === 200) {
          const data = await res.json();
          setIsAuthenticated(data.authenticated);
        } else if (res.status === 401) {
          // user not logged in → no console error
          setIsAuthenticated(false);
        } else {
          console.error("Unexpected response:", res.status);
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);
  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/users/logout/", {
        method: "POST",
        credentials: "include", // sends HttpOnly cookie
      });
  
      if (res.ok) {
        setIsAuthenticated(false); // update UI
        window.location.reload(); // optional
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };
  

  return (
    <header className="flex items-center justify-between border-b bg-gray-100 border-[#eaeff0] px-10 py-3">
      <div className="flex items-center gap-4">
        <a href="/" className="text-lg font-bold tracking-tight">Nestora</a>
      </div>

      <div className="flex gap-8 items-center">
        <nav className="flex gap-9 text-sm font-medium">
          {navLinks.map(({ text, link }, index) => {
            if (text.toLowerCase() === "login") {
              return isAuthenticated ? (
                <button key={index} onClick={handleLogout} className="hover:text-blue-800 transition-colors duration-200">
                  Logout
                </button>
              ) : (
                <a key={index} href="/login" className="hover:text-blue-800 transition-colors duration-200">
                  Login / Register
                </a>
              );
            } else {
              return (
                <a key={index} href={link} className="hover:text-blue-800 transition-colors duration-200">
                  {text}
                </a>
              );
            }
          })}
        </nav>
      </div>

      {isAuthenticated && showProfile && profileImage && (
        <img src={profileImage} alt="profile" className="w-10 h-10 rounded-full border border-gray-300 object-cover" />
      )}
    </header>
  );
};

export default Navbar;
