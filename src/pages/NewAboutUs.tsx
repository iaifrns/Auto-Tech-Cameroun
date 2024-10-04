import { useCallback } from "react";
import { images } from "../constants/images";
import { Icon } from "@iconify/react/dist/iconify.js";

const NewAboutUs = () => {
  const PointText = useCallback(
    ({ text }: { text: string }) => (
      <div className="flex gap-8 justify-between w-fit items-center">
        <Icon icon="charm:tick" className="text-primary" />
        <p className="max-md:text-sm">{text}</p>
      </div>
    ),
    []
  );

  return (
    <div className="w-full flex justify-center items-center ">
      <div className="md:w-full h-full gap-8 flex max-md:flex-col justify-between max-md:py-8 md:p-20 items-center">
        <div className="md:w-[50%] max-md:w-[90%] relative md:h-[550px] max-md:h-[400px] flex justify-center">
          <div className="absolute h-full w-full">
            <div className="h-full w-[85%] justify-end flex items-end">
              <div className="p-8 bg-red-500 w-[250px] flex flex-col items-center border-8 border-white">
                <p className="font-bold md:text-[62px] max-md:text-3xl text-white">
                  25
                </p>
                <p className="text-center font-bold md:text-[28px] max-md:text-xl text-white">
                  Années d'expérience
                </p>
              </div>
            </div>
          </div>
          <img
            src={images.CARIMG3}
            alt="about image"
            className="md:w-[600px] md:h-[400px] w-full h-[300px] md:bg-contain object-cover"
          />
        </div>
        <div className="md:w-[50%] flex justify-center max-md:p-8">
          <div className="flex flex-col gap-4 md:w-[600px]">
            <p className="text-red-500 text-sm">À PROPOS DE NOUS</p>
            <p className="font-bold md:text-[32px] max-md:text-xl">
              Transformer les voitures en œuvres d'art, un détail à la fois.
            </p>
            <div className="flex flex-col gap-8 p-8">
              <p className="text-gray-500 md:text-lg">
                Nous transformons chaque véhicule en une œuvre d'art en
                utilisant des techniques avancées et des produits de qualité
                pour sublimer l'intérieur et l'extérieur. Chaque voiture mérite
                une attention particulière, et notre service personnalisé
                garantit un résultat exceptionnel qui fera briller votre
                véhicule comme jamais auparavant. Confiez-nous votre voiture et
                laissez-nous révéler sa beauté cachée.
              </p>
              <p className="font-semibold md:text-lg">
                Établissant la norme d'excellence en detailing automobile, nous
                restaurons la beauté et améliorons les performances, faisant
                briller votre véhicule comme jamais auparavant.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:gap-8">
              <PointText text="Service de qualité : Dédié à dépasser les attentes des clients." />
              <PointText text="Expertise et expérience : Équipe composée de membres qualifiés et expérimentés." />
              <PointText text="Prise en charge complète : Solutions intérieures et extérieures." />
            </div>
            <button className="w-[250px] bg-primary text-white font-semibold md:p-6 max-md:p-4 rounded-sm mt-2 cursor-default">
              À PROPOS DE NOUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAboutUs;
