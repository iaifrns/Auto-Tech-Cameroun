import SellsSection from "./sells";
import Footer from "./footer";
import NewHero from "./NewHero";
import OurStats from "./OurStats";
import NewOurService from "./NewOurService";
import NewAboutUs from "./NewAboutUs";
import NewTestimonies from "./NewTestimonies";
import ContactUs from "./ContactUs";

const MainPage = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full flex flex-col m-0 p-0 font-montserrat max-w-[1700px]">
        <NewHero />
        <OurStats />
        <NewOurService />
        <NewAboutUs />
        <NewTestimonies />
        <SellsSection />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
