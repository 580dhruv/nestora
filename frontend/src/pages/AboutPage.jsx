import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { navLinks } from "../options/navlinks";
import { footerLinks } from "../options/footerLinks";

const AboutPage = () => {

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden font-sans">
      <Navbar
        navLinks={navLinks}
        profileImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAoMH2IqOmPmik3bRyfsEYDb0rbgdgzttItGZRLUVXKQT1wTtKXFdaOw6AH1c-E_iQZ26moI1gGB3ncVz1oGkMltxnzEu7PcxoYOXIuUOwMA2MNioPgJHhpF14_6iO9ggoyJf3I28M6F6cnArFC7K16fE3gIBLnmp-lK_1FqwUO0RhJBGJPR8VaZQaCVLUOh1dJohjm9EFoyXUXUgSiWTW81g4RS2G08Q3QieyApi5gG0-DnM20Z6c8tVUO0Q99nibJSIQWpRxHdrE"
      />

      <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[960px] w-full">
          <Heading text="About HomeWise" />
          
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Welcome to HomeWise, your trusted partner in buying, selling, and renting properties. Our mission is to make the real estate process seamless and enjoyable for everyone. Whether you're searching for your dream home or looking to list your property, we provide the tools and guidance to help you make informed decisions.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Our platform connects you with experienced agents, comprehensive property listings, and insightful market data. At HomeWise, we prioritize transparency, convenience, and reliability to ensure a smooth experience for all our users.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Founded in 2023, HomeWise continues to innovate the real estate experience by integrating modern technology with personalized service. We believe everyone deserves a home they love, and we are committed to helping you find it.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Thank you for choosing HomeWise — your journey to the perfect property starts here.
          </p>
        </div>
      </div>

      <Footer footerLinks={footerLinks} />
    </div>
  );
};

export default AboutPage;
