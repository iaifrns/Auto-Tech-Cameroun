import React from "react";
import { images } from "../constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";

interface StatsItemType {
  title: string;
  desc: string;
}

const StatsItems: React.FC<StatsItemType> = ({ title, desc }) => (
  <div className="p-4 flex flex-col w-[300px] gap-2 max-md:items-center">
    <p className="text-primary font-semibold max-md:text-2xl md:text-4xl max-md:text-center">
      {title}
    </p>
    <p className="text-white font-bold max-md:text-sm max-md:text-center max-md:w-[200px]">{desc}</p>
  </div>
);

const OurStats = () => {
  return (
    <div className="h-[700px] w-full relative">
      <div className="z-10 absolute h-full w-full bg-secondary bg-opacity-60">
        <div className="flex flex-col w-full h-full justify-center items-center md:gap-16">
          <div className="flex max-md:flex-col justify-between w-[85%]">
            <div className="flex flex-col gap-4 md:w-[70%]">
              <p className="hidden md:block font-bold text-white">
                LIBÉREZ LA BRILLANCE, ROULEZ AVEC STYLE
              </p>
              <p className="max-md:text-xl md:text-[38px] font-bold text-white">
                Soin d'expert pour votre véhicule d'excellence précieux
              </p>
            </div>
            <div className="flex max-md:py-8 md:justify-center items-center flex-2 md:w-[30%]">
              <div className="p-8 border rounded-full">
                <Icon
                  icon="fluent-emoji-high-contrast:mechanical-leg"
                  className="text-primary text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 h-[1px] w-[85%]"></div>
          <div className="flex max-md:flex-col w-[85%] justify-between">
            <StatsItems title="3,416" desc="" />
            <StatsItems
              title="6,154"
              desc="Projets et résidences réalisés en 2019"
            />
            <StatsItems
              title="2,612"
              desc="Nombre total de clients depuis 2019"
            />
            <StatsItems
              title="1,754"
              desc="Nombre de clients revenus depuis 2019"
            />
          </div>
        </div>
      </div>
      <img src={images.CARIMG2} className="object-cover h-full w-full" />
    </div>
  );
};

export default OurStats;
