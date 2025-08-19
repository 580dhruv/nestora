import { useNavigate } from "react-router-dom";

const PropertyCard = ({ id, image, price, beds, baths, size, address }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/property/${id}`)}
      className="flex flex-col gap-3 pb-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="px-2">
        <p className="text-[#0d141c] text-base font-medium">{price}</p>
        <p className="text-[#49739c] text-sm">{beds} beds · {baths} baths · {size}</p>
        <p className="text-[#49739c] text-sm">{address}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
