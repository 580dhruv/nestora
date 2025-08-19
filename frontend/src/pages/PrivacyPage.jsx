import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { navLinks } from "../options/navlinks";
import { footerLinks } from "../options/footerLinks";

const PrivacyPage = () => {

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden font-sans">
      <Navbar
        navLinks={navLinks}
        profileImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAoMH2IqOmPmik3bRyfsEYDb0rbgdgzttItGZRLUVXKQT1wTtKXFdaOw6AH1c-E_iQZ26moI1gGB3ncVz1oGkMltxnzEu7PcxoYOXIuUOwMA2MNioPgJHhpF14_6iO9ggoyJf3I28M6F6cnArFC7K16fE3gIBLnmp-lK_1FqwUO0RhJBGJPR8VaZQaCVLUOh1dJohjm9EFoyXUXUgSiWTW81g4RS2G08Q3QieyApi5gG0-DnM20Z6c8tVUO0Q99nibJSIQWpRxHdrE"
      />

      <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[960px] w-full">
          <Heading text="Privacy Policy" />

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            At HomeWise, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Information We Collect</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We may collect information such as your name, email address, phone number, property preferences, and browsing activity on our site. This helps us provide a personalized experience and improve our services.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">2. How We Use Your Information</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Your information is used to:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Provide and improve our services</li>
              <li>Send you relevant property listings and updates</li>
              <li>Respond to your inquiries and requests</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Sharing Your Information</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We do not sell your personal data. We may share information with trusted partners who help us deliver our services, such as real estate agents and marketing providers, always under strict confidentiality agreements.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Security</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We implement appropriate security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Your Rights</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            You have the right to access, update, or delete your personal information. You can also opt-out of marketing communications at any time.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">6. Updates to This Policy</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mt-6">
            By using HomeWise, you agree to this Privacy Policy. If you have any questions, please contact us at <a href="mailto:privacy@homewise.com" className="text-blue-600 underline">privacy@homewise.com</a>.
          </p>
        </div>
      </div>

      <Footer footerLinks={footerLinks} />
    </div>
  );
};

export default PrivacyPage;
