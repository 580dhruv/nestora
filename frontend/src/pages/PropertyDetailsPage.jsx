import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Heading from "../components/Heading";
import AmenityCard from "../components/AmenityCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ bring in nav + footer options
import { navLinks } from "../options/navlinks";
import { footerLinks } from "../options/footerLinks";

const PropertyDetailsPage = () => {
  const { property_id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        console.log("Fetching property", property_id);

        const res = await fetch(`http://localhost:8000/api/properties/${property_id}/`, { credentials: "include" });      
        if (!res.ok) throw new Error("Property not found");
        const data = await res.json();
        console.log('-'*50);
        
        console.log("Fetched Data :",data);
        
        setProperty(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProperty();
  }, [property_id]);

  if (loading) return <div>Loading...</div>;
  if (!property) return <div className="p-10 text-center text-red-500">Property not found</div>;

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans">
      {/* ✅ Navbar with navLinks + profileImage */}
      <Navbar
        navLinks={navLinks}
        profileImage="https://lh3.googleusercontent.com/aida-public/AB6AXuBiXILEb66LIHt4wQo7X7azhy977X3gKiwmik7sNyc_6j0wW2aU9lDVGulGrJJhzaNO8_ZdAkUDj20M5M_w_ioS4ebjLOItGci2GCdWISFVKg1fdmEuzjJfDzrlXPEzm9ZbgTkVvj2SRrQiZwvmODx4a8fgM4Gl83v3rpfwfl7XA4hxDAD8XCO8HaZSqpW3HpZQSTrEirZHl-ITYggCnqK7Mw5TS7kuuc_Aa96lqpXLysQFqU6mArAmf8zVAR_jaCA_m9R02trwa1-l"
      />

      <div className="flex-grow">
        <Heading text={property.title} />

        <div className="px-10 py-5 max-w-6xl mx-auto">
          <p className="text-sm text-[#49739c] pb-5">
            {property.beds} beds · {property.baths} baths · {property.size} sqft
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          {(property.imageUrls || []).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={property.title}
              className="rounded-lg w-full h-60 object-cover"
            />
          ))}

          </div>

          <h2 className="text-xl font-bold text-[#0d141c] pb-2 pt-5">Description</h2>
          <p className="text-[#0d141c]">{property.description}</p>

          
            {/* Amenities */}
            {Object.entries(property.amenities)
                .filter(([_, value]) => value) // only keep true
                .map(([key, value]) => (
                  <AmenityCard key={key} title={key} value={value} />
              ))}
        </div>
      </div>

      {/* ✅ Footer with footerLinks */}
      <Footer footerLinks={footerLinks} />
    </div>
  );
};

export default PropertyDetailsPage;
