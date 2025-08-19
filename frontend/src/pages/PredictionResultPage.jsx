import { navLinks } from "../options/navlinks";
import prediction_result from "../images/prediction_result.png";
import Navbar from "../components/Navbar";

const PredictionResultPage=()=>{
    return (
  <div className="bg-gray-50 min-h-screen">
    <div className="max-w-4xl mx-auto p-6">
      {/* <!-- Header --> */}
      <Navbar
        navLinks={navLinks}
        profileImage={prediction_result}
        showProfile={true}
      />

      {/* <!-- Main Content --> */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* <!-- Title --> */}
        <h2 className="text-3xl font-bold p-6 pb-2">Prediction Results</h2>

        {/* <!-- Price Card --> */}
        <div className="relative h-48 bg-gradient-to-t from-black/40 to-transparent bg-cover bg-center m-4 rounded-xl" style="background-image: url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')">
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-white text-2xl font-bold">$350,000</p>
            <p className="text-white font-medium">Predicted Price</p>
          </div>
        </div>

        {/* <!-- Input Summary --> */}
        <div className="p-6 pt-2">
          <h3 className="text-xl font-bold mb-4">Input Summary</h3>
          
          <div className="border-t border-gray-200 py-4 grid grid-cols-4 gap-4">
            <p className="text-gray-500 text-sm col-span-1">Location</p>
            <p className="text-gray-900 text-sm col-span-3">San Francisco, CA</p>
          </div>
          
          <div className="border-t border-gray-200 py-4 grid grid-cols-4 gap-4">
            <p className="text-gray-500 text-sm col-span-1">Bedrooms</p>
            <p className="text-gray-900 text-sm col-span-3">3</p>
          </div>
          
          <div className="border-t border-gray-200 py-4 grid grid-cols-4 gap-4">
            <p className="text-gray-500 text-sm col-span-1">Bathrooms</p>
            <p className="text-gray-900 text-sm col-span-3">2</p>
          </div>
          
          <div className="border-t border-gray-200 py-4 grid grid-cols-4 gap-4">
            <p className="text-gray-500 text-sm col-span-1">Square Footage</p>
            <p className="text-gray-900 text-sm col-span-3">1,800 sq ft</p>
          </div>
          
          <div className="border-t border-gray-200 py-4 grid grid-cols-4 gap-4">
            <p className="text-gray-500 text-sm col-span-1">Lot Size</p>
            <p className="text-gray-900 text-sm col-span-3">5,000 sq ft</p>
          </div>
          
          <div className="border-t border-gray-200 py-4 grid grid-cols-4 gap-4">
            <p className="text-gray-500 text-sm col-span-1">Year Built</p>
            <p className="text-gray-900 text-sm col-span-3">1995</p>
          </div>
        </div>

        {/* <!-- Confidence Meter --> */}
        <div className="p-6 pt-0">
          <div className="flex justify-between items-center mb-2">
            <p className="font-medium">Prediction Confidence</p>
            <p className="text-sm">85%</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-300 h-2 rounded-full" style="width: 85%"></div>
          </div>
          <p className="text-gray-500 text-sm mt-2">High confidence</p>
        </div>

        {/* <!-- Button --> */}
        <div className="p-6 pt-0 flex justify-end">
          <button className="bg-blue-300 text-gray-900 font-bold px-4 py-2 rounded-xl text-sm">
            View Similar Listings
          </button>
        </div>
      </div>
    </div>
  </div>

    )
}
export default PredictionResultPage;
