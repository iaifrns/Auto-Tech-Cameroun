import { useState } from "react";
import { images } from "../constants/images";

const MenuLink = ({ text }: { text: string }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="h-4">
      <p
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`font-bold cursor-pointer ${
          isHover ? "text-primary border-b-4 border-primary" : ""
        }`}
      >
        {text}
      </p>
    </div>
  );
};

const TopBar = () => {
  return (
    <div className="flex w-full p-4 bg-white justify-between items-center  max-md:justify-center">
      <div className="flex gap-2 items-center">
        <img alt="Auto Tech Cameroon" src={images.LOGO} width={"50px"} />
        <p className="text-primary font-bold text-2xl">
          Auto <span className="text-secondary">Tech</span> Cameroon
        </p>
      </div>
      <div className="flex flex-1 justify-evenly gap-4 max-md:hidden">
        <MenuLink text="Accueil" />
        <MenuLink text="Services" />
        <MenuLink text="Témoignages" />
        <MenuLink text="Nos Activités" />
      </div>
    </div>
  );
};

export { TopBar };
