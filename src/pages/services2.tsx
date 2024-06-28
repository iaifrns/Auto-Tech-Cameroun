import Service2Component from "../components/service2";
import { images } from "../constants/images";
import { serviceData1, serviceData2 } from "../constants/service";

const ServicesSection2 = () => {
  return (
    <div className="w-full h-screen max-md:h-[1800px]">
      <div className="absolute w-full h-full max-md:h-[1800px] bg-black opacity-90">
        <div className="flex flex-col gap-4 w-full h-full justify-center">
          <div className="flex justify-evenly w-full max-md:flex-col max-md:items-center">
            {serviceData1.map((data, index) => (
              <Service2Component key={index} service={data} />
            ))}
          </div>
          <div className="flex justify-evenly w-full max-md:flex-col max-md:items-center max-md:gap-2">
            {serviceData2.map((data, index) => (
              <Service2Component key={index} service={data} />
            ))}
          </div>
        </div>
      </div>
      <img src={images.BGIMG1} className="w-full h-screen max-md:h-[1800px] object-cover" />
    </div>
  );
};

export default ServicesSection2;
