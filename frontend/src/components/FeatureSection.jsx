import FeatureType from "./FeatureType";
const FeatureSection=({features,headTitle,headDescription})=> {
    return (
        <section className="px-4 md:px-10 lg:px-20 bg-[#dce8f3] py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#101518] text-center mb-4">
                {headTitle}
            </h2>
            <p className="text-[#5c748a] text-sm md:text-base text-center max-w-2xl mx-auto mb-8">
                {headDescription}
            </p>
            <div className="grid gap-6 md:grid-cols-3">
                {
                    features.map((feature,index)=> (
                        <FeatureType key={index} title={feature.title} description={feature.description}/>
                    ))
                }
            </div>
        </section>
    )
}
export default FeatureSection;