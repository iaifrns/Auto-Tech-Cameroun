import SellsSection from "./sells";
import Footer from "./footer";
import Services from "./services";
import ServicesSection2 from "./services2";
import Testimonies from "./testimonies";
import WhatWeDo from "./whatWeDo";
import NewHero from "./NewHero";
import OurStats from "./OurStats";
import NewOurService from "./NewOurService";
import NewAboutUs from "./NewAboutUs";

const MainPage = () => {
    return (
        <div className="w-full flex flex-col m-0 p-0 font-montserrat">
            <NewHero />
            <OurStats />
            <NewOurService />
            <NewAboutUs/>
            <Services/>
            <ServicesSection2/>
            <Testimonies/>
            <WhatWeDo/>
            <SellsSection/>
            <Footer/>
        </div>
    )
}

export default MainPage;