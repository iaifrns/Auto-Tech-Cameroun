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
        <p className="text-gray-800 md:text-lg max-md:text-sm text-justify">{text}</p>
        <div className="flex gap-4 items-center">
          <img
            src={img}
            alt={name}
            className="w-[60px] rounded-full h-[60px] object-cover"
          />
          <div className="flex flex-col gap-2">
            <p className="text-primary font-bold md:text-lg">{name}</p>
            <p className="text-gray-400 font-bold">{title}</p>
          </div>
        </div>
      </div>
    ),
    []
  );

  return (
    <div className="w-full md:h-[1300px] relative">
      <div className="md:absolute bg-secondary w-full md:h-[1300px] md:bg-opacity-80">
        <div className="w-full flex max-md:flex-col justify-between h-full">
          <div className="md:w-[50%] flex flex-col items-center mt-6">
            <div className="sticky md:w-[650px] p-8 top-0">
              <div className="flex flex-col gap-8">
                <p className="font-bold text-white">REVIEW</p>
                <p className="font-bold md:text-[32px] max-md:text-xl text-white">
                  What Our Client Reviews About Our Detailing Work
                </p>
                <p className="text-gray-500 md:text-lg">
                  Cultivating change enthusiasts fuels success, resulting in
                  superior, more efficient, and robust innovations. Your
                  leadership ignites progress; we stand ready to ready advance
                  your history and shape tomorrow.
                </p>
                <div className="flex gap-4 justify-between items-center">
                  <Icon
                    icon="el:phone-alt"
                    className="text-primary text-[80px] hidden md:block"
                  />
                  <p className="text-white font-semibold md:text-[18px] max-md:text-xs">
                    If you require assistance or have inquiries, please reach
                    out to our agent.
                  </p>
                  <button className="md:p-6 max-md:p-4 border border-primary text-white font-bold w-[300px] h-fit max-md:text-xs text-sm">
                    Contact Us Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] flex justify-center h-full">
            <div className="md:w-[600px] bg-white h-full flex flex-col justify-evenly">
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
        className="h-full w-full object-cover hidden md:block"
      />
    </div>
  );
};

export default NewTestimonies;
