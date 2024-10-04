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
        <p className="text-gray-800 md:text-lg max-md:text-sm text-justify">
          {text}
        </p>
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
                <p className="font-bold text-white">ÉVALUATION</p>
                <p className="font-bold md:text-[32px] max-md:text-xl text-white">
                  Ce que nos clients disent de notre travail de detailing
                </p>
                <p className="text-gray-500 md:text-lg">
                  Encourager les passionnés du changement alimente le succès,
                  entraînant des innovations supérieures, plus efficaces et plus
                  robustes. Votre leadership stimule le progrès ; nous sommes
                  prêts à faire avancer votre histoire et à façonner demain.
                </p>
                <div className="flex gap-4 justify-between items-center">
                  <Icon
                    icon="el:phone-alt"
                    className="text-primary text-[80px] hidden md:block"
                  />
                  <p className="text-white font-semibold md:text-[14px] max-md:text-xs">
                    Si vous avez besoin d'aide ou si vous avez des questions,
                    veuillez contacter notre agent.
                  </p>
                  <button className="md:p-4 max-md:p-4 border border-primary text-white font-bold w-[300px] h-fit max-md:text-xs text-[12px]">
                    Contactez-nous maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[50%] flex justify-center h-full">
            <div className="md:w-[600px] bg-white h-full flex flex-col justify-evenly">
              <Testimony
                img={
                  "https://images.pexels.com/photos/27977077/pexels-photo-27977077/free-photo-of-black-white-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
                title="CEO"
                name="Daniel Hat"
                text="J'ai amené ma voiture pour un detailing, et je n'arrivais pas à croire la transformation ! L'équipe était professionnelle et a prêté attention à chaque détail. Ma voiture a l'air toute neuve, et je suis vraiment ravi du service !"
              />
              <Testimony
                img={
                  "https://images.pexels.com/photos/27890042/pexels-photo-27890042/free-photo-of-storm-clouds-over-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
                title="CEO"
                name="Atangana Bel"
                text="J'ai eu une excellente expérience dans ce garage. Le personnel était sympathique et a tout expliqué clairement. Ils ont réparé ma voiture rapidement et à un prix raisonnable. Je reviendrai certainement pour d'autres réparations !"
              />
              <Testimony
                img={
                  "https://images.pexels.com/photos/28709521/pexels-photo-28709521/free-photo-of-silhouette-in-modern-museum-interior.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
                title="CEO"
                name="Francois Z"
                text="Je confie ma voiture à cet endroit pour l'entretien régulier depuis des années. Ils offrent toujours un excellent service et s'assurent que tout est fait correctement. Je leur fais complètement confiance avec mon véhicule !"
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
