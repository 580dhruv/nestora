import { useNavigate } from "react-router-dom";

const PropertyCard = ({ id, image, price, beds, baths, size, address, city }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${id}`);
  };
  

  return (
    <div
      onClick={handleClick}
      className="flex flex-col gap-3 pb-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      {/* Property Image */}
      <img
      src={`http://localhost:8000${image}`}
      alt="Property"
      className="w-full h-48 object-cover rounded-md"
    />

      {/* Property Info */}
      <div className="px-2">
        <p className="text-[#0d141c] text-base font-medium">{price}</p>
        <p className="text-[#49739c] text-sm">
          {beds} beds · {baths} baths · {size}
        </p>
        <p className="text-[#49739c] text-sm">{address}</p>
        {city && <p className="text-[#6b7280] text-sm">{city}</p>}
      </div>
    </div>
  );
};

export default PropertyCard;
