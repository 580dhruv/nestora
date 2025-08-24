import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertyPage from "./PropertyPage";

const BuyPropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const authRes = await fetch("http://localhost:8000/api/users/checkAuth/", {
          credentials: "include",
        });
  
        if (authRes.status === 401) {
          navigate("/login");
          return;
        }
        console.log("In effect ");
        
        const res = await fetch("http://localhost:8000/api/properties/list/", {
          credentials: "include",
        });
        
        const data = await res.json();
        console.log("Fetched data:", data, Array.isArray(data));
        // 🟢 Remove state, keep only city
        const cleanedProperties = (data.properties || data).map((property) => ({
          ...property,
          address: property.city, // replace address with only city
        }));

        setProperties(cleanedProperties);
        setLoading(false);
      } catch (err) {
        console.error(err);
        navigate("/");
      }
    };
  
    fetchProperties();
  }, [navigate]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return <PropertyPage title="Homes for Sale" properties={properties} />;
};

export default BuyPropertyPage;
