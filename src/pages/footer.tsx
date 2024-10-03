import { Icon } from "@iconify/react/dist/iconify.js";
import { images } from "../constants/images";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[70vh] w-full">
        <div className="w-full h-[70vh] absolute bg-black opacity-80">
          <div className="w-full h-full flex flex-col justify-center items-center gap-8 max-md:p-4">
            <div className="flex gap-2 items-center">
              <img
                alt="Auto Tech Cameroon"
                src={images.LOGO}
                className="w-[80px] max-md:w-[50px]"
              />
              <p className="text-white font-bold text-[40px]  max-md:text-[24px]">
                Auto Tech Cameroun
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <p className="text-gray-500 font-bold text-2xl">EMAIL :</p>
              <p className="font-bold text-white">
                contact@autotechcameroun.com
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <p className="text-gray-500 font-bold text-2xl">
                HORAIRES D'OUVERTURE :
              </p>
              <p className="font-bold text-white  max-md:text-center">
                Lundi - Vendredi : 9h00 - 17h00, Samedi : 9h00 - 15h00
              </p>
              <p className="font-bold text-white">
                Dimanche: <span className="text-red-500">Fermer</span>
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="carbon:phone-filled"
                width={40}
                className="text-secondary"
              />
              <span className="text-[40px] text-white font-bold max-md:text-[24px]">
                +237 691 365 544
              </span>
            </div>
          </div>
          <div className="flex justify-center p-4 bg-gray-950">
            <p className="text-lg font-bold text-white max-md:text-sm max-md:text-center">
              © 2021 QODE INTERACTIVE, TOUS DROITS RÉSERVÉS
            </p>
          </div>
        </div>
        <img src={images.FOOTERIMG} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Footer;
