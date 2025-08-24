import React from "react";

const AmenityCard = ({ icon, title,value }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="text-blue-500">{icon}</div>
      
      <h3 className="text-gray-800 font-semibold">{title}</h3>
      <h3 className="text-gray-800 font-semibold">{value}</h3>
    </div>
  );
};

export default AmenityCard;
