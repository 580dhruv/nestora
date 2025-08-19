import HomeType from "./HomeType";
const Home=({homeTypes,headTitle,headDescription})=> {
    return (
        <section className="px-4 md:px-10 lg:px-20 py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#101518] text-center mb-4">
                {headTitle}
            </h2>
            <p className="text-[#5c748a] text-sm md:text-base text-center max-w-2xl mx-auto mb-8">
                {headDescription}
            </p>
            <div className="grid gap-6 md:grid-cols-3">
                {
                    homeTypes.map((homeType,index)=>(
                        <HomeType key={index} image={homeType.image} title={homeType.title} description={homeType.description}/>
                    ))
                }
            </div>
        </section>
    )
}
export default Home;