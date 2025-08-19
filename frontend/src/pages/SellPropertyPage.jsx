// src/pages/SellPropertyPage.jsx
import { useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { navLinks } from "../options/navlinks";
import { footerLinks } from "../options/footerLinks";

const SellPropertyPage = () => {
  const [form, setForm] = useState({
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
  });

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

  const addImageField = () =>
    setForm((f) => ({ ...f, images: [...f.images, ""] }));

  const removeImageField = (index) =>
    setForm((f) => ({
      ...f,
      images: f.images.filter((_, i) => i !== index),
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic required validation (address, price, beds, baths, size)
    if (!form.address || !form.price || !form.beds || !form.baths || !form.size) {
      alert("Please fill in Address, Price, Beds, Baths, and Size.");
      return;
    }

    // Submit payload (hook up your API here)
    console.log("Sell property submission:", form);
    alert("Property submitted! Check the console for payload.");
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden font-sans">
      <Navbar navLinks={navLinks} />

      <main className="mx-auto w-full max-w-4xl px-5 py-8">
        <h1 className="text-2xl font-bold text-[#0d141c]">List Your Property</h1>
        <p className="text-sm text-[#49739c] mt-1">
          Tell us about the home you’re selling. Fields marked <span className="text-red-600">*</span> are required.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Title (optional) */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#49739c] mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g., Beautiful family home in Anytown"
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
            />
          </div>

          {/* Address * */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#49739c] mb-1">
              Address <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="123 Maple Street, Anytown, CA 91234"
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
              required
            />
          </div>

          {/* Price * */}
          <div>
            <label className="block text-sm text-[#49739c] mb-1">
              Price <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="850000"
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
              required
              min="0"
            />
          </div>

          {/* Beds * */}
          <div>
            <label className="block text-sm text-[#49739c] mb-1">
              Beds <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="beds"
              value={form.beds}
              onChange={handleChange}
              placeholder="4"
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
              required
              min="0"
            />
          </div>

          {/* Baths * */}
          <div>
            <label className="block text-sm text-[#49739c] mb-1">
              Baths <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="baths"
              value={form.baths}
              onChange={handleChange}
              placeholder="3"
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
              required
              min="0"
            />
          </div>

          {/* Size * */}
          <div>
            <label className="block text-sm text-[#49739c] mb-1">
              Size (sq ft) <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="size"
              value={form.size}
              onChange={handleChange}
              placeholder="2500"
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
              required
              min="0"
            />
          </div>

          {/* Lot Size */}
          <div>
            <label className="block text-sm text-[#49739c] mb-1">Lot Size (sq ft)</label>
            <input
              type="number"
              name="lotSize"
              value={form.lotSize}
              onChange={handleChange}
              placeholder="7500"
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
              min="0"
            />
          </div>

          {/* Year Built */}
          <div>
            <label className="block text-sm text-[#49739c] mb-1">Year Built</label>
            <input
              type="number"
              name="yearBuilt"
              value={form.yearBuilt}
              onChange={handleChange}
              placeholder="2015"
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
              min="0"
            />
          </div>

          {/* Garage */}
          <div>
            <label className="block text-sm text-[#49739c] mb-1">Garage</label>
            <select
              name="garage"
              value={form.garage}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
            >
              <option value="">Select</option>
              <option value="none">None</option>
              <option value="1-car">1-car attached</option>
              <option value="2-car">2-car attached</option>
              <option value="3-car">3-car attached</option>
            </select>
          </div>

          {/* Heating */}
          <div>
            <label className="block text-sm text-[#49739c] mb-1">Heating</label>
            <select
              name="heating"
              value={form.heating}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
            >
              <option value="">Select</option>
              <option value="forced air">Forced air</option>
              <option value="electric">Electric</option>
              <option value="gas">Gas</option>
              <option value="heat pump">Heat pump</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Cooling */}
          <div>
            <label className="block text-sm text-[#49739c] mb-1">Cooling</label>
            <select
              name="cooling"
              value={form.cooling}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
            >
              <option value="">Select</option>
              <option value="central ac">Central AC</option>
              <option value="window">Window</option>
              <option value="none">None</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#49739c] mb-1">Overview / Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your property, recent upgrades, neighborhood highlights, etc."
              className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
            />
          </div>

          {/* Amenities */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#49739c] mb-2">Amenities</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { key: "pool", label: "Swimming Pool" },
                { key: "palmTrees", label: "Palm Trees" },
                { key: "petFriendly", label: "Pet-Friendly" },
                { key: "nearbyPark", label: "Nearby Park" },
                { key: "topRatedSchools", label: "Top-Rated Schools" },
                { key: "shoppingCenter", label: "Shopping Center" },
              ].map((a) => (
                <label
                  key={a.key}
                  className="flex items-center gap-2 rounded-lg border border-[#cedbe8] bg-white px-4 py-3"
                >
                  <input
                    type="checkbox"
                    name={`amenities.${a.key}`}
                    checked={form.amenities[a.key]}
                    onChange={handleChange}
                    className="h-4 w-4"
                  />
                  <span className="text-sm text-[#0d141c] font-medium">{a.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="md:col-span-2">
            <label className="block text-sm text-[#49739c] mb-2">Image URLs</label>
            <div className="flex flex-col gap-3">
              {form.images.map((img, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="url"
                    placeholder={`https://... (image ${idx + 1})`}
                    value={img}
                    onChange={(e) => handleImageChange(idx, e.target.value)}
                    className="w-full rounded-lg border border-[#cedbe8] bg-white px-3 py-2 outline-none"
                  />
                  {form.images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImageField(idx)}
                      className="px-3 py-2 rounded-lg border border-[#cedbe8] hover:bg-slate-100"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={addImageField}
                className="self-start px-4 py-2 rounded-lg border border-[#cedbe8] hover:bg-slate-100"
              >
                + Add another image
              </button>
            </div>
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-[#0d141c] text-white hover:opacity-90"
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

export default withAuthenticationRequired(SellPropertyPage, {
  onRedirecting: () => <div>Loading...</div>,
  returnTo: "/sell"
});
