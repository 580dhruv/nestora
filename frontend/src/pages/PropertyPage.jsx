import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import { navLinks } from "../options/navlinks";
import { footerLinks } from "../options/footerLinks";

const PropertyPage = ({ title = "Homes for Sale", properties = [] }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/property/${id}`);
  };
  if (!properties || properties.length==0) {
    return <div>No properties to show </div>
  }
  console.log("Properties:", properties);

  
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden font-sans">
      {/* Navbar */}
      <Navbar navLinks={navLinks} />

      {/* Page Title */}
      <header className="px-6 py-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      </header>

      {/* Properties Grid */}
      <main className="flex-1">
        <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.isArray(properties) && properties.length > 0 ? (
            properties.map((property, index) => (
              <div
                key={index}
                onClick={() => handleClick(property._id || property.id)}
                className="cursor-pointer"
              >
                <PropertyCard
                id={property._id}
                image={property.images?.[0]}   // take first image
                price={property.price?.toLocaleString()}
                beds={property.beds}
                baths={property.baths}
                size={`${property.size} sqft`}
                address={property.address}
              />

              </div>
            ))
          ) : (
            <div>No properties to show</div>
          )}
          
        </div>
      </main>

      {/* Footer */}
      <Footer footerLinks={footerLinks} />
    </div>
  );
};

export default PropertyPage;
