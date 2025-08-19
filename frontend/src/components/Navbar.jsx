import { useAuth0 } from '@auth0/auth0-react';

const Navbar = ({ navLinks = [], profileImage = "", showProfile = true }) => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0();

  // Use Auth0 profile picture if logged in, else fallback to passed prop
  const profileLink =
    showProfile && isAuthenticated && user?.picture
      ? user.picture
      : showProfile
      ? profileImage
      : "";

  return (
    <header className="flex items-center justify-between border-b bg-gray-100 border-[#eaeff0] px-10 py-3">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <a href="/" className="text-lg font-bold tracking-tight">
          HomeWise
        </a>
      </div>

      {/* Nav Links */}
      <div className="flex gap-8 items-center">
        <nav className="flex gap-9 text-sm font-medium">
          {navLinks.map(({ text, link }, index) => {
            if (text === 'Login' && !isAuthenticated) {
              // Show Login button when logged out
              return (
                <button
                  key={index}
                  onClick={() =>
                    loginWithRedirect({
                      redirect_uri: window.location.origin,
                    })
                  }
                  className="hover:text-blue-800 transition-colors duration-200"
                >
                  {text}
                </button>
              );
            } else if (text === 'Login' && isAuthenticated) {
              // Replace Login with Logout when logged in
              return (
                <button
                  key={index}
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                  className="hover:text-blue-800 transition-colors duration-200"
                >
                  Logout
                </button>
              );
            } else {
              return (
                <a
                  key={index}
                  href={link}
                  className="hover:text-blue-800 transition-colors duration-200"
                >
                  {text}
                </a>
              );
            }
          })}
        </nav>
      </div>

      {/* Show profile image only when logged in and not loading */}
      {isAuthenticated && profileLink && !isLoading && (
        <img
          src={profileLink}
          alt={user?.name || "profile"}
          className="w-10 h-10 rounded-full border border-gray-300 object-cover"
        />
      )}
    </header>
  );
};

export default Navbar;
