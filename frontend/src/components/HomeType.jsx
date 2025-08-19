const HomeType=({image,title, description})=> {
    return (
        <div className="rounded-xl overflow-hidden border bg-[#dce8f3] border-[#e5e8ec]">
            <img src={image} alt="Houses" className="w-full h-60 object-cover" />
            <div className="p-4 ">
            <h3 className="text-[#101518] font-semibold text-lg mb-2">{title}</h3>
            <p className="text-[#5c748a] text-sm">
                {description}
            </p>
            </div>
        </div>
    )
}

export default HomeType