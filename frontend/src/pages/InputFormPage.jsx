import { useState } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import { navLinks } from "../options/navlinks";
import Heading from "../components/Heading"

const InputFormPage=()=> {
    const [formData, setFormData] = useState({
      state: "",
      city: "",
      address: "",
      squareFootage: "",
      bedrooms: "",
      bathrooms: "",
      yearBuilt: "",
      lotSize: "",
      propertyType: "",
      heatingType: "",
      coolingType: "",
      parkingType: "",
      exteriorMaterial: "",
      roofType: "",
      foundationType: "",
      basementType: "",
      flooringType: "",
      fireplace: "",
      pool: "",
      view: ""
    });
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };


    return (
    <>
     <div  className="bg-cover bg-center h-screen w-full text-[#111618] min-h-screen overflow-x-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB90awtJy0yXbtJyBtbBZq6RkQNDnjbNwp8cKIwxPrPO9DG3QWwWM8bj3CORBY7AzPX0EaMNFCrpQJudUA0RwhCczgZsG9IE0QxT_PhUKY26BHV13lp6TLKrQWP9RuG5VU_XWQWZERfHosMHsCyquSGM7WMRJf7oUbJzXmgr7kQL7yW2bGuacRDicJ3pWg_Wh5zmMT5BHYqPBAkjTyb0QBzZGXSf7hFhrV5nemsmwlcuQHoNkjUInplWyplVP3kMaS6JqqVQ1RJ5Vgx')"
  }}  >
        {/* Navbar Section */}
        <Navbar navLinks = {navLinks} profileImage={'https://lh3.googleusercontent.com/aida-public/AB6AXuBiXILEb66LIHt4wQo7X7azhy977X3gKiwmik7sNyc_6j0wW2aU9lDVGulGrJJhzaNO8_ZdAkUDj20M5M_w_ioS4ebjLOItGci2GCdWISFVKg1fdmEuzjJfDzrlXPEzm9ZbgTkVvj2SRrQiZwvmODx4a8fgM4Gl83v3rpfwfl7XA4hxDAD8XCO8HaZSqpW3HpZQSTrEirZHl-ITYggCnqK7Mw5TS7kuuc_Aa96lqpXLysQFqU6mArAmf8zVAR_jaCA_m9R02trwa1-l'}/>
        <div
 
>
        <Heading text="Predict your home price"/>
        {/* Form Section */}
        <Form formData={formData} handleChange={handleChange} />
        </div>
    </div>
  </>
    )
}
export default InputFormPage