
import Navbar from '../components/Navbar';
import { navLinks } from '../options/navlinks';
import { footerLinks } from '../options/footerLinks';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { homeTypes } from '../options/homeType';
import Home from '../components/Home';
import { features } from '../options/features';
import FeatureSection from '../components/FeatureSection';

const LandingPage=()=> {
    const handleSearch=()=>{
        console.log("handle Search event handler is on.")
    }
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col overflow-x-hidden font-['Inter','Noto_Sans',sans-serif]">
        <div className="flex flex-col h-full grow">
        <Navbar navLinks = {navLinks} profileImage={'https://lh3.googleusercontent.com/aida-public/AB6AXuBiXILEb66LIHt4wQo7X7azhy977X3gKiwmik7sNyc_6j0wW2aU9lDVGulGrJJhzaNO8_ZdAkUDj20M5M_w_ioS4ebjLOItGci2GCdWISFVKg1fdmEuzjJfDzrlXPEzm9ZbgTkVvj2SRrQiZwvmODx4a8fgM4Gl83v3rpfwfl7XA4hxDAD8XCO8HaZSqpW3HpZQSTrEirZHl-ITYggCnqK7Mw5TS7kuuc_Aa96lqpXLysQFqU6mArAmf8zVAR_jaCA_m9R02trwa1-l'}/>

        <HeroSection
            backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuB90awtJy0yXbtJyBtbBZq6RkQNDnjbNwp8cKIwxPrPO9DG3QWwWM8bj3CORBY7AzPX0EaMNFCrpQJudUA0RwhCczgZsG9IE0QxT_PhUKY26BHV13lp6TLKrQWP9RuG5VU_XWQWZERfHosMHsCyquSGM7WMRJf7oUbJzXmgr7kQL7yW2bGuacRDicJ3pWg_Wh5zmMT5BHYqPBAkjTyb0QBzZGXSf7hFhrV5nemsmwlcuQHoNkjUInplWyplVP3kMaS6JqqVQ1RJ5Vgx"
            title="Find your place with our local experts"
            subtitle="We're reimagining home to help you find your way. Discover the perfect home with our expert guidance and innovative tools."
            placeholderText="Search address, neighborhood, city, or ZIP code"
            buttonText="Search"
            onSearch={handleSearch}
        />
        <FeatureSection features={features} headTitle="Your all-in-one real estate platform" headDescription="Explore our comprehensive suite of tools and resources designed to simplify your real estate journey, whether you’re buying, selling, or just exploring."/>
        <Home homeTypes={homeTypes} headTitle="Explore homes by type" headDescription="Discover a variety of home styles to match your preferences and lifestyle, from cozy condos to spacious family homes."/>
        <Footer footerLinks={footerLinks}/> 
        </div>
        </div>
    )
} 
export default LandingPage;