import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import { navLinks } from "../options/navlinks";
import { footerLinks } from "../options/footerLinks";

const TermsPage = () => {

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden font-sans">
      <Navbar
        navLinks={navLinks}
        profileImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAoMH2IqOmPmik3bRyfsEYDb0rbgdgzttItGZRLUVXKQT1wTtKXFdaOw6AH1c-E_iQZ26moI1gGB3ncVz1oGkMltxnzEu7PcxoYOXIuUOwMA2MNioPgJHhpF14_6iO9ggoyJf3I28M6F6cnArFC7K16fE3gIBLnmp-lK_1FqwUO0RhJBGJPR8VaZQaCVLUOh1dJohjm9EFoyXUXUgSiWTW81g4RS2G08Q3QieyApi5gG0-DnM20Z6c8tVUO0Q99nibJSIQWpRxHdrE"
      />

      <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[960px] w-full">
          <Heading text="Terms of Use" />

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Welcome to HomeWise. By accessing or using our website and services, you agree to comply with and be bound by these Terms of Use. Please read them carefully.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Use of Site</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            You agree to use HomeWise for lawful purposes only. You may not use our platform to post false or misleading information, engage in fraudulent activity, or violate any applicable laws.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">2. User Accounts</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Intellectual Property</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            All content on HomeWise, including text, images, logos, and software, is owned by or licensed to HomeWise. You may not copy, reproduce, or use our content without written permission.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Limitation of Liability</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            HomeWise is provided “as is.” We are not liable for any direct, indirect, or consequential damages arising from your use of the platform or reliance on any information provided.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Termination</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We may suspend or terminate your account or access to the site at our discretion, with or without notice, for violations of these Terms of Use or any applicable law.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">6. Updates to Terms</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            We may update these Terms of Use from time to time. Changes will be posted on this page with the revised date. Continued use of the platform constitutes acceptance of the updated terms.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mt-6">
            If you have any questions regarding these Terms of Use, please contact us at <a href="mailto:support@homewise.com" className="text-blue-600 underline">support@homewise.com</a>.
          </p>
        </div>
      </div>

      <Footer footerLinks={footerLinks} />
    </div>
  );
};

export default TermsPage;
