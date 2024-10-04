import { images } from "./images";

export interface ServiceType {
  image: string;
  title: string;
  desc: string;
}

export const services: ServiceType[] = [
  {
    image: images.SERVICE1,
    title: "Nouveau Design",
    desc: "Services innovants pour améliorer l'apparence et les performances de votre véhicule.",
  },
  {
    image: images.SERVICE2,
    title: "Service de Pneumatiques",
    desc: "Vente, installation, équilibrage et réparation de pneus assurant sécurité et performance.",
  },
  {
    image: images.SERVICE3,
    title: "Révolution technologique",
    desc: "Intégration des dernières innovations pour diagnostiquer, réparer et entretenir votre véhicule",
  },
];

export const serviceData1: ServiceType[] = [
  {
    title: "Diagnostic Véhicule",
    desc: " Identifie rapidement les problèmes mécaniques et électroniques.",
    image: images.SERVICEIMG1,
  },
  {
    title: "Entretien Moteur",
    desc: " Inspection et réparation pour une sécurité optimale",
    image: images.SERVICEIMG2,
  },
  {
    title: "Service de Freins",
    desc: "Inspection et réparation pour une sécurité optimale.",
    image: images.SERVICEIMG3,
  },
];

export const serviceData2: ServiceType[] = [
  {
    title: "Révision Transmission",
    desc: "Réparation et maintenance des transmissions du vehicule",
    image: images.SERVICEIMG4,
  },
  {
    title: "Suspension et Direction",
    desc: "Réparations pour une conduite stable et sécurisée",
    image: images.SERVICEIMG5,
  },
  {
    title: "Changement d'Huile",
    desc: "Entretien régulier pour prolonger la vie du moteur",
    image: images.SERVICEIMG6,
  },
];

export interface NewServiceType {
  image: string;
  title: string;
  heigth: string;
}

export const newService: NewServiceType[] = [
  {
    image: images.CARIMG2,
    title: "Detailing extérieur",
    heigth: "h-[475px]",
  },
  {
    image: images.CARIMG4,
    title: "Équipements interchangeables",
    heigth: "h-[700px]",
  },
  {
    image: images.CARIMG3,
    title: "Detailing d'analyse",
    heigth: "h-[475px]",
  },
  {
    image: images.CARIMG8,
    title: "Detailing d'assemblage",
    heigth: "h-[600px]",
  },
  {
    image: images.CARIMG6,
    title: "Meilleurs équipements",
    heigth: "h-[450px]",
  },
  {
    image: images.CARIMG7,
    title: "Detailing extérieur",
    heigth: "h-[600px]",
  },
];
