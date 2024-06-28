import { ServiceComponent } from "../components/service";
import { services } from "../constants/service";

const Services = () => {
  return (
    <div className="w-full p-20 max-md:p-4 flex flex-col items-center gap-4">
      <h1 className="text-[40px] font-bold max-md:text-[32px]">REGULAR SERVICE</h1>
      <div className="h-1 bg-secondary w-20"></div>
      <div className="flex max-md:flex-col justify-evenly max-md:items-center max-md:gap-4 w-full">
        {services.map((data, index) => (
          <ServiceComponent key={index} service={data} />
        ))}
      </div>
    </div>
  );
};

export default Services;
