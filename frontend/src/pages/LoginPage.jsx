import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../components/Navbar';
import { navLinks } from '../options/navlinks';
import Footer from '../components/Footer';
import { footerLinks } from '../options/footerLinks';

const LoginPage = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  // Trigger signup redirect when the page loads
  useEffect(() => {
    loginWithRedirect({
      screen_hint: 'signup',
      redirect_uri: window.location.origin,
    });
  }, [loginWithRedirect]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-['Inter','Noto_Sans',sans-serif]">
      

      {/* Main content */}
      <div className="flex flex-1 items-center justify-center">
        <p className="text-lg text-gray-600">
          {isLoading ? 'Loading...' : 'Redirecting to registration...'}
        </p>
      </div>

      
    </div>
  );
};

export default LoginPage;
