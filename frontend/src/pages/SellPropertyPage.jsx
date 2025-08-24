// src/pages/SellPropertyPage.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { navLinks } from "../options/navlinks";
import { footerLinks } from "../options/footerLinks";

const initialFormState = {
  title: "",
  address: "",
  price: "",
  beds: "",
  baths: "",
  size: "",
  lotSize: "",
  yearBuilt: "",
  garage: "",
  heating: "",
  cooling: "",
  description: "",
  images: [""],
  amenities: {
    pool: false,
    palmTrees: false,
    petFriendly: false,
    nearbyPark: false,
    topRatedSchools: false,
    shoppingCenter: false,
  },
};

const SellPropertyPage = ({ user }) => {
  const [form, setForm] = useState(initialFormState);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("amenities.")) {
      const key = name.split(".")[1];
      setForm((f) => ({ ...f, amenities: { ...f.amenities, [key]: checked } }));
      return;
    }

    setForm((f) => ({ ...f, [name]: type === "number" ? Number(value) : value }));
  };

  const handleImageChange = (index, value) => {
    setForm((f) => {
      const images = [...f.images];
      images[index] = value;
      return { ...f, images };
    });
  };

  const addImageField = () => setForm((f) => ({ ...f, images: [...f.images, ""] }));
  const removeImageField = (index) =>
    setForm((f) => ({ ...f, images: f.images.filter((_, i) => i !== index) }));

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!form.address || !form.price || !form.beds || !form.baths || !form.size) {
      alert("Please fill in Address, Price, Beds, Baths, and Size.");
      return;
    }
  
    if (!form.images || form.images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }
  
    try {
      // Prepare FormData for file upload
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (key === "images") {
          form.images.forEach((file) => formData.append("images", file));
        } else if (key === "amenities") {
          formData.append(key, JSON.stringify(form[key]));
        } else {
          formData.append(key, form[key]);
        }
      });
  
      const response = await fetch("http://localhost:8000/api/properties/add/", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
  
      if (response.ok) {
        alert("Property submitted successfully!");
        setForm(initialFormState); // reset form
      } else {
        const error = await response.json();
        alert("Error: " + JSON.stringify(error));
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden font-sans">
      <Navbar navLinks={navLinks} user={user} />

      <main className="mx-auto w-full max-w-4xl px-5 py-8">
        <h1 className="text-2xl font-bold text-[#0d141c]">List Your Property</h1>
        <p className="text-sm text-[#49739c] mt-1">
          Tell us about the home you’re selling. Fields marked <span className="text-red-600">*</span> are required.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Address * */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Price * */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price ($) <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Beds * */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Beds <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="beds"
              value={form.beds}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Baths * */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Baths <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="baths"
              value={form.baths}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Size * */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Size (sqft) <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="size"
              value={form.size}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Lot Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Lot Size (sqft)</label>
            <input
              type="number"
              name="lotSize"
              value={form.lotSize}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              required
           />
          </div>

          {/* Year Built */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Year Built</label>
            <input
              type="number"
              name="yearBuilt"
              value={form.yearBuilt}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Garage */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Garage</label>
            <input
              type="text"
              name="garage"
              value={form.garage}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Heating */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Heating</label>
            <input
              type="text"
              name="heating"
              value={form.heating}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Cooling */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Cooling</label>
            <input
              type="text"
              name="cooling"
              value={form.cooling}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm"
              rows={4}
              required
            />
          </div>

          {/* Images (file uploads) */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Images</label>
            <input
              type="file"
              multiple
              onChange={(e) =>
                setForm((f) => ({ ...f, images: Array.from(e.target.files) }))
              }
              className="mt-2 w-full rounded-lg border-gray-300 shadow-sm"
              required
            />
          </div>

          {/* Amenities */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Amenities</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
              {Object.keys(form.amenities).map((key) => (
                <label key={key} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name={`amenities.${key}`}
                    checked={form.amenities[key]}
                    onChange={handleChange}
  
                  />
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Submit Property
            </button>
          </div>
        </form>

      </main>

      <Footer footerLinks={footerLinks} />
    </div>
  );
};

export default SellPropertyPage;
