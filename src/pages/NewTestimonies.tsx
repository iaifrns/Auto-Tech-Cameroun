import { Icon } from "@iconify/react/dist/iconify.js";
import { images } from "../constants/images";
import { useCallback } from "react";

const NewTestimonies = () => {
  const Testimony = useCallback(
    ({
      text,
      img,
      name,
      title,
    }: {
      text: string;
      img: string;
      name: string;
      title: string;
    }) => (
      <div className="p-8 w-full flex flex-col gap-8">
        <p className="text-gray-800 text-lg text-justify">{text}</p>
        <div className="flex gap-4 items-center">
          <img
            src={img}
            alt={name}
            className="w-[60px] rounded-full h-[60px] object-cover"
          />
          <div className="flex flex-col gap-2">
            <p className="text-primary font-bold text-lg">{name}</p>
            <p className="text-gray-400 font-bold">{title}</p>
          </div>
        </div>
      </div>
    ),
    []
  );

  return (
    <div className="w-full h-[1300px] relative">
      <div className="absolute bg-secondary w-full h-full bg-opacity-80">
        <div className="w-full flex justify-between h-full">
          <div className="w-[50%] flex justify-center mt-6">
            <div className="sticky w-[650px] p-8 h-fit">
              <div className="flex flex-col gap-8">
                <p className="font-bold text-white">REVIEW</p>
                <p className="font-bold text-[32px] text-white">
                  What Our Client Reviews About Our Detailing Work
                </p>
                <p className="text-gray-500 text-lg">
                  Cultivating change enthusiasts fuels success, resulting in
                  superior, more efficient, and robust innovations. Your
                  leadership ignites progress; we stand ready to ready advance
                  your history and shape tomorrow.
                </p>
                <div className="flex gap-4 justify-between items-center">
                  <Icon
                    icon="el:phone-alt"
                    className="text-primary text-[80px]"
                  />
                  <p className="text-white font-semibold text-[18px]">
                    If you require assistance or have inquiries, please reach
                    out to our agent.
                  </p>
                  <button className="p-6 border border-primary text-white font-bold w-[300px] h-fit text-sm">
                    Contact Us Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex justify-center h-full">
            <div className="w-[600px] bg-white h-full flex flex-col justify-evenly">
              <Testimony
                img={images.IMAGE1}
                title="CEO"
                name="Daniel Hat"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat nihil vel quaerat necessitatibus vitae veritatis nesciunt, deserunt delectus, ad distinctio, dolorum ullam voluptatum qui? Recusandae expedita at enim ab?"
              />
              <Testimony
                img={images.IMAGE1}
                title="CEO"
                name="Atangana Bel"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat nihil vel quaerat necessitatibus vitae veritatis nesciunt, deserunt delectus, ad distinctio, dolorum ullam voluptatum qui? Recusandae expedita at enim ab?"
              />
              <Testimony
                img={images.IMAGE1}
                title="CEO"
                name="Francois Z"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellat nihil vel quaerat necessitatibus vitae veritatis nesciunt, deserunt delectus, ad distinctio, dolorum ullam voluptatum qui? Recusandae expedita at enim ab?"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={images.IMAGE3}
        alt="testimonies"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default NewTestimonies;
