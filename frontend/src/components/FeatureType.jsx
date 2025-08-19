const FeatureType=({title,description})=>{
    return (
        <div className="border border-[#e5e8ec] bg-white rounded-xl p-5">
                <h3 className="text-[#101518] font-semibold text-lg mb-2">{title}</h3>
                <p className="text-[#5c748a] text-sm">
                   {description}
                </p>
         </div>
    )
}
export default FeatureType;