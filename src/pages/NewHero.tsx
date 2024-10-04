import React from "react";
import { images } from "../constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";

interface itemContentType {
  title: string;
  desc: string;
  icon: string;
}

const NewHero = () => {
  const ItemContent: React.FC<itemContentType> = ({ title, desc, icon }) => (
    <div className="flex gap-2 p-4 items-end w-[230px] max-md:w-[250px] max-md:justify-center max-md:border-b max-md:p-4 md:border-r border-gray-700 h-fit md:h-[70px]">
      <Icon icon={icon} className="text-primary text-[45px]" />
      <div className="flex flex-col gap-2">
        <p className="text-white font-bold text-xs">{title}</p>
        <p className="font-bold text-primary text-xs">{desc}</p>
      </div>
    </div>
  );

  const OpenTimeItem = () => (
    <div className="flex flex-col gap-2 px-4 w-[260px] max-md:w-[250px] justify-center items-center max-md:border-b max-md:p-4 md:border-r border-gray-700 h-fit md:h-[70px]">
      <div className="flex gap-2 items-center">
        <Icon icon="carbon:time" className="text-primary" />
        <p className="text-white font-bold text-[12px]">
          Lun-Sam: 09:00 Am- 17:00 Pm
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <Icon icon="carbon:time" className="text-primary" />
        <p className="text-white font-bold text-[12px]">
          Lun-Sam: 09:00 Am- 17:00 Pm
        </p>
      </div>
    </div>
  );

  const Header = () => (
    <div className="w-[85%] flex justify-between px-4 py-8 items-center">
      <div className="flex-1 hidden md:block">
        <Icon
          icon="bitcoin-icons:menu-filled"
          className="text-primary text-[35px]"
        />
      </div>
      <p className="text-primary font-extrabold text-2xl flex-1 text-center">
        Auto Tech Cameroun
      </p>
      <div className="flex-1 md:flex justify-end hidden">
        <div className="p-4 cursor-pointer border border-primary font-semibold w-[200px] flex justify-center rounded-sm">
          Contactez-nous
        </div>
      </div>
    </div>
  );

  return (
    <div className="m-0 flex flex-col md:h-[820px]">
      <div className="h-full w-full flex flex-col items-center ">
        <div className="w-full h-full flex flex-col gap-4 justify-between items-center">
          <Header />
          <div className="w-[85%] flex flex-col gap-2 flex-1 py-4">
            <p className="text-secondary max-md:text-xl md:text-[60px] md:w-[85%] font-extrabold z-10">
              Excellence du detailing dans <br /> chaque détail de notre
            </p>
            <p className="text-primary font-extrabold text-[60px] max-md:text-xl">
              Result
            </p>
            <button className="hidden md:block w-[200px] bg-primary p-4 rounded-sm text-white font-bold">
              Contactez-nous
            </button>
          </div>
          <div className="md:absolute max-md:w-[90%] md:w-[1250px] md:h-[850px] md:px-10 ">
            <div className="flex flex-col w-full h-full items-end justify-center ">
              <img src={images.CARIMG1} />
            </div>
          </div>
          <div className="relative w-full md:h-[160px] z-10 md:flex md:justify-end">
            <div className="md:absolute w-full md:min-w-[1300px] md:max-w-[1500px] max-md:w-full">
              <div className="w-full flex max-md:flex-col md:items-end md:justify-end max-md:items-center">
                <img
                  src={images.CARIMG3}
                  alt="car taken care"
                  className="md:w-[300px] max-md:w-[90%] md:mb-8 md:absolute left-0"
                />
                <div className="max-md:w-[90%] md:w-[85%] p-8 md:h-[200px] flex max-md:flex-col justify-center bg-secondary items-center">
                  <ItemContent
                    icon="el:phone-alt"
                    title="Service Client"
                    desc="+237 691 365 544"
                  />
                  <OpenTimeItem />
                  <ItemContent
                    icon="material-symbols-light:mark-email-unread-rounded"
                    title="Email"
                    desc="contact@autote..."
                  />
                  <ItemContent
                    icon="gridicons:location"
                    title="Addresse"
                    desc="203 Baker Street, CM"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full "></div>
    </div>
  );
};

export default NewHero;
