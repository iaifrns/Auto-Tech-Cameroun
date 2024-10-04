import React, { useRef } from "react";
import { newService, NewServiceType } from "../constants/service";

const ServiceItem: React.FC<NewServiceType> = ({ image, title, heigth }) => (
  <div className={`relative md:w-[47%] max-md:h-[200px] m-2 ${heigth}`}>
    <div className="absolute h-full w-full bg-secondary bg-opacity-40">
      <div className="flex flex-col justify-end h-full">
        <p className="text-white font-bold p-8 md:text-3xl max-md:text-xl">
          {title}
        </p>
      </div>
    </div>
    <img src={image} alt={title} className="w-full object-cover h-full" />
  </div>
);

const NewOurService = () => {
  const imageDivRef = useRef<HTMLDivElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={`bg-secondary md:h-[1800px] w-full flex justify-center items-center scrollbar-hide`}
      ref={divRef}
    >
      <div className="flex max-md:flex-col w-[95%] p-8 justify-between">
        <div className="flex flex-col items-center md:w-[50%]">
          <div className="sticky top-0 md:w-[80%]">
            <div className="flex flex-col py-16 gap-6">
              <p className="text-white font-bold">SERVICE</p>
              <p className="text-white font-bold md:text-[42px] max-md:text-[26px] max-md:text-justify">
                Service de detailing automobile de A à Z pour votre belle
                voiture
              </p>
              <p className="md:text-lg text-gray-400 text-sm">
                Encourager les passionnés du changement alimente le succès,
                aboutissant à des innovations supérieures, plus efficaces et
                plus robustes. Votre leadership stimule le progrès; nous sommes
                prêts à faire avancer votre histoire et à façonner demain.
              </p>
              <button className="border-[1px] rounded-lg w-[200px] p-6 text-white font-bold border-orange-700 hover:bg-primary">
                Tous les services
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex md:w-[50%] md:h-[1700px] justify-end"
          ref={imageDivRef}
        >
          <div className="w-full flex flex-col md:flex-wrap">
            {newService.map((service) => (
              <ServiceItem
                image={service.image}
                title={service.title}
                heigth={service.heigth}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOurService;
