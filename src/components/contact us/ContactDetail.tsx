import { Icon } from "@iconify/react/dist/iconify.js";

const Points = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-4 items-center">
      <Icon icon="charm:tick" className="text-white" />
      <p className="font-semibold">{text}</p>
    </div>
  );
};
const ContactDetail = () => {
  return (
    <div className="p-4 flex flex-col gap-8 md:w-[600px] text-white">
      <p className="font-bold">RÉSERVATION</p>
      <p className="font-bold md:text-[38px] max-md:text-xl">
        Découvrez la différence grâce à notre maîtrise du detailing
      </p>
      <p className="font-bold">
        Établissant la norme d'excellence en detailing automobile, nous
        restaurons la beauté et améliorons les performances, faisant briller
        votre véhicule comme jamais auparavant.
      </p>
      <p className="font-semibold">
        Encourager les passionnés du changement alimente le succès, entraînant
        des innovations supérieures, plus efficaces et plus robustes. Votre
        leadership stimule le progrès ; nous sommes prêts à faire avancer votre
        histoire et à façonner demain.
      </p>
      <Points text="Remplissez votre nom et vos coordonnées" />
      <Points text="Saisissez votre adresse e-mail et votre numéro de téléphone" />
      <Points text="Sélectionnez le service et la date" />
      <Points text="Attendez la confirmation et rendez-vous dans notre atelier" />
    </div>
  );
};

export default ContactDetail;
