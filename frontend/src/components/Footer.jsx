const Footer = ({ footerLinks = [] }) => {
    return (
      <footer className="flex justify-center bg-gray-100 mt-10">
        <div className="max-w-[960px] w-full flex flex-col text-center px-5 py-10">
          <div className="flex flex-wrap justify-center gap-6 md:flex-row md:justify-around">
            {footerLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-[#5c748a] text-base hover:text-blue-800 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-[#5c748a] text-base mt-4">© 2023 HomeValue, Inc. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  