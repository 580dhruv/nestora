import React from "react";
import { useParams } from "react-router-dom"; // To get property id from URL
import Heading from "../components/Heading";
import FeatureCard from "../components/FeatureCard";
import AmenityCard from "../components/AmenityCard";
import propertyData from "../options/propertyData"; // JSON or JS file with property details

const PropertyDetailsPage = () => {
  const { id } = useParams(); // get property id from route
  const property = propertyData.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div className="p-10 text-center text-red-500">Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Use your Heading component for page title */}
      <Heading text={property.title} />

      {/* Property Main Info */}
      <div className="px-10 py-5 max-w-6xl mx-auto">
        <p className="text-sm text-[#49739c] pb-5">
          {property.bedrooms} beds · {property.bathrooms} baths · {property.area}
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          {property.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={property.title}
              className="rounded-lg w-full h-60 object-cover"
            />
          ))}
        </div>

        {/* Features */}
        <h2 className="text-xl font-bold text-[#0d141c] pb-2 pt-5">Features</h2>
        <div className="grid grid-cols-2 gap-2">
          {property.features.map((f) => (
            <FeatureCard key={f.title} title={f.title} value={f.value} />
          ))}
        </div>

        {/* Amenities */}
        <h2 className="text-xl font-bold text-[#0d141c] pb-2 pt-5">Amenities</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          {property.amenities.map((a) => (
            <AmenityCard key={a.title} {...a} />
          ))}
        </div>

        {/* Description */}
        <h2 className="text-xl font-bold text-[#0d141c] pb-2 pt-5">Description</h2>
        <p className="text-[#0d141c]">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
