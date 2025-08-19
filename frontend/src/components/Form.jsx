import { coolingTypes } from "../options/coolingType";
import { heatingTypes } from "../options/heatingType";
import { propertyTypes } from "../options/propertyType";
import {stateCityArray} from "../options/stateCityArray";
import { states } from "../options/states";
import { roofTypes } from "../options/roofType";
import { viewOptions } from "../options/viewType";
import { parkingTypes } from "../options/parkingType";
import { flooringTypes } from "../options/flooringType";
import { fireplaceOptions } from "../options/fireplaceType";
import { exteriorMaterials } from "../options/exteriorMaterials";
import { basementTypes } from "../options/basementType";
import { foundationTypes } from "../options/foundationType";
import { poolOptions } from "../options/poolType";

const Form =({formData,handleChange})=> {
    console.log(formData)
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Validate required fields (optional)
        if (!formData.state || !formData.city || !formData.address) {
          alert("Please fill in all required fields.");
          return;
        }
      
        try {
          console.log("Sending form data:", formData);
      
          // 🔮 Replace this URL with your actual API endpoint
          const response = await fetch("http://localhost:5000/api/predict", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
      
          if (!response.ok) throw new Error("Failed to fetch prediction");
      
          const result = await response.json();
          console.log("Predicted Price:", result);
      
          // 🎯 Optional: show result on screen
          alert(`Predicted Price: $${result.price}`);
      
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("Something went wrong while predicting. Please try again.");
        }
      };
      
    return (
    <form onSubmit={handleSubmit} className="flex justify-center py-5 px-4 lg:px-40">
        <div className="w-full max-w-[960px]"> 
            
            {/* <!-- Form Fields --> */}
        <div className="px-10 sm:px-10 flex flex-1 justify-center py-5">
            <div className="flex flex-col max-w-[960px] flex-1">
            <div className="grid lg:grid-cols-2 gap-8 bg-white/10 backdrop-blur-md border border-white/30 text-[#111618] rounded-xl">

            {/* <!-- State Select --> */}
           
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <span class="text-base font-medium text-slate-800">State
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="state" // must match key in formData
                    value={formData.state} // controlled input value
                    onChange={handleChange} // universal change handler
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select a state</option>
                    {states.map((state) => (
                        <option key={state.code} value={state.code}>
                        {state.name}
                        </option>
                    ))}
                    </select>
                </label>
                </span>
            </div>


            {/* <!-- City Select --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <span class="text-base font-medium text-slate-800">City
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="city" // matches key in formData
                    value={formData.city} // controlled input
                    onChange={handleChange} // same generic handler
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-100 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select a city</option>
                    {/* {selectedCities.map((city) => (
                        <option key={city} value={city}>
                        {city}
                        </option>
                    ))} */}
                    </select>
                </label>
                </span>
            </div>

            
            {/* <!-- Address Input --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <span class="text-base font-medium text-slate-800">Address
                <label className="flex flex-col min-w-40 flex-1">
                    <input
                    type="text"
                    name="address" // must match key in formData
                    placeholder="Enter address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    />
                </label>
                </span>
            </div>

            
            {/* <!-- Square Footage --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <span class="text-base font-medium text-slate-800">Square Foot
                <label className="flex flex-col min-w-40 flex-1">
                    <input
                    name="squareFootage"
                    placeholder="Square footage"
                    type="number"
                    value={formData.squareFootage}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    />
                </label>
                </span>
            </div>
            
            {/* <!-- Bedrooms --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <span class="text-base font-medium text-slate-800">Number of bedrooms
                <label className="flex flex-col min-w-40 flex-1">
                    <input
                    type="number"
                    name="bedrooms" // matches formData key
                    placeholder="Number of bedrooms"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    />
                </label>
                </span>
            </div>

            
            {/* <!-- Bathrooms --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">Number of bathrooms
                <label className="flex flex-col min-w-40 flex-1">
                    <input
                    type="number"
                    name="bathrooms" // ✅ must match key in formData
                    placeholder="Number of bathrooms"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    />
                </label>
                </span>
            </div>

            
            {/* <!-- Year Built --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">Year Built
                <label className="flex flex-col min-w-40 flex-1">
                    <input
                    type="number"
                    name="yearBuilt" // ✅ Must match formData key
                    placeholder="Year built"
                    value={formData.yearBuilt}
                    onChange={handleChange}
                    min="1800"
                    max="2025"
                    step="1"
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    />
                </label>
                </span>
            </div>

            
            {/* <!-- Lot Size --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">Lot Size
                <label className="flex flex-col min-w-40 flex-1">
                    <input
                    type="number"
                    name="lotSize" // ✅ matches formData key
                    placeholder="Lot size (sq ft)"
                    value={formData.lotSize}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    />
                </label>
                </span>
            </div>

            
            {/* <!-- Property Type --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <span class="text-base font-medium text-slate-800">Property Type
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="propertyType" // ✅ matches formData key
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select property type</option>
                    {propertyTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                        {type.label}
                        </option>
                    ))}
                    </select>
                </label>
                </span>
            </div>

            
            {/* <!-- Heating Type --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">Heating Type
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="heatingType" // ✅ should match the key in formData
                    value={formData.heatingType}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select heating type</option>
                    {heatingTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                        {type.label}
                        </option>
                    ))}
                    </select>
                </label>
                </span>
            </div>

            
            {/* <!-- Cooling Type --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <span class="text-base font-medium text-slate-800">Cooling Type
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="coolingType" // ✅ must match formData key
                    value={formData.coolingType}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select cooling type</option>
                    {coolingTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                        {type.label}
                        </option>
                    ))}
                    </select>
                </label>
                    </span>
            </div>

            
            {/* <!-- Parking Type --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">Parking Type
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="parkingType"
                    value={formData.parkingType}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select parking type</option>
                    {parkingTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                            {type.label}
                        </option>
                    ))}
                    </select>
                </label>
                </span>
            </div>

            
            {/* <!-- Exterior Material --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <span class="text-base font-medium text-slate-800">Exterior Material
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="exteriorMaterial"
                    value={formData.exteriorMaterial}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select exterior material</option>
                    {exteriorMaterials.map((material) => (
                        <option key={material.value} value={material.value}>
                            {material.label}
                        </option>
                    ))}
                    </select>
                </label>
                </span>
            </div>

            
            {/* <!-- Roof Type --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">Roof Type
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="roofType"
                    value={formData.roofType}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select roof type</option>
                    {roofTypes.map((roof) => (
                    <option key={roof.value} value={roof.value}>
                        {roof.label}
                    </option>
                    ))}
                    </select>
                </label>
                </span>
            </div>

            
            {/* <!-- Foundation Type --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">Foundation Type
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="foundationType"
                    value={formData.foundationType}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select foundation type</option>
                    {foundationTypes.map((foundation) => (
                    <option key={foundation.value} value={foundation.value}>
                        {foundation.label}
                    </option>
                    ))}
                    </select>
                </label>
                </span>
            </div>

            
            {/* <!-- Basement Type --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">Basement Type
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="basementType"
                    value={formData.basementType}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select basement type</option>
                    {basementTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                        {type.label}
                    </option>
                    ))}
                    </select>
                </label>
                </span>
            </div>

            
            {/* <!-- Flooring Type --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">Flooring Type
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                        name="flooringType"
                        value={formData.flooringType}
                        onChange={handleChange}
                        className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                        >
                        <option value="">Select flooring type</option>
                        {flooringTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                            {type.label}
                            </option>
                        ))}
                    </select>
                </label>
                </span>
            </div>

            
            {/* <!-- Fireplace --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">Fireplace Type
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                        name="fireplace"
                        value={formData.fireplace}
                        onChange={handleChange}
                        className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                        >
                        <option value="">Select fireplace type</option>
                        {fireplaceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </select>
                </label>
                </span>
            </div>

            
            {/* <!-- Pool --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">Pool
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="pool"
                    value={formData.pool}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select pool option</option>
                    {poolOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                    </select>
                </label>
                </span>
            </div>

            
            {/* <!-- View --> */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <span class="text-base font-medium text-slate-800">View
                <label className="flex flex-col min-w-40 flex-1">
                    <select
                    name="view"
                    value={formData.view}
                    onChange={handleChange}
                    className="w-full min-w-0 flex-1 overflow-hidden rounded-xl text-[#111618] focus:outline-none focus:ring-0 border border-[#d6dee1] bg-gray-50 focus:border-[#d6dee1] h-14 bg-[image:--select-button-svg] placeholder:text-[#607c85] p-[15px] text-base font-normal leading-normal"
                    >
                    <option value="">Select view option</option>
                    {viewOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                    </select>
                </label>
                </span>
            </div>

           
            </div>
             
            {/* <!-- Predict Button --> */}
            <div className="flex justify-center px-4 py-3">

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#dce8f3] text-[#111618] text-base font-bold leading-normal tracking-[0.015em]"
                >
                    <span className="truncate">Predict Price</span>
                </button>
            </div>
            </div>
        </div>
    </div>
    </form>
    )
}
export default Form;