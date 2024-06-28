import SellsSection from "./sells";
import Footer from "./footer";
import Hero from "./hero";
import Services from "./services";
import ServicesSection2 from "./services2";
import Testimonies from "./testimonies";
import WhatWeDo from "./whatWeDo";

const MainPage = () => {
    return (
        <div className="w-full flex flex-col m-0 p-0 gap-2">
            <Hero/>
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