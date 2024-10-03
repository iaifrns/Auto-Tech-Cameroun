import SellsSection from "./sells";
import Footer from "./footer";
import NewHero from "./NewHero";
import OurStats from "./OurStats";
import NewOurService from "./NewOurService";
import NewAboutUs from "./NewAboutUs";
import NewTestimonies from "./NewTestimonies";

const MainPage = () => {
    return (
        <div className="w-full flex flex-col m-0 p-0 font-montserrat">
            <NewHero />
            <OurStats />
            <NewOurService />
            <NewAboutUs/>
            <NewTestimonies/>
            <SellsSection/>
            <Footer/>
        </div>
    )
}

export default MainPage;