import React from "react";
import { images } from "../constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";

interface StatsItemType {
  title: string;
  desc: string;
}

const StatsItems: React.FC<StatsItemType> = ({ title, desc }) => (
  <div className="p-4 flex flex-col w-[300px] gap-2">
    <p className="text-primary font-semibold text-4xl">{title}</p>
    <p className="text-white font-bold">{desc}</p>
  </div>
);

const OurStats = () => {
  return (
    <div className="h-[700px] w-full relative">
      <div className="z-10 absolute h-full w-full bg-secondary bg-opacity-60">
        <div className="flex flex-col w-full h-full justify-center items-center gap-16">
          <div className="flex justify-between w-[85%]">
            <div className="flex flex-col gap-4 w-[70%]">
              <p className="font-bold text-white">
                UNLEASH THE SHINE, DRIVE IN STYLE
              </p>
              <p className="text-[38px] font-bold text-white">
                Expert Care for Your Precious Excellence Vehicle
              </p>
            </div>
            <div className="flex justify-center items-center flex-2 w-[30%]">
              <div className="p-8 border rounded-full">
                <Icon
                  icon="fluent-emoji-high-contrast:mechanical-leg"
                  className="text-primary text-2xl"
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 h-[1px] w-[85%]"></div>
          <div className="flex w-[85%] justify-between">
            <StatsItems title="3,416" desc="" />
            <StatsItems
              title="6,154"
              desc="Projects And Residentials Completed in 2019"
            />
            <StatsItems
              title="2,612"
              desc="Projects And Residentials Completed in 2019"
            />
            <StatsItems
              title="1,754"
              desc="Projects And Residentials Completed in 2019"
            />
          </div>
        </div>
      </div>
      <img src={images.CARIMG2} className="object-cover h-full w-full" />
    </div>
  );
};

export default OurStats;
