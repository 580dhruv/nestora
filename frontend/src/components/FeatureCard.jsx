import React from "react";

const FeatureCard = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  );
};

export default FeatureCard;
