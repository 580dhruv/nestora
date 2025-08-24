import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { navLinks } from "../options/navlinks";
import { footerLinks } from "../options/footerLinks";

const LoginRegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");
    setMessage("");
    try {
      
      const endpoint = isLogin? "http://localhost:8000/api/users/login/":"http://localhost:8000/api/users/register/"
      console.log(endpoint)
      console.log(JSON.stringify({ email, password, action: isLogin ? "login" : "register" }),)
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ email, password, action: isLogin ? "login" : "register" }),
        credentials: "include",
      });

      console.log("after fetch")
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
      } else {
        setMessage(data.message);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError("Network error");
    }
  };

  const primaryBlue = "#2563EB"; // Exact LandingPage blue
  const hoverBlue = "#1D4ED8";   // Hover color matching LandingPage

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col overflow-x-hidden font-['Inter','Noto_Sans',sans-serif]">
      <Navbar 
        navLinks={navLinks} 
        profileImage={'https://lh3.googleusercontent.com/aida-public/AB6AXuBiXILEb66LIHt4wQo7X7azhy977X3gKiwmik7sNyc_6j0wW2aU9lDVGulGrJJhzaNO8_ZdAkUDj20M5M_w_ioS4ebjLOItGci2GCdWISFVKg1fdmEuzjJfDzrlXPEzm9ZbgTkVvj2SRrQiZwvmODx4a8fgM4Gl83v3rpfwfl7XA4hxDAD8XCO8HaZSqpW3HpZQSTrEirZHl-ITYggCnqK7Mw5TS7kuuc_Aa96lqpXLysQFqU6mArAmf8zVAR_jaCA_m9R02trwa1-l'}
      />

      <div className="flex flex-col grow items-center justify-center p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md transition-all duration-300">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-6">
            
            <button
              onClick={() => setIsLogin(true)}
              className={`px-6 py-2 font-semibold rounded-tl-xl rounded-bl-xl transition-colors ${
                isLogin 
                  ? "text-white" 
                  : "text-gray-600 bg-gray-100 hover:bg-gray-200"
              }`}
              style={{ backgroundColor: isLogin ? primaryBlue : undefined }}
              onMouseOver={(e) => { if(isLogin) e.currentTarget.style.backgroundColor = hoverBlue }}
              onMouseOut={(e) => { if(isLogin) e.currentTarget.style.backgroundColor = primaryBlue }}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-6 py-2 font-semibold rounded-tr-xl rounded-br-xl transition-colors ${
                !isLogin 
                  ? "text-white" 
                  : "text-gray-600 bg-gray-100 hover:bg-gray-200"
              }`}
              style={{ backgroundColor: !isLogin ? primaryBlue : undefined }}
              onMouseOver={(e) => { if(!isLogin) e.currentTarget.style.backgroundColor = hoverBlue }}
              onMouseOut={(e) => { if(!isLogin) e.currentTarget.style.backgroundColor = primaryBlue }}
            >
              Sign Up
            </button>
          </div>

          <h1 className="text-3xl font-bold mb-6 text-center">{isLogin ? "Login" : "Sign Up"}</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 mb-4 rounded-lg w-full focus:outline-[#2563EB] focus:ring-2 focus:ring-blue-200 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 mb-4 roundzd-lg w-full focus:outline-[#2563EB] focus:ring-2 focus:ring-blue-200 transition"
          />
          {error && <p className="text-red-600 mb-2 text-center">{error}</p>}
          {message && <p className="text-green-600 mb-2 text-center">{message}</p>}

          <button
            onClick={handleSubmit}
            className="w-full py-3 text-white rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: primaryBlue }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverBlue}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = primaryBlue}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <p className="text-center text-gray-500 mt-4">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <span className="text-[#2563EB] cursor-pointer" onClick={() => setIsLogin(false)}>Sign Up</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span className="text-[#2563EB] cursor-pointer" onClick={() => setIsLogin(true)}>Login</span>
              </>
            )}
          </p>
        </div>
      </div>

      <Footer footerLinks={footerLinks} />
    </div>
  );
};

export default LoginRegisterPage;
