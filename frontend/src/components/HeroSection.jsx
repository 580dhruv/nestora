const HeroSection=({backgroundImage,title,subtitle,placeholderText,buttonText,onSearch})=>{
    return(
        <main className="flex flex-1 justify-center px-40 py-5">
        <div className="flex flex-col max-w-[960px] w-full">
        <section className="p-4 ">
            <div
            className="min-h-[480px] bg-cover bg-center bg-no-repeat rounded-xl flex flex-col items-center justify-center gap-6 p-4"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            >
            <div className="flex flex-col text-center gap-2">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">{title}</h1>
                <h2 className="text-white text-sm md:text-base font-normal">
                {subtitle}
                </h2>
            </div>
            <label className="flex w-full max-w-[480px] h-14 md:h-16">
                <div className="flex w-full items-stretch h-full">
                {/* <div className="pl-4 flex items-center justify-center rounded-l-xl border border-[#d4dce2] border-r-0 bg-gray-50 text-[#5c748a]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                </div> */}
                {/* <input
                    placeholder={placeholderText}
                    className="flex-1 border border-[#d4dce2] border-l-0 border-r-0 rounded-none px-4 text-sm text-[#101518] placeholder-[#5c748a] bg-gray-50 focus:outline-none"
                /> */}
                {/* <div className="pr-2 flex items-center justify-center rounded-r-xl border border-l-0 border-[#d4dce2] bg-gray-50">
                    <button onClick={onSearch} className="h-10 md:h-12 px-4 md:px-5 bg-[#dce8f3] text-[#101518] text-sm md:text-base font-bold tracking-[0.015em] rounded-xl">
                    {buttonText}
                    </button>
                </div> */}
                </div>
            </label>
            </div>
        </section>
        </div>
    </main>
    )
}
export default HeroSection