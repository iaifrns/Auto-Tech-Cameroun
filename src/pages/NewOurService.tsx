import React, { useEffect, useRef, useState } from "react";
import { newService, NewServiceType } from "../constants/service";
import useIsVisible from "../hooks/isVisble";

const ServiceItem: React.FC<NewServiceType> = ({ image, title, heigth }) => (
  <div className={`relative w-[47%] m-2 ${heigth}`}>
    <div className="absolute h-full w-full bg-secondary bg-opacity-40">
      <div className="flex flex-col justify-end h-full">
        <p className="text-white font-bold p-8 text-3xl">{title}</p>
      </div>
    </div>
    <img src={image} alt={title} className="w-full object-cover h-full" />
  </div>
);

const NewOurService = () => {
  const imageDivRef = useRef<HTMLDivElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const [halfHeight, setHalfHeight] = useState("auto");

  useEffect(() => {
    if (imageDivRef.current) {
      const fullHeight = imageDivRef.current.offsetHeight;
      setHalfHeight(`${fullHeight / 2}px`);
    }
  }, []);

  const [isFullVisible, setIsFullVisible] = useState(false);
  const visible = useIsVisible(divRef)
  setIsFullVisible(false);

  return (
    <div
      className={`bg-secondary h-[98vh] w-full relative ${
        isFullVisible ? "overflow-auto" : "overflow-hidden"
      } scrollbar-hide`}
      ref={divRef}
    >
      <div className="flex w-[95%] p-8 justify-end">
        <div
          className="flex w-[50%] h-fit justify-end"
          ref={imageDivRef}
          style={{ height: halfHeight }}
        >
          <div className="w-full flex flex-wrap flex-col ">
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
