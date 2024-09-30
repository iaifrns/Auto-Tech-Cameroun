import { useCallback } from "react";
import { images } from "../constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";

const NewAboutUs = () => {
  const PointText = useCallback(
    ({ text }: { text: string }) => (
      <div className="flex gap-8 justify-between w-fit items-center">
        <Icon icon="charm:tick" className="text-primary" />
        <p>{text}</p>
      </div>
    ),
    []
  );

  return (
    <div className="h-[] w-full flex justify-center items-center">
      <div className="md:w-full h-full gap-8 flex justify-between p-20 items-center">
        <div className="w-[50%] relative h-[550px] flex justify-center">
          <div className="absolute h-full w-full">
            <div className="h-full w-[85%] justify-end flex items-end">
              <div className="p-8 bg-red-500 w-[250px] flex flex-col items-center border-8 border-white">
                <p className="font-bold text-[62px] text-white">25</p>
                <p className="text-center font-bold text-[28px] text-white">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
          <img
            src={images.CARIMG3}
            alt="about image"
            className="w-[600px] h-[400px] bg-contain"
          />
        </div>
        <div className="w-[50%] flex justify-center">
          <div className="flex flex-col gap-4 w-[600px]">
            <p className="text-red-500 text-sm">ABOUT US</p>
            <p className="font-bold text-[38px]">
              Transforming Cars into Works of Art, One Detail at a Time.
            </p>
            <div className="flex flex-col gap-8 p-8">
              <p className="text-gray-500 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="font-semibold text-lg">
                Setting the Benchmark for Auto Detailing Excellence, We Restore
                Beauty and Enhance Performance, Making Your Vehicle Shine Like
                Never Before.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <PointText text="Quality Service: Dedicated to exceeding customer expectations." />
              <PointText text="Expertise and Experience: Skilled, experienced team members." />
              <PointText text="Comprehensive care: Interior, exterior solutions." />
            </div>
            <button className="w-[200px] bg-primary text-white font-semibold p-6 rounded-lg mt-2">About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAboutUs;
