import { useEffect, useState } from "react";
import { TopBar } from "../components/topBar";
import { HeroData, heroData } from "../constants/hero";
import { images } from "../constants/images";

const Hero = () => {
  const [data, setData] = useState<HeroData>(heroData[0]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const time = setInterval(() => {
      if (count == 2) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
      setData(heroData[count]);
    }, 7000);

    return () => clearInterval(time);
  }, [data]);
  return (
    <div className={`w-full h-[95vh] max-md:h-[80vh] bg-center`}>
      <div className="absolute z-10 w-full h-[95vh] max-md:h-[80vh] bg-black bg-opacity-50 p-20 max-md:p-0">
        <div className="flex flex-col h-full w-full justify-center items-center  max-md:justify-start">
          <TopBar />
          <div className="flex justify-between w-full pr-10 pl-10 max-md:pr-4 max-md:pl-4 max-md:h-full max-md:p-4 items-center">
            <div className="flex  flex-col gap-8 w-1/2 max-md:w-full">
              <h1 className="text-white font-bold text-[60px] max-md:text-[40px]">
                <span className="text-secondary">{data?.title}</span>{" "}
                {data?.title1}
              </h1>
              <p className="text-white font-bold max-md:text-sm">
                {data.desc}
              </p>
              <button className="p-4 bg-secondary text-white font-bold w-[300px]">
                Nous Service
              </button>
            </div>
            <img src={images.HEROIMAGE} width={"400px"} className="h-[500px] max-md:hidden" />
          </div>
        </div>
      </div>
      <img src={data?.image} className="object-cover w-full h-full max-md:h-[80vh]" />
    </div>
  );
};

export default Hero;
